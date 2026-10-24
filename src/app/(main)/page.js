import Banner from "@/components/home/Banner";
import FeaturedSection from "@/components/home/FeaturedSection";
import HowPageTurn from "@/components/home/HowPageTurn";
import NewArrival from "@/components/home/NewArrival";
import ReaderReflection from "@/components/home/ReaderReflection";
import { Suspense } from "react";

export default function Home() {
    return (
        <div>
            <Suspense
                fallback={
                    <div className="flex justify-center items-center p-4">
                        <span className="loading loading-spinner text-warning"></span>
                    </div>
                }
            >
                <NewArrival></NewArrival>
            </Suspense>
            <Banner></Banner>
            <Suspense
                fallback={
                    <div className="flex justify-center items-center p-4">
                        <span className="loading loading-spinner text-warning"></span>
                    </div>
                }
            >
                <FeaturedSection></FeaturedSection>
            </Suspense>
            <HowPageTurn></HowPageTurn>
            <ReaderReflection></ReaderReflection>
        </div>
    );
}
