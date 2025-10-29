import React from 'react';

const SecuritySection = () => {
  const securityFeatures = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
          <path d="M320 64C373 64 416 107 416 160L416 224L224 224L224 160C224 107 267 64 320 64zM192 160L192 224L128 224L128 576L512 576L512 224L448 224L448 160C448 89.3 390.7 32 320 32C249.3 32 192 89.3 192 160zM160 256L480 256L480 544L160 544L160 256zM336 352L336 336L304 336L304 464L336 464L336 352z"></path>
        </svg>
      ),
      title: 'SOC 2 compliant',
      description: 'SOC 2 compliance protocols ensure secure and compliant data handling.'
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
          <path d="M320 64L320 96L384 96L384 256L320 256L320 288L387.1 288C410.6 277.7 436.6 272 464 272C469.4 272 474.7 272.2 480 272.7L480 256L416 256L416 64L320 64zM96 352L96 384L160 384L160 544L96 544L96 576L256 576L256 544L192 544L192 352L96 352zM112 64L96 64L96 288L288 288L288 64L112 64zM128 256L128 96L256 96L256 256L128 256zM464 352C525.9 352 576 402.1 576 464C576 525.9 525.9 576 464 576C402.1 576 352 525.9 352 464C352 402.1 402.1 352 464 352zM464 608C543.5 608 608 543.5 608 464C608 384.5 543.5 320 464 320C384.5 320 320 384.5 320 464C320 543.5 384.5 608 464 608zM534.4 412.5L508.5 393.7L499.1 406.6L446.1 479.5C425.7 459 413 446.3 408 441.4L385.4 464C388.2 466.8 405.3 483.9 436.7 515.3L449.9 528.5L460.9 513.4L524.9 425.4L534.3 412.5z"></path>
        </svg>
      ),
      title: 'Robust encryption',
      description: 'AES-256 for storage and TLS 1.2/1.3 for secure communication.'
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
          <path d="M112.6 178.9L320 98.3L527.6 178.9C532.9 270 498.8 463.8 320 541.1C141.3 463.8 107.2 270 112.6 178.9zM559.6 177L558.3 156.5L539.1 149L331.6 68.5L320 64L308.5 68.5L101 149L81.8 156.5L80.6 177C77.7 226.9 85.5 303.3 117.9 377.9C150.6 453.2 208.9 527.9 307.3 570.5L320 576L332.7 570.5C431.1 527.9 489.4 453.2 522.1 377.9C554.5 303.2 562.3 226.9 559.4 177zM406.1 234.9L379 217.9L370.5 231.5L302.9 339.7C276.2 304.1 261.6 284.7 259.3 281.6L233.7 300.8L243.3 313.6L291.3 377.6L296.1 384L313 384L317.7 376.5L397.7 248.5L406.2 234.9z"></path>
        </svg>
      ),
      title: 'GDPR compliant',
      description: 'GDPR-compliant practices guarantee safe and secure data usage.'
    },
    {
      id: 4,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
          <path d="M256 64L576 64L576 576L64 576L64 192L256 192L256 64zM256 224L96 224L96 544L256 544L256 224zM288 544L544 544L544 96L288 96L288 544zM440 152L488 152L488 200L440 200L440 152zM392 152L392 200L344 200L344 152L392 152zM440 248L488 248L488 296L440 296L440 248zM392 248L392 296L344 296L344 248L392 248zM152 280L200 280L200 328L152 328L152 280zM392 344L392 392L344 392L344 344L392 344zM152 376L200 376L200 424L152 424L152 376zM488 344L488 392L440 392L440 344L488 344z"></path>
        </svg>
      ),
      title: 'Enterprise ready',
      description: 'Role-based access with SSO and audit tracking ensure secure, organized, and compliant team operations.'
    }
  ];

  return (
    <section className="w-full bg-[#FFFCF2]">
      {/* Top Content with background */}
      <div className="w-full bg-[#FFFCF2] py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          {/* Badge */}
          <div className="mb-8">
            <span
              className="bg-[#F4D03F] text-black px-4 py-1.5 text-[12px] font-medium tracking-wide uppercase inline-block"
              style={{ fontFamily: 'Geist Mono, monospace' }}
            >
              SECURITY
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-black text-[56px] leading-[1.1] font-normal mb-6"
            style={{
              fontFamily: 'Instrument Sans Variable, sans-serif',
              fontVariationSettings: "'wght' 80"
            }}
          >
            Your information <br />
            stays where it belongs
          </h2>

          {/* Description */}
          <p
            className="text-gray-700 text-[16px] leading-relaxed max-w-[600px]"
            style={{ fontFamily: 'Instrument Sans Variable, sans-serif' }}
          >
            Quin works with your data but never stores it, using <br />
            enterprise-grade protection for each secure interaction.
          </p>
        </div>
      </div>

      {/* Middle Section with Cards and Image - No background */}
      <div className="w-full px-6 py-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-4 ">
            {/* First Column - First Two Cards */}
            <div className="flex flex-col ">
              {securityFeatures.slice(0, 2).map((feature) => (
                <div
                  key={feature.id}
                  className="w-full h-[319px] bg-[#FFFCF2] border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col justify-between gap-2 h-full">
                    {/* Icon */}
                    <div className="w-8 h-8 mb-2">
                      {feature.icon}
                    </div>

                   <div className='flex flex-col'>
                     {/* Title */}
                     <h5
                      className="text-black text-[20px] font-semibold mb-2"
                      style={{ fontFamily: 'Instrument Sans Variable, sans-serif' }}
                    >
                      {feature.title}
                    </h5>

                    {/* Description */}
                    <p
                      className="text-gray-600 text-[16px] leading-relaxed"
                      style={{ fontFamily: 'Instrument Sans Variable, sans-serif' }}
                    >
                      {feature.description}
                    </p>
                   </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Middle Two Columns - Image spanning 2 columns */}
            <div className="col-span-2 flex items-center justify-center">
              <div className="relative w-[638px] h-[638px]">
                <img
                  src="/images/information.jpg"
                  alt="Quin security dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Last Column - Last Two Cards */}
            <div className="flex flex-col ">
              {securityFeatures.slice(2, 4).map((feature) => (
                <div
                  key={feature.id}
                  className="w-full h-[319px] bg-[#FFFCF2] border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col justify-between gap-2 h-full">
                    {/* Icon */}
                    <div className="w-8 h-8 mb-2">
                      {feature.icon}
                    </div>

                    <div className='flex flex-col'>
                      {/* Title */}
                      <h5
                        className="text-black text-[20px] font-semibold mb-2"
                        style={{ fontFamily: 'Instrument Sans Variable, sans-serif' }}
                      >
                        {feature.title}
                      </h5>

                      {/* Description */}
                      <p
                        className="text-gray-600 text-[16px] leading-relaxed"
                        style={{ fontFamily: 'Instrument Sans Variable, sans-serif' }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SVG Bars and CTA Buttons Section */}
          <div className="relative flex max-w-[1280px] mx-auto border-x border-gray-300">
            <div className="overflow-hidden h-[64px]" style={{ willChange: 'transform' }}>
              <div className="inline-flex animate-marquee-slow" style={{ transformStyle: 'preserve-3d' }}>
                <div className="flex-shrink-0">
                  <svg width="2198" height="180" viewBox="0 0 2198 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
                    <path d="M1 0V180M14.8987 0V180M28.7975 0V180M42.6962 0V180M56.5949 0V180M70.4937 0V180M84.3924 0V180M98.2911 0V180M112.19 0V180M126.089 0V180M139.987 0V180M153.886 0V180M167.785 0V180M181.684 0V180M195.582 0V180M209.481 0V180M223.38 0V180M237.278 0V180M251.177 0V180M265.076 0V180M278.975 0V180M292.873 0V180M306.772 0V180M320.671 0V180M334.57 0V180M348.468 0V180M362.367 0V180M376.266 0V180M390.165 0V180M404.063 0V180M417.962 0V180M431.861 0V180M445.759 0V180M459.658 0V180M473.557 0V180M487.456 0V180M501.354 0V180M515.253 0V180M529.152 0V180M543.051 0V180M556.949 0V180M570.848 0V180M584.747 0V180M598.646 0V180M612.544 0V180M626.443 0V180M640.342 0V180M654.241 0V180M668.139 0V180M682.038 0V180M695.937 0V180M709.835 0V180M723.734 0V180M737.633 0V180M751.532 0V180M765.43 0V180M779.329 0V180M793.228 0V180M807.127 0V180M821.025 0V180M834.924 0V180M848.823 0V180M862.722 0V180M876.62 0V180M890.519 0V180M904.418 0V180M918.316 0V180M932.215 0V180M946.114 0V180M960.013 0V180M973.911 0V180M987.81 0V180M1001.71 0V180M1015.61 0V180M1029.51 0V180M1043.41 0V180M1057.3 0V180M1071.2 0V180M1085.1 0V180M1099 0V180M1112.9 0V180M1126.8 0V180M1140.7 0V180M1154.59 0V180M1168.49 0V180M1182.39 0V180M1196.29 0V180M1210.19 0V180M1224.09 0V180M1237.99 0V180M1251.89 0V180M1265.78 0V180M1279.68 0V180M1293.58 0V180M1307.48 0V180M1321.38 0V180M1335.28 0V180M1349.18 0V180M1363.08 0V180M1376.97 0V180M1390.87 0V180M1404.77 0V180M1418.67 0V180M1432.57 0V180M1446.47 0V180M1460.37 0V180M1474.27 0V180M1488.16 0V180M1502.06 0V180M1515.96 0V180M1529.86 0V180M1543.76 0V180M1557.66 0V180M1571.56 0V180M1585.46 0V180M1599.35 0V180M1613.25 0V180M1627.15 0V180M1641.05 0V180M1654.95 0V180M1668.85 0V180M1682.75 0V180M1696.65 0V180M1710.54 0V180M1724.44 0V180M1738.34 0V180M1752.24 0V180M1766.14 0V180M1780.04 0V180M1793.94 0V180M1807.84 0V180M1821.73 0V180M1835.63 0V180M1849.53 0V180M1863.43 0V180M1877.33 0V180M1891.23 0V180M1905.13 0V180M1919.03 0V180M1932.92 0V180M1946.82 0V180M1960.72 0V180M1974.62 0V180M1988.52 0V180M2002.42 0V180M2016.32 0V180M2030.22 0V180M2044.11 0V180M2058.01 0V180M2071.91 0V180M2085.81 0V180M2099.71 0V180M2113.61 0V180M2127.51 0V180M2141.41 0V180M2155.3 0V180M2169.2 0V180M2183.1 0V180M2197 0V180" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
                <div className="flex-shrink-0">
                  <svg width="2198" height="180" viewBox="0 0 2198 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
                    <path d="M1 0V180M14.8987 0V180M28.7975 0V180M42.6962 0V180M56.5949 0V180M70.4937 0V180M84.3924 0V180M98.2911 0V180M112.19 0V180M126.089 0V180M139.987 0V180M153.886 0V180M167.785 0V180M181.684 0V180M195.582 0V180M209.481 0V180M223.38 0V180M237.278 0V180M251.177 0V180M265.076 0V180M278.975 0V180M292.873 0V180M306.772 0V180M320.671 0V180M334.57 0V180M348.468 0V180M362.367 0V180M376.266 0V180M390.165 0V180M404.063 0V180M417.962 0V180M431.861 0V180M445.759 0V180M459.658 0V180M473.557 0V180M487.456 0V180M501.354 0V180M515.253 0V180M529.152 0V180M543.051 0V180M556.949 0V180M570.848 0V180M584.747 0V180M598.646 0V180M612.544 0V180M626.443 0V180M640.342 0V180M654.241 0V180M668.139 0V180M682.038 0V180M695.937 0V180M709.835 0V180M723.734 0V180M737.633 0V180M751.532 0V180M765.43 0V180M779.329 0V180M793.228 0V180M807.127 0V180M821.025 0V180M834.924 0V180M848.823 0V180M862.722 0V180M876.62 0V180M890.519 0V180M904.418 0V180M918.316 0V180M932.215 0V180M946.114 0V180M960.013 0V180M973.911 0V180M987.81 0V180M1001.71 0V180M1015.61 0V180M1029.51 0V180M1043.41 0V180M1057.3 0V180M1071.2 0V180M1085.1 0V180M1099 0V180M1112.9 0V180M1126.8 0V180M1140.7 0V180M1154.59 0V180M1168.49 0V180M1182.39 0V180M1196.29 0V180M1210.19 0V180M1224.09 0V180M1237.99 0V180M1251.89 0V180M1265.78 0V180M1279.68 0V180M1293.58 0V180M1307.48 0V180M1321.38 0V180M1335.28 0V180M1349.18 0V180M1363.08 0V180M1376.97 0V180M1390.87 0V180M1404.77 0V180M1418.67 0V180M1432.57 0V180M1446.47 0V180M1460.37 0V180M1474.27 0V180M1488.16 0V180M1502.06 0V180M1515.96 0V180M1529.86 0V180M1543.76 0V180M1557.66 0V180M1571.56 0V180M1585.46 0V180M1599.35 0V180M1613.25 0V180M1627.15 0V180M1641.05 0V180M1654.95 0V180M1668.85 0V180M1682.75 0V180M1696.65 0V180M1710.54 0V180M1724.44 0V180M1738.34 0V180M1752.24 0V180M1766.14 0V180M1780.04 0V180M1793.94 0V180M1807.84 0V180M1821.73 0V180M1835.63 0V180M1849.53 0V180M1863.43 0V180M1877.33 0V180M1891.23 0V180M1905.13 0V180M1919.03 0V180M1932.92 0V180M1946.82 0V180M1960.72 0V180M1974.62 0V180M1988.52 0V180M2002.42 0V180M2016.32 0V180M2030.22 0V180M2044.11 0V180M2058.01 0V180M2071.91 0V180M2085.81 0V180M2099.71 0V180M2113.61 0V180M2127.51 0V180M2141.41 0V180M2155.3 0V180M2169.2 0V180M2183.1 0V180M2197 0V180" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-0">
              <button className="bg-[#f4c542] text-gray-900 font-semibold hover:bg-[#f4c542]/90 transition flex items-center justify-center gap-2" style={{ width: '148px', height: '64px', fontFamily: 'Geist Mono, monospace' }}>
                <span className="text-sm uppercase tracking-wide">GET DEMO</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="bg-[#87ceeb] text-gray-900 font-semibold hover:bg-[#87ceeb]/90 transition flex items-center justify-center gap-2" style={{ width: '196px', height: '64px', fontFamily: 'Geist Mono, monospace' }}>
                <span className="text-sm uppercase tracking-wide">TRY QUIN FREE</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;