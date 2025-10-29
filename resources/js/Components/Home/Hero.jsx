export default function Hero() {
    return (
        <main className="max-w-[1280px] mx-auto px-6 py-[80px] border-x border-gray-300">
            <div className="text-center">
                {/* Main Heading */}
                <h1 className="hero-text text-gray-900 mb-8" style={{ fontVariationSettings: "'wght' 80" }}>
                    Meet your<br />
                    dream assistant
                </h1>

                {/* Subheading */}
                <p className="hero-subtext text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    Quin handles everything a great assistant would—follow-ups, scheduling, data entry, and task coordination—across your entire day, not just meetings.
                </p>
            </div>
        </main>
    );
}
