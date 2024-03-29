"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <React.Fragment>
      <div
        id="contact"
        className="flex md:pt-10 items-center justify-center flex-col"
      >
        <div
          className=" flex items-center justify-center bg:opacity-95 bg-smallTextColor"
          style={{
            backgroundImage: `url('images/Home.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "450px",
            width: "95%",
          }}
        >
          <div className="">
            <p className="p-[40px] text-white text-2xl sm:text-3xl md:text-5xl lg:text:7xl text-center">
              Absolutely! we&rsquo;r all ears for discussing products and
              solutions or any topic you fancy. Just drop us a line about what
              interests you, and we&rsquo;ll dive right in!
            </p>
          </div>
        </div>
        <div className="container m-auto">
          <div className="grid grid-flow-col-12">
            <div className="container">
              <div className="flex items-center justify-center m-10">
                <h2 className=" text-smallTextColor text-2xl sm:text-3xl md:text-5xl lg:text:7xl font-semibold">
                  Get In Touch
                </h2>
              </div>
              <div className=" flex flex-col lg:flex-row justify-between items-stretch">
                <div className="flex-1 md:max-w-1/2 h-[350px] sm:h-[370px] lg:h-[410px]">
                  <iframe
                    title="google-maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.975156934205!2d-122.43474502475846!3d37.7906219719814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581443ab03f45%3A0xd900681c663c097c!2shospital!5e0!3m2!1sen!2sin!4v1711659144707!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="flex-1 mt-8 md:mt-0 md:max-w-1/2 sm:h-[450px] lg:flex items-center px-lg:px-8 py-8">
                  <form className="w-full p-5">
                    <div className="mb-5">
                    <p className="text-headingColor text-[.95rem] md:text-[1.8rem] font-semibold">PHONE NUMBER: 8995778489</p>
                    <p className="text-headingColor py-4  text-[.95rem] md:text-[1.8rem] font-semibold">EMAIL: solutions@cocaway.online</p>
                      <input
                        type="text"
                        placeholder="Enter full name"
                        className="w-full p-3 focus:outline-none rounded-[5px]"
                      />
                    </div>
                    <div className="mb-5">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-3 focus:outline-none rounded-[5px]"
                      />
                    </div>
                    <div className="mb-5">
                      <textarea
                        placeholder="Type your message here"
                        className="w-full p-3 focus:outline-none rounded-[5px]"
                      ></textarea>
                    </div>
                    <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150">
                      Get in touch
                    </button>
                  </form>
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
