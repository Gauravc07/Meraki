import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "Project X",
      date: "March 15-16, 2025",
      location: "Igatpuri",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
      description: "Be the chosen ones"
    },
    {
      title: "Summer Music Festival",
      date: "July 1-3, 2025",
      location: "Location Pune",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80",
      description: "Something unthinkable"
    },
    {
      title: "Techno",
      date: "May 5, 2025",
      location: "Location Pune",
      image: "https://unsplash.com/photos/people-watching-concert-during-night-time-UV3GmG_HEqI",
      description: "Get The "
    }
  ];

  return (
    <div className="py-6 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12 text-gradient leading-tight">
          Upcoming Events
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-black rounded-lg shadow-md overflow-hidden border-2 border-yellow-500">
              <img src={event.image} alt={event.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gradient">{event.title}</h2>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-gradient" />
                    <span className="text-gradient">{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-gradient" />
                    <span className="text-gradient">{event.location}</span>
                  </div>
                  <p className="mt-4 text-gradient">{event.description}</p>
                </div>
                <button className="mt-6 bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:via-orange-400 hover:to-yellow-500 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
