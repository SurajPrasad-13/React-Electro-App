import React from "react";
import ceo from "../../assets/ceo.jpg";
import OurMission from "../../assets/our-mission.webp";
import OurVision from "../../assets/ourVision.png";
import AboutUs from "../../assets/about.png";
import { motion } from "motion/react";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <>
      {/* About Us Section */}
      <div className="w-full py-10 bg-gray-100">
        <div className="flex flex-col justify-center items-center md:flex-row  m-2 p-3 gap-2 rounded">
          <motion.div
            initial={{ x: -70, opacity: 0.6 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center p-12"
          >
            <h1 className="text-6xl font-bold  inline-block px-4 py-2">
              About Us
            </h1>
            <div className="max-w-2xl mx-auto p-2">
              <p className="font-semibold">
                Welcome to BuildMax Constructions – Your trusted partner in
                building dreams since 2010. We specialize in residential and
                commercial construction projects, delivering quality, safety,
                and innovation at every step.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 70, opacity: 0.6 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img className="h-80 md:h-100" src={AboutUs} alt="" />
          </motion.div>
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-center  p-12">
        <div className="w-70 sm:w-100 md:w-150 text-center  m-5 p-5 ">
          <img className=" w-70 sm:w-90 md:w-100" src={OurMission} alt="" />
        </div>
        <div className="w-full shadow p-6 border border-black rounded">
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="list-disc pl-5 space-y-2"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => {
              return (
                <motion.li
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  key={item}
                  className="hover:bg-gray-300 p-2    rounded-lg"
                >
                  To deliver high-quality construction services with precision
                  and safety.
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>

      <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center  p-12">
        <div className="w-full shadow p-6 border border-black rounded">
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="list-disc pl-5 space-y-2"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => {
              return (
                <motion.li
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  key={item}
                  className="hover:bg-gray-300 p-2  rounded-lg"
                >
                  To deliver high-quality construction services with precision
                  and safety.
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
        <div className=" w-70 sm:w-100 md:w-150 text-center  m-5 p-5 ">
          <img className=" w-70 sm:w-90 md:w-100" src={OurVision} alt="" />
        </div>
      </div>

      {/* Our Values */}
      <div className="w-full bg-cover bg-center rounded my-12 p-8">
        <div className="text-center text-blue-500 text-3xl font-bold mb-4 hover:underline underline-offset-4">
          Our Values
        </div>
        <div className="max-w-4xl mx-auto text-black text-xl italic font-semibold border-transparent p-6">
          <ul className="space-y-4 list-disc pl-6">
            <li>
              Quality Craftsmanship: We use top-grade materials and modern
              techniques to ensure every project meets the highest standards of
              quality.
            </li>
            <li>
              Timely Delivery: We value your time. Our dedicated planning and
              execution process ensures on-time project completion, every time.
            </li>
            <li>
              Safety First: Worker and site safety is our top priority. We
              follow strict safety protocols and guidelines at every stage.
            </li>
            <li>
              Customer Satisfaction: Your satisfaction is the true measure of
              our success. We listen, plan, and deliver beyond expectations.
            </li>
            <li>
              Integrity & Transparency: We believe in honest communication, fair
              pricing, and keeping our promises – always.
            </li>
            <li>
              Innovation & Modern Solutions: From smart planning to eco-friendly
              materials, we bring innovation to every construction phase.
            </li>
          </ul>
        </div>
      </div>

      {/* Our Team */}
      <div className="w-full text-center text-blue-500 text-xl font-bold py-8">
        <h3>Our Team</h3>
        <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-6 mt-6">
          {/* CEO */}
          <div className="flex justify-center">
            <div className="card w-72 shadow-lg">
              <img
                src={ceo}
                alt="CEO"
                className="w-full h-48 object-contain rounded-t"
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold">CEO: JACK CALIS</h5>
                <p className="text-sm">
                  Leader with a vision for innovation and growth.
                </p>
              </div>
            </div>
          </div>

          {/* Managers */}
          <div className="grid grid-cols-2 gap-4 max-w-3xl">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="card w-44 mx-auto shadow">
                <img
                  src={ceo}
                  alt={`Manager ${num}`}
                  className="w-24 h-24 object-cover mx-auto mt-2 contain"
                />
                <div className="p-2">
                  <h5 className="text-sm font-semibold text-center">
                    Manager {num}
                  </h5>
                  <p className="text-xs text-center">
                    {
                      [
                        "Project expert",
                        "Execution lead",
                        "Operations head",
                        "Site manager",
                      ][num - 1]
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
