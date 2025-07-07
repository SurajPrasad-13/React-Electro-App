import React from "react";

import { FaCommentAlt } from "react-icons/fa";
import user1 from "../../assets/blog-author-img1.png";
import user2 from "../../assets/blog-author-img2.png";
import user3 from "../../assets/blog-author-img3.png";
import blog1 from "../../assets/blog-img-1.jpg";
import blog2 from "../../assets/blog-img-2.jpg";
import blog3 from "../../assets/blog-img-3.jpg";
import { motion } from "motion/react";

const blogData = [
  { img: blog1, author: user1, name: "Mich Jhon" },
  { img: blog2, author: user2, name: "Mich Jhon" },
  { img: blog3, author: user3, name: "Mich Jhon" },
  { img: blog1, author: user1, name: "Mich Jhon" },
  { img: blog1, author: user1, name: "Mich Jhon" },
  { img: blog1, author: user1, name: "Mich Jhon" },
];

function Blogs() {
  return (
    <div className="container mx-auto px-4 my-10">
      <div
        style={{ backgroundImage: "url(../../../public/background6.jpg)" }}
        className="h-100 flex items-center justify-center  "
      >
        <motion.h2
          initial={{ y: 70, opacity: 0.7 }}
          animate={{ y: 0, opacity: 1.4 }}
          transition={{ duration: 1 }}
          className="text-center font-bold text-7xl mb-10"
        >
          Blogs and Articles
        </motion.h2>
      </div>

      <div className="flex flex-wrap mx-2 my-5">
        {blogData.map((item, index) => (
          <motion.div
            initial={{ y: 30, scale: 0.95 }}
            whileInView={{ y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            key={index}
            className="w-full hover:shadow-2xl sm:w-1/2 lg:w-1/3 px-2 mb-6"
          >
            <div className="hover:translate-y-[-8px] transition duration-200">
              <img
                src={item.img}
                alt="blog"
                className="w-full object-cover rounded-md h-40 "
              />
              <div className="mt-3 flex-grow flex flex-col justify-between">
                <h6 className="font-semibold text-[0.95rem]">
                  Lorem ipsum dolor site nec amet consec adipiscing elite.
                </h6>
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={item.author}
                      alt="author"
                      className="w-[30px] h-[30px] rounded-full object-cover"
                    />
                    <small>{item.name}</small>
                  </div>
                  <div className="text-gray-500 text-xs flex items-center gap-1">
                    <FaCommentAlt />
                    <small>3</small>
                  </div>
                </div>
                <p className="text-[0.75rem] text-gray-600 mt-2">
                  Lorem Ipsum has been the industry's standard dummy text...
                </p>
                <button className="mt-3 border transition ease-in-out duration-300 text-green-800 hover:text-white font-bold py-2 px-3 text-xs rounded hover:bg-green-800">
                  READ MORE
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
