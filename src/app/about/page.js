import React from "react";
import Image from "next/image";
import style from "@/app/styles/common.module.css";
import CertificateSlide from "../components/certificateSlide/page";

const About = () => {
  return (
    <>
      <div className={style["commonBgBanner"]}>
        <div className={style.bannertitle}>
          <h1 className={style.l_sec}>About</h1>
        </div>

        <div className="common_layerstyle__c8PRg">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="common_shape-fill__eGJNR"
            ></path>
          </svg>
        </div>
      </div>
      <section className="container mx-auto">
        <div className="pt-[1rem] pb-[3rem]">
          <div className="w-[90%] md:w-[80%] mb-[3rem] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[3rem]">
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="top-center"
              className="aos-init aos-animate"
            >
              <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
                <Image
                  className="h-full w-auto"
                  src="/images/Group 98.png"
                  width={500}
                  height={500}
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
                <p className="mt-[1rem] text-black text-opacity-60 text-start">
                  At Welcome to Unicorn Seafoods, your premier destination for
                  all things seafood and aquaculture. We pride ourselves on
                  being more than just a marketplace; we're your one-stop
                  solution, connecting buyers and sellers across the globe to
                  ensure the best deals and unparalleled service standards.
                </p>
                <p className="mt-[1rem] text-black text-opacity-60 text-start">
                  Our global partnerships give us great local exposure. All our
                  raw materials are sourced from the fishing vessels,
                  Aquaculture farms and the boats directly from fishermen and
                  farmers, then transported to high className state of art
                  facilities which meet the highest USA and EU standards for
                  processing and packing.
                </p>
                <p className="mt-[1rem] text-black text-opacity-60 text-start">
                  Unicorn Sea Foods has an ability to present a range of fresh
                  and frozen, high quality seafood products across the globe. It
                  is a platform which allows verified exporters and sellers to
                  upload their inventory on a regular basis, Thus creating a
                  real time inventory of seafood available globally.
                </p>
                <p className="mt-[1rem] text-black text-opacity-60 text-start">
                  Our commitment to quality, transparency, and exceptional
                  service is what sets us apart in the industry. With a team of
                  passionate professionals who get involved in every step,
                  starting from enquiry to order fulfillment, our core strength
                  lies in creating an exceptional experience for our partners.
                  All our services come with Zero buying agent commission, Zero
                  Service charge and No hidden cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container mx-auto'>
        <div className={style.bgImg}>
        <div className="pt-[1rem] pb-[3rem]">
          <div className="w-[90%] md:w-[80%] mb-[3rem] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[3rem]">
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="top-center"
              className="aos-init aos-animate"
            >
              <div className="p-6 text-white rounded-lg transition-all duration-200">
                <h3>Vission</h3>
                <div className="w-[100%] md:w-[100%] mb-[3rem] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[3rem]">
                  <p className="mt-[1rem] text-white text-start">
                    At Welcome to Unicorn Seafoods, your premier destination for
                    all things seafood and aquaculture. We pride ourselves on
                    being more than just a marketplace; we're your one-stop
                    solution, connecting buyers and sellers across the globe to
                    ensure the best deals and unparalleled service standards.
                  </p>
                  <Image
                    className="h-full w-auto"
                    src="/images/mission.png"
                    width={100}
                    height={200}
                    alt="logo"
                  />
                  3
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-anchor-placement="top-center"
              className="aos-init aos-animate"
            >
              <h3 className="text-white">Mission</h3>
              <div className="w-[100%] md:w-[100%] mb-[3rem] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[3rem]">
                <p className="mt-[1rem] text-white text-start">
                  At Welcome to Unicorn Seafoods, your premier destination for
                  all things seafood and aquaculture. We pride ourselves on
                  being more than just a marketplace; we're your one-stop
                  solution, connecting buyers and sellers across the globe to
                  ensure the best deals and unparalleled service standards.
                </p>
                <Image
                  className="h-full w-auto"
                  src="/images/vission.png"
                  width={100}
                  height={200}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    <section className="container mx-auto py-10">
      <CertificateSlide />
      </section>
    </>
  );
};

export default About;
