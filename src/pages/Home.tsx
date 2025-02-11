import React, { useState } from "react";
import eventVideo from "../assests/videos/video1.mp4"; 

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center fade-up"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-gradient">
              Experience the Unthinkable.
            </h1>
            <p className="text-xl mb-8">
              Your premier partner in crafting extraordinary experiences
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-black text-gradient px-8 py-3 rounded-lg hover:bg-black transition font-semibold"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Launch Event Video Section - Full Screen */}
      <div className="relative w-full h-screen fade-up">
        <video 
          className="absolute inset-0 w-full h-full object-cover" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={eventVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-gradient">
              Launch Event Video Heading
            </h1>
            <p className="text-xl mb-8 text-gradient">Tagline for the launch</p>
          </div>
        </div>
      </div>

      {/* Previous Events Video Section - Full Screen */}
      <div className="relative w-full h-screen fade-up">
        <video 
          className="absolute inset-0 w-full h-full object-cover" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={eventVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-gradient">
              Relive the Best Moments
            </h1>
            <p className="text-xl mb-8 text-gradient">
              Experience the highlights from past events
            </p>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gradient">
            Our Achievements
          </h2>
          <div className="flex justify-around items-center flex-wrap">
            <div className="text-center mb-6 sm:mb-0">
              <h3 className="text-2xl font-semibold mb-2 text-gradient">
                10+ Team Members
              </h3>
              <p className="text-white sm:text-sm">
                A dedicated team working together to bring events to life.
              </p>
            </div>
            <div className="text-center mb-6 sm:mb-0">
              <h3 className="text-2xl font-semibold mb-2 text-gradient">
                5+ Successful Events
              </h3>
              <p className="text-white sm:text-sm">
                A proven track record of delivering top-quality events.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2 text-gradient">
                1500+ Happy Customers
              </h3>
              <p className="text-white sm:text-sm">
                Our clients are at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 fade-up">
          <div className="bg-black border border-yellow-500 rounded-lg p-8 shadow-lg text-center w-[90%] md:w-[400px] relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-yellow-500 hover:text-yellow-400 transition"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gradient">
              Join Our Community
            </h2>
            <p className="text-white mb-6">Be the chosen ones!</p>
            <div className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="bg-black text-gradient border-2 border-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-400 transition font-semibold"
              >
                Join Our Community
              </a>
              <a 
                href="#" 
                className="bg-black text-gradient border-2 border-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-400 transition font-semibold"
              >
                Follow Us on Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
