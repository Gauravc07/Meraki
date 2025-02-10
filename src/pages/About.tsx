import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let speed = 3; // Scroll speed
    let direction = 1; // 1 for right, -1 for left

    // Smooth scroll function
    const smoothScroll = () => {
      if (!scrollContainer) return;

      // Scroll the container
      scrollContainer.scrollLeft += speed * direction;

      // Reverse direction when reaching the end or the start
      if (
        scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth ||
        scrollContainer.scrollLeft <= 0
      ) {
        direction = -direction; // Reverse scrolling direction
      }

      requestAnimationFrame(smoothScroll); // Call the function again for smooth animation
    };

    smoothScroll(); // Start scrolling

    return () => cancelAnimationFrame(smoothScroll as any); // Cleanup on component unmount
  }, []);

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
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">About Meraki</h1>
            <p className="text-xl">Creating Memorable Experiences Since 2024</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section (Black & White Design) */}
      <div className="py-16 bg-white text-black">
        <h1 className="text-3xl text-center font-bold mb-6">
          Why Choose Us
        </h1>
        <h2 className="text-3xl text-center mb-4">
          We Provide The Best Services For You To Grow And Network
        </h2>
        <p className="text-center my-4 mx-5 font-medium">
          Experience excellence like never before with our top-tier services for
          our special events. From meticulous planning to flawless execution, we
          are dedicated to making your nights truly memorable. Trust us to
          deliver the best, because your life deserves nothing less.
        </p>

        {/* Button Styling */}
        <div className="text-center mt-8">
          <Link
            to={"/services"}
            className="bg-gray-300 text-black py-3 px-8 rounded-full text-lg font-semibold shadow-md transform transition-all duration-300 hover:bg-gray-200 hover:scale-105"
          >
            Check Us Out
          </Link>
        </div>
      </div>

      {/* Leadership Team - Auto Scrollable */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Leadership Team
          </h2>

          {/* Scrollable Section */}
          <div
            ref={scrollRef}
            className="overflow-x-auto whitespace-nowrap py-4 flex space-x-6 scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
          >
            {[ // Team Members Data with Sample Images
              { name: "Devanshu Thite", role: "Member", img: "" },
              { name: "Prathamesh Joshi", role: "Member", img: "" },
              { name: "Venky Gaikwad", role: "Member", img: "" },
              { name: "Kunal Gaikwad", role: "Member", img: "" },
              { name: "Atharva Shinde", role: "Member", img: "" },
              { name: "Gaurav Chindhe", role: "Member", img: "" },
              { name: "Sarthak Shukla", role: "Member", img: "" },
              { name: "Sidhart Suryavanshi", role: "Member", img: "" },
              { name: "Arjun Shinde", role: "Member", img: "" },
            ].map((member, index) => (
              <div
                key={index}
                className="text-center bg-gray-100 p-4 rounded-lg shadow-lg min-w-[200px]"
              >
                {/* Blank Image Placeholder */}
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
