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

      {/* SVG Bars and Buttons Section */}
      <div className="relative flex max-w-[1280px] mx-auto bg-[#A9E1FF] border-x border-gray-300">
        <div className="overflow-hidden h-[64px]" style={{ willChange: 'transform' }}>
          <div className="inline-flex animate-marquee-slow" style={{ transformStyle: 'preserve-3d' }}>
            <div className="flex-shrink-0">
              <svg width="2198" height="180" viewBox="0 0 2198 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
                <path d="M1 0V180M14.8987 0V180M28.7975 0V180M42.6962 0V180M56.5949 0V180M70.4937 0V180M84.3924 0V180M98.2911 0V180M112.19 0V180M126.089 0V180M139.987 0V180M153.886 0V180M167.785 0V180M181.684 0V180M195.582 0V180M209.481 0V180M223.38 0V180M237.278 0V180M251.177 0V180M265.076 0V180M278.975 0V180M292.873 0V180M306.772 0V180M320.671 0V180M334.57 0V180M348.468 0V180M362.367 0V180M376.266 0V180M390.165 0V180M404.063 0V180M417.962 0V180M431.861 0V180M445.759 0V180M459.658 0V180M473.557 0V180M487.456 0V180M501.354 0V180M515.253 0V180M529.152 0V180M543.051 0V180M556.949 0V180M570.848 0V180M584.747 0V180M598.646 0V180M612.544 0V180M626.443 0V180M640.342 0V180M654.241 0V180M668.139 0V180M682.038 0V180M695.937 0V180M709.835 0V180M723.734 0V180M737.633 0V180M751.532 0V180M765.43 0V180M779.329 0V180M793.228 0V180M807.127 0V180M821.025 0V180M834.924 0V180M848.823 0V180M862.722 0V180M876.62 0V180M890.519 0V180M904.418 0V180M918.316 0V180M932.215 0V180M946.114 0V180M960.013 0V180M973.911 0V180M987.81 0V180M1001.71 0V180M1015.61 0V180M1029.51 0V180M1043.41 0V180M1057.3 0V180M1071.2 0V180M1085.1 0V180M1099 0V180M1112.9 0V180M1126.8 0V180M1140.7 0V180M1154.59 0V180M1168.49 0V180M1182.39 0V180M1196.29 0V180M1210.19 0V180M1224.09 0V180M1237.99 0V180M1251.89 0V180M1265.78 0V180M1279.68 0V180M1293.58 0V180M1307.48 0V180M1321.38 0V180M1335.28 0V180M1349.18 0V180M1363.08 0V180M1376.97 0V180M1390.87 0V180M1404.77 0V180M1418.67 0V180M1432.57 0V180M1446.47 0V180M1460.37 0V180M1474.27 0V180M1488.16 0V180M1502.06 0V180M1515.96 0V180M1529.86 0V180M1543.76 0V180M1557.66 0V180M1571.56 0V180M1585.46 0V180M1599.35 0V180M1613.25 0V180M1627.15 0V180M1641.05 0V180M1654.95 0V180M1668.85 0V180M1682.75 0V180M1696.65 0V180M1710.54 0V180M1724.44 0V180M1738.34 0V180M1752.24 0V180M1766.14 0V180M1780.04 0V180M1793.94 0V180M1807.84 0V180M1821.73 0V180M1835.63 0V180M1849.53 0V180M1863.43 0V180M1877.33 0V180M1891.23 0V180M1905.13 0V180M1919.03 0V180M1932.92 0V180M1946.82 0V180M1960.72 0V180M1974.62 0V180M1988.52 0V180M2002.42 0V180M2016.32 0V180M2030.22 0V180M2044.11 0V180M2058.01 0V180M2071.91 0V180M2085.81 0V180M2099.71 0V180M2113.61 0V180M2127.51 0V180M2141.41 0V180M2155.3 0V180M2169.2 0V180M2183.1 0V180M2197 0V180" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </div>
            <div className="flex-shrink-0">
              <svg width="2198" height="180" viewBox="0 0 2198 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
                <path d="M1 0V180M14.8987 0V180M28.7975 0V180M42.6962 0V180M56.5949 0V180M70.4937 0V180M84.3924 0V180M98.2911 0V180M112.19 0V180M126.089 0V180M139.987 0V180M153.886 0V180M167.785 0V180M181.684 0V180M195.582 0V180M209.481 0V180M223.38 0V180M237.278 0V180M251.177 0V180M265.076 0V180M278.975 0V180M292.873 0V180M306.772 0V180M320.671 0V180M334.57 0V180M348.468 0V180M362.367 0V180M376.266 0V180M390.165 0V180M404.063 0V180M417.962 0V180M431.861 0V180M445.759 0V180M459.658 0V180M473.557 0V180M487.456 0V180M501.354 0V180M515.253 0V180M529.152 0V180M543.051 0V180M556.949 0V180M570.848 0V180M584.747 0V180M598.646 0V180M612.544 0V180M626.443 0V180M640.342 0V180M654.241 0V180M668.139 0V180M682.038 0V180M695.937 0V180M709.835 0V180M723.734 0V180M737.633 0V180M751.532 0V180M765.43 0V180M779.329 0V180M793.228 0V180M807.127 0V180M821.025 0V180M834.924 0V180M848.823 0V180M862.722 0V180M876.62 0V180M890.519 0V180M904.418 0V180M918.316 0V180M932.215 0V180M946.114 0V180M960.013 0V180M973.911 0V180M987.81 0V180M1001.71 0V180M1015.61 0V180M1029.51 0V180M1043.41 0V180M1057.3 0V180M1071.2 0V180M1085.1 0V180M1099 0V180M1112.9 0V180M1126.8 0V180M1140.7 0V180M1154.59 0V180M1168.49 0V180M1182.39 0V180M1196.29 0V180M1210.19 0V180M1224.09 0V180M1237.99 0V180M1251.89 0V180M1265.78 0V180M1279.68 0V180M1293.58 0V180M1307.48 0V180M1321.38 0V180M1335.28 0V180M1349.18 0V180M1363.08 0V180M1376.97 0V180M1390.87 0V180M1404.77 0V180M1418.67 0V180M1432.57 0V180M1446.47 0V180M1460.37 0V180M1474.27 0V180M1488.16 0V180M1502.06 0V180M1515.96 0V180M1529.86 0V180M1543.76 0V180M1557.66 0V180M1571.56 0V180M1585.46 0V180M1599.35 0V180M1613.25 0V180M1627.15 0V180M1641.05 0V180M1654.95 0V180M1668.85 0V180M1682.75 0V180M1696.65 0V180M1710.54 0V180M1724.44 0V180M1738.34 0V180M1752.24 0V180M1766.14 0V180M1780.04 0V180M1793.94 0V180M1807.84 0V180M1821.73 0V180M1835.63 0V180M1849.53 0V180M1863.43 0V180M1877.33 0V180M1891.23 0V180M1905.13 0V180M1919.03 0V180M1932.92 0V180M1946.82 0V180M1960.72 0V180M1974.62 0V180M1988.52 0V180M2002.42 0V180M2016.32 0V180M2030.22 0V180M2044.11 0V180M2058.01 0V180M2071.91 0V180M2085.81 0V180M2099.71 0V180M2113.61 0V180M2127.51 0V180M2141.41 0V180M2155.3 0V180M2169.2 0V180M2183.1 0V180M2197 0V180" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-0">
          <button className="bg-[#f4c542] text-gray-900 font-semibold hover:bg-[#f4c542]/90 transition flex items-center justify-center gap-2" style={{ width: '148px', height: '64px' }}>
            <span className="text-sm uppercase tracking-wide">GET DEMO</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
          <button className="bg-[#87ceeb] text-gray-900 font-semibold hover:bg-[#87ceeb]/90 transition flex items-center justify-center gap-2" style={{ width: '196px', height: '64px' }}>
            <span className="text-sm uppercase tracking-wide">TRY QUIN FREE</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
