import React from "react";
import product1 from "../../assets/images/hero/girl.png";
import product2 from "../../assets/images/hero/girl2.png";
import { FaStar } from "react-icons/fa";
import "aos/dist/aos.css";

const ProductsData = [
  {
    id: 1,
    img: product1,
    title: "girl",
    rating: 5.0,
    author: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: product2,
    title: "girl",
    rating: 5.0,
    author: "white",
    aosDelay: "0",
  },
  {
    id: 3,
    img: product1,
    title: "girl",
    rating: 5.0,
    author: "white",
    aosDelay: "0",
  },
  {
    id: 4,
    img: product2,
    title: "girl",
    rating: 5.0,
    author: "white",
    aosDelay: "0",
  },
  {
    id: 5,
    img: product1,
    title: "girl",
    rating: 5.0,
    author: "white",
    aosDelay: "0",
  },
];

function Product() {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-fbol">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            사라사라 사라 사라 사라사라사라 사라 사라 사라사라사라 사라 사라
            사라 사라사라 사라 사라 사라사라사라 사라 사라 사라사라사라 사라
            사라 사라
          </p>
        </div>
        {/* Body section */}
        <div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center
            gap-5
           "
          >
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px]
                object-cover rounded-md "
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
