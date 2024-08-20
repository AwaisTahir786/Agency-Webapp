import React from 'react'

const Smash = () => {
  return (
    <div className="flex items-center text-center justify-center flex-col pt-20 lg:pt-[12rem]">
        <h2 className="relative text-3xl md:text-5xl font-bold  text-center mt-4 mb-6">I guess all Im trying to say is you <br /> should smash the damn button.</h2>
        <div className="w-full lg:w-[60vw] mt-8"><a href="https://cal.com/namya/15min" >
        <button className="rounded-xl bg-white text-black  border  h-[5rem] md:h-[7rem] lg:px-16 text-2xl md:text-3xl font-bold text-primary cta-btn cursor-pointer hover:scale-105 transition duration-300 ease-out w-full hover:bg-[#131313] hover:text-white">Smash the damn button</button>
        </a>
        </div>
        <span className="text-[#A3A3A3] text-xs lg:text-base mt-4">Be quick! Spots are almost gone for</span><div className="mt-10"></div></div>
  )
}

export default Smash