import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';

// Pages
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col min-h-screen"
      >
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/productos" element={<ProductsPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>
        <WhatsAppButton phoneNumber="5491112345678" />
        <Footer />
      </motion.div>
    </Router>
  );
}

export default App;