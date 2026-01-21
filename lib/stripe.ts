import Stripe from "stripe";
import { loadStripe, Stripe as StripeJS } from "@stripe/stripe-js";

// Lazily initialize Stripe to avoid build-time errors
let stripeInstance: Stripe | null = null;

export function getStripeServer(): Stripe {
    if (!stripeInstance) {
        const secretKey = process.env.STRIPE_SECRET_KEY;
        if (!secretKey) {
            throw new Error("STRIPE_SECRET_KEY is not set");
        }
        stripeInstance = new Stripe(secretKey, {
            apiVersion: "2025-12-15.clover",
        });
    }
    return stripeInstance;
}

// Client-side Stripe promise
let stripePromise: Promise<StripeJS | null> | null = null;

export const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");
    }
    return stripePromise;
};

// Pricing configuration
export const PRICING = {
    free: {
        name: "Free",
        price: 0,
        listings: 2,
        priceId: null,
    },
    starter: {
        name: "Starter",
        price: 9,
        listings: 20,
        priceId: process.env.STRIPE_STARTER_PRICE_ID,
    },
    pro: {
        name: "Pro",
        price: 19,
        listings: Infinity,
        priceId: process.env.STRIPE_PRO_PRICE_ID,
    },
} as const;

export type PlanType = keyof typeof PRICING;
