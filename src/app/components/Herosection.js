import React from "react";
import Image from "next/image";
import style from "@/app/styles/common.module.css";
import { bestseller } from "../data/certificate.js";
import CertificateSlide from "./certificateSlide/page.js";
// import fish from "./../images/Fish1.png";

const Herosection = ({ title, heading, des }) => {
  return (
    <>
      <div className={style["outerBanner"]}>
        <div className="w-[100%] md:w-[80%] mt-[2rem] md:mt-[3rem] mb-[3rem] mx-auto  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-[3rem] px-6 py-10">
          <div className="u-max-w-[480px] u-space-y-2 u-leading-tight">
            <h1 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl sm:leading-[3.5rem]">
              {title}
            </h1>
            <h3 className="text-2xl font-extrabold tracking-[-0.04em] text-white sm:text-3xl sm:leading-[3.5rem]">
              {heading}
            </h3>
            <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white lg:pr-32">
              {des}
            </p>
            <div className="sm:max-w-none flex sm:flex-row sm:justify-start mt-6">
              <span className="inline-block rounded-full text-sm font-semibold mb-2 py-1">
                <button
                  style={{ backgroundColor: "#0D86C1" }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  Buyers
                </button>
              </span>
              <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                <button
                  style={{ backgroundColor: "#0D86C1" }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  Sellers
                </button>
              </span>
            </div>
          </div>
          <div className={style.r_sec}>
            {/* <Image src={img} width={400} height={550} alt='banner img'/> */}
          </div>
        </div>
      </div>
      <section>
        <h2 className="mt-[1.5rem] text-center text-[28px] text-black font-semibold mb-4">
          Best seller Products
        </h2>
        <ul className="w-[100%] md:w-[80%] mt-[2rem] md:mt-[3rem] mb-[3rem] mx-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1rem] px-4">
          {bestseller.map((item, i) => (
            <li className="bg-base-300 card mb-4" key={i}>
              {" "}
              <Image
                className="h-[200px] w-[250px] mx-auto"
                src={item.imgseller}
                width={250}
                height={200}
                alt="imgseller"
              />
              <h3>{item.name}</h3>
            </li>
          ))}
        </ul>
      </section>
      <section className={style.mapwrap}>
        <div className="pt-[1rem] pb-[3rem]">
        <h3 className="mt-[1.5rem] text-center text-[28px] text-white font-semibold mb-4">Network</h3>
          <div className="w-[90%] md:w-[80%] mb-[3rem] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[3rem]">
        
        </div>
      </div>
      </section>
      <section>
        <div className="pt-[1rem] pb-[3rem]">
          <h2 className="mt-[1rem] text-center text-[28px] text-black font-semibold mb-4">
            Why Choose Us
          </h2>
          <div className="w-[90%] md:w-[80%] mb-[3rem] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[3rem]">
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="top-center"
              className="aos-init aos-animate"
            >
              <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
                <Image
                  className="h-full w-auto mx-auto px-2"
                  src="/Fish1.png"
                  width={350}
                  height={252}
                  alt="logo"
                />
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-anchor-placement="top-center"
              className="aos-init aos-animate"
            >
              <div className="py-6 hover:bg-white lg:translate-y-[1rem] rounded-lg transition-all duration-200">
                {/* <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
                  Your Opinion is Important
                </h1> */}
                <p className="mt-[1rem] text-black text-opacity-60 text-start">
                  At Unicorn Seafoods, we transcend the ordinary to offer an
                  extraordinary seafood experience. Our commitment to excellence
                  starts from the source, with direct partnerships ensuring the
                  freshest catch from fishermen and farmers worldwide.
                </p>
                <p className="mt-[1rem] text-black text-opacity-60 text-start">
                  At Unicorn Seafoods, we transcend the ordinary to offer an
                  extraordinary seafood experience. Our commitment to excellence
                  starts from the source, with direct partnerships ensuring the
                  freshest catch from fishermen and farmers worldwide.
                </p>
                <p className="mt-[1rem] text-black text-opacity-60 text-start">
                  At Unicorn Seafoods, we transcend the ordinary to offer an
                  extraordinary seafood experience. Our commitment to excellence
                  starts from the source, with direct partnerships ensuring the
                  freshest catch from fishermen and farmers worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[90%] md:w-[80%] mb-[3rem] mx-auto  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          <h2 className="mt-[1rem] text-center text-[28px] text-black font-semibold mb-4">
            Why Choose Us
          </h2>
          <p className="mt-[1rem] text-black text-opacity-60 text-center">
            We ensure the products are certified with necessary quality
            assurance required as per the, buying country standards. Our
            products also undergo a thorough inspection by our local quality
            agents.
          </p>
          <div>
            <CertificateSlide />
          </div>
        </div>
      </section>
    </>
  );
};

export default Herosection;
