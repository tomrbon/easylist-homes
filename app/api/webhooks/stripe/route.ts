import { NextRequest, NextResponse } from "next/server";
import { getStripeServer } from "@/lib/stripe";
import Stripe from "stripe";

async function buffer(readable: ReadableStream<Uint8Array>): Promise<Buffer> {
    const chunks: Uint8Array[] = [];
    const reader = readable.getReader();

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        if (value) chunks.push(value);
    }

    return Buffer.concat(chunks);
}

export async function POST(request: NextRequest) {
    // Check for required environment variables first
    if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
        return NextResponse.json(
            { error: "Stripe configuration missing" },
            { status: 500 }
        );
    }

    const body = await buffer(request.body!);
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
        return NextResponse.json(
            { error: "Missing stripe-signature header" },
            { status: 400 }
        );
    }

    let event: Stripe.Event;

    try {
        const stripe = getStripeServer();
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (err) {
        console.error("Webhook signature verification failed:", err);
        return NextResponse.json(
            { error: "Invalid signature" },
            { status: 400 }
        );
    }

    // Handle the event
    switch (event.type) {
        case "checkout.session.completed": {
            const session = event.data.object as Stripe.Checkout.Session;
            console.log("Checkout completed:", session.id);

            // TODO: Update user subscription in Supabase
            // const userId = session.client_reference_id;
            // const subscriptionId = session.subscription;
            // await updateUserSubscription(userId, subscriptionId);

            break;
        }

        case "customer.subscription.updated": {
            const subscription = event.data.object as Stripe.Subscription;
            console.log("Subscription updated:", subscription.id);

            // TODO: Update user subscription tier in Supabase
            // const customerId = subscription.customer;
            // const status = subscription.status;
            // await updateSubscriptionStatus(customerId, status);

            break;
        }

        case "customer.subscription.deleted": {
            const subscription = event.data.object as Stripe.Subscription;
            console.log("Subscription cancelled:", subscription.id);

            // TODO: Downgrade user to free tier in Supabase
            // const customerId = subscription.customer;
            // await downgradeToFree(customerId);

            break;
        }

        case "invoice.payment_failed": {
            const invoice = event.data.object as Stripe.Invoice;
            console.log("Payment failed:", invoice.id);

            // TODO: Send email notification to user
            // const customerId = invoice.customer;
            // await sendPaymentFailedEmail(customerId);

            break;
        }

        default:
            console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
}
