// import Carousel from "react-bootstrap/Carousel";
import construction from "../../assets/construction.jpg";
import engineer from "../../assets/electrician.jpg";
import feature1 from "../../assets/img2.jpg";
import feature2 from "../../assets/img3.jpg";
import feature3 from "../../assets/img4.jpg";
import feature4 from "../../assets/img5.jpg";
import feature5 from "../../assets/img6.jpg";
import feature6 from "../../assets/img1.jpg";
import gaspipe from "../../assets/gas.jpg";
import maps from "../../assets/map.png";
import service from "../../assets/waterServices.jpg";
import waterpipe from "../../assets/water.jpg";
import Carousel from "../Pages/Carousel";
import Video from "../../assets/video.mp4";
import "../../CSS/home.css";
import { motion } from "motion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const boxVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const serviceData = [
  {
    image: engineer,
    title: "Civil Engineer",
  },
  {
    image: construction,
    title: "Construction Incharge",
  },
  {
    image: service,
    title: "Construction Manager",
  },
  {
    image: construction,
    title: "Mechanic",
  },
  {
    image: waterpipe,
    title: "Water Service",
  },
  {
    image: gaspipe,
    title: "Gas Supplier",
  },
];

const sliderData = [
  {
    img: "../../../public/waterServices.jpg",
  },
  {
    img: "../../../public/construction.jpg",
  },
  {
    img: "../../../public/electrician.jpg",
  },
  {
    img: "../../../public/waterServices.jpg",
  },
  {
    img: "../../../public/construction.jpg",
  },
  {
    img: "../../../public/electrician.jpg",
  },
  {
    img: "../../../public/waterServices.jpg",
  },
  {
    img: "../../../public/construction.jpg",
  },
  {
    img: "../../../public/electrician.jpg",
  },
  {
    img: "../../../public/waterServices.jpg",
  },
  {
    img: "../../../public/construction.jpg",
  },
  {
    img: "../../../public/electrician.jpg",
  },
  {
    img: "../../../public/waterServices.jpg",
  },
  {
    img: "../../../public/construction.jpg",
  },
  {
    img: "../../../public/electrician.jpg",
  },
  {
    img: "../../../public/waterServices.jpg",
  },
  {
    img: "../../../public/construction.jpg",
  },
  {
    img: "../../../public/electrician.jpg",
  },
];

function Home() {
  const settings1 = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  //settings for previous arrow
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  //settings for next arrow
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  const slides = [
    "https://images.livemint.com/img/2022/06/20/600x338/labour1--621x414_1655737046895.JPG",
    "https://5.imimg.com/data5/SELLER/Default/2024/6/429178565/EC/FF/DY/76226430/electrician-services.jpeg",
    "https://www.bls.gov/careeroutlook/2017/images/water_cover.jpg",
  ];
  return (
    <div className="h-auto bg-amber-50 ">
      {/* Video on Home Page */}
      <div className="h-auto  flex flex-wrap items-end justify-around gap-5 ">
        <div className=" w-140 sm:w-150 md:w-160 lg:w-170 ">
          <video
            className="w-200 h-[70vh]"
            src={Video}
            loop
            controls
            autoPlay
            muted
          ></video>
        </div>
        {/* First Slide with Arrow buttons */}
        <div className="">
          <div className=" my-7 w-60 md:w-80  m-auto ">
            <Slider {...settings2}>
              {slides.map((s) => (
                <img src={s} alt="" />
              ))}{" "}
            </Slider>
          </div>
          {/* Automatic slide */}
          <div className="my-7 w-80 md:w-90  m-auto ">
            <div className="overflow-hidden">
              <Slider {...settings1}>
                {sliderData.map((item, i) => (
                  <div className="second-slider flex w-max gap-5 mx-5 items-center">
                    <img
                      src={item.img}
                      alt=""
                      className="w-[200px] h-[80px] rounded-[10px] object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-2 p-5 bg-blue-200 mt-8">
        {serviceData.map((item, i) => {
          return (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-[150px] hover:shadow-2xl  transition ease-in-out duration-300 rounded-2xl text-center font-bold text-sm p-2 flex flex-col justify-center items-center "
            >
              <img
                src={item.image}
                className="w-[70px] h-[70px] rounded-full mb-2"
              />
              <motion.div
                variant={boxVariants}
                initial={boxVariants.hidden}
                animate={boxVariants.visible}
              >
                {item.title}{" "}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-[1200px] mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[feature1, feature2, feature3, feature4, feature5, feature6].map(
          (feature, i) => (
            <motion.div
              initial={{ y: 40, scale: 0.8 }}
              whileInView={{ y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              key={i}
              className="w-full min-h-[300px] border p-5 bg-white flex flex-col items-center text-center rounded-lg shadow-md  hover:shadow-2xl"
            >
              <img
                src={feature}
                alt={`feature${i + 1}`}
                className="w-[60px] h-[60px] rounded object-contain mb-4"
              />
              <h1 className="text-base font-bold mb-2">
                Jobwork & Production Management
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, tenetur sunt magni quaerat corporis odio ipsa
                delectus? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Saepe, accusamus.{" "}
              </p>
            </motion.div>
          )
        )}
      </div>

      <div className="text-center py-8 bg-[#e6f6fd] px-4">
        <h2 className="text-xl font-medium">
          Whatever Your Textile Business Is,{" "}
          <span className="text-[#2b9bd6] font-bold">Electro App</span> Can
          Surely Help You To Automate It
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <div className="w-[200px] h-[120px] bg-white rounded-xl shadow-md p-3 flex flex-col items-center justify-center text-center hover:scale-105 hover:bg-[#cae9fd] transition">
            <img
              src={engineer}
              className="w-[50px] h-[50px] rounded-full mb-2"
            />
            <span className="text-sm font-semibold text-gray-800">
              Textile Manufacturing
              <br />
              Businesses
            </span>
          </div>
          <div className="w-[200px] h-[120px] bg-white rounded-xl shadow-md p-3 flex flex-col items-center justify-center text-center hover:scale-105 hover:bg-[#cae9fd] transition">
            <img
              src={gaspipe}
              className="w-[50px] h-[50px] rounded-full mb-2"
            />
            <span className="text-sm font-semibold text-gray-800">
              Textile Wholesale
              <br />
              Businesses
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {[
            waterpipe,
            construction,
            engineer,
            feature1,
            feature2,
            feature4,
            feature4,
            feature5,
            feature6,
            engineer,
            gaspipe,
            waterpipe,
            construction,
            service,
          ].map((imgSrc, idx) => (
            <div
              key={idx}
              className="w-[200px] h-[120px] bg-white rounded-xl shadow-md p-3 flex flex-col items-center justify-center text-center hover:scale-105 hover:bg-[#cae9fd] transition"
            >
              <img
                src={imgSrc}
                className="w-[50px] h-[50px] rounded-full mb-2"
              />
              <span className="text-sm font-semibold text-gray-800">
                category Titles
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-wrap items-center justify-around  text-center rounded-md">
        <div className="h-[400px]">
          <img src={maps} className="w-[350px] h-[400px] p-10" />
        </div>
        <div className="h-auto my-10 md:my-0 ">
          <h2 className="text-xl font-bold">
            The Preferred Choice of Textile Businesses
          </h2>
          <span className="text-[#2e8bc8] font-bold block mt-2">
            We are growing and so are our clients :
          </span>
          <div className="grid place-items-center grid-cols-2 sm:grid-cols-4 h-auto gap-2 mt-4">
            {[
              "25+ cities in all over the world",
              "2M+ Transaction Done",
              "100k Organizations Registered",
              "250K+ Stackholder Registered",
            ].map((item, i) => (
              <div
                key={i}
                className="border w-30 shadow-md text-center italic text-sm p-5 hover:scale-105 transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-115 px-4 flex flex-wrap justify-evenly items-center ">
        {[840944, 529867, 1839921, 142598].map((val, i) => (
          <div
            key={i}
            className="flex flex-col justify-evenly items-center text-center shadow-md hover:scale-105 border transition w-40 md:w-50 md:h-50 h-40 p-8 "
          >
            <img src={feature1} className="w-[50px] mb-3" />
            <span className="text-sm font-medium">
              {val.toLocaleString()}+<br />
              {
                [
                  "Job Slips Created",
                  "Sales Orders Created",
                  "Delivery Challans ",
                  "Reminders Generated",
                ][i]
              }
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
