"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const BorrowButton = ({ available_quantity }) => {
    const { data: session } = authClient.useSession();

    // console.log(session)
    const user = session?.user;

    const router = useRouter();

    const handleBorrowBtn = () => {
        if (user) {
            toast.success("Successfully borrowed this book");
        } else {
            toast.warning("Need to login to borrow this book.")
            router.push("/login");
        }
    };

    return (
        <button onClick={handleBorrowBtn} type="button" disabled={available_quantity <= 0} className="btn bg-stone-950 text-white hover:bg-stone-800 border-0 rounded-md">
            <FiBookOpen />
            Borrow This Book
            <FiArrowUpRight />
        </button>
    );
};

export default BorrowButton;
