import Image from "next/image";
import Navbar from "@/components/Navbar";
import Navbartwo from "@/components/Navbartwo";
import Working from "@/components/Working";
import Homeside from "@/components/Homeside";
import { Crousal } from "@/components/Crousal";
import { LampEffect } from "@/components/LampEffect";
import Messageside from "@/components/Messageside";
import Solution from "@/components/Solution";
import { CrousalSecond } from "@/components/Crousalsecond";
import Ship from "@/components/Ship";
import Price from "@/components/Price";
import FAQ from "@/components/Faq";
import Smash from "@/components/Smash";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testmonials";



export default function Home() {
  return (
    <main className="w-full md:items-center md:justify-center bg-black bg-grid-white/[0.02] relative overflow-hidden ">
      <Navbar/>
      <Navbartwo/>
      <Homeside/>
      <div className="hidden md:flex">      <LampEffect/>      </div>
      <Crousal/>
      <Messageside/>
      <Solution/>
      <CrousalSecond/>
      <Working/>
      <Ship/>
      <Price/>
      <FAQ/>
      <Testimonials/>
      <Smash/>
      <Footer/>

    </main>
  );
}
