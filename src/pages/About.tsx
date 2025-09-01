import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Happy Customers', value: '50K+' },
    { label: 'Products Sold', value: '200K+' },
    { label: 'Years Experience', value: '10+' },
    { label: 'Countries Served', value: '25+' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We source only the highest quality products from trusted manufacturers and conduct rigorous testing.'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Building a supportive community of health and fitness enthusiasts who inspire and motivate each other.'
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'Helping you set, track, and achieve your fitness goals with the right products and guidance.'
    },
    {
      icon: Heart,
      title: 'Wellness Commitment',
      description: 'Committed to your overall wellness journey, not just selling products but supporting your lifestyle.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About HealthWorks</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Empowering your fitness journey with premium products, expert guidance, and unwavering support since 2015.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2015 by fitness enthusiasts John and Sarah Martinez, HealthWorks started as a small supplement store with a big vision: to make premium health and fitness products accessible to everyone.
                </p>
                <p>
                  What began as a passion project in a garage has grown into a trusted brand serving customers worldwide. We've maintained our commitment to quality, authenticity, and customer satisfaction while expanding our product line to include everything from cutting-edge supplements to professional-grade equipment.
                </p>
                <p>
                  Today, HealthWorks continues to be family-owned and operated, with a team of certified trainers, nutritionists, and health experts dedicated to helping you achieve your fitness goals.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our team"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve our community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            To empower individuals on their health and fitness journey by providing premium products, expert knowledge, 
            and exceptional service. We believe that everyone deserves access to the tools and support needed to live 
            their healthiest, strongest life.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg">
              Certified professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team members - You can replace these with your actual team */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-sm">Your Photo Here</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900">Your Name</h3>
              <p className="text-blue-600 font-medium">Founder & CEO</p>
              <p className="text-gray-600 text-sm mt-2">Add your bio here</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-sm">Your Photo Here</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900">Team Member Name</h3>
              <p className="text-blue-600 font-medium">Head of Operations</p>
              <p className="text-gray-600 text-sm mt-2">Add team member bio here</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-sm">Your Photo Here</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900">Team Member Name</h3>
              <p className="text-blue-600 font-medium">Fitness Specialist</p>
              <p className="text-gray-600 text-sm mt-2">Add team member bio here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;