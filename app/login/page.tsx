"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Loader2, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            // TODO: Implement Supabase authentication
            // const { data, error } = await supabase.auth.signInWithPassword({
            //   email,
            //   password,
            // });

            // Simulate login for now
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Redirect to dashboard
            window.location.href = "/dashboard";
        } catch (err) {
            setError("Invalid email or password");
            console.error("Login error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Panel - Form */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 mb-8">
                        <Image src="/logo.png" alt="EasyList.Homes" width={40} height={40} className="rounded-lg" />
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            EasyList<span className="text-blue-600">.Homes</span>
                        </span>
                    </Link>

                    {/* Header */}
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Welcome back
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        Log in to your account to continue creating listings
                    </p>

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
                            <div className="flex items-center justify-between mb-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Password
                                </label>
                                <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="input pl-10 pr-10"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="btn-primary w-full py-3 flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                "Sign in"
                            )}
                        </button>
                    </form>

                    {/* Sign up link */}
                    <p className="mt-8 text-center text-gray-600 dark:text-gray-400">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
                            Sign up for free
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right Panel - Image/Pattern */}
            <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 to-blue-800 items-center justify-center p-12">
                <div className="max-w-md text-center text-white">
                    <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mx-auto mb-8">
                        <Image src="/logo.png" alt="EasyList.Homes" width={48} height={48} className="rounded-lg" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">
                        Professional Listings in Seconds
                    </h2>
                    <p className="text-blue-100 text-lg">
                        Join thousands of real estate professionals using AI to create compelling property descriptions.
                    </p>
                </div>
            </div>
        </div>
    );
}
