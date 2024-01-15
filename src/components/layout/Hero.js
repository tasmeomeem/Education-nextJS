import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className='text-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                <div className='pt-8 sm:pt-16 md:pt-16 lg:pt-32'>
                    <h1 className='text-blue-500 font-bold text-xl'>BETTER LEARNING FUTURE WITH US</h1>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold pt-5'>Education Is<br/> About Academic <br/>Excellence</h1>
                    <p className='text-md md:text-md lg:text-xl  pt-5'>Sed eu volutpat arcu, a tincidunt nulla quam,<br/> feugiat sit amet ipsum a, dapibus porta velit.</p>
                    <button className="mt-5 btn bg-blue-500 btn-primary">Get Started Today<FaArrowRight /></button>
                </div>
                <div className='pt-8 sm:pt-16 md:pt-16 lg:pt-32'>
                    <Image
                        src="/assets/images/self-2.png"
                        alt="Picture of the banner"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>

    );
};

export default Hero;