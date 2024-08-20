import React from 'react';
import Image from 'next/image';
import person from "@/pic/person.webp"
import heart from "@/pic/heart.svg"

function Testimonials() {
  return (

    <section className='px-20 py-20'>
        <div className="relative flex flex-row items-center text-center justify-center space-x-2 text-3xl md:text-5xl font-bold mt-2 mb-10"><h2>Loved<span className="inline-block pl-2 pr-2 xl:pl-5 xl:pr-5"><Image alt="scribble" loading="eager" width="70" height="50" decoding="async" data-nimg="1" className="w-[30px] lg:w-[40px] xl:w-[50px]"  src={heart}/></span>by businesses worldwide</h2></div>






        {/* first */}

        <div className=' flex flex-row justify-between'>


        <div className="h-full w-[26rem] ">
      <div className="text-left h-full bg-[#131313] text-[#ffffff] p-4 border border-[#1e1e1e] rounded-md shadow-sm">
        <div className="h-full ">
          <div className="flex items-center h-full">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                src={person}
                  alt="Kelvin H. avatar"
                  className="w-10 h-10"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="ml-4 w-full">
                <div className="text-sm font-medium">Kelvin H.</div>
                <div className="text-xs text-gray-400">Studio.Design</div>
              </div>
              <div className="ml-auto flex-none"></div>
            </div>
          </div>
          <div className="my-1">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -10 187.673 179.503"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                >
                  <path d="M187.183 57.47a9.955 9.955 0 00-8.587-6.86l-54.167-4.918-21.42-50.134a9.978 9.978 0 00-9.172-6.052 9.972 9.972 0 00-9.172 6.061l-21.42 50.125L9.07 50.611a9.973 9.973 0 00-8.578 6.858 9.964 9.964 0 002.917 10.596l40.944 35.908-12.073 53.184a9.97 9.97 0 003.878 10.298A9.953 9.953 0 0042 169.357a9.937 9.937 0 005.114-1.424l46.724-27.925 46.707 27.925a9.936 9.936 0 0010.964-.478 9.979 9.979 0 003.88-10.298l-12.074-53.184 40.944-35.9a9.98 9.98 0 002.925-10.604zm0 0"></path>
                </svg>
              ))}
            </div>
          </div>
          <div className="text-left opacity-100">
            <p className="overflow-hidden text-ellipsis">
              I’ve had a great experience working with Namya on our template assets. Her turnaround time is always fast, taking our research and turning it into polished designs in just a few days.

              Namya is also incredibly open to feedback. We’ve been communicating through Slack and Figma comments, and she always explains her design choices clearly. This leads to really productive conversations. I’d recommend working with Namya – she’s a rockstar!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="h-full w-[26rem] ">
      <div className="text-left h-full bg-[#131313] text-[#ffffff] p-4 border border-[#1e1e1e] rounded-md shadow-sm">
        <div className="h-full ">
          <div className="flex items-center h-full">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                src={person}
                  alt="Kelvin H. avatar"
                  className="w-10 h-10"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="ml-4 w-full">
                <div className="text-sm font-medium">Kelvin H.</div>
                <div className="text-xs text-gray-400">Studio.Design</div>
              </div>
              <div className="ml-auto flex-none"></div>
            </div>
          </div>
          <div className="my-1">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -10 187.673 179.503"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                >
                  <path d="M187.183 57.47a9.955 9.955 0 00-8.587-6.86l-54.167-4.918-21.42-50.134a9.978 9.978 0 00-9.172-6.052 9.972 9.972 0 00-9.172 6.061l-21.42 50.125L9.07 50.611a9.973 9.973 0 00-8.578 6.858 9.964 9.964 0 002.917 10.596l40.944 35.908-12.073 53.184a9.97 9.97 0 003.878 10.298A9.953 9.953 0 0042 169.357a9.937 9.937 0 005.114-1.424l46.724-27.925 46.707 27.925a9.936 9.936 0 0010.964-.478 9.979 9.979 0 003.88-10.298l-12.074-53.184 40.944-35.9a9.98 9.98 0 002.925-10.604zm0 0"></path>
                </svg>
              ))}
            </div>
          </div>
          <div className="text-left opacity-100">
            <p className="overflow-hidden text-ellipsis">
              I’ve had a great experience working with Namya on our template assets. Her turnaround time is always fast, taking our research and turning it into polished designs in just a few days.

              Namya is also incredibly open to feedback. We’ve been communicating through Slack and Figma comments, and she always explains her design choices clearly. This leads to really productive conversations. I’d recommend working with Namya – she’s a rockstar!
            </p>
          </div>
        </div>
      </div>
    </div>


    <div className="h-full w-[26rem] ">
      <div className="text-left h-full bg-[#131313] text-[#ffffff] p-4 border border-[#1e1e1e] rounded-md shadow-sm">
        <div className="h-full ">
          <div className="flex items-center h-full">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                src={person}
                  alt="Kelvin H. avatar"
                  className="w-10 h-10"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="ml-4 w-full">
                <div className="text-sm font-medium">Kelvin H.</div>
                <div className="text-xs text-gray-400">Studio.Design</div>
              </div>
              <div className="ml-auto flex-none"></div>
            </div>
          </div>
          <div className="my-1">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -10 187.673 179.503"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                >
                  <path d="M187.183 57.47a9.955 9.955 0 00-8.587-6.86l-54.167-4.918-21.42-50.134a9.978 9.978 0 00-9.172-6.052 9.972 9.972 0 00-9.172 6.061l-21.42 50.125L9.07 50.611a9.973 9.973 0 00-8.578 6.858 9.964 9.964 0 002.917 10.596l40.944 35.908-12.073 53.184a9.97 9.97 0 003.878 10.298A9.953 9.953 0 0042 169.357a9.937 9.937 0 005.114-1.424l46.724-27.925 46.707 27.925a9.936 9.936 0 0010.964-.478 9.979 9.979 0 003.88-10.298l-12.074-53.184 40.944-35.9a9.98 9.98 0 002.925-10.604zm0 0"></path>
                </svg>
              ))}
            </div>
          </div>
          <div className="text-left opacity-100">
            <p className="overflow-hidden text-ellipsis">
              I’ve had a great experience working with Namya on our template assets. Her turnaround time is always fast, taking our research and turning it into polished designs in just a few days.

              Namya is also incredibly open to feedback. We’ve been communicating through Slack and Figma comments, and she always explains her design choices clearly. This leads to really productive conversations. I’d recommend working with Namya – she’s a rockstar!
            </p>
          </div>
        </div>
      </div>
    </div>


        </div>


        {/* second  */}

        <div className=' flex flex-row justify-between mt-10'>


        <div className="h-full w-[26rem] ">
      <div className="text-left h-full bg-[#131313] text-[#ffffff] p-4 border border-[#1e1e1e] rounded-md shadow-sm">
        <div className="h-full ">
          <div className="flex items-center h-full">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                src={person}
                  alt="Kelvin H. avatar"
                  className="w-10 h-10"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="ml-4 w-full">
                <div className="text-sm font-medium">Kelvin H.</div>
                <div className="text-xs text-gray-400">Studio.Design</div>
              </div>
              <div className="ml-auto flex-none"></div>
            </div>
          </div>
          <div className="my-1">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -10 187.673 179.503"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                >
                  <path d="M187.183 57.47a9.955 9.955 0 00-8.587-6.86l-54.167-4.918-21.42-50.134a9.978 9.978 0 00-9.172-6.052 9.972 9.972 0 00-9.172 6.061l-21.42 50.125L9.07 50.611a9.973 9.973 0 00-8.578 6.858 9.964 9.964 0 002.917 10.596l40.944 35.908-12.073 53.184a9.97 9.97 0 003.878 10.298A9.953 9.953 0 0042 169.357a9.937 9.937 0 005.114-1.424l46.724-27.925 46.707 27.925a9.936 9.936 0 0010.964-.478 9.979 9.979 0 003.88-10.298l-12.074-53.184 40.944-35.9a9.98 9.98 0 002.925-10.604zm0 0"></path>
                </svg>
              ))}
            </div>
          </div>
          <div className="text-left opacity-100">
            <p className="overflow-hidden text-ellipsis">
              I’ve had a great experience working with Namya on our template assets. Her turnaround time is always fast, taking our research and turning it into polished designs in just a few days.

              Namya is also incredibly open to feedback. We’ve been communicating through Slack and Figma comments, and she always explains her design choices clearly. This leads to really productive conversations. I’d recommend working with Namya – she’s a rockstar!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="h-full w-[26rem] ">
      <div className="text-left h-full bg-[#131313] text-[#ffffff] p-4 border border-[#1e1e1e] rounded-md shadow-sm">
        <div className="h-full ">
          <div className="flex items-center h-full">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                src={person}
                  alt="Kelvin H. avatar"
                  className="w-10 h-10"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="ml-4 w-full">
                <div className="text-sm font-medium">Kelvin H.</div>
                <div className="text-xs text-gray-400">Studio.Design</div>
              </div>
              <div className="ml-auto flex-none"></div>
            </div>
          </div>
          <div className="my-1">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -10 187.673 179.503"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                >
                  <path d="M187.183 57.47a9.955 9.955 0 00-8.587-6.86l-54.167-4.918-21.42-50.134a9.978 9.978 0 00-9.172-6.052 9.972 9.972 0 00-9.172 6.061l-21.42 50.125L9.07 50.611a9.973 9.973 0 00-8.578 6.858 9.964 9.964 0 002.917 10.596l40.944 35.908-12.073 53.184a9.97 9.97 0 003.878 10.298A9.953 9.953 0 0042 169.357a9.937 9.937 0 005.114-1.424l46.724-27.925 46.707 27.925a9.936 9.936 0 0010.964-.478 9.979 9.979 0 003.88-10.298l-12.074-53.184 40.944-35.9a9.98 9.98 0 002.925-10.604zm0 0"></path>
                </svg>
              ))}
            </div>
          </div>
          <div className="text-left opacity-100">
            <p className="overflow-hidden text-ellipsis">
              I’ve had a great experience working with Namya on our template assets. Her turnaround time is always fast, taking our research and turning it into polished designs in just a few days.

              Namya is also incredibly open to feedback. We’ve been communicating through Slack and Figma comments, and she always explains her design choices clearly. This leads to really productive conversations. I’d recommend working with Namya – she’s a rockstar!
            </p>
          </div>
        </div>
      </div>
    </div>


    <div className="h-full w-[26rem] ">
      <div className="text-left h-full bg-[#131313] text-[#ffffff] p-4 border border-[#1e1e1e] rounded-md shadow-sm">
        <div className="h-full ">
          <div className="flex items-center h-full">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                src={person}
                  alt="Kelvin H. avatar"
                  className="w-10 h-10"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="ml-4 w-full">
                <div className="text-sm font-medium">Kelvin H.</div>
                <div className="text-xs text-gray-400">Studio.Design</div>
              </div>
              <div className="ml-auto flex-none"></div>
            </div>
          </div>
          <div className="my-1">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -10 187.673 179.503"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                >
                  <path d="M187.183 57.47a9.955 9.955 0 00-8.587-6.86l-54.167-4.918-21.42-50.134a9.978 9.978 0 00-9.172-6.052 9.972 9.972 0 00-9.172 6.061l-21.42 50.125L9.07 50.611a9.973 9.973 0 00-8.578 6.858 9.964 9.964 0 002.917 10.596l40.944 35.908-12.073 53.184a9.97 9.97 0 003.878 10.298A9.953 9.953 0 0042 169.357a9.937 9.937 0 005.114-1.424l46.724-27.925 46.707 27.925a9.936 9.936 0 0010.964-.478 9.979 9.979 0 003.88-10.298l-12.074-53.184 40.944-35.9a9.98 9.98 0 002.925-10.604zm0 0"></path>
                </svg>
              ))}
            </div>
          </div>
          <div className="text-left opacity-100">
            <p className="overflow-hidden text-ellipsis">
              I’ve had a great experience working with Namya on our template assets. Her turnaround time is always fast, taking our research and turning it into polished designs in just a few days.

              Namya is also incredibly open to feedback. We’ve been communicating through Slack and Figma comments, and she always explains her design choices clearly. This leads to really productive conversations. I’d recommend working with Namya – she’s a rockstar!
            </p>
          </div>
        </div>
      </div>
    </div>


        </div>

        


    </section>
  
  );
}

export default Testimonials;
