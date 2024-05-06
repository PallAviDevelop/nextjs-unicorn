"use client";
import style from "@/app/styles/common.module.css";
import { useState } from "react";
import ContactCard from "../components/ContactCard";
import ContactCopy from "./contactCopy";

const Contact = () => {
  const [userdata, setUserdata] = useState({
    username: "",
    email: "",
    phone: "",
    msg: "",
  });
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserdata((prevUser) => ({ ...prevUser, [name]: value }));
  };
  const handlesubmit = (e) => {e.preventDefault();};
  return (
    <>
    <section class="mb-32">
  <div id="map" class="relative h-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
     <div className={style["commonBgBanner"]}>
    <div className={style.bannertitle}>
    <h1 className={style.l_sec}>Get in touch</h1>
    </div>
     
  <div class="common_layerstyle__c8PRg"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="common_shape-fill__eGJNR"></path></svg></div>
  </div>
  <section className="container mx-auto">
  <div class="lg:col-span-2 bg-[#EDF8FD] rounded sm:p-10 p-4 z-10 block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
                    <h2 class="text-3xl text-white text-center font-extrabold mb-6">Contact Us</h2>
                    <form>
                        <div class="max-w-sm mx-auto space-y-4">
                            <input type="text" placeholder="Name" class="w-full bg-gray-100 rounded py-3 px-6 text-sm outline-none" />
                            <input type="email" placeholder="Email" class="w-full bg-gray-100 rounded py-3 px-6 text-sm outline-none" />
                            <input type="email" placeholder="Phone No." class="w-full bg-gray-100 rounded py-3 px-6 text-sm outline-none"/>
                            <textarea placeholder="Message" rows="6" class="w-full bg-gray-100 rounded px-6 text-sm pt-3 outline-none"/>
                            <button type="button" class="text-[#333] mx-auto block relative bg-gray-100 hover:bg-gray-200 font-semibold rounded text-sm px-6 py-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" class="mr-2 inline" viewBox="0 0 548.244 548.244">
                                    <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000"></path>
                                </svg>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
  </section>
  <div class="container px-6 md:px-12 mx-auto">
    <div
      class="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
      <div class="flex flex-wrap">
        <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
          <form>
            <div class="relative mb-6" data-te-input-wrapper-init>
              <input type="text"
                  class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleInput90" />
              <label
                  class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                  for="exampleInput90">Name
                </label>
            </div>
            <div class="relative mb-6" data-te-input-wrapper-init>
              <input type="email"
                  class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleInput91" />
              <label
                  class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                  for="exampleInput91">Email address
                </label>
            </div>
            <div class="relative mb-6" data-te-input-wrapper-init>
              <textarea
                  class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleFormControlTextarea1" rows="3"></textarea>
              <label for="exampleFormControlTextarea1"
                  class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">Message</label>
            </div>
            <div class="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
              <input
                  class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent "
                  type="checkbox" value="" id="exampleCheck96" checked />
              <label class="inline-block pl-[0.15rem] hover:cursor-pointer" for="exampleCheck96">
                  Send me a copy of this message
                </label>
            </div>
            <button type="button"
                class="mb-6 w-full rounded bg-sky-500 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0">
                Send
              </button>
          </form>
        </div>
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
          <div class="flex flex-wrap">
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div class="flex items-start">
                <div class="shrink-0">
                  <div class="inline-block rounded-md bg-sky-200 p-4 text-primary">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" class="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                    </svg> */}
                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold ">
                    Technical support
                  </p>
                  <p class="text-sm text-neutral-500">
                    example@gmail.com
                  </p>
                  <p class="text-sm text-neutral-500">
                    1-600-890-4567
                  </p>
                </div>
              </div>
            </div>
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div class="flex items-start">
                <div class="srink-0">
                  <div class="inline-block rounded-md bg-sky-200 p-4 text-primary">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" class="w-7 h-7">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                    </svg> */}
                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold ">
                    Address
                  </p>
                  <p class="text-sm text-neutral-500">
                    abcd, <br/>
                        xyz <br/>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
              <div class="align-start flex">
                <div class="shrink-0">
                  <div class="inline-block rounded-md bg-sky-200 p-4 text-primary">
                    {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" class="w-7 h-7"
                      viewBox="0 0 111.756 122.879" enable-background="new 0 0 111.756 122.879" xml:space="preserve">
                      
                    </svg> */}

                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold ">Land Line</p>
                  <p class="text-neutral-500"> (0421) 431 2030
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
              <div class="align-start flex">
                <div class="shrink-0">
                  <div class="inline-block rounded-md bg-sky-200 p-4 text-primary">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg> */}
                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold ">Mobile</p>
                  <p class="text-neutral-500"> +91 123456789
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    <ContactCard />
  <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
      width="100%" height="480" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
      </div>
  </div>
  
    {/* <ContactCopy/>
      <ContactCard /> */}
{/* 
      <div div className={style["contactoutter"]}>
        <h3>
          Contact us <span>Now</span>
        </h3>

        <div className={style["contact-form"]}>
          <form onSubmit={handlesubmit}>
            <div className={style["form-grp"]}>
              <label htmlFor="username">Your Username</label>
              <input
                type="text"
                name="username"
                value={userdata.username}
                onChange={handlechange}
                required
                autoComplete="off"
                placeholder="enter your username"
              />
            </div>
            <div className={style["form-grp"]}>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                value={userdata.email}
                onChange={handlechange}
                required
                autoComplete="off"
                placeholder="enter your email"
              />
            </div>
            <div className={style["form-grp"]}>
              <label htmlFor="phone">Your Phone</label>
              <input
                type="number"
                name="phone"
                value={userdata.phone}
                onChange={handlechange}
                required
                autoComplete="off"
                placeholder="enter your phone"
              />
            </div>
            <div className={style["form-grp"]}>
              <label htmlFor="username">Your Message</label>
              <textarea
                size={40}
                name="msg"
                value={userdata.msg}
                onChange={handlechange}
                required
                autoComplete="off"
                placeholder="enter your Message"
              />
            </div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              submit
            </button>
          </form>
        </div>
      </div> */}
      {/* <section class="mb-32">
  <div id="map" class="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
      width="100%" height="480" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
  </div>
 
</section> */}

</section>

    </>
  );
};

export default Contact;
