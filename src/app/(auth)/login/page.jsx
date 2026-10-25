"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiArrowRight, FiBookOpen, FiClock, FiExternalLink, FiEye, FiEyeOff, FiLock, FiMail, FiShield } from "react-icons/fi";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-[#fff5ee] px-4 py-7 flex flex-col items-center justify-center">
            <div className="w-full max-w-119 overflow-hidden rounded-lg bg-white shadow-xl">
                <div className="px-6 pt-10 pb-7 sm:px-11">
                    {/* Logo */}
                    <div className="mb-8 text-center">
                        <div className="flex items-center justify-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#141c30] text-orange-400">
                                <FiBookOpen size={24} />
                            </div>

                            <div className="font-serif text-xl tracking-tight">
                                PageTurn
                                <span className="ml-1 text-sm italic text-gray-500">Curated Folio</span>
                            </div>
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="mb-7 text-center">
                        <h1 className="font-serif text-3xl leading-[1.1] font-bold text-[#25211e] sm:text-4xl">Welcome back to the stacks</h1>

                        <p className="mt-3 text-sm leading-6 text-gray-600">Sign in with your email to access your loans, holds, and digital folio.</p>
                    </div>

                    {/* Login Form */}
                    <form className="space-y-5">
                        <div>
                            <div className="mb-1.5 flex items-center justify-between gap-2 text-xs">
                                <label className="font-semibold">
                                    Email Address
                                </label>
                            </div>

                            <label className="w-full input input-bordered flex h-10.5 items-center gap-3 rounded-sm border-0 bg-[#f5ebe5] px-3 focus-within:outline-amber-700">
                                <FiMail className="text-gray-500" size={17} />
                                <input type="email" placeholder="Enter email address" className="text-sm" />
                            </label>
                        </div>

                        <div>
                            <div className="mb-1.5 flex items-center justify-between text-xs">
                                <label htmlFor="password" className="font-semibold">
                                    Password
                                </label>
                            </div>

                            <label className="input w-full input-bordered flex h-10.5 items-center gap-3 rounded-sm border-0 bg-[#f5ebe5] px-3 focus-within:outline-1 focus-within:outline-amber-700">
                                <FiLock className="text-gray-500" size={17} />

                                <input type={showPassword ? "text" : "password"} placeholder="Enter your password" className="min-w-0 grow text-sm"/>

                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-500" aria-label={showPassword ? "Hide password" : "Show password"}>
                                    {showPassword ? <FiEyeOff size={17} /> : <FiEye size={17} />}
                                </button>
                            </label>
                        </div>

                        {/* Sign In */}
                        <button type="submit" className="btn h-10.5 min-h-0 w-full rounded-sm border-0 bg-[#141c30] text-sm font-medium text-white hover:bg-[#222d46]">
                            Sign In to Library
                            <FiArrowRight size={17} />
                        </button>

                        {/* Divider */}
                        <div className="flex items-center gap-3">
                            <div className="h-px flex-1 bg-[#eadbd1]"></div>
                            <span className="text-[11px] text-gray-500">OR CONTINUE WITH</span>
                            <div className="h-px flex-1 bg-[#eadbd1]"></div>
                        </div>

                        {/* Social Login */}
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <button type="button" className="btn h-9 min-h-0 rounded-sm border-0 bg-[#f5ebe5] text-sm font-medium text-gray-900 hover:bg-[#eee0d7]">
                                <FcGoogle size={17} />
                                Google Access
                            </button>

                            <button type="button" className="btn h-9 min-h-0 rounded-sm border-0 bg-[#f5ebe5] text-sm font-medium text-gray-900 hover:bg-[#eee0d7]">
                                <FaGithub className="text-amber-800" size={15} />
                                Github
                            </button>
                        </div>
                    </form>
                </div>

                {/* Register Footer */}
                <div className="bg-[#fcf7f3] px-5 py-5 text-center text-xs text-gray-600">
                    Don&apos;t have a library card?{" "}
                    <Link href="/register" className="inline-flex items-center gap-1 font-medium text-amber-800 hover:underline">
                        Apply for cardholder access
                        <FiExternalLink size={12} />
                    </Link>
                </div>
            </div>

            {/* Bottom Features */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] text-gray-500">
                <span className="flex items-center gap-1.5">
                    <FiShield className="text-amber-800" />
                    Encrypted patron archive
                </span>

                <span className="hidden text-gray-300 sm:inline">•</span>

                <span className="flex items-center gap-1.5">
                    <FiClock className="text-amber-800" />
                    Zero late fees
                </span>

                <span className="hidden text-gray-300 sm:inline">•</span>

                <span className="flex items-center gap-1.5">
                    <FiBookOpen className="text-amber-800" />
                    Open to all deliberate readers
                </span>
            </div>
        </div>
    );
};

export default LoginPage;