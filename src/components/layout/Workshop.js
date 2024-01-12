import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const Workshop = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-2 lg:pl-40 md:pl-20 ">
            <div className="text-center lg:pt-20">
                <h1 className="text-white text-2xl pt-10 lg:pl-26 ">FREE WORKSHOP</h1>
                 <h1 className="text-white  text-4xl font-bold">
                     Join Our Free Workshops
                </h1>
                <h1 className="text-white pt-5 pr-5 pl-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, <br/>consect adipi scing elit,
                     sed do eiusmod tempor incididunt ut sed do<br/> eiusmod tempor incididunt ut labore et dolore aliqua.
                 </h1>
                 <button className="btn hover:bg-sky-700 mt-10">Upcoming Workshop<FaArrowRight /></button>
            </div>
            <div className="pt-10 md:pr-20 md:pt-32">
                <Image
                    src="/assets/images/cta-banner.jpg"
                    alt="popular course"
                    width={500}
                    height={500}
                />
            </div>
        </div>


    );
};

export default Workshop;