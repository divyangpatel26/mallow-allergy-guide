
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[700px] bg-mallow-green-light overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/30 to-transparent" />
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
          alt="Mallow London - Canary Wharf" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight mb-4">
              Elegant Plant-Based Dining
            </h1>
            <p className="text-white/90 text-xl md:text-2xl mb-8 leading-relaxed">
              Experience modern cuisine that respects dietary needs without compromising on taste or elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-white text-gray-800 hover:bg-gray-100 text-base font-medium">
                <Link to="/allergies" className="px-8">
                  Check Your Allergies <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/20 text-base font-medium">
                <Link to="/menu" className="px-8">
                  View Our Menu
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Welcome to Mallow London</h2>
            <div className="w-20 h-1 bg-mallow-green mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At Mallow, we believe that fine dining should be accessible to everyone, regardless of dietary restrictions. 
              Our modern plant-based cuisine celebrates seasonal ingredients while ensuring that guests with allergies 
              can dine with confidence and peace of mind.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our chefs have crafted an innovative menu that caters to common allergies without compromising 
              on taste, presentation or the dining experience. We invite you to explore our menu and 
              use our Allergy Checker to find dishes perfectly suited to your dietary needs.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-mallow-green-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">Why Choose Mallow</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-mallow-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3">Allergy Conscious</h3>
              <p className="text-gray-700">
                Our kitchen is designed with allergen awareness in mind, with separate preparation areas and strict protocols.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-mallow-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3">Seasonal Ingredients</h3>
              <p className="text-gray-700">
                We source fresh, local produce to create seasonal dishes that celebrate the best flavors of each season.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-mallow-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3">Customizable Experience</h3>
              <p className="text-gray-700">
                Our menu can be tailored to meet your specific dietary needs, ensuring everyone enjoys their dining experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Ready to Explore Our Menu?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Use our allergy checker to find dishes that suit your dietary needs, or browse our full menu to discover our culinary offerings.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-mallow-green-light text-gray-800 hover:bg-mallow-green border border-mallow-green text-base">
                <Link to="/allergies" className="px-8">Check Your Allergies</Link>
              </Button>
              <Button asChild variant="outline" className="text-base">
                <Link to="/menu" className="px-8">View Full Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
