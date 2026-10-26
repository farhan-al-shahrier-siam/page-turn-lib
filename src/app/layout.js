import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import 'animate.css';

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

export const playFair = Playfair_Display({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

export const metadata = {
    title: "Page Turn lib",
    description: "Online Book Borrowing Platform",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light" className={`${plusJakartaSans.className} h-full antialiased`}>
            <body className="bg-[#fff8f5] min-h-full flex flex-col">
                <Suspense>
                    <Navbar></Navbar>
                </Suspense>
                {children}
                <Footer></Footer>
                <ToastContainer></ToastContainer>
            </body>
        </html>
    );
}
