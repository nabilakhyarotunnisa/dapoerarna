import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullname || !username || !email || !password || !confirmPassword || !address) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setSuccess('Account created successfully!');
    setError('');

    // Reset
    setFullname('');
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setAddress('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-16">
  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl flex flex-col md:flex-row gap-8 items-center">

        
        {/* Ilustrasi Gambar */}
        <div className="hidden md:block w-1/2">
        <img
        src="https://img.freepik.com/free-vector/hand-drawn-people-eating-collection_23-2149277629.jpg?t=st=1746626949~exp=1746630549~hmac=ec34bde4c01eb163c5e699fb032f25491b11d98aebc7e7470266db18c2930114&w=826"
        alt="People Eating Illustration"
        className="w-full h-auto object-cover rounded-lg"
        />
        </div>

        {/* Form Sign Up */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">Daftarkan Akun Anda</h2>

          {error && (
            <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-100 text-green-700 p-2 rounded mb-4 text-center">
              {success}
            </div>
          )}

          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label htmlFor="fullname" className="block text-gray-700">Nama Lengkap</label>
              <input
                type="text"
                id="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Masukkan Nama Lengkap Anda"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Masukkan Email Anda"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-gray-700">Alamat Lengkap</label>
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Masukkan Alamat Lengkap Anda"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700">Kata Sandi</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Masukkan Kata Sandi Anda"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700">Konfirmasi Kata Sandi</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Konfirmasi Kata Sandi Anda"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Daftarkan Akun Anda
            </button>
          </form>

          <div className="mt-4 text-center">
            <span className="text-gray-600">Sudah punya akun? </span>
            <Link to="/login" className="text-orange-500 font-semibold">Masuk</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
