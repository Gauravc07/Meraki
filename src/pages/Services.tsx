import React from 'react';
import { Calendar, Users, Music, Camera, Mic, MapPin, PartyPopper, Link } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Calendar className="h-12 w-12" />,
      title: "Event Planning",
      description: "Full-service event planning and coordination, from concept to execution."
    },
    // {
    //   icon: <Users className="h-12 w-12" />,
    //   title: "Venue Selection",
    //   description: "Access to exclusive venues and help choosing the perfect location."
    // },
    {
      icon: <Music className="h-12 w-12" />,
      title: "Entertainment",
      description: "Book top-tier performers, DJs, and live bands for the events."
    },
    // {
    //   icon: <Camera className="h-12 w-12" />,
    //   title: "Promotions",
    //   description: "Professional photo and video coverage of your special moments."
    // },
    {
      icon: <Mic className="h-12 w-12" />,
      title: "Artist Provision",
      description: "Providing talented musicians, artists, and performers for the events."
    },
    // {
    //   icon: <MapPin className="h-12 w-12" />,
    //   title: "Location Scouting",
    //   description: "Finding unique and perfect venues for the events."
    // },
    {
      icon: <PartyPopper className="h-12 w-12" />,
      title: "Full Production",
      description: "Complete event production including visuals."
    },
    {
      icon: <Link className="h-12 w-12" />,
      title: "Networking Opportunities",
      description: "Facilitating connections and creating networking opportunities at our event."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500">
            Our Services
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            We offer comprehensive events and networking opportunities to make your vision come to life.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-black text-white p-6 rounded-lg shadow-md border-2 border-gold-500 hover:shadow-lg transition">
                <div className="text-yellow-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500">
                  {service.title}
                </h3>
                <p className="text-white">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500">
            Ready to Join our next Event?
          </h2>
          <p className="text-xl mb-8">Let's create something extraordinary together.</p>
          <a
            //href="mailto:gauravchindhe1806@gmail.com?subject=Event Inquiry"
            className="bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500 text-white px-8 py-3 rounded-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:via-orange-400 hover:to-yellow-500 transition"
          >
            Join Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
