import { playFair } from "@/app/layout";
import React from "react";
import { FaHand } from "react-icons/fa6";
import { FiBookOpen, FiSearch } from "react-icons/fi";

// how Page turn works section
const HowPageTurn = () => {
    const borrowingSteps = [
        {
            number: "01",
            title: "Discover & Filter",
            description: "Navigate our curated registry by precise disciplines, author names, or rare folio classification. Preview table of contents and availability.",
            footer: "Cross-referenced Cataloging",
            icon: <FiSearch />,
            iconStyle: "bg-[#f7eee8] text-[#29231f]",
        },
        {
            number: "02",
            title: "Instant 1-Click Borrow",
            description: "Claim your digital copy with a single tap. Instantly acquire a verifiable archival loan pass valid for 14 uninterrupted calendar days.",
            footer: "Zero Fines • Instant Allocation",
            icon: <FaHand />,
            iconStyle: "bg-[#ffdcc2] text-[#a6530b]",
        },
        {
            number: "03",
            title: "Seamless Reading & Return",
            description: "Immerse yourself in our quiet in-browser typography reader. Return titles whenever finished to instantly unlock new reading quota slots.",
            footer: "Universal Device Syncing",
            icon: <FiBookOpen />,
            iconStyle: "bg-[#f7eee8] text-[#29231f]",
        },
    ];

    return (
        <div className="p-10 mb-10">
            <div className="text-center space-y-4 p-4">
                <p className="text-sm text-amber-600">PROTOCOL & ACCESS</p>
                <h2 className={`${playFair.className} font-bold text-4xl`}>How PageTurn Digital Lending Works</h2>
                <p>
                    Borrowing a folio from our library is designed for focus, clarity, and non-commercial <br /> scholarship.
                </p>
            </div>
            <div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-[30px]">
                    {borrowingSteps.map((step) => (
                        <article
                            key={step.number}
                            className="flex min-h-[300px] flex-col rounded-xl border border-white/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-[30px]"
                        >
                            {/* Number and Icon */}
                            <div className="mb-5 flex items-center justify-between">
                                <span className="font-serif text-[30px] font-bold leading-none text-[#e4d9d2]">{step.number}</span>

                                <div className={`flex h-[50px] w-[50px] items-center justify-center rounded-2xl text-[23px] ${step.iconStyle}`}>{step.icon}</div>
                            </div>

                            {/* Card Content */}
                            <h3 className="mb-3 font-serif text-[23px] font-bold leading-snug text-[#28221f]">{step.title}</h3>

                            <p className="text-[16px] leading-[1.75] text-[#5b5860]">{step.description}</p>

                            {/* Card Footer */}
                            <p className="mt-auto pt-5 text-[15px] font-medium text-[#a6530b]">{step.footer}</p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowPageTurn;
