import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const About = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll function for manual navigation
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust scroll distance
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500">
            <h1 className="text-4xl font-bold mb-4">About Meraki</h1>
            <p className="text-xl">Creating Memorable Experiences Since 2024</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-black text-white">
        <h1 className="text-3xl text-center font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500">
          Why Choose Us
        </h1>
        <h2 className="text-3xl text-center mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500">
          We Provide The Best Services For You To Grow And Network
        </h2>
        <p className="text-center my-4 mx-5 font-medium">
          Experience excellence like never before with our top-tier services for
          our special events. From meticulous planning to flawless execution, we
          are dedicated to making your nights truly memorable. Trust us to
          deliver the best, because your life deserves nothing less.
        </p>
        <div className="text-center mt-8">
          <Link
            to={"/services"}
            className="bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-md transform transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-orange-400 hover:to-yellow-500 hover:scale-105"
          >
            Check Us Out
          </Link>
        </div>
      </div>

      {/* Leadership Team - Manually Scrollable */}
      <div className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500">
            Our Leadership Team
          </h2>

          {/* Scrollable Section with Left & Right Buttons */}
          <div className="relative">
            {/* Left Scroll Button */}
           

            {/* Scrollable Cards */}
            <div
              ref={scrollRef}
              className="overflow-x-auto whitespace-nowrap py-4 flex space-x-6 scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
              style={{ scrollBehavior: "smooth" }}
            >
              {[ 
                { name: "Prathamesh ", role: "Member", img: "" },
                { name: "Devanshu ", role: "Member", img: "" },
                { name: "Kunal ", role: "Member", img: "" },
                { name: "Gaurav ", role: "Member", img: "" },
                { name: "Atharva ", role: "Member", img: "" },
                { name: "Venky ", role: "Member", img: "" },
                { name: "Sarthak ", role: "Member", img: "" },
                { name: "Sidh ", role: "Member", img: "" },
                { name: "Arjun ", role: "Member", img: "" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="text-center bg-white p-4 rounded-lg shadow-lg min-w-[200px] transform transition-all hover:scale-105 border-2 border-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500"
                >
                  {/* Blank Image Placeholder */}
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-black">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
