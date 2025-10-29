export default function Skills() {
    const skills = [
        { icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z", title: "Allow Quin to join your meetings" },
        { icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z", title: "Identify and create opportunities from notes + transcripts" },
        { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", title: "Add notes to contacts and households" },
        { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", title: "Create and assign tasks from meeting notes" },
        { icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", title: "Create new contact records in CRM" },
        { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", title: "Create new deal from product lines" },
        { icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", title: "Search LinkedIn" },
        { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01", title: "Set task and calendar reminders" },
        { icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8", title: "Draft follow-up emails" },
        { icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z", title: "Learn your voice and tone from sent emails" },
        { icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z", title: "Update any field in existing contact records" },
        { icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", title: "Add context and background information to calendar events" },
        { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", title: "Update meeting events with follow-up details" },
        { icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z", title: "Generate documents" }
    ];

    return (
        <section className="bg-[#f5f1e8]">
            <div className="max-w-[1280px] mx-auto border-x border-gray-300 px-6">
                {/* Skills Badge */}
                <div className="mb-8">
                    <span className="bg-[#f4c542] text-gray-900 font-medium inline-block" style={{ fontFamily: "'Geist Mono', monospace", fontSize: "12px", letterSpacing: "0.05em", lineHeight: "12px", padding: "6px 12px" }}>
                        SKILLS
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-gray-900 mb-6" style={{ fontFamily: '"instrument-sans-variable", sans-serif', fontSize: "56px", lineHeight: "62px", fontWeight: "500", letterSpacing: "-0.04em", fontVariationSettings: "'wght' 80" }}>
                    Say goodbye to<br />
                    busywork, forever
                </h2>

                {/* Description */}
                <p className="text-gray-700 mb-16 max-w-2xl" style={{ fontFamily: '"instrument-sans-variable", sans-serif', fontSize: "16px", lineHeight: "1.6" }}>
                    Quin learns your preferences and handles tasks the way you would,<br />
                    keeping everything organized without the extra effort.
                </p>

                {/* Skills Grid with Image */}
                <div className="grid grid-cols-5">
                    {/* Row 1: 5 Cards */}
                    {skills.slice(0, 5).map((skill, index) => (
                        <a key={index} href="#" className="bg-[#f5f1e8] hover:bg-[#e5e1d8] transition flex flex-col items-start justify-between p-6 group border-t border-r border-gray-300" style={{ width: "255px", height: "255px" }}>
                            <div className="text-4xl mb-auto">
                                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={skill.icon}/>
                                </svg>
                            </div>
                            <h6 className="font-medium leading-snug" style={{ color: "#545454", fontSize: "20px" }}>{skill.title}</h6>
                        </a>
                    ))}

                    {/* Row 2 & 3: Image spanning 2 columns and 2 rows + 3 cards on each row */}
                    {/* Large Image Area (spans 2 columns, 2 rows) */}
                    <div className="col-span-2 row-span-2 relative overflow-hidden border-t border-r w-[512px] h-[519px] border-gray-300">
                        <img src="/images/side image.jpg" alt="Quin interface" className="w-full h-full object-cover" />
                        {/* Decorative Color Blocks */}
                        <div className="absolute bottom-4 left-4 flex gap-0">
                            <div className="w-12 h-12 bg-[#8b7355]"></div>
                            <div className="w-12 h-12 bg-[#f4c542]"></div>
                            <div className="w-12 h-12 bg-[#87ceeb]"></div>
                        </div>
                    </div>

                    {/* Skills 6-8 */}
                    {skills.slice(5, 8).map((skill, index) => (
                        <a key={index + 5} href="#" className="bg-[#f5f1e8] hover:bg-[#e5e1d8] transition flex flex-col items-start justify-between p-6 group border-t border-r border-gray-300" style={{ width: "255px", height: "255px" }}>
                            <div className="text-4xl mb-auto">
                                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={skill.icon}/>
                                </svg>
                            </div>
                            <h6 className="font-medium leading-snug" style={{ color: "#545454", fontSize: "20px" }}>{skill.title}</h6>
                        </a>
                    ))}

                    {/* Skills 9-11 */}
                    {skills.slice(8, 11).map((skill, index) => (
                        <a key={index + 8} href="#" className="bg-[#f5f1e8] hover:bg-[#e5e1d8] transition flex flex-col items-start justify-between p-6 group border-t border-r border-gray-300" style={{ width: "255px", height: "255px" }}>
                            <div className="text-4xl mb-auto">
                                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={skill.icon}/>
                                </svg>
                            </div>
                            <h6 className="font-medium leading-snug" style={{ color: "#545454", fontSize: "20px" }}>{skill.title}</h6>
                        </a>
                    ))}

                    {/* Row 4: 3 Cards + CTA Section spanning 2 columns */}
                    {skills.slice(11, 14).map((skill, index) => (
                        <a key={index + 11} href="#" className="bg-[#f5f1e8] hover:bg-[#e5e1d8] transition flex flex-col items-start justify-between p-6 group border-b border-r border-gray-300" style={{ width: "255px", height: "255px" }}>
                            <div className="text-4xl mb-auto">
                                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={skill.icon}/>
                                </svg>
                            </div>
                            <h6 className="font-medium leading-snug" style={{ color: "#545454", fontSize: "20px" }}>{skill.title}</h6>
                        </a>
                    ))}

                    {/* CTA Section (spans 2 columns) */}
                    <div className="col-span-2 bg-[#f5f1e8] hover:bg-[#e5e1d8] transition flex flex-col items-start justify-between p-8 border-b border-r border-gray-300" style={{ width: "522px", height: "255px" }}>
                        <h3 className="text-gray-900 mb-6" style={{ fontFamily: '"instrument-sans-variable", sans-serif', fontSize: "28px", lineHeight: "1.3", fontWeight: "500" }}>
                            70+ intelligent skills to eliminate your admin work
                        </h3>
                        <a href="#" className="bg-[#f4c542] text-gray-900 w-full justify-center font-medium px-6 py-3 hover:bg-[#f4c542]/90 transition inline-flex items-center gap-2" style={{ fontFamily: "'Geist Mono', monospace", fontSize: "14px", letterSpacing: "0.05em" }}>
                            <span>EXPLORE SKILLS</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
