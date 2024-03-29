"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";

const HomeCard = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <React.Fragment>
      <div className="md:pt-15">
        <div className="container m-auto">
          <div className="grid grid-flow-col-12">
            <div className="bg-red flex flex-col  pt-10 justify-center md:flex-row col-span-12 md-col-span-5 md:bg-transparent">
              <div className="container m-auto bg-white md:bg-transparent">
                <div
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  className="sm:pl-5 lg:pl-10 pl-0 py-20 px-2 sm:px-0 text-center sm:text-start"
                >
                  <h1
                    style={{
                      fontFamily: "Arial, Helvetica, sans-serif",
                      background:
                        "linear-gradient(to right, #87ceeb, #1e90ff, #00bfff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="text-5xl lg:text-7xl mt-5 pb-5 md:mt-3"
                  >
                    CocamedLab, A non-profit pharmaceutical company
                  </h1>
                  <h3
                    style={{
                      fontFamily: "Arial, Helvetica, sans-serif",
                      background:
                        "linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className="lg:pr-[90px] text-xl md:text-2xl lg:text-4xl text-semibold"
                  >
                    That provides an innovative medical solutions through the
                    utilization of our cutting-edge products developed at Herbal
                    Farms.
                  </h3>
                  <Link
                    href="#contact"
                    alt="contact"
                    className="inline-block cursor-pointer bg-[#47aede] py-2 px-5 font-bold mt-8 uppercase transition-all duration-400 ease-in-out rounded-xl text-white md:py-2 md:mt-10 lg:py-3 lg:px-8 hover:bg-[#223740] hover:show-lg transform hover:translate-y-1"
                  >
                    <i className="ri-mail-line mr-1"></i>Contact
                  </Link>
                  <Link
                    href="#products"
                    alt="product page"
                    className="ml-10 cursor-pointer inline-block bg-[#223740] py-2 px-5 font-bold mt-8 uppercase transition-all duration-400 ease-in-out rounded-xl text-white md:py-2 md:mt-10 lg:py-3 lg:px-8 hover:bg-[#47aede] hover:show-lg transform hover:translate-y-1"
                  >
                    Products
                  </Link>
                </div>
              </div>
              <div className="col-span-12 pt-[50px] bg-transparent md:pt-[130px] md-col-span-7">
                <div
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  className="container m-auto flex justify-center items-center"
                >
                  <Image
                    src="/images/lab.png"
                    decoding="async"
                    alt="profile pic"
                    width={600}
                    height={500}
                    className="h-full rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeCard;
