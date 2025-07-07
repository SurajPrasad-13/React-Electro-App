import React, { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Carousel = ({ children: slides }) => {
  const [current, setcurrent] = useState(0);
  let previous = () =>
    setcurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  let next = () =>  setcurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  return (
    <div className="overflow-hidden relative">
      <div className="flex transition ease-in-out duration-400" style={{}}>{slides} </div>
      <div className="absolute inset-0 flex items-center justify-between p-4  text-2xl">
        <button onClick={previous} className="p-1 rounded-full shadow text-white  hover:bg-black">
          <BsFillArrowLeftCircleFill />
        </button>

        <button onClick={next} className="p-1 rounded-full shadow  text-white  hover:bg-black">
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
