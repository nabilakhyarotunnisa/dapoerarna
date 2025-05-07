import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Context 
import { CartProvider } from './context/CartContext';

// Layout Components 
import Header from './components/layout/Header'; 
import Footer from './components/layout/Footer'; 

// Pages 
import Home from './pages/Home'; 
import Menu from './pages/Menu'; 
import ProductDetail from './pages/ProductDetail'; 
import Cart from './pages/Cart'; 
import Checkout from './pages/Checkout'; 
import OrderConfirmation from './pages/OrderConfirmation'; 
import About from './pages/About'; 
import Contact from './pages/Contact';
import Login from './pages/Login'; 
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Header />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />  
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;