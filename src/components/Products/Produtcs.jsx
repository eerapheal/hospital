"use client";
import React, { useState, useEffect } from "react";
import data from "@/app/assets/data/portfolioData";
import Modal from "../Modal/Modal";
import Aos from "aos";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";
import Image from "next/image";

const Products = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState("false");
  const [activeID, setActiveID] = useState("null");
  const [nextItems, setNextItems] = useState(6);

  useEffect(() => {
    if (selectTab === "all") {
      setPortfolios(data);
    }

    if (selectTab === "Doctor Perspective") {
      const filteredData = data.filter(
        (item) => item.category === "Doctor Perspective"
      );
      setPortfolios(filteredData);
    }

    if (selectTab === "Patient Story") {
      const filteredData = data.filter(
        (item) => item.category === "Patient Story"
      );
      setPortfolios(filteredData);
    }
  }, [selectTab]);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  return (
    <React.Fragment>
      <div
        id="products"
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container m-auto ">
          <div className="grid grid-flow-col-12">
            <div className="mb-5 flex justify-center w-full">
              <h3 className="text-headingColor text-center text-[1.5rem] md:text-[2rem] font-semibold md:font-bold pt-10">
                Products and Usage
              </h3>
            </div>
            <div className="flex justify-center mb-14 items-center">
              <div
                data-aos="fade-zoom-in"
                data-aos-delay="20"
                data-aos-duration="1000"
                className="flex flex-col lg:flex-row rounded-[8px] justify-center items-center bg-white max-w-full sm:w-[48.5%] md:w-[49.8%] lg:w-[62.2%] relative z-[1]"
                style={{
                  width: "100%",
                  height: "100%",
                  boxShadow: "#48afde 2px 2px 2px 2px",
                }}
              >
                <figure
                  className="flex-1"
                  style={{ width: "100%", height: "100%" }}
                >
                  <Image
                    className="rounded-[8px] h-full w-full object-cover"
                    src="/images/products.jpeg"
                    alt="Products"
                    width={800}
                    height={300}
                    priority
                    sizes="(max-width: 900px) 100%, 800px"
                  />
                </figure>
                <div className="p-5 flex-1">
                  <h2 className="text-headerTextColor text-center pb-4 text-[14px] md:text-2xl font-semibold">
                    Our Products Is Use For
                  </h2>
                  <p className="text-smallTextColor text-[14px] md:text-xl font-semibold">
                    ALZHEIMER&apos;S DISEASE: Alzheimer&apos;s is a progressive
                    neurological disorder that affects memory, thinking skills,
                    and behavior. It is the most common cause of dementia among
                    older adults and currently has no cure!
                  </p>
                  <p className="text-smallTextColor py-4 text-[14px] md:text-xl font-semibold">
                    ALS (AMYOTROPHIC LATERAL SCLEROSIS): Also known as Lou
                    Gehrig&apos;s disease, ALS is a progressive neurodegenerative
                    disease that affects nerve cells in the brain and spinal
                    cord, leading to muscle weakness, paralysis, and eventually
                    respiratory failure!
                  </p>
                  <p className="text-smallTextColor text-[14px] md:text-xl font-semibold">
                    PANCREATIC CANCER: Pancreatic cancer is a type of cancer
                    that develops in the pancreas, an organ located behind the
                    stomach. It is often diagnosed at an advanced stage, making
                    it difficult to treat, and has a low survival rate!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between flex-wrap">
              <div className="flex  md:flex-row items-center justify-between">
                <div className="flex gap-3">
                  <div className="flex ">
                    <button
                      onClick={() => setSelectTab("Doctor Perspective")}
                      className="text-smallTextColor border border-solid rounded-3xl border-smallTextColor py-2 px-4 hover:bg-sky-900 hover:text-white hover:border-none"
                    >
                      Doctor Perspective
                    </button>
                  </div>
                  <div className="flex">
                    <button
                      onClick={() => setSelectTab("all")}
                      className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-3xl hover:bg-sky-900 hover:text-white hover:border-none"
                    >
                      All
                    </button>
                  </div>
                  <div className="flex">
                    <button
                      onClick={() => setSelectTab("Patient Story")}
                      className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-3xl hover:bg-sky-900 hover:text-white hover:border-none"
                    >
                      Patient Story
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 flex-wrap mt-12">
                {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
                  <div
                    key={index}
                    data-aos="fade-zoom-in"
                    data-aos-delay="20"
                    data-aos-duration="1000"
                    className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
                  >
                    <figure>
                      <Image
                        className="rounded-[8px]"
                        src={portfolio.imgUrl}
                        alt="Products"
                        width={400}
                        height={200}
                        priority
                        // sizes="(max-width: 900px) 100%, 800px"
                      />
                    </figure>
                    <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                      <div className="w-full h-full flex items-center justify-center">
                        <button
                          onClick={() => showModalHandler(portfolio.id)}
                          className="text-white bg-headingColor hover:bg-smallTextColor  py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                        >
                          See Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                {nextItems < portfolios.length && data.length > 6 && (
                  <button
                    onClick={loadMoreHandler}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                  >
                    Load more
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
      </div>
    </React.Fragment>
  );
};

export default Products;
