import Banner from "@/components/home/Banner";
import NewArrival from "@/components/home/NewArrival";
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
        </div>
    );
}
