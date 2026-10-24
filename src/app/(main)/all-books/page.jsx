import { playFair } from "@/app/layout";
import BookCard from "@/components/shared/BookCard";
import { getBooks } from "@/lib/data";
import React from "react";
import { FiArrowRight, FiSearch } from "react-icons/fi";

const AllBooksPage = async () => {
    const books = await getBooks();

    return (
        <div className="mx-auto">
            <div className="space-y-2 p-4">
                <p className="text-xs pt-5 text-amber-600 font-semibold">CURATED ARCHIVE FOLIO</p>
                <h2 className={`${playFair.className} font-bold text-4xl`}>Library Catalog</h2>
            </div>

            <form className="w-full max-w-4xl mx-auto p-5">
                <div className="flex items-center gap-3 bg-white rounded-xl shadow-sm border border-stone-200/60 p-2 pl-4 focus-within:ring-2 focus-within:ring-stone-400 focus-within:border-transparent transition-all">
                    <FiSearch className="text-amber-800 text-xl shrink-0" />

                    <input
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

            <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 p-5">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default AllBooksPage;
