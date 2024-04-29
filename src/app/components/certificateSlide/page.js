"use client"
import React from 'react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
    items: 2
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1
  }
};
 
const CertificateSlide = () => {
  return (
    <div className='text-center'>
  <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div className='mx-auto flex items-center justify-center p-6 lg:px-8'><Image className="h-[200px] w-[200px] shadow-xl rounded p-8" src='/images/gmp.png' width={169} height={52} alt='gmp logo'/></div>
  <div className='mx-auto flex items-center justify-center p-6 lg:px-8'><Image className="h-[200px] w-[200px] shadow-xl rounded p-8" src='/images/IFFS-3 1.png' width={169} height={52} alt='iffs'/></div>
  <div className='mx-auto flex items-center justify-center p-6 lg:px-8'><Image className="h-[200px] w-[200px] shadow-xl rounded p-8" src='/images/image 15.png' width={169} height={52} alt='logo'/></div>
  <div className='mx-auto flex items-center justify-center p-6 lg:px-8'><Image className="h-[200px] w-[200px] shadow-xl rounded p-8" src='/images/image 13.png' width={169} height={52} alt='logo'/></div>
  <div className='mx-auto flex items-center justify-center p-6 lg:px-8'><Image className="h-[200px] w-[200px] shadow-xl rounded p-8" src='/images/image 16.png' width={169} height={52} alt='logo'/></div>
  <div className='mx-auto flex items-center justify-center p-6 lg:px-8'><Image className="h-[200px] w-[200px] shadow-xl rounded p-8" src='/images/image17.png' width={169} height={52} alt='logo'/></div>
  <div className='mx-auto flex items-center justify-center p-6 lg:px-8'><Image className="h-[200px] w-[200px] shadow-xl rounded p-8" src='/images/image 14.png' width={169} height={52} alt='logo'/></div>
  <div className='mx-auto flex items-center justify-center p-6 lg:px-8'><Image className="h-[200px] w-[200px] shadow-xl rounded p-8" src='/images/image 18.png' width={169} height={52} alt='logo'/></div>
  <div className='mx-auto flex items-center justify-center p-6 lg:px-8'><Image className="h-[200px] w-[200px] shadow-xl rounded p-8" src='/images/image 12.png' width={169} height={52} alt='logo'/></div>
</Carousel>;
    </div>
  )
}

export default CertificateSlide