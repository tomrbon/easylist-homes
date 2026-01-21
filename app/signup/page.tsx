"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Home, Mail, Lock, User, Loader2, Eye, EyeOff, Check } from "lucide-react";

function SignupForm() {
    const searchParams = useSearchParams();
    const plan = searchParams.get("plan") || "free";

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const planDisplay = plan === "starter" ? "Starter ($9/mo)" : plan === "pro" ? "Pro ($19/mo)" : "Free";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            // TODO: Implement Supabase authentication
            // const { data, error } = await supabase.auth.signUp({
            //   email,
            //   password,
            //   options: { data: { full_name: fullName } }
            // });

            // Simulate signup for now
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Redirect to payment or dashboard
            if (plan !== "free") {
                window.location.href = `/checkout?plan=${plan}`;
            } else {
                window.location.href = "/generator";
            }
        } catch (err) {
            setError("Failed to create account. Please try again.");
            console.error("Signup error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                    <Home className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                    EasyList<span className="text-blue-600">.Homes</span>
                </span>
            </Link>

            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Create your account
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
                Start creating professional listings today
            </p>

            {/* Plan Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full text-sm font-medium mb-8">
                <Check className="w-4 h-4" />
                {planDisplay} Plan
            </div>

            {/* Error Display */}
            {error && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300 text-sm">
                    {error}
                </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full name
                    </label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            className="input pl-10"
                            placeholder="John Smith"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email address
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="email"
                            className="input pl-10"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Password
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type={showPassword ? "text" : "password"}
                            className="input pl-10 pr-10"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            minLength={8}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                    <p className="mt-2 text-xs text-gray-500">
                        Must be at least 8 characters
                    </p>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full py-3 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Creating account...
                        </>
                    ) : plan !== "free" ? (
                        "Continue to payment"
                    ) : (
                        "Create free account"
                    )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                    By signing up, you agree to our{" "}
                    <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
                    {" "}and{" "}
                    <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
                </p>
            </form>

            {/* Login link */}
            <p className="mt-8 text-center text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                    Sign in
                </Link>
            </p>
        </div>
    );
}

function SignupFormLoading() {
    return (
        <div className="w-full max-w-md flex items-center justify-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
        </div>
    );
}

export default function SignupPage() {
    return (
        <div className="min-h-screen flex">
            {/* Left Panel - Form */}
            <div className="flex-1 flex items-center justify-center p-8">
                <Suspense fallback={<SignupFormLoading />}>
                    <SignupForm />
                </Suspense>
            </div>

            {/* Right Panel - Features */}
            <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 to-blue-800 items-center justify-center p-12">
                <div className="max-w-md text-white">
                    <h2 className="text-3xl font-bold mb-8">
                        What you get with EasyList.Homes
                    </h2>
                    <ul className="space-y-4">
                        {[
                            "AI-powered listing descriptions in seconds",
                            "3 format variations (social, Zillow, MLS)",
                            "Fair housing compliant content",
                            "No MLS integration required",
                            "Copy-paste ready output",
                        ].map((feature, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span className="text-blue-100">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
