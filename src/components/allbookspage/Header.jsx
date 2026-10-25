"use client"
import React from "react";
import { FiArrowRight, FiSearch } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";

const Header = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleSearch = (data)=>{
        const {search} = data;
        redirect(`/search/${search}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleSearch)} className="w-full max-w-4xl mx-auto p-5">
                <div className="flex items-center gap-3 bg-white rounded-xl shadow-sm border border-stone-200/60 p-2 pl-4 focus-within:ring-2 focus-within:ring-stone-400 focus-within:border-transparent transition-all">
                    <FiSearch className="text-amber-800 text-xl shrink-0" />

                    <input
                        {...register("search")}
                        type="text"
                        placeholder="Search books by title, author, or keywords... (e.g. 'Clean Code', 'Science')"
                        className="w-full bg-transparent text-stone-700 placeholder-stone-400 focus:outline-none text-sm md:text-base"
                    />

                    <button type="submit" className="btn btn-neutral text-white normal-case rounded-lg px-5 min-h-0 h-10 gap-2 shrink-0 hover:opacity-90 font-medium">
                        <span>Search</span>
                        <FiArrowRight className="text-base" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Header;
