import { playFair } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEye } from "react-icons/fa";

const BooksCard = ({ book }) => {
    console.log(book);
    return (
        <div>
            <div className="card bg-base-100 max-w-70 h-112.5 shadow">
                <figure className="px-10 pt-10">
                    <Image className="rounded-2xl p-2" src={book.image_url} width={250} height={280} alt={book.description}></Image>
                </figure>
                <div className="card-body">
                    <h2 className={`${playFair.className} card-title`}>{book.title}</h2>
                    <p>{book.author}</p>
                    <p>Category: </p>
                    <p className="text-amber-600">{book.category}</p>
                    <div className="card-actions">
                        <Link href={`/book-details/${book.id}`}>
                            <button className="btn bg-amber-100">
                                <FaEye></FaEye> View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;
