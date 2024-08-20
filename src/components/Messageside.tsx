/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image';
import { BsQuestionLg } from "react-icons/bs";
import { ImSad } from "react-icons/im";
import { SiConvertio } from "react-icons/si";




const Messageside = () => {
  return (
    <div className='md:px-20 px-10  text-center mt-20 mb-44'>
<div className='md:text-[3em] text-[1.5em] font-bold'>
You don't have a traffic problem... <br /> you're failing to convert that traffic <br /> into leads.

        </div>

        <div className='text-center md:text-xl text-sm mt-4 text-[#a3a3a3be]'>
        The REAL challenge is turning clicks into conversions.

        </div>

        {/* boxes */}

        <div className=" flex flex-col md:flex-row justify-center items-center gap-20 mt-20">
          <div className=" flex flex-col items-center justify-center gap-3">
            <BsQuestionLg size={50}/>
            <h3 className="text-2xl font-bold mt-2">Lost in the Competition</h3>
            <p className="text-[#a3a3a3be] mt-2">
            In a sea of competitors, it's hard to make your brand <br /> stand out when everyone is fighting for attention.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
          <ImSad size={50} />
          <h3 className="text-2xl font-bold mt-2">Leads not Following
            </h3>
            <p className="text-[#a3a3a3be] mt-2">
            Struggling to turn site visitors into leads? Your strategies <br />  might be missing the mark with your target audience.            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
          <SiConvertio size={50} />
          <h3 className="text-2xl font-bold mt-2">Customer Conversion Challenges

            </h3>
                        <p className="text-[#a3a3a3be] mt-2">
                        Getting clicks is just the start. The real challenge lies <br /> in converting those clicks into loyal customers.
                        </p>
          </div>
        </div>
    </div>
        
  )
}

export default Messageside;