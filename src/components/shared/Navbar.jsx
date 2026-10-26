"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";
import { TbUserHexagon } from "react-icons/tb";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const pathName = usePathname();

    const { data: session } = authClient.useSession();

    // console.log(session)
    const user = session?.user;

    const links = (
        <>
            <li>
                <Link className={`${pathName === "/" ? "font-bold border-b-2" : ""}`} href={"/"}>
                    Home
                </Link>
            </li>
            <li>
                <Link className={`${pathName === "/all-books" ? "font-bold border-b-2" : ""}`} href={"/all-books"}>
                    All Books
                </Link>
            </li>
            <li>
                <Link className={`${pathName === "/my-profile" ? "font-bold border-b-2" : ""}`} href={"/my-profile"}>
                    My Profile
                </Link>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {" "}
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
                        </svg>
                    </div>
                    <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2">
                        {links}
                    </ul>
                </div>
                <Link href={"/"} className="cursor-pointer rounded-2xl bg-[#fff8f5]">
                    <Image src={logo} alt="Logo" width={648} height={202} className=" text-xl rounded-2xl w-37.5 h-auto object-contain"></Image>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex bg-white">
                <ul className="menu menu-horizontal px-1 bg-white">{links}</ul>
            </div>
            {user ? (
                <div className="navbar-end gap-2">
                    <h2>Welcome, {user.name}</h2>
                    <Image src={user.image || <TbUserHexagon className="text-3xl"></TbUserHexagon>} alt={user.name} height={60} width={60}></Image>
                    <button onClick={async () => await authClient.signOut()} className="bg-[#fff8f5] btn" href={"/login"}>
                        Logout
                    </button>
                </div>
            ) : (
                <div className="navbar-end gap-2">
                    <TbUserHexagon className="text-3xl"></TbUserHexagon>
                    <Link className="bg-[#fff8f5] btn" href={"/login"}>
                        Login
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
