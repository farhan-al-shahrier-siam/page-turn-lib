"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiBookOpen, FiUser, FiMail, FiEdit2, FiSave, FiArrowLeft, FiShield } from "react-icons/fi";

const MyProfile = () => {
    const [editName, setEditName] = useState(false);
    const [editPhoto, setEditPhoto] = useState(false);

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    const handleNameUpdate = async (data) => {

        await authClient.updateUser({
            // image: user?.image,
            name: data.name,
        });

        setEditName(false);
        // setEditPhoto(false);
    };
    const handlePhotoUpdate = async (data) => {
        await authClient.updateUser({
            image: data.photo,
            // name: user?.name,
        });

        // setEditName(false);
        setEditPhoto(false);
    };

    return (
        <div className="min-h-screen bg-[#fff5ee] px-4 py-10">
            <div className="mx-auto max-w-150 overflow-hidden rounded-lg bg-white shadow-xl">
                <div className="px-6 py-8 sm:px-10">
                    {/* Logo */}
                    <div className="mb-8 text-center">
                        <div className="flex items-center justify-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#141c30] text-orange-400">
                                <FiBookOpen size={24} />
                            </div>

                            <div className="font-serif text-xl">
                                PageTurn
                                <span className="ml-1 text-sm italic text-gray-500">Curated Folio</span>
                            </div>
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="mb-8 text-center">
                        <h1 className="font-serif text-3xl font-bold text-[#25211e] sm:text-4xl animate__animated animate__zoomInDown">My Profile</h1>
                        <p className="mt-3 text-sm text-gray-600">Manage your personal library information.</p>
                    </div>

                    {/* Profile Photo */}
                    <div className="mb-8 flex flex-col items-center">
                        <div className="avatar">
                            <div className="w-24 rounded-full border-4 border-[#f5ebe5]">
                                <Image src={user?.image || "/default-avatar.png"} alt="Profile picture" height={90} width={90} />
                            </div>
                        </div>
                    </div>

                    {/* User Information */}
                    <div className="space-y-5">
                        {/* Name */}
                        <div>
                            <label className="mb-2 block text-xs font-semibold">Full Name</label>

                            <div className="flex items-center gap-3 rounded-sm bg-[#f5ebe5] p-3">
                                <FiUser className="shrink-0 text-gray-500" size={18} />

                                {editName ? (
                                    <form onSubmit={handleSubmit(handleNameUpdate)} className="flex min-w-0 flex-1 items-center gap-2">
                                        <input
                                            {...register("name", { required: "Name is required" })}
                                            type="text"
                                            className="input input-sm h-9 min-w-0 flex-1 rounded-sm border border-[#eadbd1] bg-white focus:border-amber-700 focus:outline-none"
                                            placeholder={user.name}
                                        />
                                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                                        <button className="btn btn-sm h-9 shrink-0 border-0 bg-[#141c30] text-white hover:bg-[#222d46]">
                                            <FiSave size={15} />
                                            Save
                                        </button>
                                    </form>
                                ) : (
                                    <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
                                        <p className="min-w-0 flex-1 break-words text-sm font-medium text-[#25211e]">{user?.name}</p>
                                        <button onClick={() => setEditName(true)} className="btn btn-sm h-9 shrink-0 border-0 bg-white text-amber-800 hover:bg-[#eee0d7]">
                                            <FiEdit2 size={15} />
                                            Edit
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Photo URL */}
                        <div>
                            <label className="mb-2 block text-xs font-semibold">Photo URL</label>
                            <div className="flex items-center gap-3 rounded-sm bg-[#f5ebe5] p-3">
                                <FiUser className="shrink-0 text-gray-500" size={18} />

                                {editPhoto ? (
                                    <form onSubmit={handleSubmit(handlePhotoUpdate)} className="flex min-w-0 flex-1 items-center gap-2">
                                        <input
                                            {...register("photo", { required: "Photo is required" })}
                                            type="url"
                                            className="input input-sm h-9 min-w-0 flex-1 rounded-sm border border-[#eadbd1] bg-white focus:border-amber-700 focus:outline-none"
                                            placeholder={user.image}
                                        />
                                        {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
                                        <button onClick={handlePhotoUpdate} className="btn btn-sm h-9 shrink-0 border-0 bg-[#141c30] text-white hover:bg-[#222d46]">
                                            <FiSave size={15} />
                                            Save
                                        </button>
                                    </form>
                                ) : (
                                    <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
                                        <p className="min-w-0 flex-1 break-words text-sm font-medium text-[#25211e] line-clamp-2">{user?.image}</p>
                                        <button onClick={() => setEditPhoto(true)} className="btn btn-sm h-9 shrink-0 border-0 bg-white text-amber-800 hover:bg-[#eee0d7]">
                                            <FiEdit2 size={15} />
                                            Edit
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-2 block text-xs font-semibold">Email Address</label>

                            <div className="flex items-center gap-3 rounded-sm bg-[#f5ebe5] p-3">
                                <FiMail className="shrink-0 text-gray-500" size={18} />

                                <span className="min-w-0 break-all text-sm text-gray-600">{user?.email || "No email available"}</span>
                            </div>

                            <p className="mt-2 text-xs text-gray-400">Your email address cannot be changed here.</p>
                        </div>
                    </div>

                    {/* Back Button */}
                    <Link href="/" className="btn mt-8 h-10.5 min-h-0 w-full rounded-sm border-0 bg-[#141c30] text-white hover:bg-[#222d46]">
                        <FiArrowLeft size={17} />
                        Back to Home
                    </Link>
                </div>

                {/* Footer */}
                <div className="bg-[#fcf7f3] px-5 py-4 text-center text-xs text-gray-600">Your reading journey, all in one place.</div>
            </div>
        </div>
    );
};

export default MyProfile;
