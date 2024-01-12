import Image from 'next/image';
import { CiHeart } from "react-icons/ci";
import { IoReaderOutline } from "react-icons/io5";
import { CiStopwatch } from "react-icons/ci";
import { FaArrowRight } from 'react-icons/fa6';
const Popular = () => {
    return (
        <div>
            <div className='pl-4 md:pl-20 lg:mt-20'>
                <div className='text-center pt-6 md:pt-10'>
                    <h1 className='text-md font-bold text-blue-500 pt-4 md:pt-10 '>POPULAR COURSES</h1>
                    <h1 className='lg:text-4xl  font-bold'>Our Popular Courses</h1>
                </div>

                <div class='justify-center grid grid-cols-1 md:w-60 md:gap-28 md:grid-cols-2 lg:grid-cols-3  pt-6 md:pt-10 gap-8'>
                
                    <div>
                        <div className="card w-full sm:w-80 md:w-96 bg-base-100 shadow-xl">
                        
                            <figure className='relative'>
                                <Image
                                    src="/assets/images/course-2.jpg"
                                    alt="popular course"
                                    width={500}
                                    height={500}
                                />
                                
                            </figure>
                            <div className='absolute grid grid-cols-2 gap-36'>
                            <button class='lg:mx-5 lg:mt-5 btn btn-sm px-12 border-none mt-2 bg-white text-black'>Intermediate</button>
                                <button className='pt-5 text-black'><CiHeart size={30}/></button>
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
                                    <h1 className='text-xl text-blue-500 font-bold'>$49.00</h1>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                
                    <div>
                        <div className="card w-full sm:w-80 md:w-96 bg-base-100 shadow-xl">
                        
                            <figure className='relative'>
                                <Image
                                    src="/assets/images/course-2.jpg"
                                    alt="popular course"
                                    width={500}
                                    height={500}
                                />
                                
                            </figure>
                            <div className='absolute grid grid-cols-2 gap-36'>
                            <button class='lg:mx-5 lg:mt-5 btn btn-sm px-12 border-none mt-2 bg-white text-black'>Intermediate</button>
                                <button className='pt-5 text-black'><CiHeart size={30}/></button>
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
                                    <h1 className='text-xl text-blue-500 font-bold'>$49.00</h1>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card w-full sm:w-80 md:w-96 bg-base-100 shadow-xl">
                        
                            <figure className='relative'>
                                <Image
                                    src="/assets/images/course-2.jpg"
                                    alt="popular course"
                                    width={500}
                                    height={500}
                                />
                                
                            </figure>
                            <div className='absolute grid grid-cols-2 gap-36'>
                            <button class='lg:mx-5 lg:mt-5 btn btn-sm px-12 border-none mt-2 bg-white text-black'>Intermediate</button>
                                <button className='pt-5 text-black'><CiHeart size={30}/></button>
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
                                    <h1 className='text-xl text-blue-500 font-bold'>$49.00</h1>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card w-full sm:w-80 md:w-96 bg-base-100 shadow-xl">
                        
                            <figure className='relative'>
                                <Image
                                    src="/assets/images/course-2.jpg"
                                    alt="popular course"
                                    width={500}
                                    height={500}
                                />
                                
                            </figure>
                            <div className='absolute grid grid-cols-2 gap-36'>
                            <button class='lg:mx-5 lg:mt-5 btn btn-sm px-12 border-none mt-2 bg-white text-black'>Intermediate</button>
                                <button className='pt-5 text-black'><CiHeart size={30}/></button>
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
                                    <h1 className='text-xl text-blue-500 font-bold'>$49.00</h1>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card w-full sm:w-80 md:w-96 bg-base-100 shadow-xl">
                        
                            <figure className='relative'>
                                <Image
                                    src="/assets/images/course-2.jpg"
                                    alt="popular course"
                                    width={500}
                                    height={500}
                                />
                                
                            </figure>
                            <div className='absolute grid grid-cols-2 gap-36'>
                            <button class='lg:mx-5 lg:mt-5 btn btn-sm px-12 border-none mt-2 bg-white text-black'>Intermediate</button>
                                <button className='pt-5 text-black'><CiHeart size={30}/></button>
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
                                    <h1 className='text-xl text-blue-500 font-bold'>$49.00</h1>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card w-full sm:w-80 md:w-96 bg-base-100 shadow-xl">
                        
                            <figure className='relative'>
                                <Image
                                    src="/assets/images/course-2.jpg"
                                    alt="popular course"
                                    width={500}
                                    height={500}
                                />
                                
                            </figure>
                            <div className='absolute grid grid-cols-2 gap-36'>
                            <button class='lg:mx-5 lg:mt-5 btn btn-sm px-12 border-none mt-2 bg-white text-black'>Intermediate</button>
                                <button className='pt-5 text-black'><CiHeart size={30}/></button>
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
                                    <h1 className='text-xl text-blue-500 font-bold'>$49.00</h1>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center lg:py-10'>
                <button className="mt-5 btn bg-blue-500 btn-primary ">Get Started Today<FaArrowRight /></button>
            </div>
        </div>
    );
};

export default Popular;