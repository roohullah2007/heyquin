export default function MeetingAssistantSection() {
    return (
        <section className="w-full bg-black">
            {/* Content Container */}
            <div className="max-w-[1280px] mx-auto py-20 border-x border-gray-300">
                {/* Intelligence Badge */}
                <div className="flex justify-center mb-8">
                    <span className="bg-[#D4AF37] text-black px-4 py-1.5 text-[12px] font-mono font-medium rounded">
                        INTELLIGENCE
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-white text-center text-[56px] leading-[1.1] font-normal mb-6" style={{ fontFamily: '"instrument-sans-variable", sans-serif', fontVariationSettings: "'wght' 80" }}>
                    More than just
                    <br />
                    <span className="inline-block">a meeting assistant</span>
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-center text-[16px] leading-relaxed max-w-[600px] mx-auto mb-12" style={{ fontFamily: '"instrument-sans-variable", sans-serif' }}>
                    Quin doesn't just complete tasks - it knows how you want to get them done.
                    Set your preferences once and Quin makes decisions the way you would,
                    handling work like someone who's worked with you for years.
                </p>

                {/* Image */}
                <div className="w-full">
                    <img
                        src="/images/meeting-assistant.jpg"
                        alt="Professional meeting"
                        className="w-full h-[848px] object-cover"
                    />
                </div>

                {/* Bars - After Image */}
                <div className="relative  flex">
                    <div className="w-[1280px] overflow-hidden">
                        <svg width="2198" height="180" viewBox="0 0 2198 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                            <path d="M1 0V180M14.8987 0V180M28.7975 0V180M42.6962 0V180M56.5949 0V180M70.4937 0V180M84.3924 0V180M98.2911 0V180M112.19 0V180M126.089 0V180M139.987 0V180M153.886 0V180M167.785 0V180M181.684 0V180M195.582 0V180M209.481 0V180M223.38 0V180M237.278 0V180M251.177 0V180M265.076 0V180M278.975 0V180M292.873 0V180M306.772 0V180M320.671 0V180M334.57 0V180M348.468 0V180M362.367 0V180M376.266 0V180M390.165 0V180M404.063 0V180M417.962 0V180M431.861 0V180M445.759 0V180M459.658 0V180M473.557 0V180M487.456 0V180M501.354 0V180M515.253 0V180M529.152 0V180M543.051 0V180M556.949 0V180M570.848 0V180M584.747 0V180M598.646 0V180M612.544 0V180M626.443 0V180M640.342 0V180M654.241 0V180M668.139 0V180M682.038 0V180M695.937 0V180M709.835 0V180M723.734 0V180M737.633 0V180M751.532 0V180M765.43 0V180M779.329 0V180M793.228 0V180M807.127 0V180M821.025 0V180M834.924 0V180M848.823 0V180M862.722 0V180M876.62 0V180M890.519 0V180M904.418 0V180M918.316 0V180M932.215 0V180M946.114 0V180M960.013 0V180M973.911 0V180M987.81 0V180M1001.71 0V180M1015.61 0V180M1029.51 0V180M1043.41 0V180M1057.3 0V180M1071.2 0V180M1085.1 0V180M1099 0V180M1112.9 0V180M1126.8 0V180M1140.7 0V180M1154.59 0V180M1168.49 0V180M1182.39 0V180M1196.29 0V180M1210.19 0V180M1224.09 0V180M1237.99 0V180M1251.89 0V180M1265.78 0V180M1279.68 0V180M1293.58 0V180M1307.48 0V180M1321.38 0V180M1335.28 0V180M1349.18 0V180M1363.08 0V180M1376.97 0V180M1390.87 0V180M1404.77 0V180M1418.67 0V180M1432.57 0V180M1446.47 0V180M1460.37 0V180M1474.27 0V180M1488.16 0V180M1502.06 0V180M1515.96 0V180M1529.86 0V180M1543.76 0V180M1557.66 0V180M1571.56 0V180M1585.46 0V180M1599.35 0V180M1613.25 0V180M1627.15 0V180M1641.05 0V180M1654.95 0V180M1668.85 0V180M1682.75 0V180M1696.65 0V180M1710.54 0V180M1724.44 0V180M1738.34 0V180M1752.24 0V180M1766.14 0V180M1780.04 0V180M1793.94 0V180M1807.84 0V180M1821.73 0V180M1835.63 0V180M1849.53 0V180M1863.43 0V180M1877.33 0V180M1891.23 0V180M1905.13 0V180M1919.03 0V180M1932.92 0V180M1946.82 0V180M1960.72 0V180M1974.62 0V180M1988.52 0V180M2002.42 0V180M2016.32 0V180M2030.22 0V180M2044.11 0V180M2058.01 0V180M2071.91 0V180M2085.81 0V180M2099.71 0V180M2113.61 0V180M2127.51 0V180M2141.41 0V180M2155.3 0V180M2169.2 0V180M2183.1 0V180M2197 0V180" stroke="currentColor" strokeWidth="1"/>
                        </svg>
                    </div>
                </div>

                {/* Marquee Sections */}
                <div className="max-w-[1280px] mx-auto">
                    {/* First Marquee Row */}
                    <div className="overflow-hidden">
                        <div className="inline-flex animate-marquee-slow whitespace-nowrap">
                            <div className="py-7 px-10 text-[#D5D0C1] border-r border-[#D5D0C1]">Why everyone's workflow is different (and how we handle that)</div>
                            <div className="py-7 px-10 text-[#D5D0C1] border-r border-[#D5D0C1]">See how power users turn guidelines into leverage</div>
                            <div className="py-7 px-10 text-[#D5D0C1] border-r border-[#D5D0C1]">You don't need to be Superhuman to stay on top of your inbox</div>
                            <div className="py-7 px-10 text-[#D5D0C1] border-r border-[#D5D0C1]">Why pay for Calendly when Quin does scheduling better?</div>
                            <div className="py-7 px-10 text-[#D5D0C1] border-r border-[#D5D0C1]">No more losing hours to post-meeting admin</div>
                            <div className="py-7 px-10 text-[#D5D0C1] border-r border-[#D5D0C1]">Keep top candidates engaged during long hiring cycles</div>
                            <div className="py-7 px-10 text-[#D5D0C1] border-r border-[#D5D0C1]">Stop losing deals to slow follow-up</div>
                        </div>
                    </div>

                    {/* Second Marquee Row */}
                    <div className="overflow-hidden border-t border-[#D5D0C1]">
                        <div className="inline-flex animate-marquee-slow whitespace-nowrap">
                            <div className="py-7 px-10 text-[#D5D0C1] border-r border-[#D5D0C1]">Write any type of email without starting from scratch</div>
                            <div className="py-7 px-10 text-[#D5D0C1] border-r border-[#D5D0C1]">Stop being the bottleneck in your own team's workflow</div>
                            <div className="py-7 px-10 text-[#D5D0C1] border-r border-[#D5D0C1]">Get instant context without digging through months of notes</div>
                            <div className="py-7 px-10 text-[#D5D0C1] border-r border-[#D5D0C1]">Your notebook shouldn't be where client details go to die</div>
                            <div className="py-7 px-10 text-[#D5D0C1] border-r border-[#D5D0C1]">Turn meeting conversations into action items without the manual work</div>
                            <div className="py-7 px-10 text-[#D5D0C1] border-r border-[#D5D0C1]">Schedule complex meetings without the coordination headache</div>
                        </div>
                    </div>

                    {/* Third Marquee Row */}
                    <div className="overflow-hidden border-t border-[#D5D0C1]">
                        <div className="inline-flex animate-marquee-slow whitespace-nowrap">
                            <div className="py-7 px-10 text-[#D5D0C1] border-r border-[#D5D0C1]">Capture opportunities while momentum is hot</div>
                            <div className="py-7 px-10 text-[#D5D0C1] border-r border-[#D5D0C1]">Handle CRM updates without leaving Slack</div>
                            <div className="py-7 px-10 text-[#D5D0C1] border-r border-[#D5D0C1]">The compliance fields your CRM needs but nobody wants to fill out</div>
                            <div className="py-7 px-10 text-[#D5D0C1] border-r border-[#D5D0C1]">Upload PDFs to any contact record automatically</div>
                            <div className="py-7 px-10 text-[#D5D0C1] border-r border-[#D5D0C1]">Stop asking clients to repeat what they already told you</div>
                            <div className="py-7 px-10 text-[#D5D0C1] border-r border-[#D5D0C1]">Never let promising opportunities slip through conversation cracks</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
