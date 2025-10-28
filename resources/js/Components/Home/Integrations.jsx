export default function Integrations() {
    const integrations = [
        { name: "Pipedrive", color: "#00A1E0" },
        { name: "Salesforce", color: "#00A1E0" },
        { name: "Asana", color: "#F06A6A" },
        { name: "Dialpad", color: "#6B7FFF" },
        { name: "Google Tasks", color: "#4285F4" },
        { name: "Google Workspace", color: "#EA4335" },
        { name: "HubSpot", color: "#FF7A59" },
        { name: "Outlook", color: "#0078D4" },
        { name: "Google Calendar", color: "#4285F4" },
        { name: "Microsoft Teams", color: "#5059C9" },
        { name: "Gmail", color: "#EA4335" },
        { name: "Slack", color: "#E01E5A" }
    ];

    return (
        <section className="bg-[#F0ECDF] border-t border-2 border-gray-400 py-16">
            <div className="max-w-[1280px] mx-auto px-6 h-full flex flex-col justify-center border-x border-gray-300">
                {/* Heading */}
                <h4 className="text-center text-gray-900 mb-12 text-[28px] leading-[1.3] font-medium" style={{ fontFamily: '"instrument-sans-variable", sans-serif' }}>
                    Get started with the tools you're already using
                </h4>

                {/* Scrolling Logos */}
                <div className="overflow-hidden mb-12 border-t border-b border-gray-300">
                    <div className="flex animate-marquee-logos">
                        {integrations.map((integration, index) => (
                            <div key={index} className="flex items-center justify-center bg-white border-r border-gray-300 w-[96px] h-[96px] min-w-[96px]">
                                <div className="text-2xl font-bold" style={{ color: integration.color }}>
                                    {integration.name.substring(0, 1)}
                                </div>
                            </div>
                        ))}
                        {/* Duplicate set for continuous scroll */}
                        {integrations.map((integration, index) => (
                            <div key={`dup-${index}`} className="flex items-center justify-center bg-white border-r border-gray-300 w-[96px] h-[96px] min-w-[96px]">
                                <div className="text-2xl font-bold" style={{ color: integration.color }}>
                                    {integration.name.substring(0, 1)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <a href="#" className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:opacity-80 transition text-[14px] tracking-[0.05em]" style={{ fontFamily: "'Geist Mono', monospace" }}>
                        <span>SEE ALL INTEGRATIONS</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
