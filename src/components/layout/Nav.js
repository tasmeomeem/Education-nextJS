"use client"
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from 'react-icons/ci';
import { FaUser } from "react-icons/fa";
const Nav = () => {
    return (
        <div className="">
            <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                <div className="pt-2 text-2xl font-bold text-blue-500">
                    <h1>Education</h1>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-2 text-xl font-bold">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/course">Course</Link>
                    <Link href="/event">Event</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div className="pl-4 sm:pl-0 md:pl-10 lg:pl-40">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <div className="flex gap-2">
                        <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}><CiSearch /></button>
                        <button className="btn bg-blue-500"><FaUser />Login/Logout</button>
                    </div>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </section>
        </div>
       
    );
};

export default Nav;