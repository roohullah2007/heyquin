import React from 'react';
import ScrollingBarsWithButtons from './ScrollingBarsWithButtons';

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

          <ScrollingBarsWithButtons />
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;