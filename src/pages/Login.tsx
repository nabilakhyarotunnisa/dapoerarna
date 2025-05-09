import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button'; // Komponen button yang sudah ada

// Data pengguna (misalnya user biasa dan admin)
const users = [
  {
    email: "user@example.com",
    password: "password123",
    role: "user", // Pengguna biasa
  },
  {
    email: "admin@example.com",
    password: "admin123",
    role: "admin", // Admin
  },
];

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fungsi untuk menangani login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Cari user berdasarkan email
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Jika ditemukan, arahkan ke halaman yang sesuai
      if (user.role === "admin") {
        navigate("/admin/dashboard"); // Halaman dashboard admin
      } else {
        navigate("/home"); // Halaman home untuk user biasa
      }
    } else {
      // Jika tidak ditemukan, tampilkan pesan error
      setError('Email atau password salah');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <Button variant="primary" type="submit" size="lg" fullWidth>
            Masuk
          </Button>
        </form>
        
        {/* Link Sign Up */}
        <p className="mt-4 text-center text-sm">
          Belum punya akun? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
