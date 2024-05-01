"use client"
import React from 'react'
import Image from 'next/image'
import {certificate} from '../../data/certificate'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TRACE_OUTPUT_VERSION } from 'next/dist/shared/lib/constants';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 2
  }
};
 
const CertificateSlide = () => {
  return (
    <div className='text-center py-10'>
  <Carousel
  swipeable={TRACE_OUTPUT_VERSION}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
{certificate.map((item,i)=>(<>
  <div className='w-[200px] mx-auto h-[200px]' key={i}><Image className="h-auto w-auto" src={item.imgcert} width={169} height={52} alt='gmp logo'/></div>
  </>)
)}

 
</Carousel>
    </div>
  )
}

export default CertificateSlide