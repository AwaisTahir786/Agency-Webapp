import React from 'react'
import circule from "@/pic/circula.svg"
import Image from 'next/image'
import figma from "@/pic/figma.png"
import next from "@/pic/nextjs.png"
import tailwind from "@/pic/tailwind.png"
import versal from "@/pic/vercel.png"
import framer from "@/pic/framer-motion.png"

const Ship = () => {
  return (
    <div className='md:px-20 py-20 '>
        <div className='flex lg:gap-36 gap-16 lg:flex-row flex-col justify-center items-center lg:justify-start '>
        <ul className='flex flex-col gap-2 lg:text-left text-center'>
            <li className='text-3xl font-bold opacity-20'>Logos</li>
            <li className='text-3xl font-bold opacity-20'>Icons</li>
            <li className='text-3xl font-bold opacity-20'>Branding</li>
            <li className='text-3xl font-bold opacity-20'>Copywriting</li>
            <li className='text-3xl font-bold opacity-20'>Pitch Decks</li>
            <li className='text-3xl font-bold opacity-20'>Brand Audit</li>
            <li className='text-3xl font-bold opacity-20'>Email Designs</li>
            <li className='text-3xl font-bold opacity-20'>Social Media Posts</li>
        </ul>
        <div className='flex flex-col gap-2 justify-center items-center mt-18'>
        <h1 className="text-3xl md:text-5xl font-bold text-center ">
        You name it, we ship <br /> <div className='mt-3'> it supafast </div>
          </h1>
          <Image src={circule} alt="" height={10} width={220} className="mt-[-70px] ml-8" />


        </div>
      

        <ul className='flex flex-col gap-2 lg:text-right text-center'>
            <li className='text-3xl font-bold opacity-20'>CMS</li>
            <li className='text-3xl font-bold opacity-20'>Landing Pages            </li>
            <li className='text-3xl font-bold opacity-20'>Web Applications</li>
            <li className='text-3xl font-bold opacity-20'>Multipage Websites            </li>
            <li className='text-3xl font-bold opacity-20'>Framer Development            </li>
            <li className='text-3xl font-bold opacity-20'>Webflow Development            </li>
            <li className='text-3xl font-bold opacity-20'>React Development            </li>
        </ul>
        </div>

        {/* tools */}
        <div className='flex flex-col gap-10 justify-center items-center mt-32'>
        <p className="text-sm text-gray-400">HOW IT WORKS</p>
        <div className='flex flex-row gap-20'>
            <Image src={figma} alt="" height={10} width={50}  className='filter invert brightness-0'/>
            <Image src={next} alt="" height={10} width={50} className='filter invert brightness-0' />
            <Image src={tailwind} alt="" height={10} width={50} className='filter invert brightness-0'  />
            <Image src={versal} alt="" height={10} width={50} className='filter invert brightness-0 hidden md:flex'  />
            <Image src={framer} alt="" height={10} width={50} className='filter invert brightness-0 hidden md:flex'  />



            </div>
        </div>
        
    </div>
  )
}

export default Ship;