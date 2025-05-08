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
                src="https://bkkbn.or.id/wp-content/uploads/2025/01/Pentingnya-Keluarga-Berencana-dalam-Mewujudkan-Kesejahteraan-Keluarga.jpg" 
                alt="Our team in the kitchen" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Info */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Kunjungi Kami</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6">Infomasi Kontak</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Alamat</p>
                      <address className="not-italic text-gray-600">
                        Perum Taman Mutiara Blok B No 12<br />
                        Parung - Bogor
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Nomor Telepon</p>
                      <p className="text-gray-600">(62) 851-5655-9581</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">dapoerarna@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Jam Buka</p>
                      <p className="text-gray-600">
                        Senin - Sabtu: 10.00 - 21.00 WIB<br />
                        Minggu: 10.00 - 20.00 WIB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg h-96 relative">
            <a
              href="https://g.co/kgs/xXqnf1Y"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipOunC-J-5_5Igzle7Vd6U9nz6vOIJjrlOFwGWST=s1360-w1360-h1020-rw"
                alt="Map preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-white text-orange-600 px-4 py-2 rounded-full shadow-md text-sm font-semibold hover:bg-orange-50 transition-colors">
                  Lihat Lokasi di Google Maps
                </span>
              </div>
            </a>
          </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;