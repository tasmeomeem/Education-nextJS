import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
const Footer = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 pt-10">
            <div className="">
                <div className="p-10">
                    <h1 className="text-3xl font-bold">EduHome</h1>
                    <h1>It is a long established fact that a reader will be distracted<br/> by the readable content of a page when looking at its layout. <br/>The point of using Lorem Ipsum.</h1>
                </div>
                <div className="text-4xl px-10 pt-5 flex gap-5">
                    <FaFacebook className="bg-gray-100 rounded-md"/>
                    <FaTwitter className="bg-gray-100 rounded-md"/>
                    <FaLinkedin className="bg-gray-100 rounded-md" />
                </div>
            </div>

            <div>
                <h1 className="text-3xl font-bold pt-10">Explore </h1>
                <div>
                     <div className="flex gap-2">
                        <FaArrowRight className="pt-2"/>
                        <a href="#">About US</a>
                     </div>
                     <div className="flex gap-2">
                        <FaArrowRight className="pt-2" />
                        <a href="#">Upcomming Event</a>
                     </div>
                     <div className="flex gap-2">
                        <FaArrowRight className="pt-2"/>
                        <a href="#">Blog & News</a>
                     </div>
                     <div className="flex gap-2">
                        <FaArrowRight className="pt-2"/>
                        <a href="#">FAQ Question</a>
                     </div>
                     <div className="flex gap-2">
                        <FaArrowRight className="pt-2" />
                        <a href="#">Testimonial</a>
                     </div>
                     <div className="flex gap-2">
                        <FaArrowRight className="pt-2"/>
                        <a href="#">Privacy Policy</a>
                     </div>
                </div>
            </div>

            <div>
                <h1 className="text-3xl font-bold pt-10">Useful Links </h1>
                <div>
                     <div className="flex gap-2">
                        <FaArrowRight className="pt-2"/>
                        <a href="#">About US</a>
                     </div>
                     <div className="flex gap-2">
                        <FaArrowRight className="pt-2" />
                        <a href="#">Upcomming Event</a>
                     </div>
                     <div className="flex gap-2">
                        <FaArrowRight className="pt-2"/>
                        <a href="#">Blog & News</a>
                     </div>
                     <div className="flex gap-2">
                        <FaArrowRight className="pt-2"/>
                        <a href="#">FAQ Question</a>
                     </div>
                     <div className="flex gap-2">
                        <FaArrowRight className="pt-2" />
                        <a href="#">Testimonial</a>
                     </div>
                     <div className="flex gap-2">
                        <FaArrowRight className="pt-2"/>
                        <a href="#">Privacy Policy</a>
                     </div>
                </div>
            </div>

            <div>
                <h1 className="text-3xl font-bold pt-10">Contact Information </h1>
                <div>
                     <div className="flex gap-2">
                        <FaLocationDot className="pt-2"/>
                        <a href="#">275 Quadra Street Victoria Road, New York</a>
                     </div>
                     <div className="flex gap-2">
                        <FaPhoneAlt className="pt-2"/>
                        <a href="#">+ 1 (364) 765-7839</a>
                     </div>
                     <div className="flex gap-2">
                        <FaPhoneAlt className="pt-2"/>
                        <a href="#">+ 1 (364) 765-7839</a>
                     </div>
                     <div className="flex gap-2">
                        <FaArrowRight className="pt-2"/>
                        <a href="#">FAQ Question</a>
                     </div>
                     <div className="flex gap-2">
                        <FaArrowRight className="pt-2"/>
                        <a href="#">Testimonial</a>
                     </div>
                     <div className="flex gap-2">
                        <MdOutlineMail className="pt-2"/>
                        <a href="#">contact@eduhome.com</a>
                     </div>
                </div>
            </div>

        </div>

    );
};

export default Footer;