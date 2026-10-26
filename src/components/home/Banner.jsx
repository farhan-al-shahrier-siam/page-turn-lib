import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.png";
import { playFair } from "@/app/layout";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";

const Banner = () => {
    return (
        <div className="p-10 md:flex md:justify-between">
            <div className="flex items-center">
                <div className={`max-w-2xl space-y-7`}>
                    <h2 className={`${playFair.className} font-bold text-5xl animate__animated animate__rubberBand`}>
                        Find Your Next Read,<br></br> <span className="text-amber-700 ">Borrow Instantly.</span>
                    </h2>
                    <p className="font-semibold text-slate-700">
                        Explore thousands of curated titles across Story, Tech, and Science.<br></br> Borrow seamlessly and read at your own pace with<br></br> archival reverence.
                    </p>

                    <Link href={"/all-books"}>
                        <button className="btn text-white bg-black">
                            Browse now <FaArrowAltCircleRight></FaArrowAltCircleRight>
                        </button>
                    </Link>
                </div>
            </div>
            <div>
                <Image src={banner} height={300} width={400} alt="banner" className="w-xl"></Image>
            </div>
        </div>
    );
};

export default Banner;
