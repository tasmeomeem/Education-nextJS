import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa6";
const Offer = () => {
    return (
        <div>
            <div className='pt-10 flex flex-col sm:flex-row gap-10 justify-center'>
            <div>
                <Image
                    src="/assets/images/self-3.png"
                    alt="Picture of the banner"
                    width={500}
                    height={500}
                />
            </div>
            <div className='pt-8 sm:pt-32 '>
                <h1 className='text-blue-500 text-xl font-bold text-center'>WHO WE ARE</h1>
                <h1 className='text-4xl font-bold text-center'>We Offer The Best Carrier</h1>

                <div className='flex gap-5 pt-10'>
                    <div className='flex justify-center items-center bg-slate-100 border rounded-full w-16 h-16'>
                        <Image
                            src="/assets/images/about-icon-1.png"
                            alt="Picture of the banner"
                            width={40}
                            height={40}
                        />
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>Industry Expert Instructor</h1>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> eiusmod tempor incididunt dolore magna aliqua.</h1>
                    </div>
                </div>

                <div className='flex gap-5 pt-10'>
                    <div className='flex justify-center items-center bg-slate-100 border rounded-full w-16 h-16'>
                        <Image
                            src="/assets/images/about-icon-2.png"
                            alt="Picture of the banner"
                            width={40}
                            height={40}
                        />
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>Up-to-Date Course Content</h1>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> eiusmod tempor incididunt dolore magna aliqua.</h1>
                    </div>
                </div>

                <div className='flex gap-5 pt-10'>
                    <div className='flex justify-center items-center bg-slate-100 border rounded-full w-16 h-16'>
                        <Image
                            src="/assets/images/about-icon-3.png"
                            alt="Picture of the banner"
                            width={40}
                            height={40}
                        />
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>Biggest Student Community</h1>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> eiusmod tempor incididunt dolore magna aliqua.</h1>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className="mt-8 sm:mt-10 btn bg-blue-500 btn-primary ">Know About Us<FaArrowRight /></button>
                </div>
            </div>
        </div>

            
        </div>
    );
};

export default Offer;