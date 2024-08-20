import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/pic/logo.png"

function Navbartwo() {
  return (
    <div>
        <div className='font-bold text-4xl md:mr-12 pl-20 pr-20 lg:hidden text-center mt-6'>Supafast</div>



      {/* pc  */}
      <div className='cursor-pointer justify-between
         text-white pl-20 pr-20  pt-5 pb-5 hidden lg:flex'>

            <div className='space-x-8 tracking-wider items-center justify-center font-light hidden md:flex'>

            <div className='hover:text-[#39FF14] '>How it works</div>
  <div className='hover:text-[#39FF14]'>Pricing</div>
  <div className='hover:text-[#39FF14]'>Work</div>
  <div className='hover:text-[#39FF14]'>FAQ</div>
            </div>
  


  {/* Logo */}
  <div className='font-bold text-4xl md:mr-12'>Supafast</div>
  
  




  {/* button */}
  <Link href={"https://wa.me/03114366363"} className="md:inline-flex hidden h-12 animate-shimmer items-center justify-center  text-lg rounded-xl font-light bg-black border-[#a3a3a353] border px-4 py-6 text-white">
        Press <span className='pt-[1px] pb-[1px] pr-2 pl-2 border font-bold  rounded-md ml-1 mr-1 border-[#a3a3a353] bg-[#a3a3a353]'>B</span> to book a call
       </Link>
</div>

    </div>
   
  )
}

export default Navbartwo;