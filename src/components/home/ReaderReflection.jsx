import React from "react";
import { FaQuoteLeft } from "react-icons/fa";


export default function ReaderReflection() {
    return (
        <section className="w-full bg-[#fff8f4] px-5 py-16 sm:px-8 lg:px-[4%] lg:py-24">
            <div className="mx-auto max-w-[1600px]">
                <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-r from-[#f1e6df] via-[#f6ebe4] to-[#fbf1e9] px-6 py-12 shadow-md sm:px-10 sm:py-16 lg:px-[5.2%] lg:py-[5.2%]">
                    {/* Decorative quotation mark */}
                    <FaQuoteLeft aria-hidden="true" className="absolute right-8 top-8 h-16 w-16 rotate-180 text-[#eadbd1] opacity-50 sm:right-12 sm:top-10 sm:h-20 sm:w-20" />

                    <div className="relative z-10 max-w-[1050px]">
                        {/* Label */}
                        <div className="mb-6 flex items-center gap-3">
                            <FaQuoteLeft className="text-[24px] text-[#a6530b]" />
                            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#a6530b]">Reader’s Reflection</p>
                        </div>

                        {/* Testimonial */}
                        <blockquote>
                            <p className="font-serif text-[27px] font-bold italic leading-[1.4] tracking-[-0.025em] text-[#28221f] sm:text-[32px] lg:text-[38px]">
                                “PageTurn has completely restored my relationship with deep reading. No algorithmic dopamine traps, just pristine typography, thoughtful cataloging, and titles that
                                matter.”
                            </p>
                        </blockquote>

                        {/* Author information */}
                        <div className="mt-8 flex items-center gap-5">
                            <img
                                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=160&h=160&fit=crop&crop=faces"
                                alt="Dr. Elena Vance"
                                className="h-[70px] w-[70px] shrink-0 rounded-[18px] border-[3px] border-white object-cover shadow-sm"
                            />

                            <div className="min-w-0">
                                <h3 className="text-lg font-semibold text-[#28221f]">Dr. Elena Vance</h3>
                                <p className="mt-0.5 text-sm leading-relaxed text-[#5b5860] sm:text-base">
                                    Senior Fellow in Cognitive Systems
                                    <span className="hidden sm:inline"> • </span>
                                    <span className="block sm:inline">Cardholder #0492</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
