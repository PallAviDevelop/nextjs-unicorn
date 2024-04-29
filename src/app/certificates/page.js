import {certificate} from "../data/certificate.js";
import Image from "next/image";
import React from 'react'

const Certificates = () => {
  return (
   <>
   <div class="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
    
   {certificate.map((item,i)=>(
    <div class="card bg-base-300 shadow-xl mb-4 p-4" key={i}>
      <Image className="h-[150px] w-auto mx-auto px-2" src={item.imgcert} width={150} height={152} alt='logo'/>
      <h3>{item.text}</h3>
      </div>
   ))}
   
    </div>
   </>
  )
}

export default Certificates