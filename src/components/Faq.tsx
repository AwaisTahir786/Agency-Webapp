import React from "react";
import Image from "next/image";
import female from "@/pic/female.svg"
import bolt from "@/pic/bolt.svg"

const FAQ = () => {
  return (
    <div>
            <h2 className="text-3xl md:text-5xl font-bold  text-center mt-10 mb-16">Questions? Answers.</h2>

            <div
      id="faq"
      className="lg:mt-[0rem] space-y-6 px-10 pt-10 pb-20 mx-20 my-20  bg-gradient-to-t bg-[#131313] rounded-2xl flex flex-col justify-start"
    >
      <div className="flex flex-col lg:flex-row items-start lg:space-x-20 lg:pt-10 space-y-10 lg:space-y-0">
        <div className="grid md:w-2/3 divide-y divide-white/10">
          <div className="py-5">
            <details className="group w-full">
              <summary className="flex cursor-pointer list-none items-center justify-between  space-x-5">
                <span className="lg:text-2xl text-white font-medium ">
                  Whos behind Supafast
                </span>
                <span className="transition duration-300 group-open:rotate-45">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="text-white text-xl w-8 h-8 p-1 bg-white/10 rounded-full"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </summary>
              <div className="pt-3">
                <span className="group-open:animate-fadeIn description text-start leading-7 w-1/2 text-lg">
                  Surprising fact: Supafast started as a one-person agency and
                  has grown into a remote, global team. Collaborate directly
                  with Namya, the founder and design engineer, and our talented
                  professionals worldwide. Weve worked with clients from 15+
                  countries, including Y Combinator startups, early-stage
                  ventures, angel investors, and creators.
                </span>
              </div>
            </details>
          </div>
          <div className="py-5">
            <details className="group w-full">
              <summary className="flex cursor-pointer list-none items-center justify-between  space-x-5">
                <span className="lg:text-2xl text-white font-medium ">
                  Why not hire a full-time designer and developer
                </span>
                <span className="transition duration-300 group-open:rotate-45">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="text-white text-xl w-8 h-8 p-1 bg-white/10 rounded-full"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </summary>
              <div className="pt-3">
                <span className="group-open:animate-fadeIn description text-start leading-7 w-1/2 text-lg">
                  Hiring full-time professionals can be a headache. Its costlier
                  and more challenging to manage. A senior designer might set
                  you back $100k+, while a developer could easily exceed $300k.
                  Thats a total of $500k+ when you factor in benefits, vacation
                  days, and more.
                </span>
              </div>
            </details>
          </div>
          <div className="py-5">
            <details className="group w-full">
              <summary className="flex cursor-pointer list-none items-center justify-between  space-x-5">
                <span className="lg:text-2xl text-white font-medium ">
                  What if Im not happy with the results?
                </span>
                <span className="transition duration-300 group-open:rotate-45">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="text-white text-xl w-8 h-8 p-1 bg-white/10 rounded-full"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </summary>
              <div className="pt-3">
                <span className="group-open:animate-fadeIn description text-start leading-7 w-1/2 text-lg">
                  This doesnt happen very often, if youre not happy, we offer
                  unlimited revisions. Well continue refining the project until
                  youre 100% content.
                </span>
              </div>
            </details>
          </div>
          <div className="py-5">
            <details className="group w-full">
              <summary className="flex cursor-pointer list-none items-center justify-between  space-x-5">
                <span className="lg:text-2xl text-white font-medium ">
                  How quickly will I receive my project?
                </span>
                <span className="transition duration-300 group-open:rotate-45">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="text-white text-xl w-8 h-8 p-1 bg-white/10 rounded-full"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </summary>
              <div className="pt-3">
                <span className="group-open:animate-fadeIn description text-start leading-7 w-1/2 text-lg">
                  True to our name, were Supafast! Typically, most requests are
                  fulfilled in just 48 hours or less. However, for more complex
                  requests, the turnaround time may be a bit longer. Rest
                  assured, well keep you informed every step of the way.{" "}
                </span>
              </div>
            </details>
          </div>
          <div className="py-5">
            <details className="group w-full">
              <summary className="flex cursor-pointer list-none items-center justify-between  space-x-5">
                <span className="lg:text-2xl text-white font-medium ">
                  Can I get a refund?
                </span>
                <span className="transition duration-300 group-open:rotate-45">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="text-white text-xl w-8 h-8 p-1 bg-white/10 rounded-full"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </summary>
              <div className="pt-3">
                <span className="group-open:animate-fadeIn description text-start leading-7 w-1/2 text-lg">
                  Although we are unable to provide refunds as we allocate
                  dedicated time and resources to each client, we value
                  flexibility. You have the option to pause your service at any
                  time and resume it later, ensuring that you can fully benefit
                  from our collaboration.{" "}
                </span>
              </div>
            </details>
          </div>
        </div>

        {/* second  */}
        <div className="relative lg:w-1/3">
          <Image
            alt="scribble"
            loading="eager"
            width="30"
            height="50"
            decoding="async"
            data-nimg="1"
            className="w-full"
            src={bolt}
          />
          <div className="p-5 md:p-10 absolute top-0 left-0 flex flex-col items-center justify-center text-center w-full space-y-5">
            <a href="https://twitter.com/namyakhann">
              <Image
                alt="scribble"
                loading="eager"
                width="30"
                height="50"
                decoding="async"
                data-nimg="1"
                className="w-[100px] xl:w-[150px] cursor-pointer"
                src={female}
              />
            </a>
            <div className="flex flex-col items-center justify-center">
              <span className="lg:text-xl xl:text-2xl text-white font-medium ">
                Have more questions?
              </span>
              <span className="lg:text-xl xl:text-2xl text-white font-medium ">
                Book a FREE intro call.
              </span>
            </div>
            <a
              href="https://cal.com/namya/15min"
              className="rounded-xl bg-white text-black p-3.5 lg:p-4 px-10 lg:px-16 text-md lg:text-lg font-bold text-primary tracking-tight cta-btn cursor-pointer hover:scale-105 transition duration-300 ease-out"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </div>

    </div>
    
  );
};

export default FAQ;
