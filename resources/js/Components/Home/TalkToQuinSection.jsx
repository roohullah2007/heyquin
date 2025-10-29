import { useState } from 'react';

export default function TalkToQuinSection() {
  const [activeTab, setActiveTab] = useState('in-app');

  const tabs = [
    {
      id: 'in-app',
      label: 'In-app',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor" className="w-10 h-10">
          <path d="M528 80L528 416L112 416L112 80L528 80zM528 432L528 560L112 560L112 432L528 432zM112 64L96 64L96 576L544 576L544 64L112 64zM320 512C311.2 512 304 504.8 304 496C304 487.2 311.2 480 320 480C328.8 480 336 487.2 336 496C336 504.8 328.8 512 320 512zM288 496C288 513.7 302.3 528 320 528C337.7 528 352 513.7 352 496C352 478.3 337.7 464 320 464C302.3 464 288 478.3 288 496z"></path>
        </svg>
      ),
      bg: 'bg-[#492812]',
      hoverBg: 'hover:bg-[#5A4738]'
    },
    {
      id: 'sms',
      label: 'SMS',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor" className="w-10 h-10">
          <path d="M208 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM128 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-149.3 0L226.7 564.8c-5.4 4.3-13.3 3.3-17.6-2.1c-1.6-2-2.4-4.5-2.4-7.1L206.7 448 128 448c-35.3 0-64-28.7-64-64L64 128c0-35.3 28.7-64 64-64zm0 48c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16l96 0 0 60.2 99.1-79.4 3.6-2.9 4.6 0L512 382l0-254c0-8.8-7.2-16-16-16L128 112z"></path>
        </svg>
      ),
      bg: 'bg-[#492812]',
      hoverBg: 'hover:bg-[#5A4738]'
    },
    {
      id: 'email',
      label: 'Email',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor" className="w-10 h-10">
          <path d="M64 128l0 42.7L256 293.8 256 352l-21.3-17c-5.4-4.3-13.3-3.3-17.6 2.1s-3.3 13.3 2.1 17.6l48 38.4c5.4 4.3 13.3 3.3 17.6-2.1c1.6-2 2.4-4.5 2.4-7.1l0-76.1L480 448 64 448c-8.8 0-16-7.2-16-16l0-288c0-8.8 7.2-16 16-16l448 0c8.8 0 16 7.2 16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96c0-26.5-21.5-48-48-48L64 96C37.5 96 16 117.5 16 144l0 288c0 26.5 21.5 48 48 48l448 0c26.5 0 48-21.5 48-48l0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32c0 8.8-7.2 16-16 16l-224-142.7L64 170.7 64 128z"></path>
        </svg>
      ),
      bg: 'bg-[#492812]',
      hoverBg: 'hover:bg-[#5A4738]'
    },
    {
      id: 'slack',
      label: 'Slack',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor" className="w-10 h-10">
          <path d="M155.2 351.7c0 29.8-24.1 53.9-53.9 53.9s-53.9-24.1-53.9-53.9 24.1-53.9 53.9-53.9h53.9v53.9zM181.8 351.7c0-29.8 24.1-53.9 53.9-53.9s53.9 24.1 53.9 53.9v134.7c0 29.8-24.1 53.9-53.9 53.9s-53.9-24.1-53.9-53.9V351.7zm136.5-136.5c-29.8 0-53.9-24.1-53.9-53.9s24.1-53.9 53.9-53.9 53.9 24.1 53.9 53.9v53.9h-53.9zm0 26.6c29.8 0 53.9 24.1 53.9 53.9s-24.1 53.9-53.9 53.9H183.6c-29.8 0-53.9-24.1-53.9-53.9s24.1-53.9 53.9-53.9h134.7zm136.5 136.5c0-29.8 24.1-53.9 53.9-53.9s53.9 24.1 53.9 53.9-24.1 53.9-53.9 53.9h-53.9v-53.9zm-26.6 0c0 29.8-24.1 53.9-53.9 53.9s-53.9-24.1-53.9-53.9V243.6c0-29.8 24.1-53.9 53.9-53.9s53.9 24.1 53.9 53.9v134.7z"></path>
        </svg>
      ),
      bg: 'bg-[#492812]',
      hoverBg: 'hover:bg-[#5A4738]'
    },
    {
      id: 'teams',
      label: 'Teams',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor" className="w-10 h-10">
          <path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7h450.6c17 0 30.7-13.8 30.7-30.7 0-89.1-72.2-161.3-161.3-161.3H161.3zM576 288c-70.7 0-128-57.3-128-128S505.3 32 576 32s128 57.3 128 128-57.3 128-128 128zm-19.2 32c28.2 0 54.6 8.5 76.6 23.1C650.5 371.4 640 403.5 640 438c0 22.9-3.6 44.9-10.2 65.6-4.8 15.1-20.8 23.5-35.9 18.7-15.1-4.8-23.5-20.8-18.7-35.9 4.5-14.1 6.9-29.2 6.9-44.9 0-39.9 15.1-76.2 40-103.6-6.2-.9-12.5-1.4-19-1.4h-76.1c-52.8 0-99.4 25.4-128.5 64.5 6.8 20.2 10.4 41.8 10.4 64.2 0 17-13.8 30.7-30.7 30.7h-.3c-15.1 0-27.8-10.9-30.3-25.3-2.1 1.9-4.2 3.8-6.3 5.6-12.1 10.5-28.2 16.4-45 16.4H30.7C13.8 512 0 498.2 0 481.3c0-89.1 72.2-161.3 161.3-161.3h195.4c20.1 0 39.4 3.7 57.2 10.4 30.5-20 66.7-31.6 105.8-31.6h37.2z"></path>
        </svg>
      ),
      bg: 'bg-[#F4D03F]',
      textColor: 'text-[#4A3728]',
      hoverBg: 'hover:bg-[#F5D657]'
    }
  ];

  return (
    <section className="w-full bg-[#492812] relative overflow-hidden">
      {/* Top Content */}
      <div className="text-center py-20 px-6 max-w-[1280px] mx-auto border-x border-gray-300">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span
            className="bg-[#F4D03F] text-black px-4 py-1.5 text-[12px] font-medium tracking-wide uppercase"
            style={{ fontFamily: '"Geist Mono", monospace' }}
          >
            TALK TO QUIN
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-white text-[56px] leading-[1.1] font-normal mb-6"
          style={{ fontFamily: '"instrument-sans-variable", sans-serif', fontVariationSettings: "'wght' 80" }}
        >
          Available any time, anywhere
        </h2>

        {/* Description */}
        <p
          className="text-[#FFFCF2] text-[16px] leading-relaxed max-w-[700px] mx-auto"
          style={{ fontFamily: '"instrument-sans-variable", sans-serif' }}
        >
          Always there for you. Works wherever you do. The only assistant available 24/7.
        </p>
      </div>

      {/* Tabs Section */}
      <div className="max-w-[1280px] mx-auto border-x border-gray-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-y border-gray-400">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                w-full h-[176px] flex flex-col items-center justify-center gap-4
                transition-all duration-300 cursor-pointer
                ${index < tabs.length - 1 ? 'border-r border-gray-400' : ''}
                ${activeTab === tab.id ? tab.bg : 'bg-[#492812]'}
                ${tab.hoverBg}
                ${tab.id === 'teams' && activeTab === tab.id ? tab.textColor : 'text-[#FFFCF2]'}
              `}
            >
              {/* Icon */}
              <div className="flex items-center justify-center">
                {tab.icon}
              </div>

              {/* Label */}
              <div
                className="text-[16px] font-normal"
                style={{ fontFamily: '"instrument-sans-variable", sans-serif' }}
              >
                {tab.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-[1280px] mx-auto border-x border-gray-300">
        <div className="w-full h-[484px] relative overflow-hidden">
          <img
            src="/images/available-any-time.jpg"
            alt="Quin mobile interface"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Bars - Bottom */}
        <div className="relative overflow-hidden flex">
          <div className="max-w-[1280px]">
            <svg width="2198" height="180" viewBox="0 0 2198 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M1 0V180M14.8987 0V180M28.7975 0V180M42.6962 0V180M56.5949 0V180M70.4937 0V180M84.3924 0V180M98.2911 0V180M112.19 0V180M126.089 0V180M139.987 0V180M153.886 0V180M167.785 0V180M181.684 0V180M195.582 0V180M209.481 0V180M223.38 0V180M237.278 0V180M251.177 0V180M265.076 0V180M278.975 0V180M292.873 0V180M306.772 0V180M320.671 0V180M334.57 0V180M348.468 0V180M362.367 0V180M376.266 0V180M390.165 0V180M404.063 0V180M417.962 0V180M431.861 0V180M445.759 0V180M459.658 0V180M473.557 0V180M487.456 0V180M501.354 0V180M515.253 0V180M529.152 0V180M543.051 0V180M556.949 0V180M570.848 0V180M584.747 0V180M598.646 0V180M612.544 0V180M626.443 0V180M640.342 0V180M654.241 0V180M668.139 0V180M682.038 0V180M695.937 0V180M709.835 0V180M723.734 0V180M737.633 0V180M751.532 0V180M765.43 0V180M779.329 0V180M793.228 0V180M807.127 0V180M821.025 0V180M834.924 0V180M848.823 0V180M862.722 0V180M876.62 0V180M890.519 0V180M904.418 0V180M918.316 0V180M932.215 0V180M946.114 0V180M960.013 0V180M973.911 0V180M987.81 0V180M1001.71 0V180M1015.61 0V180M1029.51 0V180M1043.41 0V180M1057.3 0V180M1071.2 0V180M1085.1 0V180M1099 0V180M1112.9 0V180M1126.8 0V180M1140.7 0V180M1154.59 0V180M1168.49 0V180M1182.39 0V180M1196.29 0V180M1210.19 0V180M1224.09 0V180M1237.99 0V180M1251.89 0V180M1265.78 0V180M1279.68 0V180M1293.58 0V180M1307.48 0V180M1321.38 0V180M1335.28 0V180M1349.18 0V180M1363.08 0V180M1376.97 0V180M1390.87 0V180M1404.77 0V180M1418.67 0V180M1432.57 0V180M1446.47 0V180M1460.37 0V180M1474.27 0V180M1488.16 0V180M1502.06 0V180M1515.96 0V180M1529.86 0V180M1543.76 0V180M1557.66 0V180M1571.56 0V180M1585.46 0V180M1599.35 0V180M1613.25 0V180M1627.15 0V180M1641.05 0V180M1654.95 0V180M1668.85 0V180M1682.75 0V180M1696.65 0V180M1710.54 0V180M1724.44 0V180M1738.34 0V180M1752.24 0V180M1766.14 0V180M1780.04 0V180M1793.94 0V180M1807.84 0V180M1821.73 0V180M1835.63 0V180M1849.53 0V180M1863.43 0V180M1877.33 0V180M1891.23 0V180M1905.13 0V180M1919.03 0V180M1932.92 0V180M1946.82 0V180M1960.72 0V180M1974.62 0V180M1988.52 0V180M2002.42 0V180M2016.32 0V180M2030.22 0V180M2044.11 0V180M2058.01 0V180M2071.91 0V180M2085.81 0V180M2099.71 0V180M2113.61 0V180M2127.51 0V180M2141.41 0V180M2155.3 0V180M2169.2 0V180M2183.1 0V180M2197 0V180" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
        </div>
      </div>

    </section>
  );
}
