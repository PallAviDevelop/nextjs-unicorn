import React from "react";
import Image from "next/image";
import style from "@/app/styles/common.module.css";
import CertificateSlide from "../components/certificateSlide/page";

const About = () => {
  return (
    <>
      <section className="center w-full common">
        <div
          className="
		bg-no-repeat bg-cover bg-left-top
		bg-[url('/Vector4.png')] h-[40vh]
		xl:bg-[url('/images/Vector4.png')]
"
        >
          <div className={style.bannertitle}>
            <h1 className={style.l_sec}>About</h1>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="pt-[1rem] pb-[3rem]">
          <div className="w-[90%] md:w-[100%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[3rem] p-6">
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="top-center"
              className="aos-init aos-animate"
            >
              <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
                <Image
                  className="h-full w-full"
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
      <section className="container mx-auto vissionmission">
        <div className={style.bgImg}>
          <div className="pt-[1rem] pb-[1rem] ">
            <div
              className="w-[90%] md:w-[100%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[3rem] px-10"
              style={{ borderBottom: " 1px solid #fff" }}
            >
              <div
                data-aos="fade-left"
                data-aos-anchor-placement="top-center"
                className="aos-init aos-animate"
              >
                <div className="py-2 text-white border-right border-gray-100">
                  <h3 className="xl:text-4xl">Vission</h3>
                  <div className="w-[100%] md:w-[100%] mb-[3rem] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[3rem]">
                    <p className="mt-[1rem] text-white text-start">
                      At Welcome to Unicorn Seafoods, your premier destination
                      for all things seafood and aquaculture. We pride ourselves
                      on being more than just a marketplace; we're your one-stop
                      solution, connecting buyers and sellers across the globe
                      to ensure the best deals and unparalleled service
                      standards.
                    </p>
                    <Image
                      className="h-full w-auto"
                      src="/images/mission.png"
                      width={100}
                      height={200}
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-anchor-placement="top-center"
                className="aos-init aos-animate"
              >
                <h3 className="--font-minion text-white xl:text-4xl">
                  Mission
                </h3>
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
          <div className="core">
            <div className="text-center mt-[1.5rem] text-[28px] text-black font-semibold mb-4 text-white">
              <h2>Core Value</h2>
              <p>At Unicorn Seafoods, our values guide everything we do</p>
            </div>
            <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border-right border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-5">
              <div className="group relative dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                  <img
                    src="/images/Quality-Icon.png"
                    className="w-12"
                    width="512"
                    height="512"
                    alt="burger illustration"
                  />

                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-white">Quality</h5>
                    <p className="text-white">
                      We are committed to delivering excellence in every aspect
                      of our business, be it sourcing, service, or experiences.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                  <img
                    src="/images/Sustainability-Icon.png"
                    className="w-12"
                    width="512"
                    height="512"
                    alt="burger illustration"
                  />

                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-gray-700 text-white transition group-hover:text-secondary">
                      Sustainability
                    </h5>
                    <p className="text-white">
                      Dedication to sustainable practices throughout our
                      operations to contribute positively to our planet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                  <img
                    src="/images/Sustainability-Icon.png"
                    className="w-12"
                    width="512"
                    height="512"
                    alt="burger illustration"
                  />
                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-gray-700 text-white transition group-hover:text-secondary">
                      Sustainability
                    </h5>
                    <p className="text-white">
                      Dedication to sustainable practices throughout our
                      operations to contribute positively to our planet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                  <img
                    src="/images/Traceability-Icon.png"
                    className="w-12"
                    width="512"
                    height="512"
                    alt="burger illustration"
                  />

                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-gray-700 text-white transition group-hover:text-secondary">
                      Traceability
                    </h5>
                    <p className="text-white">
                      We believe in the power of collaboration, working hard to
                      achieve mutual success for all stakeholders.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="relative space-y-8 py-12 p-8">
                  <img
                    src="/images/Customer-Centricity-Icon.png"
                    className="w-12"
                    width="512"
                    height="512"
                    alt="burger illustration"
                  />

                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-gray-700 text-white transition group-hover:text-secondary">
                      Customer-Centricity
                    </h5>
                    <p className="text-white">
                      Providing transparency to our customers about the origins
                      and journey of our products, fostering trust and
                      accountability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
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
