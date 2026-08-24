import React, { useState, useEffect } from 'react';
import ScrollingBarsOnly from './ScrollingBarsOnly';

const QuinReplacesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const replacements = [
    'Followup.cc',
    'Calendly',
    'Zapier',
    'Loom',
    'Notion',
    'Slack reminders',
    'Executive assistants',
    'Meeting notes apps'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % replacements.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [replacements.length]);

  return (
    <section className="w-full bg-[#5A5A5A]">
      <ScrollingBarsOnly />

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-6 py-20 border-x border-gray-300">
        <div className="flex items-center justify-between gap-4 overflow-hidden">
          {/* Static Text */}
          <h2
            className="text-white text-[56px] leading-[1.1] font-normal whitespace-nowrap"
            style={{ fontFamily: 'Instrument Sans Variable, sans-serif', fontVariationSettings: "'wght' 80" }}
          >
            Quin replaces
          </h2>

          {/* Rotating Text */}
          <div className="relative h-[70px] overflow-hidden">
            <div
              className="transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateY(-${currentIndex * 70}px)`
              }}
            >
              {replacements.map((text, index) => (
                <h2
                  key={index}
                  className="text-gray-400 text-[56px] leading-[1.1] font-normal whitespace-nowrap h-[70px]"
                  style={{ fontFamily: 'Instrument Sans Variable, sans-serif', fontVariationSettings: "'wght' 80" }}
                >
                  {text}
                </h2>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ScrollingBarsOnly />
    </section>
  );
};

export default QuinReplacesSection;
