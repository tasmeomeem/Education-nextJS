import { FaBriefcase } from "react-icons/fa";
import { IoFileTrayFull } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { IoLayersOutline } from "react-icons/io5";
import { CiLaptop } from "react-icons/ci";
import { TfiThumbUp } from "react-icons/tfi";
import { IoHeadsetOutline } from "react-icons/io5";
import { IoServerOutline } from "react-icons/io5";
import { IoMedkitOutline } from "react-icons/io5";
const Category = () => {
    return (
        <div className="container mx-auto px-10">
             <div className="text-center">
                <h1 className="text-blue-500 pt-10 font-bold text-xl">COURSE CATEGORIES</h1>
                <h1 className="text-blue text-4xl font-bold">Popular Topics To Learn</h1>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-10 pt-10">
                <div className="card w-96 bg-blue-200 shadow-x5">
                    <div className="card-body bg-slate-100 border rounded-md">
                        
                        <div className="flex gap-4">
                            <FaBriefcase size={30}/>
                            <h1>Personal Development</h1>
                        </div>
                        <h1 className="pl-9">39 Course</h1>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body bg-slate-100 border rounded-md">
                        
                        <div className="flex gap-4">
                            <IoFileTrayFull size={30}/>
                            <h1>Personal Development</h1>
                        </div>
                        <h1 className="pl-9">39 Course</h1>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body bg-slate-100 border rounded-md">
                        
                        <div className="flex gap-4">
                            <IoIosColorPalette size={30}/>
                            <h1>Personal Development</h1>
                        </div>
                        <h1 className="pl-9">39 Course</h1>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body bg-slate-100 border rounded-md">
                        
                        <div className="flex gap-4">
                            <IoLayersOutline size={30}/>
                            <h1>Personal Development</h1>
                        </div>
                        <h1 className="pl-9">39 Course</h1>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body bg-slate-100 border rounded-md">
                        
                        <div className="flex gap-4">
                            <CiLaptop size={30}/>
                            <h1>Personal Development</h1>
                        </div>
                        <h1 className="pl-9">39 Course</h1>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body bg-slate-100 border rounded-md">
                        
                        <div className="flex gap-4">
                            <TfiThumbUp size={30}/>
                            <h1>Personal Development</h1>
                        </div>
                        <h1 className="pl-9">39 Course</h1>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body bg-slate-100 border rounded-md">
                        
                        <div className="flex gap-4">
                            <IoHeadsetOutline size={30}/>
                            <h1>Personal Development</h1>
                        </div>
                        <h1 className="pl-9">39 Course</h1>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body bg-slate-100 border rounded-md">
                        
                        <div className="flex gap-4">
                            <IoServerOutline size={30}/>
                            <h1>Personal Development</h1>
                        </div>
                        <h1 className="pl-9">39 Course</h1>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body bg-slate-100 border rounded-md">
                        
                        <div className="flex gap-4">
                            <IoMedkitOutline size={30}/>
                            <h1>Personal Development</h1>
                        </div>
                        <h1 className="pl-9">39 Course</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;