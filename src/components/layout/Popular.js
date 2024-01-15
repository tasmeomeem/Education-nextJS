import Image from 'next/image';
import { CiHeart } from "react-icons/ci";
import { IoReaderOutline } from "react-icons/io5";
import { CiStopwatch } from "react-icons/ci";
import { FaArrowRight } from 'react-icons/fa6';
const Popular = () => {
    return (
        <div>
            <div className='pl-4 md:pl-20 lg:mt-20 mt-10'>
                <div className='text-center pt-6 md:pt-10'>
                    <h1 className='text-md font-bold text-blue-500 pt-4 md:pt-10'>POPULAR COURSES</h1>
                    <h1 className='lg:text-4xl  font-bold'>Our Popular Courses</h1>
                </div>

                <div class='grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-8 pt-10'>
                    {[1, 2, 3, 4, 5, 6].map((item) => {
                        return (
                            <>
                                <div className="card w-full bg-base-100 shadow-xl">
                            
                                    <figure className='relative'>
                                        <Image
                                            src="/assets/images/course-2.jpg"
                                            alt="popular course"
                                            width={500}
                                            height={500}
                                        />
                                        
                                    </figure>
                                    <div className='absolute w-full px-5 pt-2'>
                                        <div className=' flex justify-between'>
                                            <button className=" btn btn-sm border-none  bg-white text-black">Intermediate</button>
                                            <button className='text-black'><CiHeart size={30}/></button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-title mr-10">
                                            <div className='flex gap-2'>
                                                <div><IoReaderOutline /></div>
                                                <h1 className='text-gray-400'>35Lessons</h1>
                                            </div>
                                            <div className='flex gap-2 '>
                                                <div><CiStopwatch /></div>
                                                <h1 className='text-gray-400 '>18h15m44s</h1>
                                            </div>
                                    
                                        </div>
                                        <p className='hover:text-blue-500 font-bold'>Competitive Strategy law for all students</p>
                                        <div className='flex gap-5 '>
                                            <div className="rating">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"checked />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                                            </div>
                                            <div>
                                                (18 Review)
                                            </div>
                                        </div>
                                        <div>
                                            <del className="text-blue-500 text-xl">$50.00</del> $49.00
                                        </div>
                                        

                                        
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>

                <div className='text-center lg:py-10'>
                    <button className="mt-5 btn bg-blue-500 btn-primary ">Get Started Today<FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default Popular;