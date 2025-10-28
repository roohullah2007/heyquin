export default function Features() {
    const tabs = [
        { name: "Meeting prep", active: true },
        { name: "Note-taking", active: false },
        { name: "Follow-ups", active: false },
        { name: "Data entry", active: false },
        { name: "Scheduling", active: false },
        { name: "Search", active: false },
        { name: "And more...", active: false }
    ];

    return (
        <section className="bg-[#f5f1e8] py-16">
            <div className="max-w-[1280px] mx-auto border-x border-gray-300">
                {/* Tabs Navigation */}
                <div className="flex items-center gap-0 overflow-hidden">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`${
                                tab.active
                                    ? "bg-[#f4c542]"
                                    : "bg-white"
                            } text-gray-${tab.active ? "900" : "700"} font-medium px-6 w-[183px] py-5 whitespace-nowrap transition hover:bg-${tab.active ? "[#f4c542]/90" : "gray-50"} ${index < tabs.length - 1 ? "border-r border-gray-200/50" : ""}`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Content Area with Phone Mockup */}
                <div className="relative flex items-center justify-center" style={{ minHeight: "718px" }}>
                    {/* Background Image/Pattern (wood texture) */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#d4a574] to-[#c49563] overflow-hidden">
                        {/* Wood grain texture simulation */}
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(0,0,0,0.1) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.1) 3px)", backgroundSize: "4px 100%" }}></div>
                    </div>

                    {/* Phone Mockup */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                        <div className="relative" style={{ width: "1280px", height: "718px" }}>
                            <img src="/images/mobile.jpg" alt="Phone mockup" style={{ width: "1280px", height: "718px", objectFit: "cover" }} />
                        </div>
                    </div>

                    {/* Decorative Color Blocks (bottom left) */}
                    <div className="absolute bottom-8 left-8 flex gap-2 z-20">
                        <div className="w-8 h-8 bg-[#3d2817] rounded"></div>
                        <div className="w-8 h-8 bg-[#f4c542] rounded"></div>
                        <div className="w-8 h-8 bg-[#87ceeb] rounded"></div>
                    </div>
                </div>

                {/* Animated Bars SVG and CTA Buttons Section */}
                <div className="relative flex bg-[#f5f1e8] pb-8">
                    {/* Animated Bars SVG */}
                    <div className="overflow-hidden h-[64px]" style={{ willChange: "transform" }}>
                        <div className="inline-flex animate-marquee-slow" style={{ transformStyle: "preserve-3d" }}>
                            <div className="flex-shrink-0">
                                <svg width="2198" height="180" viewBox="0 0 2198 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-300">
                                    <path d="M1 0V180M14.8987 0V180M28.7975 0V180M42.6962 0V180M56.5949 0V180M70.4937 0V180M84.3924 0V180M98.2911 0V180M112.19 0V180M126.089 0V180M139.987 0V180M153.886 0V180M167.785 0V180M181.684 0V180M195.582 0V180M209.481 0V180M223.38 0V180M237.278 0V180M251.177 0V180M265.076 0V180M278.975 0V180M292.873 0V180M306.772 0V180M320.671 0V180M334.57 0V180M348.468 0V180M362.367 0V180M376.266 0V180M390.165 0V180M404.063 0V180M417.962 0V180M431.861 0V180M445.759 0V180M459.658 0V180M473.557 0V180M487.456 0V180M501.354 0V180M515.253 0V180M529.152 0V180M543.051 0V180M556.949 0V180M570.848 0V180M584.747 0V180M598.646 0V180M612.544 0V180M626.443 0V180M640.342 0V180M654.241 0V180M668.139 0V180M682.038 0V180M695.937 0V180M709.835 0V180M723.734 0V180M737.633 0V180M751.532 0V180M765.43 0V180M779.329 0V180M793.228 0V180M807.127 0V180M821.025 0V180M834.924 0V180M848.823 0V180M862.722 0V180M876.62 0V180M890.519 0V180M904.418 0V180M918.316 0V180M932.215 0V180M946.114 0V180M960.013 0V180M973.911 0V180M987.81 0V180M1001.71 0V180M1015.61 0V180M1029.51 0V180M1043.41 0V180M1057.3 0V180M1071.2 0V180M1085.1 0V180M1099 0V180M1112.9 0V180M1126.8 0V180M1140.7 0V180M1154.59 0V180M1168.49 0V180M1182.39 0V180M1196.29 0V180M1210.19 0V180M1224.09 0V180M1237.99 0V180M1251.89 0V180M1265.78 0V180M1279.68 0V180M1293.58 0V180M1307.48 0V180M1321.38 0V180M1335.28 0V180M1349.18 0V180M1363.08 0V180M1376.97 0V180M1390.87 0V180M1404.77 0V180M1418.67 0V180M1432.57 0V180M1446.47 0V180M1460.37 0V180M1474.27 0V180M1488.16 0V180M1502.06 0V180M1515.96 0V180M1529.86 0V180M1543.76 0V180M1557.66 0V180M1571.56 0V180M1585.46 0V180M1599.35 0V180M1613.25 0V180M1627.15 0V180M1641.05 0V180M1654.95 0V180M1668.85 0V180M1682.75 0V180M1696.65 0V180M1710.54 0V180M1724.44 0V180M1738.34 0V180M1752.24 0V180M1766.14 0V180M1780.04 0V180M1793.94 0V180M1807.84 0V180M1821.73 0V180M1835.63 0V180M1849.53 0V180M1863.43 0V180M1877.33 0V180M1891.23 0V180M1905.13 0V180M1919.03 0V180M1932.92 0V180M1946.82 0V180M1960.72 0V180M1974.62 0V180M1988.52 0V180M2002.42 0V180M2016.32 0V180M2030.22 0V180M2044.11 0V180M2058.01 0V180M2071.91 0V180M2085.81 0V180M2099.71 0V180M2113.61 0V180M2127.51 0V180M2141.41 0V180M2155.3 0V180M2169.2 0V180M2183.1 0V180M2197 0V180" stroke="currentColor" strokeWidth="1"/>
                                </svg>
                            </div>
                            <div className="flex-shrink-0">
                                <svg width="2198" height="180" viewBox="0 0 2198 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-300">
                                    <path d="M1 0V180M14.8987 0V180M28.7975 0V180M42.6962 0V180M56.5949 0V180M70.4937 0V180M84.3924 0V180M98.2911 0V180M112.19 0V180M126.089 0V180M139.987 0V180M153.886 0V180M167.785 0V180M181.684 0V180M195.582 0V180M209.481 0V180M223.38 0V180M237.278 0V180M251.177 0V180M265.076 0V180M278.975 0V180M292.873 0V180M306.772 0V180M320.671 0V180M334.57 0V180M348.468 0V180M362.367 0V180M376.266 0V180M390.165 0V180M404.063 0V180M417.962 0V180M431.861 0V180M445.759 0V180M459.658 0V180M473.557 0V180M487.456 0V180M501.354 0V180M515.253 0V180M529.152 0V180M543.051 0V180M556.949 0V180M570.848 0V180M584.747 0V180M598.646 0V180M612.544 0V180M626.443 0V180M640.342 0V180M654.241 0V180M668.139 0V180M682.038 0V180M695.937 0V180M709.835 0V180M723.734 0V180M737.633 0V180M751.532 0V180M765.43 0V180M779.329 0V180M793.228 0V180M807.127 0V180M821.025 0V180M834.924 0V180M848.823 0V180M862.722 0V180M876.62 0V180M890.519 0V180M904.418 0V180M918.316 0V180M932.215 0V180M946.114 0V180M960.013 0V180M973.911 0V180M987.81 0V180M1001.71 0V180M1015.61 0V180M1029.51 0V180M1043.41 0V180M1057.3 0V180M1071.2 0V180M1085.1 0V180M1099 0V180M1112.9 0V180M1126.8 0V180M1140.7 0V180M1154.59 0V180M1168.49 0V180M1182.39 0V180M1196.29 0V180M1210.19 0V180M1224.09 0V180M1237.99 0V180M1251.89 0V180M1265.78 0V180M1279.68 0V180M1293.58 0V180M1307.48 0V180M1321.38 0V180M1335.28 0V180M1349.18 0V180M1363.08 0V180M1376.97 0V180M1390.87 0V180M1404.77 0V180M1418.67 0V180M1432.57 0V180M1446.47 0V180M1460.37 0V180M1474.27 0V180M1488.16 0V180M1502.06 0V180M1515.96 0V180M1529.86 0V180M1543.76 0V180M1557.66 0V180M1571.56 0V180M1585.46 0V180M1599.35 0V180M1613.25 0V180M1627.15 0V180M1641.05 0V180M1654.95 0V180M1668.85 0V180M1682.75 0V180M1696.65 0V180M1710.54 0V180M1724.44 0V180M1738.34 0V180M1752.24 0V180M1766.14 0V180M1780.04 0V180M1793.94 0V180M1807.84 0V180M1821.73 0V180M1835.63 0V180M1849.53 0V180M1863.43 0V180M1877.33 0V180M1891.23 0V180M1905.13 0V180M1919.03 0V180M1932.92 0V180M1946.82 0V180M1960.72 0V180M1974.62 0V180M1988.52 0V180M2002.42 0V180M2016.32 0V180M2030.22 0V180M2044.11 0V180M2058.01 0V180M2071.91 0V180M2085.81 0V180M2099.71 0V180M2113.61 0V180M2127.51 0V180M2141.41 0V180M2155.3 0V180M2169.2 0V180M2183.1 0V180M2197 0V180" stroke="currentColor" strokeWidth="1"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex items-center justify-center gap-0">
                        <button className="bg-[#f4c542] text-gray-900 font-semibold hover:bg-[#f4c542]/90 transition flex items-center justify-center gap-2" style={{ width: "148px", height: "64px" }}>
                            <span className="text-sm uppercase tracking-wide">GET DEMO</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>
                        <button className="bg-[#87ceeb] text-gray-900 font-semibold hover:bg-[#87ceeb]/90 transition flex items-center justify-center gap-2" style={{ width: "196px", height: "64px" }}>
                            <span className="text-sm uppercase tracking-wide">TRY QUIN FREE</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
