
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-center">About Us</h1>
          
          {/* Restaurant Story */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-10">
            <h2 className="text-2xl font-playfair font-semibold mb-4">Our Story</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Mallow London was born from a simple idea: that everyone deserves to enjoy exceptional dining, 
                regardless of dietary restrictions. Founded in 2020, our Canary Wharf location has quickly become 
                a destination for plant-based cuisine that doesn't compromise on flavor, presentation, or experience.
              </p>
              <p className="mb-4">
                Our name "Mallow" comes from the marsh mallow plant, historically used both in cooking and traditional 
                medicine—symbolizing our commitment to food that is both delicious and mindful of wellbeing.
              </p>
              <p>
                We understand the challenges faced by diners with allergies, which is why we've created a transparent 
                dining experience with clear allergen information and dedicated preparation areas in our kitchen.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Mallow London Interior" 
                className="rounded-lg shadow-sm"
              />
              <img 
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf" 
                alt="Mallow London Dish" 
                className="rounded-lg shadow-sm"
              />
            </div>
          </section>
          
          {/* Our Values */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-10">
            <h2 className="text-2xl font-playfair font-semibold mb-6">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-playfair text-xl mb-3">Inclusivity</h3>
                <p className="text-gray-700">
                  We believe everyone should be able to enjoy dining out. Our menu and 
                  restaurant are designed to be welcoming to people with various dietary needs.
                </p>
              </div>
              
              <div>
                <h3 className="font-playfair text-xl mb-3">Transparency</h3>
                <p className="text-gray-700">
                  We provide clear, detailed information about ingredients and allergens 
                  in all our dishes, empowering guests to make informed choices.
                </p>
              </div>
              
              <div>
                <h3 className="font-playfair text-xl mb-3">Sustainability</h3>
                <p className="text-gray-700">
                  We source ingredients locally when possible and work to minimize our 
                  environmental footprint through thoughtful practices.
                </p>
              </div>
              
              <div>
                <h3 className="font-playfair text-xl mb-3">Innovation</h3>
                <p className="text-gray-700">
                  We continuously explore new techniques and ingredients to create 
                  exceptional plant-based dishes that surprise and delight.
                </p>
              </div>
            </div>
          </section>
          
          {/* Our Team */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-playfair font-semibold mb-6">Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" 
                    alt="Executive Chef" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-playfair text-xl mb-1">James Morgan</h3>
                <p className="text-gray-600 mb-3">Executive Chef</p>
                <p className="text-sm text-gray-700">
                  With 15 years of experience in plant-based cuisine, James leads our kitchen 
                  with creativity and precision.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" 
                    alt="Restaurant Manager" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-playfair text-xl mb-1">Sarah Chen</h3>
                <p className="text-gray-600 mb-3">Restaurant Manager</p>
                <p className="text-sm text-gray-700">
                  Sarah ensures every guest has an exceptional dining experience from the moment 
                  they enter Mallow.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                    alt="Nutritionist" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-playfair text-xl mb-1">Daniel Rodriguez</h3>
                <p className="text-gray-600 mb-3">Nutritionist & Menu Consultant</p>
                <p className="text-sm text-gray-700">
                  Daniel works with our chefs to ensure dishes are not only delicious but 
                  nutritionally balanced.
                </p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Ready to experience Mallow for yourself? Explore our menu or check which dishes match your dietary needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/menu" className="inline-block px-6 py-3 bg-mallow-green-light text-gray-800 font-medium rounded-md hover:bg-mallow-green transition-colors">
                  View Our Menu
                </Link>
                <Link to="/allergies" className="inline-block px-6 py-3 bg-white border border-gray-300 text-gray-800 font-medium rounded-md hover:bg-gray-50 transition-colors">
                  Check Your Allergies
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
