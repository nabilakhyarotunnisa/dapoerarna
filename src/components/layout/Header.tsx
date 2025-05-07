import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Search, UserCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import logo from '../../assets/logo.png'; 


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cart } = useCart();
  const location = useLocation();
  

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          
          <Link 
                  to="/" 
                  className="text-xl sm:text-2xl font-bold text-orange-500 flex items-center"
                >
                  <span className="mr-2">
                    <img 
                      src={logo} 
                       className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                      alt="Dapoer Arna Logo"
                    />
                  </span>
                  <span>DAPOER ARNA</span>
                </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-orange-500 transition-colors">
              Beranda
            </Link>
            <Link to="/menu" className="font-medium text-gray-700 hover:text-orange-500 transition-colors">
              Menu
            </Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-orange-500 transition-colors">
              Tentang
            </Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-orange-500 transition-colors">
              Kontak
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="p-2 text-gray-700 hover:text-orange-500 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            <Link 
              to="/cart" 
              className="p-2 text-gray-700 hover:text-orange-500 transition-colors relative"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={20} />
              {cart.totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.totalItems}
                </span>
              )}
            </Link>

            <Link 
              to="/login" 
              className="p-2 text-gray-700 hover:text-orange-500 transition-colors"
              aria-label="Login"
            >
              <UserCircle size={20} />
            </Link>
            </div> 

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link 
              to="/cart" 
              className="p-2 text-gray-700 hover:text-orange-500 transition-colors relative"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={20} />
              {cart.totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-orange-500 transition-colors"
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar - Visible when search is open */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 transition-all">
            <div className="container mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for food..."
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <button
                  onClick={toggleSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu - Visible when menu is open */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all">
            <nav className="container mx-auto py-4 px-4 flex flex-col">
              <Link to="/" className="py-2 px-4 font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                Beranda
              </Link>
              <Link to="/menu" className="py-2 px-4 font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                Menu
              </Link>
              <Link to="/about" className="py-2 px-4 font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                Tentang
              </Link>
              <Link to="/contact" className="py-2 px-4 font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                Kontak
              </Link>
              <button
                onClick={toggleSearch} 
                className="flex items-center py-2 px-4 font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                <Search size={20} className="mr-2" />
                Pencarian
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;