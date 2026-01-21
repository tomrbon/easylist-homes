import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Database {
    public: {
        Tables: {
            profiles: {
                Row: {
                    id: string;
                    email: string;
                    full_name: string | null;
                    subscription_tier: 'free' | 'starter' | 'pro';
                    stripe_customer_id: string | null;
                    monthly_usage: number;
                    created_at: string;
                };
                Insert: {
                    id: string;
                    email: string;
                    full_name?: string | null;
                    subscription_tier?: 'free' | 'starter' | 'pro';
                    stripe_customer_id?: string | null;
                    monthly_usage?: number;
                };
                Update: {
                    full_name?: string | null;
                    subscription_tier?: 'free' | 'starter' | 'pro';
                    stripe_customer_id?: string | null;
                    monthly_usage?: number;
                };
            };
            listings: {
                Row: {
                    id: string;
                    user_id: string;
                    property_data: object;
                    short_description: string;
                    medium_description: string;
                    long_description: string;
                    created_at: string;
                };
                Insert: {
                    user_id: string;
                    property_data: object;
                    short_description: string;
                    medium_description: string;
                    long_description: string;
                };
            };
        };
    };
}
