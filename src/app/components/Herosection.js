import React from "react";
import Image from "next/image";
import style from "@/app/styles/common.module.css";
import { bestseller } from "../data/certificate.js";
import CertificateSlide from "./certificateSlide/page.js";
// import fish from "./../images/Fish1.png";

const Herosection = ({ title, heading, des }) => {
  return (
    <>
      <section className="center w-full">
        <div className={style["outerBanner"]}>
          <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="w-[100%] md:w-[100%] mt-[2rem] md:mt-[3rem] mb-[3rem] mx-auto  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-[3rem] py-10">
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
        </div>
      </section>
      <section>
        <h2 className="mt-[1.5rem] text-center text-[28px] text-black font-semibold mb-4">
          Best seller Products
        </h2>
        <ul className="w-[100%] md:w-[100%] mt-[2rem] md:mt-[3rem] mb-[3rem] mx-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1rem] px-4">
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
              <h3 className={style.Cattitle}>{item.name}</h3>
            </li>
          ))}
        </ul>
      </section>
      <section className="center w-full">
        <div className={style.mapwrap}>
          <div className="pt-[1rem] pb-[3rem]">
            <h3 className="mt-[1.5rem] text-center text-[28px] text-white font-semibold mb-4">
              Network
            </h3>
            <div className="w-[90%] md:w-[80%] mb-[3rem] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[3rem]"></div>
          </div>
        </div>
      </section>

      <section className="w-full py-10" style={{backgroundColor:'#EDF8FD'}}>
      <h2 className="mt-[1rem] text-center text-[28px] text-black font-semibold mb-4">
            Why Choose Us
          </h2>
        <div
          data-aos="fade-down"
          className="relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden aos-init aos-animate"
          data-v-b444fb2c=""
        >
          <div className="col-span-12 lg:col-span-7" data-v-b444fb2c="">
            <div className="w-full" data-v-b444fb2c="">
              <Image
                className="w-[90%] py-10 mx-auto p-10"
                src="/Fish1.png"
                width={350}
                height={252}
                alt="logo"
              />
            </div>
          </div>{" "}
          <div
            className="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20"
            data-v-b444fb2c=""
          >
            <p className="paragraph" data-v-b444fb2c="">
            <span className="text-sky-500 i">At Unicorn Seafoods</span>, we transcend the ordinary to offer an extraordinary seafood experience. Our commitment to excellence starts from the source, with direct partnerships ensuring the freshest catch from fishermen and farmers worldwide.
            </p>{" "}
            <ul className="space-y-4 sm:space-y-2" data-v-b444fb2c="">
              <li className="space-y-2" data-v-b444fb2c="">
                <div className="flex items-center space-x-2">
                 
                 
                </div>{" "}
              </li>{" "}
              <li className="space-y-2" data-v-b444fb2c="">
                <div className="flex items-center space-x-2">
                 
                  <span>With state-of-the-art facilities meeting USA and EU standards, we guarantee quality and safety in every bite. But it's not just about the products, it's about the journey. Our seamless platform connects buyers and sellers, offering real-time inventory and transparent transactions. With zero buying agent commission, service charges, or hidden costs, we prioritize fairness and trust.</span>
                </div>{" "}
              </li>{" "}
              <li className="space-y-2" data-v-b444fb2c="">
                <div className="flex items-center space-x-2">
                  {/* <span
                    aria-hidden="true"
                    role="img"
                    className="material-design-icon check-circle-icon text-[#0c66ee]"
                  >
                    <svg
                      fill="currentColor"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="material-design-icon__svg"
                    >
                      <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"></path>
                    </svg>
                  </span>{" "} */}
                  <span>We don't just deliver seafood; we deliver exceptional service. Choose Unicorn Seafoods for an unparalleled seafood experience that goes beyond the plate.</span>
                </div>{" "}
              </li>
            </ul>{" "}
            <button
              className="text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border border-[#0c66ee] text-base"
              data-v-b444fb2c=""
            >
              Join the waitlist
            </button>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="w-[90%] md:w-[80%] mx-auto  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          <h2 className="mt-[1rem] text-center text-[28px] text-black font-semibold mb-4">
            Certificates
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
      <section className="center w-full">
        <div className={style.bgNavyBlue}>
          <span className="w-[90%] md:w-[70%] mb-[3rem] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[3rem]">
            <h2>Need help. Contact our experts.</h2>
            <button className={style.btn}>Schedule a Call </button>
          </span>
        </div>
      </section>
    </>
  );
};

export default Herosection;
