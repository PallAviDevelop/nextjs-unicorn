import React from "react";
import style from "@/app/styles/common.module.css";
import Image from "next/image";

const Becomeseller = () => {
  return (
    <>
    
      <section className="center w-full common">
        <div
          className="
		bg-no-repeat bg-cover bg-left-top
		bg-[url('/Vector4.png')] h-[325px]
		xl:bg-[url('/images/Vector4.png')]
"
        >
          <div className={style.bannertitle}>
            <h1 className={style.l_sec}> Become a Seller</h1>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
      <h2 className='mt-[1.5rem] text-center text-[28px] text-black font-semibold mb-4'>Why Become A Seller With Us?</h2>
        <div className="grid  overflow-hidden text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 text-center gap-8 md:gap-20 items-center justify-center px-10 py-10  text-center">
          <div>
            {" "}
            <Image
              style={{
                backgroundColor: "#0D86C2",
                color: " #fff",
                padding: "10px",
                borderRadius: "50%",
              }}
              className="rounded-lg w-auto py-10 mx-auto p-10"
              src="/images/expert 1.png"
              width={64}
              height={64}
              alt="logo"
            />
            <h3 className="raleway text-lg leading-6 text-gray-900">
            Access a global platform to <br/>connect with buyers worldwide
            </h3>
          </div>
          <div>
            <Image
              style={{
                backgroundColor: "#0D86C2",
                color: " #fff",
                padding: "10px",
                borderRadius: "50%",
              }}
              className="rounded-lg w-auto py-10 mx-auto p-10"
              src="/images/quality-assurance 1.png"
              width={64}
              height={64}
              alt="logo"
            />
            <h3 className="raleway text-lg leading-6 text-gray-900">
            Quality products of<br />
            international standards
            </h3>
          </div>
          <div>
            <Image
              style={{
                backgroundColor: "#0D86C2",
                color: " #fff",
                padding: "10px",
                borderRadius: "50%",
              }}
              className="rounded-lg w-auto py-10 mx-auto p-10"
              src="/images/fishQC.png"
              width={64}
              height={64}
              alt="logo"
            />
            <h3 className="raleway text-lg leading-6 text-gray-900">
            Simple and easy<br />
            logistics
            </h3>
          </div>
          <div>
            <Image
              style={{
                backgroundColor: "#0D86C2",
                color: " #fff",
                padding: "10px",
                borderRadius: "50%",
              }}
              className="rounded-lg w-auto py-10 mx-auto p-10"
              src="/images/quality-assurance 1.png"
              width={64}
              height={64}
              alt="logo"
            />
            <h3 className="raleway text-lg leading-6 text-gray-900">
            Competitive pricing and real-time market insights
            </h3>
          </div>
        </div>
      </section>
    
     
<section className="container mx-auto my-6">
<div className=" relative bg-no-repeat my-6 bg-left-top bg-[url('/images/image10.png')] h-[600px] w-full">
            <div className="grid lg:grid-cols-3 items-center">
                <div className="grid sm:grid-cols-2 gap-4 z-10 relative max-lg:mb-8">
                    
                </div>
     <div className="lg:col-span-2 bg-[#F3FBFF] rounded sm:p-10 p-4 z-20" style={{margin: '84px 0px 70px', maxHeight: '538px',padding:' 67px 102px 67px !important',}}>
                    <h2 className="text-3xl text-black text-start font-extrabold mb-6">Fill Out the Form to Become a Seller</h2>
                    <form>
                    <div className="flex flex-col md:flex-row my-3">
                        <input id="fname" type="text" className="my-2 py-2 px-4 rounded-md bg-white text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600" placeholder="First Name" />
                        <input id="lname" type="text" className="my-2 py-2 px-4 rounded-md bg-white text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600" placeholder="Last Name" />
                    </div>
                    <div className="flex flex-col md:flex-row my-3">
                        <input id="fname" type="text" className="my-2 py-2 px-4 rounded-md bg-white text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600" placeholder="Email-Id" />
                        <input id="lname" type="text" className="my-2 py-2 px-4 rounded-md bg-white text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600" placeholder="Phone No." />
                    </div>
                   
                    <div className="flex flex-col md:flex-row my-3">
                        <input id="country" type="text" className="my-2 py-2 px-4 rounded-md bg-white text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600" placeholder="Country" />
                        <input id="city" type="text" className="my-2 py-2 px-4 rounded-md bg-white text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600" placeholder="City" />
                        <input id="postcode" type="text" className="my-2 py-2 px-4 rounded-md bg-white text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600" placeholder="Post Code" />
                    </div>
                        <div className="max-w-sm space-y-4 text-start">
                           
                          
                            <button type='button'
                                className="text-[#fff] block relative bg-[#0D86C1] hover:bg-gray-200 font-semibold rounded text-sm px-6 py-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor' className="mr-2 inline" viewBox="0 0 548.244 548.244">
                                    <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
                                </svg>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </section>
    </>
  );
};

export default Becomeseller;
