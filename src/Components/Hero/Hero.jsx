import React from "react";
import girl1 from "../../assets/images/hero/girl.png";
import girl2 from "../../assets/images/hero/girl2.png";
import man from "../../assets/images/hero/man.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: girl1,
    title: "언능 사가라!",
    description: "이거 사면 후회 안한다. 당장 사가라. 맨~",
  },
  {
    id: 2,
    img: girl2,
    title: "안살거야?",
    description: "이 불쌍한 소녀는 한 끼 식사할 돈도 없다. 이래도 안사냐?",
  },
  {
    id: 3,
    img: man,
    title: "안사면 쳐맞음",
    description: "안사가면 레프트훅 맞고 잠듬",
  },
];

function Hero() {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div
      className="relative overflow-hidden min-h-[550px] 
    sm:min-h-[650px] bg-gray-100 flex justify-center
    items-center dark:bg-gray-950 dark:text-white duration-200"
    >
      {/* background pattern */}
      <div
        className="h-[700px] w-[700px] bg-primary/40 absolute
      -top-1/2 right-0 rounded-3xl rotate-45 -z-9"
      ></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div
                  className="flex flex-col justify-center gap-4
            pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1
            relative z-10"
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {data.title}
                  </h1>
                  <p className="text-sm">{data.description}</p>
                  <div>
                    <button
                      className="bg-gradient-to-r from-primary to-secondary
                hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div className="relative z-10">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px]
                  sm:scale-100 lg:scale-100 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
