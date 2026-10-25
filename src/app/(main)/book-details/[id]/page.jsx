import React from "react";
import Link from "next/link";
import { FiArrowLeft, FiBookOpen, FiCheckCircle, FiBook, FiMapPin, FiBookmark, FiShare2, FiInfo, FiLayers, FiArrowUpRight } from "react-icons/fi";
import { getBookByID } from "@/lib/data";
import BorrowButton from "@/components/shared/BorrowButton";
import { ToastContainer } from "react-toastify";

const BookDetails = async ({params}) => {
    const {id} = await params
    const book = await getBookByID(id);

    const { title, author, description, category, available_quantity, image_url } = book;

    return (
        <div>
            <main className="min-h-screen bg-[#fffaf7] text-stone-800">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-6 md:py-10">
                    {/* Back Navigation */}
                    <Link href="/books" className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-amber-800 mb-6 transition-colors">
                        <FiArrowLeft />
                        Back to Library Catalog
                    </Link>

                    {/* Main Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] xl:grid-cols-[410px_minmax(0,1fr)] gap-6 lg:gap-8">
                        {/* LEFT COLUMN */}
                        <aside className="space-y-5">
                            {/* Book Cover Card */}
                            <div className="bg-[#fbf0e8] rounded-xl p-5 shadow-md border border-orange-100/70">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                    <span className="badge bg-white text-amber-800 border-0 gap-1 py-3 px-3">
                                        <FiBookOpen />
                                        {category}
                                    </span>

                                    <span className="badge bg-[#eee1d6] text-stone-700 border-0 gap-1 py-3 px-3">
                                        <FiCheckCircle className="text-amber-800" />
                                        {available_quantity} copies available
                                    </span>
                                </div>

                                {/* Book Image */}
                                <div className="flex justify-center items-center py-3">
                                    <div className="w-full max-w-[275px] h-[390px] bg-white shadow-xl overflow-hidden">
                                        {image_url ? (
                                            <img src={image_url} alt={title} className="w-full h-full object-contain" />
                                        ) : (
                                            <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-[#f5e9df] text-amber-800">
                                                <FiBookOpen className="text-7xl" />
                                                <p className="text-center font-semibold px-5">{title}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Availability Summary */}
                                <div className="bg-white/80 rounded-md p-3 mt-5">
                                    <div className="flex justify-between items-center gap-3 text-sm">
                                        <span className="flex items-center gap-2 font-medium">
                                            <FiLayers className="text-amber-800" />
                                            Stock Availability
                                        </span>

                                        <span className={`font-semibold ${available_quantity > 0 ? "text-green-700" : "text-red-600"}`}>{available_quantity > 0 ? "Available" : "Out of stock"}</span>
                                    </div>

                                    <div className="w-full h-2 bg-stone-200 rounded-full mt-3 overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${available_quantity > 0 ? "bg-amber-500" : "bg-red-500"}`}
                                            style={{
                                                width: available_quantity > 0 ? "100%" : "0%",
                                            }}
                                        />
                                    </div>

                                    <p className="text-xs text-stone-500 mt-2">{available_quantity} copies currently available in the library.</p>
                                </div>
                            </div>

                            {/* Bibliographic Information */}
                            <div className="bg-[#fbf0e8] rounded-xl p-5 shadow-sm border border-orange-100/70">
                                <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide mb-4">
                                    <FiBookOpen className="text-amber-800 text-base" />
                                    Bibliographic Archive Data
                                </h3>

                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between gap-4 bg-white/40 px-3 py-2 rounded">
                                        <span className="text-stone-500">Book ID</span>
                                        <span className="font-medium break-all text-right">{id}</span>
                                    </div>

                                    <div className="flex justify-between gap-4 bg-white/40 px-3 py-2 rounded">
                                        <span className="text-stone-500">Title</span>
                                        <span className="font-medium text-right">{title}</span>
                                    </div>

                                    <div className="flex justify-between gap-4 bg-white/40 px-3 py-2 rounded">
                                        <span className="text-stone-500">Author</span>
                                        <span className="font-medium text-right">{author}</span>
                                    </div>

                                    <div className="flex justify-between gap-4 bg-white/40 px-3 py-2 rounded">
                                        <span className="text-stone-500">Category</span>
                                        <span className="font-medium text-right">{category}</span>
                                    </div>

                                    <div className="flex justify-between gap-4 bg-white/40 px-3 py-2 rounded">
                                        <span className="text-stone-500">Availability</span>
                                        <span className="font-medium text-right">{available_quantity} copies</span>
                                    </div>

                                    <div className="flex justify-between items-start gap-4 bg-white/40 px-3 py-2 rounded">
                                        <span className="text-stone-500 shrink-0">Library Shelf</span>
                                        <span className="text-amber-800 text-right">Not specified</span>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* RIGHT COLUMN */}
                        <section className="min-w-0 space-y-6">
                            {/* Book Heading */}
                            <div className="space-y-3">
                                <p className="text-xs uppercase tracking-[0.15em] text-amber-800 font-semibold">
                                    Catalog Folio No. {id}
                                    <span className="text-stone-400 mx-2">•</span>
                                    <span className="text-stone-500 normal-case tracking-normal font-normal">Library Archive</span>
                                </p>

                                <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight leading-tight text-stone-900">{title}</h1>

                                <p className="text-stone-600 text-base sm:text-lg">
                                    by <span className="font-semibold text-stone-900">{author}</span>
                                </p>
                            </div>

                            {/* Stock Card */}
                            <div className="bg-[#fbf0e8] rounded-xl p-4 sm:p-5">
                                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                    <div className="flex items-center gap-2 text-sm">
                                        <FiLayers className="text-amber-800 text-lg" />
                                        <span className="font-medium">Stock Availability:</span>
                                        <span className="text-amber-800 font-semibold">{available_quantity} copies left</span>
                                    </div>

                                    <span className={`badge border-0 ${available_quantity > 0 ? "bg-white text-green-800" : "bg-red-100 text-red-700"}`}>{available_quantity > 0 ? "In Stock" : "Unavailable"}</span>
                                </div>

                                <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${available_quantity > 0 ? "bg-orange-400" : "bg-red-500"}`}
                                        style={{
                                            width: available_quantity > 0 ? "100%" : "0%",
                                        }}
                                    />
                                </div>

                                <p className="text-xs text-stone-500 mt-2">Current quantity: {available_quantity} copies</p>
                            </div>

                            {/* Description */}
                            <div className="bg-white rounded-xl p-5 sm:p-7 shadow-sm border border-stone-100">
                                <h2 className="text-xl font-bold mb-3">Synopsis &amp; Overview</h2>

                                <p className="text-sm sm:text-base text-stone-600 leading-7 whitespace-pre-line">{description || "No description is available for this book yet."}</p>

                                <div className="mt-6">
                                    <h3 className="text-xs font-semibold uppercase tracking-wide mb-3">Archive Highlights</h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
                                        <div className="flex items-start gap-2 bg-[#f7ece5] p-3 text-sm">
                                            <FiCheckCircle className="text-amber-800 mt-0.5 shrink-0" />
                                            <span>{category} Collection</span>
                                        </div>

                                        <div className="flex items-start gap-2 bg-[#f7ece5] p-3 text-sm">
                                            <FiCheckCircle className="text-amber-800 mt-0.5 shrink-0" />
                                            <span>Author: {author}</span>
                                        </div>

                                        <div className="flex items-start gap-2 bg-[#f7ece5] p-3 text-sm">
                                            <FiCheckCircle className="text-amber-800 mt-0.5 shrink-0" />
                                            <span>{available_quantity > 0 ? "Available to borrow" : "Currently unavailable"}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Card */}
                            <div className="bg-[#f1e5dd] rounded-xl p-5 shadow-sm">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <BorrowButton available_quantity={available_quantity}></BorrowButton>

                                    <button type="button" className="btn bg-white text-stone-800 hover:bg-stone-100 border-0 rounded-md">
                                        <FiBookmark />
                                        Add to Reading List
                                    </button>

                                    <button type="button" className="btn bg-white text-stone-800 hover:bg-stone-100 border-0 rounded-md sm:col-span-2">
                                        <FiShare2 />
                                        Share with Peer
                                    </button>
                                </div>

                                <div className="mt-4 bg-white rounded-lg p-4 flex items-start gap-3">
                                    <FiInfo className="text-amber-800 text-lg mt-0.5 shrink-0" />

                                    <div>
                                        <p className="font-semibold text-sm">Library Information</p>
                                        <p className="text-sm text-stone-600 mt-1 leading-6">
                                            Check the book&apos;s availability before borrowing. Borrowing, renewals, and reading list features require their own functionality to be connected.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;
