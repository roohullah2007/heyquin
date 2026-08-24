import ScrollingBarsWithButtons from './ScrollingBarsWithButtons';

export default function TestimonialSection() {
  return (
    <section className="w-full py-16 bg-[#A9E1FF] relative overflow-hidden">
      <div className="flex items-center gap-10 justify-center max-w-[1280px] mx-auto border-x border-gray-300">
        {/* Left Content Section */}
        <div className="flex flex-col h-full gap-y-40 justify-between flex-1 px-6">
          {/* Testimonial Quote */}
          <div className="flex">
            <div>
              <h2
                className="text-black text-[56px] leading-[1.1] font-normal mb-8"
                style={{ fontFamily: '"instrument-sans-variable", sans-serif', fontVariationSettings: "'wght' 80" }}
              >
                "Quin eliminated the admin work that used to hang over my head. Now I focus on clients, not tasks."
              </h2>

              <p
                className="text-gray-700 text-[16px] leading-relaxed"
                style={{ fontFamily: '"instrument-sans-variable", sans-serif' }}
              >
                — Dan Westfall CFP®, CFS®, Founder, Client Focused Financial
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-8 border-t border-gray-400">
            {/* Stat 1 */}
            <div>
              <h3
                className="text-black text-[56px] leading-[1.1] font-normal mb-4"
                style={{ fontFamily: '"instrument-sans-variable", sans-serif' }}
              >
                40+
              </h3>
              <p
                className="text-gray-700 text-[16px] leading-relaxed"
                style={{ fontFamily: '"instrument-sans-variable", sans-serif' }}
              >
                Hours of admin work <br className="hidden sm:block" />
                offloaded each month
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <h3
                className="text-black text-[56px] leading-[1.1] font-normal mb-4"
                style={{ fontFamily: '"instrument-sans-variable", sans-serif' }}
              >
                5x
              </h3>
              <p
                className="text-gray-700 text-[16px] leading-relaxed"
                style={{ fontFamily: '"instrument-sans-variable", sans-serif' }}
              >
                Faster follow-up <br className="hidden sm:block" />
                after client meetings
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex items-center justify-center flex-1">
          <div className="relative w-full h-[770px]">
            <img
              src="/images/laptop.jpg"
              alt="Quin interface on tablet"
              className="w-full h-full object-cover"
            />

            {/* Decorative Elements */}
            
            <div className="absolute -bottom-20 -right-6 w-14 h-14 bg-yellow-300 rounded-full flex items-center justify-center z-10">
              <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <ScrollingBarsWithButtons />
    </section>
  );
}
