export default function AnnouncementBanner() {
    return (
        <div className="bg-[#f4c542] py-4 px-6 w-[1280px] mx-auto flex items-center justify-between border-x border-gray-300">
            <div className="flex items-center gap-2 text-[16px]" style={{ fontFamily: '"instrument-sans-variable", sans-serif' }}>
                <span className="font-semibold text-gray-900">New in Quin:</span>
                <span className="text-gray-900">No more back-and-forth chaos. Introducing Quin's new meeting scheduler</span>
            </div>
            <a href="#" className="flex items-center gap-2 text-gray-900 font-semibold hover:opacity-80 transition">
                <span className="text-[14px]" style={{ fontFamily: '"Geist Mono", monospace' }}>READ</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
            </a>
        </div>
    );
}
