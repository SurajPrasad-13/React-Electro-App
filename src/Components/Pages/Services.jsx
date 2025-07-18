import React from "react";
import Water from "../../assets/water.jpg";
import Construction from "../../assets/construction.jpg";
import Gas from "../../assets/gas.jpg";
import Electrician from "../../assets/electrician.jpg";
import Painter from "../../assets/painter.jpg";
import Cargo from "../../assets/cargo.jpg";
import { easeIn, easeInOut, easeOut, motion } from "motion/react";

const card =
  " flex flex-col w-50 md:w-70 border rounded-xl items-center hover:shadow-2xl justify-center hover:scale-[1.02] transition duration-100 hover:bg-[#eaffea] m-3 hover:bg-green-800 hover:text-white hover:transition hover:duration-500";

const ServiceCards = [
  {
    img: Water,
    title: "Water Services",
    price: "Starting 5000/hour",
  },
  {
    img: Construction,
    title: "Water Services",
    price: "Starting 5000/hour",
  },
  {
    img: Gas,
    title: "Gas Services",
    price: "Starting 5000/hour",
  },
  {
    img: Painter,
    title: "Painter Services",
    price: "Starting 5000/hour",
  },
  {
    img: Electrician,
    title: "Electrician Services",
    price: "Starting 5000/hour",
  },
  {
    img: Cargo,
    title: "Cargo Services",
    price: "Starting 5000/hour",
  },
  {
    img: Gas,
    title: "Gas Services",
    price: "Starting 5000/hour",
  },
  {
    img: Water,
    title: "Water Services",
    price: "Starting 5000/hour",
  },
];

const Services = () => {
  return (
    <>
      <div className="h-[30vh] py-22 mb-10">
        <motion.div
          initial={{ y: 90, opacity: 0.7 }}
          animate={{ y: 0, opacity: 1.4 }}
          transition={{ duration: 0.7 }}
          className="text-center h-25 my-5 text-5xl md:text-7xl font-bold "
        >
          Our Services
        </motion.div>
      </div>
      <div className="grid grid-cols-2 text-center my-5   md:grid-cols-3 lg:grid-cols-4 mx-auto place-items-center ">
        {ServiceCards.map((item, id) => {
          return (
            <motion.div
              initial={{ y: 20, scale: 0.9 }}
              whileInView={{ y: 0, scale: 1 }}
              transition={{ duration: 0.6 ,ease:easeOut }}
              className={card}
            >
              <div className=" w-50 md:w-70 rounded-t-xl">
                <img
                  className="h-25 md:h-35 rounded-t-xl w-full object-cover"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="p-1">
                <h1 className="md:text-xl   cursor-pointer font-bold">
                  {item.title}{" "}
                </h1>
                <p className="text-sm md:font-medium md:text-md ">
                  {item.price}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Services;
