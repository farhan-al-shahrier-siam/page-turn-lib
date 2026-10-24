import Banner from "@/components/home/Banner";
import FeaturedSection from "@/components/home/FeaturedSection";
import HowPageTurn from "@/components/home/HowPageTurn";
import NewArrival from "@/components/home/NewArrival";
import ReaderReflection from "@/components/home/ReaderReflection";
import LoadingSuspense from "@/components/shared/LoadingSuspense";
import { Suspense } from "react";

export default function Home() {
    return (
        <div>
            <Suspense fallback={<LoadingSuspense></LoadingSuspense>}>
                <NewArrival></NewArrival>
            </Suspense>
            <Banner></Banner>
            <Suspense fallback={<LoadingSuspense></LoadingSuspense>}>
                <FeaturedSection></FeaturedSection>
            </Suspense>
            <HowPageTurn></HowPageTurn>
            <ReaderReflection></ReaderReflection>
        </div>
    );
}
