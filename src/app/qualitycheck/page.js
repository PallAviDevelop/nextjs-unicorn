import React from 'react'
import Image from "next/image";
import style from "@/app/styles/common.module.css";

const Qualitycheck = () => {
  return (
   <>
   <div className={style["commonBgBanner"]}>
    <div className={style.bannertitle}>
    <h1 className={style.l_sec}>Quality Check</h1>
    </div>
     
  <div class="common_layerstyle__c8PRg"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="common_shape-fill__eGJNR"></path></svg></div>
  </div>
  <section className="w-full py-10">
        <div
          data-aos="fade-down"
          className="relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden aos-init aos-animate"
          data-v-b444fb2c=""
        >
          <div className="col-span-12 lg:col-span-7" data-v-b444fb2c="">
            <div className="w-full" data-v-b444fb2c="">
              <Image
                className="w-[90%] py-10 mx-auto p-10"
                src="/images/qualitycheck.png"
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
            {/* <p className="paragraph" data-v-b444fb2c="">
            <span className="text-sky-500 i">At Unicorn Seafoods</span>, we transcend the ordinary to offer an extraordinary seafood experience. Our commitment to excellence starts from the source, with direct partnerships ensuring the freshest catch from fishermen and farmers worldwide.
            </p>{" "} */}
            <ul className="space-y-4 sm:space-y-2" data-v-b444fb2c="">
              <li className="space-y-2" data-v-b444fb2c="">
                <div className="flex items-center space-x-2">
                 <span>
                 When it comes to the assurance of quality for our products, we prioritize thorough inspections and quality service at every step. Our expertise in global procurement ensures that we source the best products at the best prices, supported by reliable payment and delivery terms. With strong partnerships worldwide, we guarantee consistent quality, verified by thorough inspections by our local quality agents. Certifications like HACCP, GMP, and ISO22000 ensure adherence to international standards. Additionally, our packaging solutions, including design and inventory management, enhance product appeal and protection. At every stage, our focus is on providing a seamless experience, fostering trust, and ensuring client satisfaction, making us your preferred choice every time.
                 </span>
                 
                </div>{" "}
              </li>{" "}
             
            
            </ul>{" "}
           
          </div>
        </div>
      </section>
      <section>
        <div class="flex gap-8 md:gap-20 items-center justify-center px-10 flex-wrap py-10  text-center">
       <div> <Image style={{backgroundColor: '#0D86C2',color:' #fff',    padding: '10px',
    borderRadius: '50%',}}
                className="rounded-lg w-auto py-10 mx-auto p-10"
                src="/images/expert 1.png"
                width={64}
                height={64}
                alt="logo"
              />
              <h3>Global procurement expertise</h3>
              </div>
              <div>
               <Image style={{backgroundColor: '#0D86C2',color:' #fff',    padding: '10px',
    borderRadius: '50%',}}
                className="rounded-lg w-auto py-10 mx-auto p-10"
                src="/images/quality-assurance 1.png"
                width={64}
                height={64}
                alt="logo"
              />
              <h3>title</h3>
              </div>
              <div>
               <Image style={{backgroundColor: '#0D86C2',color:' #fff',    padding: '10px',
    borderRadius: '50%',}}
                className="rounded-lg w-auto py-10 mx-auto p-10"
                src="/images/fishQC.png"
                width={64}
                height={64}
                alt="logo"
              />
              <h3>title</h3>
              </div>
              <div>
               <Image style={{backgroundColor: '#0D86C2',color:' #fff',    padding: '10px',
    borderRadius: '50%',}}
                className="rounded-lg w-auto py-10 mx-auto p-10"
                src="/images/quality-assurance 1.png"
                width={64}
                height={64}
                alt="logo"
              /><h3>title</h3>
              </div>
              <div>
               <Image style={{backgroundColor: '#0D86C2',color:' #fff',    padding: '10px',
    borderRadius: '50%',}}
                className="rounded-lg w-auto py-10 mx-auto p-10"
                src="/images/quality-assurance 1.png"
                width={64}
                height={64}
                alt="logo"
              /><h3>title</h3>
              </div>
        </div>
      </section>
      {/* <section>
      <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
  <div>
    <h2>dhfjkh</h2>
  </div>
  <div class="col-start-3">
  <button>submit</button>
  </div>
  </div>
      </section> */}
   </>
  )
}

export default Qualitycheck