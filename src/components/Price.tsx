
export default function Price() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-lg uppercase tracking-widest text-center mb-2 text-[#9c9b9ba8]">
        Pricing
      </h1>
      <h2 className="text-5xl font-bold text-center mb-8">
      Ready to supafast your conversions?

      </h2>
      <div className="flex flex-col md:flex-row gap-6 mt-10">
        <div className="bg-[#3635354e] p-10 rounded-2xl text-white w-full max-w-md">
          <div className="mb-4 flex flex-col">
            <div className="text-lg font-semibold">One-off</div>
            <div className="text-3xl font-bold mb-2 mt-6">$2497</div>
            <div className="text-sm mb-4 text-[#9c9b9ba8]">
              Launch your dream site in 6 days!
            </div>
            <p className="text-sm mb-4">
              Perfect for single, high-impact, conversion-focused landing pages.
            </p>

            <button className="inline-flex items-center text-black  justify-center rounded-xl bg-white p-3.5 lg:py-[14px] px-10 lg:px-[70px] text-md lg:text-lg font-bold text-primary tracking-tight cta-btn cursor-pointer hover:scale-105 transition duration-300 ease-out w-full lg:w-auto">
              {" "}
              Book a Call with Namya
            </button>
          </div>

          {/* first  */}
          <div className="space-y-4 mt-12">
            <h3 className="text-lg font-semibold">Services:</h3>
            <ul className="text-sm space-y-1 flex flex-col gap-2">
              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Branding</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Copywriting</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Creative Strategy</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>One-page Landing Page</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Custom Graphics / Illustrations</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent text-[#9c9b9ba8]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock text-white/50 h-3 w-3 flex-none"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>Pitch Decks</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent text-[#9c9b9ba8]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock text-white/50 h-3 w-3 flex-none"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>Development</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent text-[#9c9b9ba8]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock text-white/50 h-3 w-3 flex-none"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>Web/Mobile Apps</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent text-[#9c9b9ba8]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock text-white/50 h-3 w-3 flex-none"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>Multipage Websites</span>
              </li>
              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent text-[#9c9b9ba8]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock text-white/50 h-3 w-3 flex-none"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>Social Media Assets</span>
              </li>
            </ul>



            <h3 className="text-lg font-semibold">Features:</h3>
            <ul className="text-sm space-y-1 flex flex-col gap-2">
              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>2x revisions</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>24/5 Support</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Figma file delivery</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Updates every 48 hours</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Async communication via Slack</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent text-[#9c9b9ba8]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock text-white/50 h-3 w-3 flex-none"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>Full Team access</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent text-[#9c9b9ba8]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock text-white/50 h-3 w-3 flex-none"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>Bi-Weekly progress meetings</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent text-[#9c9b9ba8]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock text-white/50 h-3 w-3 flex-none"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>Unlimited brands / users</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent text-[#9c9b9ba8]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock text-white/50 h-3 w-3 flex-none"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>Expert project management</span>
              </li>
              
            </ul>
          </div>
        </div>

        {/* second  */}
        <div className="bg-[#3635354e] p-10 rounded-2xl text-white w-full max-w-md">
          <div className="mb-4 flex flex-col">
            <div className="text-lg font-semibold">Retainer</div>
            <div className="text-3xl font-bold mb-2 mt-6">$4197/mo</div>
            <div className="text-sm mb-4 text-[#9c9b9ba8]">
            Pause / Cancel anytime
            </div>
            <p className="text-sm mb-4">
            Ideal for those who need an ongoing design support.
                        </p>

            <button className="inline-flex items-center text-black mt-5 justify-center rounded-xl bg-white p-3.5 lg:py-[14px] px-10 lg:px-[70px] text-md lg:text-lg font-bold text-primary tracking-tight cta-btn cursor-pointer hover:scale-105 transition duration-300 ease-out w-full lg:w-auto">
              {" "}
              Book a Call with Namya
            </button>
          </div>

          {/* first  */}
          <div className="space-y-4 mt-12">
            <h3 className="text-lg font-semibold">Services:</h3>
            <ul className="text-sm space-y-1 flex flex-col gap-2">
              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Branding</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Copywriting</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Creative Strategy</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>One-page Landing Page</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Custom Graphics / Illustrations</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Pitch Decks</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Development</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Web/Mobile Apps</span>
              </li>


              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Multipage Websites</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Social Media Assets</span>
              </li>


              




            </ul>



            <h3 className="text-lg font-semibold">Features:</h3>
            <ul className="text-sm space-y-1 flex flex-col gap-2">
              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>2x revisions</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>24/5 Support</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Figma file delivery</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Updates every 48 hours</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Async communication via Slack</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Full Team access</span>
              </li>

              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Bi-Weekly progress meetings</span>
              </li>

              
              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Unlimited brands / users</span>
              </li>

              
              <li className="flex items-center gap-2 text-base p-0 py-1 hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-3 w-3 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span>Expert project management</span>
              </li>

              
              
            </ul>
          </div>
        </div>
      </div>
      <p className="text-sm text-center mt-8">
        After your one-off project, upgrade to our Monthly Retainer within 3
        months for just $1,700 more. <br />
        <a href="#" className="underline">
          Upgrade now, save $2497
        </a>
      </p>
    </div>
  );
}
