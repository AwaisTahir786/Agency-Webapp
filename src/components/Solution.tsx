/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image';
import { FaRegThumbsUp } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import nayma from "@/pic/nayma.webp"





const Solution = () => {
  return (
    <div className='md:my-20 mx-16 px-2 py-10 text-center  rounded-2xl bg-[#3635354e] '>
<div className='md:text-[3em] text-[1.5em] font-bold'>
The solution: Conversion-focused <br /> creativity

        </div>

        <div className='text-center tmd:text-xl text-sm mt-4 text-[#a3a3a3be]'>
        Designs that captivate, copy that resonates, and development that converts. Moving <br /> beyond surface metrics to emotional impact that turns browsers into buyers.

        </div>

        {/* boxes */}

        <div className=" flex flex-col md:flex-row justify-center items-center gap-20 mt-20">
          <div className=" flex flex-col items-center justify-center gap-3">
            <FaRegThumbsUp size={50}/>
            <h3 className="text-2xl font-bold mt-2">Compelling Copy</h3>
            <p className="text-[#a3a3a3be]  mt-2">
            Crafting words that engage, resonate, and <br /> ultimately convince your audience to take action.            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
          <IoDiamond size={50} />
          <h3 className="text-2xl font-bold mt-2">Top-Tier Branding

            </h3>
            <p className="text-[#a3a3a3be] mt-2">
            Design a brand identity to standout in a crowded <br /> marketplace.           </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
          <BsCurrencyDollar size={50} />
          <h3 className="text-2xl font-bold mt-2">Conversion-Focused Design


            </h3>
                        <p className="text-[#a3a3a3be] mt-2">
                        Creating visually appealing designs that are <br /> optimized for maximum conversion rates.                        </p>
          </div>
        </div>

        {/* button  */}

      <button     className="inline-flex mt-10 items-center text-black  justify-center rounded-xl bg-white p-3.5 lg:p-4 px-10 lg:px-[30px] text-md lg:text-lg font-bold text-primary tracking-tight cta-btn cursor-pointer hover:scale-105 transition duration-300 ease-out w-full lg:w-auto"
      > <span className='mr-4'><Image src={nayma} alt='' width={30} height={30}/></span>Book a Call with Namya
       </button>
    </div>
        
  )
}

export default Solution;