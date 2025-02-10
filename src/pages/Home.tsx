import React, { useState } from "react";
import { Calendar, Users, Music, Camera, X } from "lucide-react";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredEvents = [
    {
      image: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?auto=format&fit=crop&q=80",
      title: "Club Parties",
      description: "Memorable social events and parties",
    },
    {
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
      title: "Outdoor Festivals",
      description: "Vibrant outdoor celebrations",
    },
    {
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
      title: "Corporate Events",
      description: "Professional events for business excellence",
    }
  ];

  const previousEvents = [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center fade-up"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-6xl font-bold mb-4">Experience the Unthinkable.</h1>
            <p className="text-xl mb-8">Your premier partner in crafting extraordinary experiences</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Previous Events Section */}
      <div className="overflow-hidden py-8 bg-gray-50 fade-up">
        <h2 className="text-3xl font-bold text-center mb-6">Previous Events</h2>
        <div className="relative">
          <div className="absolute inset-0 bg-white bg-opacity-50" />
          <div className="flex animate-infinite-scroll">
            {previousEvents.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Previous event ${index}`}
                className="w-1/4 object-cover rounded-lg mr-6"
                style={{
                  height: "200px",
                  width: "auto",
                  animation: "scroll 30s linear infinite", // Add animation
                }}
              />
            ))}
            {/* Repeat the images at the end to create the seamless effect */}
            {previousEvents.map((image, index) => (
              <img
                key={`repeat-${index}`}
                src={image}
                alt={`Repeated event ${index}`}
                className="w-1/4 object-cover rounded-lg mr-6"
                style={{
                  height: "200px",
                  width: "auto",
                  animation: "scroll 10s linear infinite", // Ensure the repeat images are included in the same animation
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Featured Events Section */}
      <div className="py-16 bg-gray-50 fade-up">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50 fade-up">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Calendar className="h-8 w-8" />}
              title="Event Planning"
              description="Comprehensive event planning and coordination services"
            />
            <ServiceCard
              icon={<Users className="h-8 w-8" />}
              title="Venue Management"
              description="Perfect venues for any occasion or celebration"
            />
            <ServiceCard
              icon={<Music className="h-8 w-8" />}
              title="Entertainment"
              description="Top-tier entertainment and music services"
            />
            <ServiceCard
              icon={<Camera className="h-8 w-8" />}
              title="Promotions"
              description="Professional photography and videography"
            />
          </div>
        </div>
      </div>

      {/* Pop-up Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg text-center w-[90%] md:w-[400px]">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
            <p className="text-gray-600 mb-6">Be the chosen ones!</p>
            <div className="flex flex-col space-y-4">
              <a
                href="" //community link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
              >
                Join Our Community
              </a>
              <a
                href="" //insta link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition"
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

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="text-purple-600 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;
