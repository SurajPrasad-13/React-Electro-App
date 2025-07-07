import React from "react";
import One from "../../assets/one.png";
import Two from "../../assets/two.png";
import Four from "../../assets/four.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Team2 from "../../assets/team2.png";
import Team3 from "../../assets/team3.png";
import Team4 from "../../assets/team4.png";
import Water from "../../assets/water.jpg";
import Construction from "../../assets/construction.jpg";
import Gas from "../../assets/gas.jpg";
import Electrician from "../../assets/electrician.jpg";
import Painter from "../../assets/painter.jpg";
import Cargo from "../../assets/cargo.jpg";
import { motion } from "motion/react";

const workSliderData = [
  {
    img: Construction, title: "We Hire Constructors"
  },
  {
    img: Gas, title: "We Hire CNG Operator"
  },
  {
    img: Cargo, title: "We Hire Cargo Drivers"
  },
  {
    img: Painter, title: "We Hire Paint Workers"
  },
  {
    img: Electrician, title: "We Hire Electricians"
  },
  {
    img: Water, title: "We Hire Water Engineer"
  }
];
const JoinUs = () => {
  return (
    <div className="w-full py-3 h-full bg-cover bg-center ">
      <div
        style={{
          backgroundImage: `url('../../../public/backgroundImage.jpg')`,
        }}
        className="h-[91vh] bg-cover bg-center py-22"
      >
        <motion.div
          initial={{ y: 80, scale: 0.9 }}
          whileInView={{ y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className=" text-center text-4xl md:text-6xl font-extrabold p-5
        "
          >
            OUR PEOPLE ARE <br />
            OUR GREATEST ASSETS.
          </h1>
          <h1
            className=" text-center text-xl md:text-3xl font-semibold p-5
        "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            quidem itaque iure.
          </h1>
        </motion.div>
      </div>
      <div className=" ">
        <div className="text-left text-xl md:text-3xl font-semibold py-15">
          We Celebrate All Stuff With Bunch Of Happiness
        </div>
        <div className="text-xl">Glimpse</div>
        <div className="flex flex-col md:flex-row mx-10 items-center justify-between">
          <div className="flex overflow-hidden gap-4 items-center ">
            <img
              src={One}
              alt=""
              className="h-40 md:h-55 hover:scale-[1.02] hover:shadow-2xl transition duration-100 "
            />
            <img
              src={Two}
              alt=""
              className="h-40 md:h-55 hover:scale-[1.02] hover:shadow-2xl transition duration-100"
            />
            <img
              src={Four}
              alt=""
              className="h-40 md:h-55 hover:scale-[1.02] hover:shadow-2xl transition duration-100"
            />
          </div>
          <div className="text-4xl mx-10 ">
            <button className="p-2 md:p-5 border-2 border-white mx-2 hover:bg-blue-500 rounded-full hover:text-white transition duration-400">
              <FaLongArrowAltLeft />
            </button>
            <button className="p-2 md:p-5 border-2 border-white mx-2 hover:bg-blue-500 rounded-full hover:text-white transition duration-400">
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
        <div className="my-10">
          <h1 className="text-3xl m-3 font-semibold">Our Team</h1>
          <div className="flex gap-5 items-center justify-around flex-wrap">
            <div>
              <img src={Team2} alt="founder" className="h-40 md:h-70" />
              <h2 className="text-2xl">Vikas Kumar</h2>
              <h2 className="text-xl">Founder</h2>
            </div>
            <div>
              <img src={Team3} alt="founder" className="h-40 md:h-70" />
              <h2 className="text-2xl">Vikas Kumar</h2>
              <h2 className="text-xl">Founder</h2>
            </div>
            <div>
              <img src={Team4} alt="founder" className="h-40 md:h-70" />
              <h2 className="text-2xl">Vikas Kumar</h2>
              <h2 className="text-xl">Founder</h2>
            </div>
          </div>
        </div>

        <div className="my-30">
          <h1 className="text-3xl font-semibold my-5">Work with Us</h1>
          <h2 className=" cursor-pointer flex items-center gap-2 text-2xl font-semibold">
            We Are Providing Jobs for <FaLongArrowAltRight />
          </h2>
          {/* Cards for Provided work */}
          <div className="grid grid-cols-1 text-center my-5  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto place-items-center  ">
            {workSliderData.map((item) => {
              return (
                <motion.div
                  initial={{ y: 20, scale: 0.9 }}
                  whileInView={{ y: 0, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className=" flex flex-col w-70 border rounded items-center hover:shadow-2xl justify-around hover:scale-[1.02] transition duration-100 hover:bg-[#eaffea] m-3"
                >
                  <div className=" w-70 rounded-t border">
                    <img
                      className="h-35 rounded-t w-full object-cover"
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div className="p-2">
                    <h1 className="text-xl   cursor-pointer font-bold">
                      {item.title}
                    </h1>
                    <p className="text-sm md:text-md  hover:text-green-800">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
