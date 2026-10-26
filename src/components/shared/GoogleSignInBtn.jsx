"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const GoogleSignInBtn = () => {

    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button onClick={handleGoogleSignin} type="button" className="btn h-9 min-h-0 rounded-sm border-0 bg-[#f5ebe5] text-sm font-medium text-gray-900 hover:bg-[#eee0d7]">
                <FcGoogle size={17} />
                Google Access
            </button>

            <button type="button" className="btn h-9 min-h-0 rounded-sm border-0 bg-[#f5ebe5] text-sm font-medium text-gray-900 hover:bg-[#eee0d7]">
                <FaGithub className="text-amber-800" size={15} />
                Github
            </button>
        </div>
    );
};

export default GoogleSignInBtn;
