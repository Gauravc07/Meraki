import React from 'react';
import { Calendar, Users, Music, Camera, Mic, MapPin, PartyPopper, Link } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Calendar className="h-12 w-12" />,
      title: "Event Planning",
      description: "Full-service event planning and coordination, from concept to execution."
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Venue Selection",
      description: "Access to exclusive venues and help choosing the perfect location."
    },
    {
      icon: <Music className="h-12 w-12" />,
      title: "Entertainment",
      description: "Book top-tier performers, DJs, and live bands for the events."
    },
    {
      icon: <Camera className="h-12 w-12" />,
      title: "Promotions",
      description: "Professional photo and video coverage of your special moments."
    },
    {
      icon: <Mic className="h-12 w-12" />,
      title: "Artist Provision",
      description: "Providing talented musicians, artists, and performers for the events."
    },
    {
      icon: <MapPin className="h-12 w-12" />,
      title: "Location Scouting",
      description: "Finding unique and perfect venues for the events."
    },
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
      <div className="bg-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We offer comprehensive events and networking opportunities to make your vision come to life.
          </p>
        </div>
      </div>
      {/* New Section: Team, Successful Events, Happy Customers */}
      <div className="bg-gray-100 py-16">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl sm:text-2xl font-bold mb-6">Our Achievements</h2>
    <div className="flex justify-around items-center flex-wrap">
      <div className="text-center mb-6 sm:mb-0">
        <h3 className="text-2xl sm:text-xl font-semibold mb-2">10+ Team Members</h3>
        <p className="text-gray-600 sm:text-sm">A dedicated team working together to bring events to life.</p>
      </div>
      <div className="text-center mb-6 sm:mb-0">
        <h3 className="text-2xl sm:text-xl font-semibold mb-2">5+ Successful Events</h3>
        <p className="text-gray-600 sm:text-sm">A proven track record of delivering top-quality events.</p>
      </div>
      <div className="text-center">
        <h3 className="text-2xl sm:text-xl font-semibold mb-2">1500+ Happy Customers</h3>
        <p className="text-gray-600 sm:text-sm">Our clients are at the heart of everything we do.</p>
      </div>
    </div>
  </div>
</div>

      {/* Services Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-purple-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join our next Event?</h2>
          <p className="text-xl mb-8">Let's create something extraordinary together.</p>
          <a
            //href="mailto:gauravchindhe1806@gmail.com?subject=Event Inquiry"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Join Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
