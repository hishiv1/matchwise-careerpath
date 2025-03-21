
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container-tight flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-semibold tracking-tight">
            Resume<span className="text-primary">Match</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-foreground/80 hover:text-foreground transition-colors duration-200"
          >
            Home
          </Link>
          <Link 
            to="/how-it-works" 
            className="text-foreground/80 hover:text-foreground transition-colors duration-200"
          >
            How It Works
          </Link>
          <Link 
            to="/about" 
            className="text-foreground/80 hover:text-foreground transition-colors duration-200"
          >
            About
          </Link>
          <div className="h-4 w-px bg-border"></div>
          <button className="btn-primary">Get Started</button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out transform pt-20",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="container flex flex-col space-y-6 p-6">
          <Link 
            to="/" 
            className="text-xl font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/how-it-works" 
            className="text-xl font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link 
            to="/about" 
            className="text-xl font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <div className="h-px w-full bg-border my-4"></div>
          <button 
            className="btn-primary w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
