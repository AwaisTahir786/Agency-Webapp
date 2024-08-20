import React from "react"
import { HiArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";
import figma from "@/pic/figma.svg"
import slack from "@/pic/slack.svg"
import stripe from "@/pic/stripe.svg"
import { HiOutlineArrowSmDown } from "react-icons/hi";
import arrow from "@/pic/arrow-scribble.svg"
import smile from "@/pic/smile.svg"
import line from "@/pic/line.svg"








export default function Working() {
    return (
      <div className="md:my-20 md:mx-16 px-2 py-10 text-center  rounded-2xl bg-[#3635354e]   ">
        <div className="text-center">
          <p className="text-sm text-gray-400">HOW IT WORKS</p>
         <div className="flex flex-row justify-center items-center gap-5">
         <h1 className="text-3xl md:text-5xl font-bold mt-2">
            Supafast, Supaeasy 
          </h1>
          <Image src={smile} alt="" height={10} width={40} className="flex " />

         </div>
         <div className="md:flex flex-row items-center justify-center ml-16 mt-4 hidden">
         <Image src={line} alt="" height={20} width={300}  />


         </div>

        </div>
        
        {/* boxes */}

        <div className=" flex flex-col md:flex-row justify-center items-center md:gap-12 gap-8 mt-20">
          <div className=" flex flex-col items-center justify-center gap-3">
            <h1 className="text-[11rem] font-extrabold opacity-10">1</h1>
            <h3 className="text-2xl font-bold mt-[-5em]">Market Research</h3>
            <p className="text-[#a3a3a3be] ">
            Dive deep into your market, understand your <br /> competition, and discover customer needs.            </p>
          </div>
          {/* <HiArrowNarrowRight size={60} className="md:flex hidden"/> */}
          {/* <HiOutlineArrowSmDown size={60} className="flex md:hidden"/> */}
          <Image src={arrow} alt="" height={10} width={40} className="md:flex hidden" />
          <Image src={arrow} alt="" height={10} width={40} className="flex md:hidden rotate-90 mt-10" />



          <div className=" flex flex-col items-center justify-center gap-3">
            <h1 className="text-[11rem] font-extrabold opacity-10">2</h1>
            <h3 className="text-2xl font-bold mt-[-5em]">Market Research</h3>
            <p className="text-[#a3a3a3be] ">
            Dive deep into your market, understand your <br /> competition, and discover customer needs.            </p>
          </div>
          {/* <HiArrowNarrowRight size={60} className="md:flex hidden"/> */}
          {/* <HiOutlineArrowSmDown size={60} className="flex md:hidden"/> */}
          <Image src={arrow} alt="" height={10} width={40} className="md:flex hidden" />
          <Image src={arrow} alt="" height={10} width={40} className="flex md:hidden rotate-90 mt-10" />


          <div className=" flex flex-col items-center justify-center gap-3">
            <h1 className="text-[11rem] font-extrabold opacity-10">3</h1>
            <h3 className="text-2xl font-bold mt-[-5em]">Market Research</h3>
            <p className="text-[#a3a3a3be] ">
            Dive deep into your market, understand your <br /> competition, and discover customer needs.            </p>
          </div>
        </div>
        <div className="md:flex hidden  justify-center items-center mt-16 space-x-4 text-gray-400">
          <p>Secured payments via Stripe</p>
          <Image src={stripe} alt="" height={10} width={20} />
          <p>Communication via Slack</p>
          <Image src={slack} alt="" height={10} width={20} />
          <p>Delivered in Figma</p>
          <Image src={figma} alt="" height={10} width={15} />
        </div>
      </div>
    )
  }
  

  
 
  
  
 