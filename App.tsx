import React from 'react';
import Navbar from './components/Navbar';
import AdventureCreator from './components/AdventureCreator';
import ChatBot from './components/ChatBot';
import ImageAnalyzer from './components/ImageAnalyzer';
import { Plane } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-teal-50 overflow-x-hidden">
      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-10 left-[10%] animate-float opacity-30 text-lulu-pink text-4xl">♥</div>
        <div className="absolute top-40 left-[80%] animate-float opacity-20 text-rose-400 text-2xl" style={{animationDelay: '2s'}}>♥</div>
        <div className="absolute bottom-20 left-[20%] animate-float opacity-25 text-lulu-teal text-5xl" style={{animationDelay: '4s'}}>♥</div>
        <div className="absolute top-1/2 left-1/2 animate-pulse opacity-10 font-great-vibes text-9xl text-lulu-pink transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          Lolo & Loly
        </div>
      </div>

      <Navbar />
      
      <main className="relative z-10 container mx-auto px-4 pb-32 md:pb-24">
        {/* Hero Section */}
        <div className="text-center py-8 md:py-16">
          <div className="inline-block animate-bounce mb-2 md:mb-4">
            <Plane className="text-lulu-teal transform -rotate-45 w-10 h-10 md:w-12 md:h-12" />
          </div>
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-3 md:mb-6 font-great-vibes leading-tight">
            Lolo & Loly's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lulu-pink to-lulu-teal font-playfair italic">
              Global Adventures 🌍
            </span>
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-xl mx-auto mb-6 leading-relaxed px-2 font-sans">
            Drag your photo, pick a destination, and watch the magic happen! 
            Travel the world together in seconds.
          </p>
        </div>

        {/* Main Interaction Area */}
        <AdventureCreator />

        {/* Extra Utilities */}
        <ImageAnalyzer />

      </main>

      <ChatBot />

      <footer className="text-center py-8 text-gray-400 text-xs md:text-sm font-medium relative z-10">
        <p>Made with ❤️ for Lolo & Loly using Gemini AI</p>
      </footer>
    </div>
  );
};

export default App;