import StaticSVGBars from './StaticSVGBars';

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
                <StaticSVGBars />

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
