import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Tentang Dapoer Arna</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
            Makanan lezat yang dibuat dengan cinta. Kami bangga dengan bahan-bahan berkualitas dan layanan yang sangat baik.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Kisah kami</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
              Dapoer Arna dimulai pada tahun 2022 dengan visi yang sederhana yaitu
              menyediakan makanan lezat dan berkualitas tinggi dengan kemudahan pemesanan yang cepat.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
              Didirikan oleh Keluarga Kecil yang bertempat di Parung,Bogor. ARNA adalah inisial nama kami sekeluarga. Komitmen kami terhadap kualitas dan layanan dengan cepat menghasilkan pengikut setia, yang memungkinkan kami untuk memperluas ke beberapa lokasi.
              </p>
              <p className="text-gray-700 leading-relaxed">
              Saat ini, kami terus menjunjung prinsip dasar kami dengan hanya menggunakan bahan-bahan segar, mendukung petani lokal, dan memastikan setiap hidangan disiapkan dengan hati-hati dan memperhatikan detail.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Our team in the kitchen" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Quality', 
                description: 'We use only the freshest, highest-quality ingredients in every dish we prepare.',
                icon: '🥗' 
              },
              { 
                title: 'Community', 
                description: 'We support local farmers and suppliers, contributing to the economy of our community.',
                icon: '🏘️' 
              },
              { 
                title: 'Sustainability', 
                description: 'We are committed to environmentally friendly practices in our operations.',
                icon: '🌱' 
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
           
      {/* Contact Info */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Visit Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <address className="not-italic text-gray-600">
                        123 Foodie Lane<br />
                        Tasty Town, TC 12345
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@tastybites.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-gray-600">
                        Monday - Friday: 10am - 10pm<br />
                        Saturday - Sunday: 11am - 11pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              {/* This would normally be a Google Maps embed */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                <p>Map Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;