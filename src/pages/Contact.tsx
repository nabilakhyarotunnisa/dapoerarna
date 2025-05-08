import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Kontak Kami</h1>
            <p className="text-xl text-gray-700">
              Kami ingin sekali mendengar kabar dari Anda! Jika Anda memiliki pertanyaan, masukan, atau sekadar ingin menyapa, jangan ragu untuk menghubungi kami.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100">
                <Phone className="text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Telepon</h3>
              <p className="text-gray-700">(+62) 851-5655-9581</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100">
                <Mail className="text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-700">daoerarna@gmail.com</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100">
                <MapPin className="text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alamat</h3>
              <p className="text-gray-700">Perumahan Taman Mutiara Parung Blok B No 12, Parung Bogor 16330</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Kirim Kami Pesan</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100">
                    <Send className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Pesan Terkirim!</h3>
                  <p className="text-green-700">
                  Terima kasih telah menghubungi kami. Kami akan segera menghubungi Anda kembali.
                  </p>
                  <Button
                    variant="primary"
                    className="mt-4"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Kirim Pesan Lain
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nama *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subjek *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Pesan *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className={isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
                  >
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                  </Button>
                </form>
              )}
            </div>
            
            {/* Operating Hours */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Jam Operasional</h2>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="space-y-4">
                  {[
                    { day: 'Senin', hours: '10:00 AM - 10:00 PM' },
                    { day: 'Selasa', hours: '10:00 AM - 10:00 PM' },
                    { day: 'Rabu', hours: '10:00 AM - 10:00 PM' },
                    { day: 'Kamis', hours: '10:00 AM - 10:00 PM' },
                    { day: 'Jumat', hours: '10:00 AM - 11:00 PM' },
                    { day: 'Sabtu', hours: '11:00 AM - 11:00 PM' },
                    { day: 'Minggu', hours: '11:00 AM - 10:00 PM' }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="font-medium">{item.day}</span>
                      <span className="text-gray-700">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;