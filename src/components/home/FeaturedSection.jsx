import { playFair } from "@/app/layout";
import { getBooks } from "@/lib/data";
import React from "react";
import { FaDotCircle } from "react-icons/fa";
import BookCard from "../shared/BookCard";

const FeaturedSection = async () => {

    const books = await getBooks()

    return (
        <div className="md:p-10 bg-[#FBF0EA]">
            <p className="text-amber-600 text-sm flex items-center gap-1" >
                <FaDotCircle />
                WEEKLY CURATIONS
            </p>
            <h2 className={`${playFair.className} font-bold text-3xl`}>Featured Books</h2>
            <p className="font-semibold mt-3 text-slate-700">Top borrowed books this week from our digital library collection. </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 justify-between p-5 ">
                {
                    books.slice(0,4).map(book=>{
                        return <BookCard book={book} key={book.id}></BookCard>
                    })
                }
            </div>
        </div>
    );
};

export default FeaturedSection;
