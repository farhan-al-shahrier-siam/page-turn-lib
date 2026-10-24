import { getNewArrivals } from "@/lib/data";
import Marquee from "react-fast-marquee";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";

const NewArrival = async () => {
    const newArrivals = await getNewArrivals();

    return (
        <div className="flex items-center mx-auto shadow px-3 bg-[#FBF0EA]">
            <button className="btn mx-5 bg-amber-600 text-white font-bold">
                <AiTwotoneThunderbolt />
                Archive Pulse
            </button>
            <Marquee pauseOnHover={true}>
                {newArrivals.map((n) => (
                    <div key={n.id} className="mx-10 flex gap-2 p-4 items-center">
                        <span className=" text-amber-700 font-bold">{n.category}: </span>
                        <span>{n.title}</span>
                        <span className="flex items-center">
                            <GoDotFill />
                            {n.author}
                        </span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default NewArrival;
