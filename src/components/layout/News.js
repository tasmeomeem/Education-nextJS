import { HiOutlineMailOpen } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-xl text-blue-500 text-blue font-bold pt-10">SUBSCRIBE NEWSLETTER</h1>
                <h1 className="text-5xl font-bold pt-8 text-black pt-10">Get Every Latest News</h1>
            </div>

            
            <div> 
                <div className="text-center justify-center items-center relative text-center bg-gray-300 pt-10">
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-secondary w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl pl-10"
                />
                
                <button className="mt-5 btn bg-blue-500 btn-primary sm:mt-0 sm:ml-2">Subscribe<FaArrowRight /></button>
                </div>


                <div>
                    
                </div>
            </div>
            
        </div>

    );
};

export default Hero;