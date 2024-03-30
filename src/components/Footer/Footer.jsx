"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <React.Fragment>
      <footer>
        <div className="container m-auto p-10 bg:white">
          <div className="container m-auto flex flex-col sm:flex-row justify-around items-center">
            <div>
              <h2 className="text-[#47aede] mb-2 text-[1rem] md:text-[1.8rem] font-semibold">
                COCAMEDLAB {" "} 
                <span className="text-[#223740] mb-2 text-[.75rem] md:text-[1.4rem] font-semibold">
                  {currentYear} ©  All Right Reserved
                </span>
              </h2>
            </div>
            <div className="flex gap-5 justify-center">
              <Link
                className="text-[#223740] mb-2 text-[.75rem] md:text-[1.4rem] font-semibold"
                href="/"
              >
                HOME
              </Link>
              <Link
                className="text-[#223740] mb-2 text-[.75rem] md:text-[1.4rem] font-semibold"
                href="#products"
              >
                PRODUCTS
              </Link>
              <Link
                className="text-[#223740] mb-2 text-[.75rem] md:text-[1.4rem] font-semibold"
                href="#about"
              >
                ABOUT
              </Link>
              <Link
                className="text-[#223740] mb-2 text-[.75rem] md:text-[1.4rem] font-semibold"
                href="#contact"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
