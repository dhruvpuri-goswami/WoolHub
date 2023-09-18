"use client"
import Image from "next/image"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ETImage = ({img}) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div data-aos="zoom-in" className="flex flex-col align-center justify-center lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <div className="container">
        <div className="rounded-lg overflow-hidden h-[200px] md:h-[400px] bg-white">
          <Image width={400} height={400} className="h-[200px] md:h-[400px] w-full rounded-lg" src={img} alt="roadmap"/>
        </div>
      </div>
    </div>
  )
}

export default ETImage