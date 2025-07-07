import { motion } from "motion/react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <div className=" ">
      <div className="flex mx-2 md:mx-10 items-center justify-between overflow-hidden">
        <motion.div initial={{x:-90,opacity:0.6}} transition={{duration:1}} whileInView={{x:0,opacity:1}}>
          <iframe
            className="hover:border h-45 sm:h-50 md:h-60 w-70 md:w-130"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.9416564321723!2d75.7293788742492!3d26.905346676651504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3fe5bb55f51%3A0x28ef04348dea4ee9!2sSudo%20Techlabs!5e0!3m2!1sen!2sin!4v1751610069087!5m2!1sen!2sin"
            // width="550"
            height="250"
            loading="lazy"
          ></iframe>
        </motion.div>
        <motion.div initial={{x:90,opacity:0.6}} transition={{duration:0.6}} whileInView={{x:0,opacity:1}} className="text-right text-4xl md:text-6xl font-semibold">
          Visit Our<br />  New Branch
        </motion.div>
      </div>

      <div className=" relative ">
        <div className="my-2 flex flex-wrap items-center p-5 pb-10  justify-between bg-gray-950 text-slate-300  ">
          <div>
            <div className=" w-full md:w-50 text-xl hover:text-white font-semibold  ">
              Our Branches in India, You Can Visit.
            </div>
            <hr className="rounded-xl border-[1.5px] border-red-600 font-bold w-[40%]" />
            <p className="hover:text-white">Corporate Address</p>
            <p className="font-bold text-white">Sudo Techlabs</p>
            <p className="hover:text-white">M-12,Chitrakoot, Vaishali Nagar,</p>
            <p className="hover:text-white">Jaipur-302014</p>
            <p className=" font-bold mt-3">
              <button className="hover:text-black hover:bg-white transition duration-200 border-2  p-1 px-6 rounded-md cursor-pointer ">
                Contact Us
              </button>
            </p>
          </div>
          <div className=" rounded py-5 transition duration-100 delay-100">
            <div>
              <p className="flex justify-start items-center gap-2 hover:text-white cursor-pointer">
                For Business Orders
              </p>
              <p className="flex justify-start  items-center gap-2 hover:text-white">
                <FaPhoneAlt /> +91 98765 43213
              </p>
              <p className="flex justify-start  items-center gap-2 hover:text-white">
                <MdEmail /> constructionServices32@gmail.com
              </p>
            </div>
            <div className="mt-3">
              <p className="hover:text-white">For InterNational Sales</p>
              <p className="flex justify-start  items-center gap-2 hover:text-white">
                <MdEmail /> constructionServices32@gmail.com
              </p>
            </div>
            <p className=" font-bold mt-3">
              <button className="hover:text-black hover:bg-white transition duration-200 border-2 p-1 px-5 rounded-md cursor-pointer">
                Corporate Enquiry
              </button>
            </p>
          </div>

          <div>
            <p>For Consumer Camplaints, Contact:</p>
            <p>Customer Service Executive</p>
            <p className="flex justify-start  items-center gap-2 hover:text-white">
              <FaPhoneAlt className="hover:scale-120 hover:rotate-20" /> +91 98765 43213
            </p>
            <p className="flex justify-start  items-center gap-2 mb-5 hover:text-white">
              <MdEmail /> constructionServices32@gmail.com
            </p>
            <p> For Escalations:</p>
            <p className="flex justify-start  items-center gap-2  hover:text-white ">
              <MdEmail /> constructionServices32@gmail.com
            </p>
            <hr className="rounded-xl border-[1.5px] border-red-600 my-3 font-bold w-[70%]" />
            <p className="uppercase font-semibold">Follow us</p>
            <div className="flex items-center justify-between w-[70%]">
              <FaTwitter className="cursor-pointer hover:text-white hover:scale-120" />
              <FaFacebookSquare className="cursor-pointer hover:text-white hover:scale-120" />
              <FaInstagram className="cursor-pointer hover:text-white hover:scale-120" />
              <FaWhatsapp className="cursor-pointer hover:text-white hover:scale-120" />
              <FaLinkedinIn className="cursor-pointer hover:text-white hover:scale-120" />
              <FaYoutube className="cursor-pointer hover:text-white hover:scale-120" />
            </div>
          </div>
        </div>
        <div className="leading-8 mt-15 font-semibold text-white flex items-center justify-center gap-2 w-full absolute bottom-0 pb-2">
          <FaRegCopyright /> <p>2025 All rights are reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
