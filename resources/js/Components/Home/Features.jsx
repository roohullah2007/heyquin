import ScrollingBarsWithButtons from './ScrollingBarsWithButtons';

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

                <ScrollingBarsWithButtons />
            </div>
        </section>
    );
}
