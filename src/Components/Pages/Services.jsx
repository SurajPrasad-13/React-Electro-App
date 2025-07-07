import React from "react";
import Water from "../../assets/water.jpg";
import Construction from "../../assets/construction.jpg";
import Gas from "../../assets/gas.jpg";
import Electrician from "../../assets/electrician.jpg";
import Painter from "../../assets/painter.jpg";
import Cargo from '../../assets/cargo.jpg'

const card = ' flex flex-col w-70 border rounded items-center justify-around hover:scale-[1.02] transition duration-100 hover:bg-[#eaffea] m-3'

const Services = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto place-items-center ">
      <div className={card}>
        <div className="m-5">
          <img className="h-30 w-55" src={Water} alt="" />
        </div>
        <div className="p-2">
          <h1 className="text-xl  md:text-2xl cursor-pointer font-bold">Water Services</h1>
          <p className="text-md md:text-lg font-semibold hover:text-green-800">
            We Provide Water Services For Your Work Site
          </p>
          <p>
            vel aliquid at nam quia distinctio odit libero vitae autem error
            quasi. 
          </p>
        </div>
      </div>
      <div className={card}>
        <div className="m-5">
          <img className="h-30 w-55" src={Construction} alt="" />
        </div>
        <div className="p-2">
          <h1 className="text-xl  md:text-2xl cursor-pointer font-bold">
            Construction 
          </h1>
          <p className="text-md md:text-lg font-semibold hover:text-green-800">
            We Provide Construction Services For You
          </p>
          <p>
            vel aliquid at nam quia distinctio odit libero vitae autem error
            quasi
          </p>
        </div>
      </div>
      <div className={card}>
        <div className="m-5">
          <img className="h-30 w-55" src={Gas} alt="" />
        </div>
        <div className="p-2">
          <h1 className="text-xl  md:text-2xl cursor-pointer font-bold">Gas Line Services</h1>
          <p className="text-md md:text-lg font-semibold hover:text-green-800">
            We Provide LPG Gas Services For Your Home
          </p>
          <p>
            vel aliquid at nam quia distinctio odit libero vitae autem error
            quasi
          </p>
        </div>
      </div>
      <div className={card}>
        <div className="m-5">
          <img className="h-30 w-55" src={Painter} alt="" />
        </div>
        <div className="p-2">
          <h1 className="text-xl  md:text-2xl cursor-pointer font-bold">Paint Services</h1>
          <p className="text-md md:text-lg font-semibold hover:text-green-800">
            We Provide Paint Services For Your Work Site
          </p>
          <p>
            vel aliquid at nam quia distinctio odit libero vitae autem error
            quasi
          </p>
        </div>
      </div>
      <div className={card}>
        <div className="m-5">
          <img className="h-30 w-55" src={Electrician} alt="" />
        </div>
        <div className="p-2">
          <h1 className="text-xl  md:text-2xl cursor-pointer font-bold">
            Electrician Services
          </h1>
          <p className="text-md md:text-lg font-semibold hover:text-green-800">
            We Provide Electrician Services For Your Work
          </p>
          <p>
            vel aliquid at nam quia distinctio odit libero vitae autem error
            quasi
          </p>
        </div>
      </div>
      <div className={card}>
        <div className="m-5">
          <img className="h-30 w-55" src={Cargo} alt="" />
        </div>
        <div className="p-2">
          <h1 className="text-xl  md:text-2xl cursor-pointer font-bold">
             Shipment Services
          </h1>
          <p className="text-md md:text-lg font-semibold hover:text-green-800">
            We Provide  Shipment Services For Your Work 
          </p>
          <p>
            vel aliquid at nam quia distinctio odit libero vitae autem error
            quasi
          </p>
        </div>
      </div>
      <div className={card}>
        <div className="m-5">
          <img className="h-30 w-55" src={Cargo} alt="" />
        </div>
        <div className="p-2">
          <h1 className="text-xl  md:text-2xl cursor-pointer font-bold">
             Shipment Services
          </h1>
          <p className="text-md md:text-lg font-semibold hover:text-green-800">
            We Provide  Shipment Services For Your Work 
          </p>
          <p>
            vel aliquid at nam quia distinctio odit libero vitae autem error
            quasi
          </p>
        </div>
      </div>
      <div className={card}>
        <div className="m-5">
          <img className="h-30 w-55" src={Cargo} alt="" />
        </div>
        <div className="p-2">
          <h1 className="text-xl  md:text-2xl cursor-pointer font-bold">
             Shipment Services
          </h1>
          <p className="text-md md:text-lg font-semibold hover:text-green-800">
            We Provide  Shipment Services For Your Work 
          </p>
          <p>
            vel aliquid at nam quia distinctio odit libero vitae autem error
            quasi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
