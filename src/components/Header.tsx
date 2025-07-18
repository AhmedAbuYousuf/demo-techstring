import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import BookDemoModal from "./BookDemoModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const projects = [
    { name: "E-commerce Platform", href: "#" },
    { name: "Healthcare Management", href: "#" },
    { name: "Financial Analytics", href: "#" },
    { name: "Supply Chain Optimization", href: "#" }
  ];

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      // If on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on another page, navigate to home page
      window.location.href = '/';
    }
    setIsMenuOpen(false);
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
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Company Name */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-foreground">SaaS Pro</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={handleHomeClick}
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors"
              >
                About Us
              </button>
              
              {/* Projects Dropdown */}
              <div className="relative group">
                <button 
                  onClick={() => scrollToSection('products')}
                  className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
                >
                  <span>Projects</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {projects.slice(0, 3).map((project) => (
                    <Link key={project.name} to="#" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 transition-colors">
                      {project.name}
                    </Link>
                  ))}
                  <Link to="/products" className="block px-4 py-2 text-sm text-primary font-medium hover:bg-gray-50 transition-colors">
                    More Products →
                  </Link>
                </div>
              </div>

              <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-primary hover:opacity-90"
              >
                Book a Demo
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <button 
                  onClick={handleHomeClick}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  About Us
                </button>
                <div className="space-y-2">
                  <span className="text-foreground font-medium">Projects:</span>
                  <div className="pl-4 space-y-2">
                    {projects.slice(0, 3).map((project) => (
                      <Link key={project.name} to="#" className="block text-muted-foreground hover:text-primary transition-colors">
                        {project.name}
                      </Link>
                    ))}
                    <Link to="/products" className="block text-primary font-medium">
                      More Products →
                    </Link>
                  </div>
                </div>
                <Link 
                  to="/blog"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
                <Button 
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-primary hover:opacity-90"
                >
                  Book a Demo
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;