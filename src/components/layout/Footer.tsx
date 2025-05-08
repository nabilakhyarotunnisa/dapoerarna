import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '../../assets/logo.png'; 

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-orange-500 flex items-center">
            <span className="mr-2">
                    <img 
                      src={logo} 
                       className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                      alt="Dapoer Arna Logo"
                    />
                  </span>
              <span>Dapoer Arna</span>
            </Link>
            <p className="mt-4 text-gray-300">
              Makanan lezat diantar ke rumah Anda. Kami menawarkan berbagai macam hidangan untuk memuaskan keinginan Anda.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  Tentang Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Kategori</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/menu?category=makanan" className="text-gray-300 hover:text-white transition-colors">
                  Makanan
                </Link>
              </li>
              <li>
                <Link to="/menu?category=hidangan pembuka" className="text-gray-300 hover:text-white transition-colors">
                  Hidangan Pembuka
                </Link>
              </li>
              <li>
                <Link to="/menu?category=hidangan penutup" className="text-gray-300 hover:text-white transition-colors">
                  Hidangan Penutup
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Perumahan Taman Mutiara Parung</p>
              <p>Blok B No. 12 Parung, Bogor</p>
              <p className="mt-4">
                <span className="block">Telepon: +62 851-5655-9581</span>
                <span className="block">Email: dapoerarna@gmail.com</span>
              </p>
            </address>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Dapoer Arna. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;