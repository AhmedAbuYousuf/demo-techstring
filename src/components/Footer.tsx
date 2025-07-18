import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BookDemoModal from "./BookDemoModal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      // If on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on another page, navigate to home page
      window.location.href = '/';
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home page with hash
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="bg-gradient-primary text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold">SaaS Pro</span>
              </div>
              <p className="text-white/80 max-w-sm">
                Transforming businesses with innovative SaaS solutions. Empowering growth through technology.
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <button 
                  onClick={handleHomeClick}
                  className="text-left text-white/80 hover:text-white transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </button>
                <Link to="/products" className="text-left text-white/80 hover:text-white transition-colors">
                  Products
                </Link>
                <Link to="/blog" className="text-left text-white/80 hover:text-white transition-colors">
                  Blog
                </Link>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </nav>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Ready to Get Started?</h3>
              <p className="text-white/80">
                Transform your business today with our innovative solutions.
              </p>
              <Button 
                onClick={() => setIsModalOpen(true)}
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Book a Demo
              </Button>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60">
              © 2024 SaaS Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Footer;