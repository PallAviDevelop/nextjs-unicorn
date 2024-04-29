import React from 'react'
import Herosection from '../components/Herosection';

const Services = () => {
  const img="/download.png";
  return (
    <main className="flex flex-col items-center justify-between">
    <Herosection title='Services We Provide' des='Overall, MERN stack enables the development of full-stack JavaScript applications, where the front end and back end seamlessly work together to provide a complete user experience. The stack leverages the strengths of each component, allowing developers to build efficient, scalable, and responsive web applications.' img={img}/>
    
    </main>
  )
}

export default Services