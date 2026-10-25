"use client";
import React from "react";
import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";
import { toast } from "react-toastify";

const BorrowButton = ({ available_quantity }) => {
    const handleBorrowBtn = () => {
        toast.success("Successfully borrowed this book");
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
