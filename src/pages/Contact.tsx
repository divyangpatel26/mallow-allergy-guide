
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
      duration: 5000,
    });
    // Reset form fields
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-center">Contact Us</h1>
          
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-mallow-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-5 w-5 text-gray-800" />
              </div>
              <h3 className="font-playfair text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-700">020 1234 5678</p>
              <p className="text-sm text-gray-600 mt-1">(Mon-Fri, 9am-6pm)</p>
            </div>
            
            {/* Email */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-mallow-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-5 w-5 text-gray-800" />
              </div>
              <h3 className="font-playfair text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-700">info@mallowlondon.com</p>
              <p className="text-sm text-gray-600 mt-1">(We respond within 24hrs)</p>
            </div>
            
            {/* Address */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-mallow-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-5 w-5 text-gray-800" />
              </div>
              <h3 className="font-playfair text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-700">123 Restaurant Row</p>
              <p className="text-gray-700">Canary Wharf, London</p>
              <p className="text-gray-700">E14 5AB</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-playfair font-semibold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button type="submit" className="bg-mallow-green-light text-gray-800 hover:bg-mallow-green border border-mallow-green">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Map & Hours */}
            <div className="space-y-8">
              {/* Map placeholder */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-[300px] bg-gray-200 flex items-center justify-center">
                  {/* In a real app, insert a Google Map or other map service here */}
                  <div className="text-center p-4">
                    <MapPin className="h-8 w-8 text-gray-500 mx-auto mb-2" />
                    <p className="text-gray-600">
                      Map would be displayed here
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Opening Hours */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-playfair font-semibold mb-6">Opening Hours</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday - Friday</span>
                    <span>11:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 - 23:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday</span>
                    <span>10:00 - 21:00</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-playfair text-lg font-semibold mb-3">Reservations</h3>
                  <p className="text-gray-700 mb-4">
                    For parties of 6 or more, we recommend making a reservation.
                  </p>
                  <Button className="w-full bg-mallow-green-light text-gray-800 hover:bg-mallow-green border border-mallow-green">
                    Book a Table
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
