export default function FloatingChatButton() {
    return (
        <button className="fixed bottom-8 z-10 right-8 w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition group">
            <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
        </button>
    );
}
