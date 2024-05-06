import {certificate} from "../data/certificate.js";
import Image from "next/image";
import React from 'react'
import style from "@/app/styles/common.module.css";

const Certificates = () => {
  return (
   <>
    <section className="center w-full common">
        <div
          class="
		bg-no-repeat bg-cover bg-left-top
		bg-[url('/Vector4.png')] h-[40vh]
		xl:bg-[url('/images/Vector4.png')]
"
        >
          <div className={style.bannertitle}>
            <h1 className={style.l_sec}>Certificates</h1>
          </div>
        </div>
      </section>
   <div class="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] text-center">
    
   {certificate.map((item,i)=>(
    <div class="card bg-base-300 mb-4 p-4" key={i}>
      <Image className="h-[150px] w-auto mx-auto px-2" src={item.imgcert} width={150} height={152} alt='logo'/>
      <h3>{item.text}</h3>
      </div>
   ))}
   
    </div>
   </>
  )
}

export default Certificates