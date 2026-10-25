"use client"
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiArrowRight, FiBookOpen, FiClock, FiEye, FiEyeOff, FiImage, FiLock, FiMail, FiShield, FiUser } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";

const RegisterPage = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleRegister = async (data) => {
    const {name, email, password, photo} = data;
    // console.log(name, email, password, photo)
    const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: "/login",
        });
        if(res){
            toast.success("Sign-up successfull...")
            // redirect("/login")
            router.push("/login");
        }else if(error){
            toast.error(error.message)
        }
  }

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
                        <h1 className="font-serif text-3xl leading-[1.1] font-bold text-[#25211e] sm:text-4xl">Join the stacks</h1>

                        <p className="mt-3 text-sm leading-6 text-gray-600">Create your library account to explore books, manage your loans, and build your digital folio.</p>
                    </div>

                    {/* Register Form */}
                    <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="mb-1.5 block text-xs font-semibold">
                                Full Name
                            </label>

                            <label className="input w-full input-bordered flex h-10.5 items-center gap-3 rounded-sm border-0 bg-[#f5ebe5] px-3 focus-within:outline-1 focus-within:outline-amber-700">
                                <FiUser className="text-gray-500" size={17} />

                                <input                              
                                    {...register("name", { required: "Name is required" })}
                                    type="text" 
                                    placeholder="Enter your full name" 
                                    className="min-w-0 grow text-sm" 
                                />
                                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                            </label>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="mb-1.5 block text-xs font-semibold">
                                Email Address
                            </label>

                            <label className="input w-full input-bordered flex h-10.5 items-center gap-3 rounded-sm border-0 bg-[#f5ebe5] px-3 focus-within:outline-1 focus-within:outline-amber-700">
                                <FiMail className="text-gray-500" size={17} />

                                <input 
                                    {...register("email", { required: "Email is required" })}
                                    type="email" 
                                    placeholder="you@example.com" 
                                    className="min-w-0 grow text-sm" />
                                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </label>
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="mb-1.5 block text-xs font-semibold">
                                Password
                            </label>

                            <label className="input w-full input-bordered flex h-10.5 items-center gap-3 rounded-sm border-0 bg-[#f5ebe5] px-3 focus-within:outline-1 focus-within:outline-amber-700">
                                <FiLock className="text-gray-500" size={17} />

                                <input 
                                {...register("password", { required: "Password is required" })}
                                type={showPassword ? "text" : "password"} 
                                placeholder="Create a password" 
                                className="min-w-0 grow text-sm" />
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-500" aria-label={showPassword ? "Hide password" : "Show password"}>
                                    {showPassword ? <FiEyeOff size={17} /> : <FiEye size={17} />}
                                </button>
                            </label>
                        </div>

                        {/* Photo URL */}
                        <div>
                            <label htmlFor="photo" className="mb-1.5 block text-xs font-semibold">
                                Profile Photo URL
                            </label>

                            <label className="input w-full input-bordered flex h-10.5 items-center gap-3 rounded-sm border-0 bg-[#f5ebe5] px-3 focus-within:outline-1 focus-within:outline-amber-700">
                                <FiImage className="text-gray-500" size={17} />

                                <input 
                                {...register("photo", { required: "Photo URL is required" })}
                                type="text" 
                                placeholder="https://example.com/photo.jpg" 
                                className="min-w-0 grow text-sm" />
                                {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
                            </label>
                        </div>
                        {/* Create Account */}
                        <button className="btn h-10.5 min-h-0 w-full rounded-sm border-0 bg-[#141c30] text-sm font-medium text-white hover:bg-[#222d46]">
                            Create Library Account
                            <FiArrowRight size={17} />
                        </button>

                        {/* Divider */}
                        <div className="flex items-center gap-3 pt-1">
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

                            <button className="btn h-9 min-h-0 rounded-sm border-0 bg-[#f5ebe5] text-sm font-medium text-gray-900 hover:bg-[#eee0d7]">
                                <FaGithub className="text-amber-800" size={15} />
                                Github
                            </button>
                        </div>
                    </form>
                </div>

                {/* Login Footer */}
                <div className="bg-[#fcf7f3] px-5 py-5 text-center text-xs text-gray-600">
                    Already have a library account?{" "}
                    <Link href="/login" className="font-medium text-amber-800 hover:underline">
                        Sign in to Library
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
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default RegisterPage;
