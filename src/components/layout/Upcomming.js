import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
const Upcomming = () => {
    return (
        <div>
            <div className="text-center pt-10 ">
                <h1 className="text-blue-500 font-bold text-lg">
                    UPCOMMING EVENT
                </h1>
                <h1 className="text-5xl font-bold pt-5 px-2">Let’s Join Our Community</h1>
            </div>
            <div className="px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
                <div className="card w-full sm:w-96 bg-base-100 shadow-xl">
                <div className="badge badge-primary top-0.8 left-0 rounded-l-lg">04 Dec 2022</div>
                <Image
                    src="/assets/images/event-1.jpg"
                    alt="popular course"
                    width={500}
                    height={500}
                />
                <div className="card w-full bg-base-100 shadow-xl pl-5 pt-8">
                    <h2 className="card-title ">
                            <div className=" flex gap-2">
                                <div><FaLocationDot /></div>
                                <div className="text-sm text-gray">Alpaca Way Anaheim, CA 92805</div>
                            </div>
                    </h2>
                    <p>Innovation & Technological<br/> Entrepreneurship Team</p>
                    <div className="card-actions justify-start pt-5">
                        <a href="#" className="flex gap-2 underline decoration-2 text-blue-500">
                            <span className="text-lg font-bold">Get Ticket</span>
                            <div className="pt-2"><FaArrowRight /></div>
                        </a>
                    </div>
                </div>
                </div>

                <div className="card w-full  bg-base-100 shadow-xl">
                <div className="badge badge-primary top-0.8 left-0 rounded-l-lg">30th Oct 2022</div>
                    <Image
                        src="/assets/images/event-2.jpg"
                        alt="popular course"
                        width={500}
                        height={500}
                    />
                    <div className="card-body">
                        <h2 className="card-title">
                            <div className=" flex gap-2">
                                <div><FaLocationDot /></div>
                                <div className="text-sm text-gray">Alpaca Way Anaheim, CA 92805</div>
                            </div>
                        </h2>
                        <p>Innovation & Technological Entrepreneurship Team</p>
                        <div className="card-actions justify-start">
                            <a href="#" className="flex gap-2 underline decoration-2 text-blue-500">
                                <span className="text-lg font-bold">Get Ticket</span>
                                <div className="pt-2"><FaArrowRight /></div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card w-full  bg-base-100 shadow-xl">
                    <div className="badge badge-primary top-0.8 left-0 rounded-l-lg">18th Sep 2022</div>
                    <Image
                        src="/assets/images/event-3.jpg"
                        alt="popular course"
                        width={500}
                        height={500}
                    />
                    <div className="card-body">
                        <h2 className="card-title">
                            <div className=" flex gap-2">
                                <div><FaLocationDot /></div>
                                <div className="text-sm text-gray">Alpaca Way Anaheim, CA 92805</div>
                            </div>
                        </h2>
                        <p>Innovation & Technological Entrepreneurship Team</p>
                        <div className="card-actions justify-start">
                            <a href="#" className="flex gap-2 underline decoration-2 text-blue-500">
                                <span className="text-lg font-bold">Get Ticket</span>
                                <div className="pt-2"><FaArrowRight /></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    );
};

export default Upcomming;