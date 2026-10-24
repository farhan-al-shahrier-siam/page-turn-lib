import React from "react";
import { IoLocationOutline, IoMailOutline, IoTimeOutline } from "react-icons/io5";
import { FaCode, FaTelegramPlane, FaRegComments, FaShareAlt, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#FBF0EA] text-[#56545A]">
            <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-8">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                    <div>
                        <h2 className="mb-6 text-2xl font-bold text-[#292521]">PageTurn</h2>

                        <p className="mb-7">An archival lending sanctum dedicated to preserving literary treasures, scientific inquiry, and rare historical folios for deliberate readers.</p>

                        <div className="space-y-3">
                            <p className="flex items-start gap-3">
                                <IoLocationOutline className="mt-1 shrink-0 text-xl text-[#A85D13]" />
                                <span>Atrium IV, Library Quadrangle, West Wing</span>
                            </p>

                            <p className="flex items-start gap-3">
                                <IoMailOutline className="mt-1 shrink-0 text-xl text-[#A85D13]" />
                                <span className="hover:text-black">curator@pageturn-library.org</span>
                            </p>

                            <p className="flex items-start gap-3">
                                <IoTimeOutline className="mt-1 shrink-0 text-xl text-[#A85D13]" />
                                <span>Mon-Fri: 08:00 - 21:00 • Sat-Sun: 10:00 - 18:00</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-[#292521]">ARCHIVAL COLLECTIONS</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-orange-400" />
                                <a className="hover:text-black">Story &amp; Prose</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-[#101827]" />
                                <p className="hover:text-black">Tech &amp; Systems</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-[#8B2500]" />
                                <p className="hover:text-black">Natural Sciences</p>
                            </li>
                            <li>
                                <p className="hover:text-black">Rare Manuscripts</p>
                            </li>
                            <li>
                                <p className="hover:text-black">Digital Audiobinds</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-[#292521]">LIBRARY REGISTRY</h3>
                        <ul className="space-y-3">
                            <li>
                                <p className="hover:text-black">Cardholder Catalog</p>
                            </li>
                            <li>
                                <p className="hover:text-black">Active Loans &amp; Holds</p>
                            </li>
                            <li>
                                <p className="hover:text-black">Silent Reading Rooms</p>
                            </li>
                            <li>
                                <p className="hover:text-black">Borrowing Protocols</p>
                            </li>
                            <li>
                                <p className="hover:text-black">Curator&apos;s Desk</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-[#292521]">CONTACT US</h3>
                        <p className="mb-4">Receive weekly dispatches on newly acquired first editions and curator essays.</p>

                        <form className="mb-5 flex gap-2">
                            <input type="email" placeholder="reader@domain.org" className="min-w-0 flex-1 rounded-sm bg-[#F5E8E2] px-4 py-3 outline-none focus:ring-2" />
                            <button className="rounded-sm bg-black px-4 py-2 text-white hover:bg-[#38332F]">Join</button>
                        </form>

                        <h4 className="mb-3 font-semibold">Social Links</h4>

                        <div className="flex gap-3">
                            <p className="rounded-full bg-[#F5E8E2] p-3  hover:bg-[#EBD9D0]">
                                <FaCode size={20} />
                            </p>
                            <p className="rounded-full bg-[#F5E8E2] p-3 hover:bg-[#EBD9D0]">
                                <FaFacebook size={20} />
                            </p>
                            <p className="rounded-full bg-[#F5E8E2] p-3 hover:bg-[#EBD9D0]">
                                <FaTwitter size={20} />
                            </p>
                            <p className="rounded-full bg-[#F5E8E2] p-3 hover:bg-[#EBD9D0]">
                                <FaShareAlt size={20} />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-16 flex flex-col justify-between gap-5 border-t border-[#EADBD3] pt-6 text-sm font-medium md:flex-row md:items-center">
                    <p>©2026 PageTurn Curatorial Archive. Bound under Non-Commercial Scholar License.</p>

                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                        <p className="hover:text-black">Privacy Codex</p>
                        <p className="hover:text-black">Patron Rights</p>
                        <p className="hover:text-black">Accessibility Standards</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
