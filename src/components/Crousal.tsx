"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/CrousalData";
import img1 from "@/pic/crousal/arrow.png"
import img2 from "@/pic/crousal/clinify.png"
import img3 from "@/pic/crousal/gracenote.png"
import img4 from "@/pic/crousal/storelink.png"
import img5 from "@/pic/crousal/stradaops.png"
import img6 from "@/pic/crousal/unlayer-1.png"
import img7 from "@/pic/crousal/w3g.png"
import img8 from "@/pic/crousal/weavepay.png"




export function Crousal() {
  const cards = data.map((card:any, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 md:mt-[-350px]">
      {/* <h2 className=" max-w-8xl pl-10 mx-auto text-xl md:text-5xl font-bold text-white">
        Some Recent Work
      </h2> */}
      <Carousel items={cards} />

      {/* button  */}
    <div className="flex justify-center items-center ">
    <button className="inline-flex items-center text-black  justify-center rounded-xl bg-white p-3.5 mt-4 lg:p-4 px-10 lg:px-[70px] text-md lg:text-lg font-bold text-primary tracking-tight cta-btn cursor-pointer hover:scale-105 transition duration-300 ease-out w-auto lg:w-auto"
      > View recent work
       </button>
    </div>
    </div>
  );
}

// const DummyContent = () => {
//   return (
//     <>
//       {[...new Array(3).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 The first rule of Apple club is that you boast about Apple club.
//               </span>{" "}
//               Keep a journal, quickly jot down a grocery list, and take amazing
//               class notes. Want to convert those notes to text? No problem.
//               Langotiya jeetu ka mara hua yaar is ready to capture every
//               thought.
//             </p>
//             <Image
//               src="https://assets.aceternity.com/macbook.png"
//               alt="Macbook mockup from Aceternity UI"
//               height="500"
//               width="1000"
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             />
//           </div>
//         );
//       })}
//     </>
//   );
// };

const data = [
  {
    // category: "Artificial Intelligence",
    // title: "You can do more with AI.",
    src: img1,
    // content: <DummyContent />,
  },
  {
    // category: "Productivity",
    // title: "Enhance your productivity.",
    src: img2,
    // content: <DummyContent />,
  },
  {
    // category: "Product",
    // title: "Launching the new Apple Vision Pro.",
    src: img7,
    // content: <DummyContent />,
  },

  {
    // category: "Product",
    // title: "Maps for your iPhone 15 Pro Max.",
    src: img4,
    // content: <DummyContent />,
  },
  {
    // category: "iOS",
    // title: "Photography just got better.",
    src: img5,
    // content: <DummyContent />,
  },
  {
    // category: "Hiring",
    // title: "Hiring for a Staff Software Engineer",
    src: img6,
    // content: <DummyContent />,
  },
  {
    // category: "Hiring",
    // title: "Hiring for a Staff Software Engineer",
    src: img1,
    // content: <DummyContent />,
  },{
    // category: "Hiring",
    // title: "Hiring for a Staff Software Engineer",
    src: img7,
    // content: <DummyContent />,
  },{
    // category: "Hiring",
    // title: "Hiring for a Staff Software Engineer",
    src: img3,
    // content: <DummyContent />,
  },
  {
    // category: "Hiring",
    // title: "Hiring for a Staff Software Engineer",
    src: img8,
    // content: <DummyContent />,
  },
];
