import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductList from '../components/products/ProductList';
import Button from '../components/ui/Button';
import { products } from '../data/products';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const popularProducts = products.filter(product => product.popular);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://s1-id.alongwalker.co/wp-content/uploads/2024/08/image-top-6-mie-ayam-jakarta-pusat-legendaris-dan-enak-dae806d375d862375d33662b93bc87f9.jpg')" 
          }}
        ></div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Serving What You Want
            </h1>
            <p className="text-xl text-white mb-8">
              Nikmati Makanan dan Jajanan yang lezat dari rumah Anda.
              Pesan sekarang dan ambil tanpa perlu mengantri dengan cepat dan nyaman.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => navigate('/menu')}
              >
                Cari Menu
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/20 text-white border-white/50 hover:bg-white/30"
                onClick={() => navigate('/about')}
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll down arrow */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <a href="#categories" className="text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Kategori Makanan</h2>
          
          <div className="grid grid-cols-8 md:grid-cols-3 gap-8">
            {[
              { name: 'Makanan', image: 'https://allofresh.id/blog/wp-content/uploads/2023/08/cara-membuat-mie-ayam-1.jpg' },
              { name: 'Hidangan Pembuka', image: 'https://cdn0-production-images-kly.akamaized.net/Ub0mS5vcf2vLUtmh0DqiUb_xw64=/0x63:999x626/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4656610/original/082756800_1700535102-shutterstock_2206874439.jpg'},
              { name: 'Hidangan Penutup', image: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/12/15094206/Ini-Resep-Onde-Onde-isi-kacang-hijau-yang-empuk.jpg.webp' }
            ].map((category) => (
              <div 
                key={category.name}
                className="group relative overflow-hidden rounded-lg shadow-md h-48 cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-lg"
                onClick={() => navigate(`/menu?category=${category.name.toLowerCase()}`)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Makanan Populer</h2>
            <Button 
              variant="outline"
              onClick={() => navigate('/menu')}
              className="flex items-center"
            >
              Lihat Semua <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          
          <ProductList products={popularProducts} />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Cara Kerja Pemesanan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Pilih Makanan Yang Anda Inginkan', 
                description: 'Jelajahi beragam menu kami dan pilih hidangan favorit Anda.',
                icon: '🍔' 
              },
              { 
                title: 'Tempatkan Pesanan Anda', 
                description: 'Sesuaikan pesanan Anda, tambahkan ke keranjang, dan lanjutkan ke pembayaran.',
                icon: '🛒' 
              },
              { 
                title: 'Nikmati Makanan Anda', 
                description: 'Terima makanan Anda dengan cepat dan nikmati hidangan lezat.',
                icon: '🚚' 
              }
            ].map((step, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Apa Kata Pelanggan Kami</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Sarah Johnson', 
                review: 'Makanannya selalu lezat, apalagi risolesnya. Keluarga saya suka memesan dari sini setiap minggu.!',
                rating: 5 
              },
              { 
                name: 'Michael Chen', 
                review: 'Mie ayamnya enak dan murah. Sangat direkomendasikan!',
                rating: 5 
              },
              { 
                name: 'Emma Williams', 
                review: 'Berbagai macam pilihan sehingga saya tidak bosan dengan menunya!',
                rating: 4 
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Memesan Makanan Lezat?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Mulailah sekarang dan nikmati pengalaman bersantap terbaik.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent border-white text-orange-600 hover:bg-white hover:text-white"
            onClick={() => navigate('/menu')}
          >
            Pesan Sekarang
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;