import { playFair } from "@/app/layout";
import Header from "@/components/allbookspage/Header";
import LeftSidebar from "@/components/allbookspage/LeftSidebar";
import BookCard from "@/components/shared/BookCard";
import { getBooks, getCategories } from "@/lib/data";
import React from "react";

const AllBooksPage = async () => {
    const books = await getBooks();

    const categories = await getCategories();

    // console.log(categories);

    return (
        <div className="mx-auto container ">
            <div className="space-y-2 p-4">
                <p className="text-xs pt-5 text-amber-600 font-semibold">CURATED ARCHIVE FOLIO</p>
                <h2 className={`${playFair.className} font-bold text-4xl`}>Library Catalog</h2>
            </div>
            <Header></Header>

            <div className="grid md:grid-cols-4">
                <div className="col-end-3 md:col-span-1">
                    <LeftSidebar activeID={"1"} categories={categories} />
                </div>

                <div className="mx-auto col-span-3 grid max-w-7xl grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 p-5">
                    {books.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllBooksPage;
