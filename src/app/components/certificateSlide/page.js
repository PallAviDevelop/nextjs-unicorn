"use client";
import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { certificate } from "../../data/certificate";


const CertificateSlide = () => {
  return (
    <div className="text-center py-10">
     
      <Swiper
     
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        //navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
       {certificate.map((item, i) => (
        
      <SwiperSlide className="w-[200px] mx-auto h-[200px] flex justify-center items-center"
           key={i}> <Image
                className="h-auto w-[169px]"
                src={item.imgcert}
                width={169}
                height={52}
                alt="gmp logo"
              /></SwiperSlide>
             
       ))}
      
    </Swiper>
    </div>
  );
};

export default CertificateSlide;
