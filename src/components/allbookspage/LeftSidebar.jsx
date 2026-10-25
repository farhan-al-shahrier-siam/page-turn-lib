import Link from "next/link";
import React from "react";
import { FaBook } from "react-icons/fa";

const LeftSidebar = ({ categories, activeID }) => {
    return (
        <div className="bg-[#f4d8cc] p-4 rounded-2xl mt-5">
            <h2 className=" font-bold text-lg flex items-center gap-2"><FaBook></FaBook> All Categories</h2>
            <ul className="flex flex-col gap-3 mt-6">
                {categories.map((category) => {
                    return (
                        <li className={`${activeID === category.category_name && "text-amber-700 bg-slate-400"} bg-slate-100 rounded-md font-bold text-lg`} key={category.category_id}>
                            <Link className="p-2 block" href={`/category/${category.category_name}`}>
                                {category.category_name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default LeftSidebar;
