import React from 'react';

const PricingSection = () => {
  const pricingPlans = [
    {
      id: 1,
      name: 'Lite',
      nameColor: 'text-[#A9E1FF]',
      description: 'A smart assistant for staying organized and on top of the day-to-day.',
      descriptionColor: 'text-[#A9E1FF]',
      price: '29',
      priceColor: 'text-[#A9E1FF]',
      currency: '$',
      features: [
        { text: '500 tasks/user*', link: true },
        { text: 'All features', link: false }
      ],
      checkmarkColor: 'bg-[#A9E1FF]',
      buttonColor: 'bg-[#87ceeb]',
      buttonText: 'text-gray-900',
      eyebrowText: 'AUTOMATE YOUR BUSYWORK'
    },
    {
      id: 2,
      name: 'Standard',
      nameColor: 'text-[#F7CF49]',
      description: 'A smart assistant for handling more complexity without the chaos.',
      descriptionColor: 'text-[#F7CF49]',
      price: '59',
      priceColor: 'text-[#F7CF49]',
      currency: '$',
      features: [
        { text: '2,000 tasks/user*', link: true },
        { text: 'All features', link: false }
      ],
      checkmarkColor: 'bg-[#F7CF49]',
      buttonColor: 'bg-[#f4c542]',
      buttonText: 'text-gray-900',
      eyebrowText: 'HANDLE THOUSANDS OF TASKS'
    },
    {
      id: 3,
      name: 'Ultimate',
      nameColor: 'text-[#FFFCF2]',
      description: 'A smart assistant for automating heavy workflows and high output.',
      descriptionColor: 'text-[#FFFCF2]',
      price: '149',
      priceColor: 'text-[#FFFCF2]',
      currency: '$',
      features: [
        { text: '10,000 tasks/user*', link: true },
        { text: 'All features', link: false }
      ],
      checkmarkColor: 'bg-white',
      buttonColor: 'bg-white',
      buttonText: 'text-gray-900',
      eyebrowText: 'FOR HIGH-VOLUME WORKFLOWS'
    }
  ];

  const VerticalBarsSVG = () => (
    <svg 
      width="2198" 
      height="180" 
      viewBox="0 0 2198 180" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="text-gray-500 h-16"
    >
      <path 
        d="M1 0V180M14.8987 0V180M28.7975 0V180M42.6962 0V180M56.5949 0V180M70.4937 0V180M84.3924 0V180M98.2911 0V180M112.19 0V180M126.089 0V180M139.987 0V180M153.886 0V180M167.785 0V180M181.684 0V180M195.582 0V180M209.481 0V180M223.38 0V180M237.278 0V180M251.177 0V180M265.076 0V180M278.975 0V180M292.873 0V180M306.772 0V180M320.671 0V180M334.57 0V180M348.468 0V180M362.367 0V180M376.266 0V180M390.165 0V180M404.063 0V180M417.962 0V180M431.861 0V180M445.759 0V180M459.658 0V180M473.557 0V180M487.456 0V180M501.354 0V180M515.253 0V180M529.152 0V180M543.051 0V180M556.949 0V180M570.848 0V180M584.747 0V180M598.646 0V180M612.544 0V180M626.443 0V180M640.342 0V180M654.241 0V180M668.139 0V180M682.038 0V180M695.937 0V180M709.835 0V180M723.734 0V180M737.633 0V180M751.532 0V180M765.43 0V180M779.329 0V180M793.228 0V180M807.127 0V180M821.025 0V180M834.924 0V180M848.823 0V180M862.722 0V180M876.62 0V180M890.519 0V180M904.418 0V180M918.316 0V180M932.215 0V180M946.114 0V180M960.013 0V180M973.911 0V180M987.81 0V180M1001.71 0V180M1015.61 0V180M1029.51 0V180M1043.41 0V180M1057.3 0V180M1071.2 0V180M1085.1 0V180M1099 0V180M1112.9 0V180M1126.8 0V180M1140.7 0V180M1154.59 0V180M1168.49 0V180M1182.39 0V180M1196.29 0V180M1210.19 0V180M1224.09 0V180M1237.99 0V180M1251.89 0V180M1265.78 0V180M1279.68 0V180M1293.58 0V180M1307.48 0V180M1321.38 0V180M1335.28 0V180M1349.18 0V180M1363.08 0V180M1376.97 0V180M1390.87 0V180M1404.77 0V180M1418.67 0V180M1432.57 0V180M1446.47 0V180M1460.37 0V180M1474.27 0V180M1488.16 0V180M1502.06 0V180M1515.96 0V180M1529.86 0V180M1543.76 0V180M1557.66 0V180M1571.56 0V180M1585.46 0V180M1599.35 0V180M1613.25 0V180M1627.15 0V180M1641.05 0V180M1654.95 0V180M1668.85 0V180M1682.75 0V180M1696.65 0V180M1710.54 0V180M1724.44 0V180M1738.34 0V180M1752.24 0V180M1766.14 0V180M1780.04 0V180M1793.94 0V180M1807.84 0V180M1821.73 0V180M1835.63 0V180M1849.53 0V180M1863.43 0V180M1877.33 0V180M1891.23 0V180M1905.13 0V180M1919.03 0V180M1932.92 0V180M1946.82 0V180M1960.72 0V180M1974.62 0V180M1988.52 0V180M2002.42 0V180M2016.32 0V180M2030.22 0V180M2044.11 0V180M2058.01 0V180M2071.91 0V180M2085.81 0V180M2099.71 0V180M2113.61 0V180M2127.51 0V180M2141.41 0V180M2155.3 0V180M2169.2 0V180M2183.1 0V180M2197 0V180" 
        stroke="currentColor" 
        strokeWidth="1"
      />
    </svg>
  );

  return (
    <section className="w-full bg-[#1A1A1A]">
      {/* Top Content */}
      <div className="max-w-[1280px] mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span
            className="bg-[#F7CF49] text-black px-4 py-1.5 text-[12px] font-medium tracking-wide uppercase inline-block"
            style={{ fontFamily: 'Geist Mono, monospace' }}
          >
            PRICING
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-white text-[56px] leading-[1.1] font-normal mb-6"
          style={{
            fontFamily: 'Instrument Sans Variable, sans-serif',
            fontVariationSettings: "'wght' 80"
          }}
        >
          Get Quin free for 2 weeks
        </h2>

        {/* Description */}
        <p
          className="text-gray-400 text-[16px] leading-relaxed max-w-[800px] mx-auto"
          style={{ fontFamily: 'Instrument Sans Variable, sans-serif' }}
        >
          Get started free for 14 days. Whether it's just you or your whole team, Quin gives you <br />
          the same smart features to handle notes, follow-ups, and updates—automatically.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-[1280px] mx-auto px-6 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-gray-700">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`bg-[#1A1A1A] p-8 border-r border-gray-700 ${
                index === 2 ? 'border-r-0' : ''
              }`}
            >
              {/* Plan Name */}
              <h3
                className={`${plan.nameColor} text-[44px] leading-[1.1] font-normal mb-4`}
                style={{ fontFamily: 'Instrument Sans Variable, sans-serif' }}
              >
                {plan.name}
              </h3>

              {/* Plan Description */}
              <p
                className={`${plan.descriptionColor} text-[14px] leading-relaxed mb-8`}
                style={{ fontFamily: 'Instrument Sans Variable, sans-serif' }}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline mb-2">
                <span
                  className={`${plan.priceColor} text-[32px]`}
                  style={{ fontFamily: 'Instrument Sans Variable, sans-serif' }}
                >
                  {plan.currency}
                </span>
                <span
                  className={`${plan.priceColor} text-[96px] leading-[1] font-normal`}
                  style={{ fontFamily: 'Instrument Sans Variable, sans-serif' }}
                >
                  {plan.price}
                </span>
                <span
                  className="text-gray-500 text-[12px] uppercase ml-2 tracking-wide"
                  style={{ fontFamily: 'Geist Mono, monospace' }}
                >
                  PER MONTH
                </span>
              </div>

              {/* Eyebrow Text */}
              <div
                className="text-gray-500 text-[12px] uppercase tracking-wide mb-8 opacity-60"
                style={{ fontFamily: 'Geist Mono, monospace' }}
              >
                {plan.eyebrowText}
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-5 h-5 ${plan.checkmarkColor} flex items-center justify-center rounded`}>
                      <svg
                        className="w-3 h-3 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    {feature.link ? (
                      <a
                        href="/help/tasks"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${plan.descriptionColor} text-[14px] underline hover:opacity-80`}
                        style={{ fontFamily: 'Instrument Sans Variable, sans-serif' }}
                      >
                        {feature.text}
                      </a>
                    ) : (
                      <span
                        className={`${plan.descriptionColor} text-[14px]`}
                        style={{ fontFamily: 'Instrument Sans Variable, sans-serif' }}
                      >
                        {feature.text}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons Row with SVG Bars */}
        <div className="relative flex max-w-[1280px] mx-auto border-x border-gray-700">
          {/* Left SVG Bars */}
          <div className="overflow-hidden h-16 flex-1">
            <VerticalBarsSVG />
          </div>

          {/* Buttons Container */}
          <div className="flex items-center justify-center gap-0">
            {/* Button 1 - Blue */}
            <button
              className="bg-[#87ceeb] text-gray-900 font-semibold hover:bg-[#87ceeb]/90 transition flex items-center justify-center gap-2"
              style={{ 
                width: '196px', 
                height: '64px',
                fontFamily: 'Geist Mono, monospace'
              }}
            >
              <span className="text-sm uppercase tracking-wide">FREE 14 DAY TRIAL</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Button 2 - Yellow */}
            <button
              className="bg-[#f4c542] text-gray-900 font-semibold hover:bg-[#f4c542]/90 transition flex items-center justify-center gap-2"
              style={{ 
                width: '196px', 
                height: '64px',
                fontFamily: 'Geist Mono, monospace'
              }}
            >
              <span className="text-sm uppercase tracking-wide">FREE 14 DAY TRIAL</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Button 3 - White */}
            <button
              className="bg-white text-gray-900 font-semibold hover:bg-white/90 transition flex items-center justify-center gap-2"
              style={{ 
                width: '196px', 
                height: '64px',
                fontFamily: 'Geist Mono, monospace'
              }}
            >
              <span className="text-sm uppercase tracking-wide">FREE 14 DAY TRIAL</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Right SVG Bars */}
          <div className="overflow-hidden h-16 flex-1">
            <VerticalBarsSVG />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;