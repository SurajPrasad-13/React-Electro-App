import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import { motion } from "motion/react";

const Project = () => {
  const projectData = {
    image: [Work1,Work2,Work3,Work1,Work2,Work3,Work1,Work2,Work3],
    title: "JW Marriot Bonnet Creek",
    location: "Delhi,India",
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url('../../../public/background4.jpg')` }}
        className="h-[91vh] bg-cover bg-center py-22 mb-10"
      >
        <motion.div
          initial={{ y: 90, opacity: 0.7 }}
          animate={{ y: 0, opacity: 1.4 }}
          transition={{ duration: 1 }}
          className=" text-white text-center h-25 my-5 text-5xl md:text-7xl font-bold pt-10"
        >
          We Building the future of the construction <br />
          industry, one project at a time
        </motion.div>
      </div>
      <div>
        <div className=" mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[1,2,3,4,5,6,7,8,9].map((item,i)=>{
            return <motion.div initial={{y:30,scale:0.8}} whileInView={{y:0,scale:1}} transition={{duration:0.8}} key={i}>
            <img className="h-50 w-90 rounded-t-xl" src={projectData.image[i]} alt="" />
            <div className=" w-90 rounded-b-xl font-semibold hover:bg-green-800 p-2  hover:text-white transition duration-300">
              <h3>{projectData.title} </h3>
              <h4>Location:{projectData.location} </h4>
            </div>
          </motion.div>
          })}
      </div>

        <div className="py-20">
          <motion.h1
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-medium my-4"
          >
            Ready to work together?
          </motion.h1>
          <h2 className=" leading-6 my-5">
            Whether you have a project in mind and you’re looking for a reliable
            construction partner or you’re <br /> looking to take the next step
            in your career, we want to hear from you!
          </h2>
          <div>
            <button className="text-white transition duration-300 hover:shadow-2xl shadow-green-500 bg-green-800 px-9 py-2 m-4  ">
              BUILD A PROJECT WITH US
            </button>
            <button className="transition duration-300 hover:shadow-2xl shadow-green-500 text-green-800  border-2 border-green-800 px-9 py-2 mx-4 hover:bg-green-800 hover:text-white">
              BUILD A CAREER WITH US
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
