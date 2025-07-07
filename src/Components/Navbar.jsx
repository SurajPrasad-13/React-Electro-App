import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { IoClose, IoMenu } from "react-icons/io5";
import { motion } from "motion/react";


const Navbar = () => {
  const [mobileNav, setmobileNav] = useState(false);

  return (
    <motion.div initial={{y:-20,opacity:0.5}} animate={{y:0,opacity:1,transition:{duration:0.5}}} className="backdrop-blur-xl bg-white/30 sticky shadow-xl top-0 z-10 h-auto  " >
      <div
        
        className=" flex items-center  justify-between py-2 px-4 md:py-3 "
      >
        <div className="text-4xl font-semibold">
          <NavLink to="/">Electro</NavLink>
        </div>

        <div className=" hidden sm:block">
          <ul className="flex items-center justify-between sm:text-[15px] md:text-[17px] gap-1 sm:gap-3 md:gap-6 font-semibold  ">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 border-b-2 border-green-500 font-bold"
                    : "text-gray-600 hover:border-b-2 border-green-500 hover:text-black"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 border-b-2 border-green-500 font-bold"
                    : "text-gray-600 hover:border-b-2 border-green-500 hover:text-black"
                }
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 border-b-2 border-green-500 font-bold"
                    : "text-gray-600 hover:border-b-2 border-green-500 hover:text-black"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 border-b-2 border-green-500 font-bold"
                    : "text-gray-600 hover:border-b-2 border-green-500 hover:text-black"
                }
                to="/project"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 border-b-2 border-green-500 font-bold"
                    : "text-gray-600 hover:border-b-2 border-green-500 hover:text-black"
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 border-b-2 border-green-500 font-bold"
                    : "text-gray-600 hover:border-b-2 border-green-500 hover:text-black"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/joinus"
                className={({ isActive }) =>
                  `text-lg p-[6px_12px] rounded-md transition duration-300 ${
                    isActive
                      ? "bg-blue-500 text-white  "
                      : "text-black hover:text-white hover:bg-blue-500"
                  }`
                }
              >
                <button
                  className={({ isActive }) =>
                    `text-lg p-[6px_12px] rounded-md transition duration-300 ${
                      isActive
                        ? "bg-blue-500 text-white  "
                        : "text-black hover:text-white hover:bg-blue-500"
                    }`
                  }
                >
                  Join-Us
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sm:hidden ">
          <button className="text-3xl" onClick={() => setmobileNav(!mobileNav)}>
            {mobileNav ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>
        <div className={` `}>
          <ul className={` ${mobileNav?'block':'hidden'} sm:hidden flex flex-col items-center justify-between sm:text-[15px] gap-1 sm:gap-3 font-semibold`} >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 border-b-2 border-green-500 font-bold"
                    : "text-gray-600 hover:border-b-2 border-green-500 hover:text-black"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 border-b-2 border-green-500 font-bold"
                    : "text-gray-600 hover:border-b-2 border-green-500 hover:text-black"
                }
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 border-b-2 border-green-500 font-bold"
                    : "text-gray-600 hover:border-b-2 border-green-500 hover:text-black"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 border-b-2 border-green-500 font-bold"
                    : "text-gray-600 hover:border-b-2 border-green-500 hover:text-black"
                }
                to="/project"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 border-b-2 border-green-500 font-bold"
                    : "text-gray-600 hover:border-b-2 border-green-500 hover:text-black"
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 border-b-2 border-green-500 font-bold"
                    : "text-gray-600 hover:border-b-2 border-green-500 hover:text-black"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/joinus"
                className={({ isActive }) =>
                  `text-lg p-[6px_12px] rounded-md transition duration-300 ${
                    isActive
                      ? "bg-blue-500 text-white  "
                      : "text-black hover:text-white hover:bg-blue-500"
                  }`
                }
              >
                <button
                  className={({ isActive }) =>
                    `text-lg p-[6px_12px] rounded-md transition duration-300 ${
                      isActive
                        ? "bg-blue-500 text-white  "
                        : "text-black hover:text-white hover:bg-blue-500"
                    }`
                  }
                >
                  Join-Us
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
    </motion.div>
  );
};

export default Navbar;
