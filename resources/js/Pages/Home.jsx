import { Head } from '@inertiajs/react';
import AnnouncementBanner from '@/Components/Home/AnnouncementBanner';
import Navigation from '@/Components/Home/Navigation';
import Hero from '@/Components/Home/Hero';
import Features from '@/Components/Home/Features';
import Skills from '@/Components/Home/Skills';
import Integrations from '@/Components/Home/Integrations';
import WhoUsesQuin from '@/Components/Home/WhoUsesQuin';
import MeetingAssistantSection from '@/Components/Home/MeetingAssistantSection';
import TestimonialSection from '@/Components/Home/TestimonialSection';
import TalkToQuinSection from '@/Components/Home/TalkToQuinSection';
import FloatingChatButton from '@/Components/Home/FloatingChatButton';

export default function Home() {
    return (
        <>
            <Head title="Quin - Meet your dream assistant" />

            <div className="bg-[#f5f1e8] min-h-screen">
                <AnnouncementBanner />
                <Navigation />
                <Hero />
                <Features />
                <Skills />
                <Integrations />
                <WhoUsesQuin />
                <MeetingAssistantSection />
                <TestimonialSection />
                <TalkToQuinSection />
                <FloatingChatButton />
            </div>
        </>
    );
}
