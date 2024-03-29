"use client";
import "remixicon/fonts/remixicon.css";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Image from "next/image";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <React.Fragment>
      <div
        id="about"
        className="about"
        style={{
          overflow: "hidden",
        }}
      >
        <div className="container m-auto pt-10">
          <div className="grid grid-flow-col-12">
            <div className="text-center">
              <p className="lg:max-w-[1000px] p-1 lg:mx-auto text-smallTextColor font[500] text[16px] md:text-2xl lg:text-2xl loading-7">
                Welcome to CocamedLab, a non-profit medical pharmaceutical
                company dedicated to providing innovative medical solutions. Our
                mission is to empower individuals facing health challenges
                through the utilization of our cutting-edge products developed
                at Habar Farm. At CocamedLab, we believe in leveraging science
                and technology to improve the quality of life for all. Join us
                on our journey to make a meaningful difference in healthcare.
              </p>
            </div>
            <div className="flex flex-col justify-center sm:py-12">
              <div className="w-full overFlow-hidden py-3 px-2 sm:max-w-xl md:max-w-4xl :max-w-6xl sm:mx-auto sm:px-0">
                <div className="relative text-gray-700 antialiased text-sm font-semibold">
                  {/* {===================== middle line} */}
                  <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform"></div>
                  {/* left */}
                  <div className="mt-6 sm:mt-0 sm:mb-12">
                    <div className="flex items-center flex-col sm:flex-row">
                      <div className="flex justify-start w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pr-8">
                          <div
                            data-aos="fade-left"
                            data-aos-duration="1200"
                            className="bg-white p-4 rounded shadow  group hover:bg-primaryColor cursor-pointer group-hover:font-[600] text-l ease-in duration-150"
                          >
                            <h3 className="text-primaryColor uppercase font-[600] mb-3 group-hover:text-white group-hover:font-[600] text-lx">
                              Mission
                            </h3>
                            <p className="text-[14px]  text-smallTextColor group-hover:text-white group-hover:font-[500] loading-7">
                              Our mission is to relentlessly pursue scientific
                              advancements and collaborate with experts to
                              create effective treatments and therapies for
                              Alzheimer&apos;s disease, ALS, pancreatic cancer, and
                              other gold standard diseases. By leveraging
                              cutting-edge research and technology, we aim to
                              provide hope and relief to individuals and
                              families affected by these devastating conditions.
                              We are committed to improving patient outcomes,
                              advancing medical knowledge, and ultimately
                              contributing to a world free from the burden of
                              these diseases
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform 
                                  -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                      >
                        <figure className="">
                          <Image
                            className=""
                            src="/images/front-end.png"
                            alt="lineball"
                            width={20}
                            height={20}
                            priority
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                  {/* right */}
                  <div className="mt-6 sm:mt-0 sm:mb-12">
                    <div className="flex items-center flex-col sm:flex-row">
                      <div className="flex justify-end w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pl-8">
                          <div
                            data-aos="fade-right"
                            data-aos-duration="1300"
                            data-aos-delay="50"
                            className="bg-white p-4 rounded shadow  group hover:bg-primaryColor cursor-pointer group-hover:font-[600] text-l ease-in duration-150"
                          >
                            <h3 className="text-primaryColor uppercase font-[600] mb-3 group-hover:text-white group-hover:font-[600] text-lx">
                              Vision
                            </h3>
                            <p className="text-[14px] text-smallTextColor group-hover:text-white group-hover:font-[500] loading-7">
                              To pioneer groundbreaking research and develop
                              innovative pharmaceutical solutions aimed at
                              eradicating debilitating diseases such as
                              Alzheimer&apos;s disease, ALS, and pancreatic cancer,
                              thereby enhancing the quality of life for patients
                              worldwide.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform 
                                  -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                      >
                        <figure className="">
                          <Image
                            className=""
                            src="/images/backend.png"
                            alt="lineball"
                            width={20}
                            height={20}
                            priority
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                  {/* left */}
                  <div className="mt-6 sm:mt-0 sm:mb-12">
                    <div className="flex items-center flex-col sm:flex-row">
                      <div className="flex justify-start w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pr-8">
                          <div
                            data-aos="fade-left"
                            data-aos-duration="1200"
                            className="bg-white p-4 rounded uppercase shadow  group hover:bg-primaryColor cursor-pointer group-hover:font-[600] text-l ease-in duration-150"
                          >
                            <h3 className="text-primaryColor font-[600] mb-3 group-hover:text-white group-hover:font-[600] text-lx">
                              Achievements
                            </h3>
                            <p className="text-[14px] text-smallTextColor group-hover:text-white group-hover:font-[500] loading-7">
                              * Successfully developed and introduced innovative
                              therapies that have significantly improved the
                              quality of life for patients suffering from
                              Alzheimer&apos;s disease, ALS, and pancreatic cancer.
                              <br />* Established strategic partnerships with
                              leading institutions and organizations to
                              accelerate the development and delivery of
                              life-saving treatments.
                              <br />* Continuously expanding our portfolio of
                              products and advancing our understanding of
                              disease mechanisms to address unmet medical needs
                              and achieve lasting impact in the field of
                              healthcare.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform 
                                  -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                      >
                        <figure className="">
                          <Image
                            className=""
                            src="/images/apps.png"
                            alt="lineball"
                            width={20}
                            height={20}
                            priority
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
