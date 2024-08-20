"use client"

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import React from "react";
import nayma from "@/pic/nayma.webp"
import { Review } from './Review';

function Homeside() {
  return (
    <div className='md:px-20 px-10 text-center mt-20'>
      <Review/>
        <div className='md:text-[5em] text-[2.5em] font-extrabold'>
        Web Design that

        </div>
        <TypeAnimation
  sequence={[
    'double leads.',
    1000,
    'drive sales.',
    1000,
    'double leads.',
    1000,
    'drive sales.',
    1000,
  ]}
  wrapper="span"
  speed={40}
  className="md:text-[5em] text-[2.5em] inline-block font-extrabold"
  repeat={Infinity}
/>

    
    {/* below text  */}
    <div className='w-100 text-center flex justify-center items-center md:text-xl text-sm'>
    Design, copy, and development engineered to turn browsers into <br/> buyers and drive sales on autopilot.
    </div>

    {/* button  */}

      <button     className="inline-flex mt-10 items-center text-black  justify-center rounded-xl bg-white p-3.5 lg:p-4 px-10 lg:px-[30px] text-md lg:text-lg font-bold text-primary tracking-tight cta-btn cursor-pointer hover:scale-105 transition duration-300 ease-out w-full lg:w-auto"
      > <span className='mr-4'><Image src={nayma} alt='' width={30} height={30}/></span>Book a Call with Namya
       </button>

       <div className='text-[#A3A3A3] text-xs lg:text-sm mt-2 italic"
'>No obligation. No subscription required.</div>

           <div>
      
    </div>
    </div>
  )
}

export default Homeside;