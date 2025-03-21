
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 bg-secondary/30 border-t border-border">
      <div className="container-tight">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-xl font-semibold tracking-tight">
                Resume<span className="text-primary">Match</span>
              </span>
            </Link>
            <p className="text-sm text-foreground/70 mb-6 max-w-xs">
              AI-powered resume matching to connect you with ideal jobs and courses to enhance your skills.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/features" 
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  to="/how-it-works" 
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link 
                  to="/pricing" 
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  to="/testimonials" 
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/blog" 
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors flex items-center"
                >
                  Documentation
                  <ExternalLink size={12} className="ml-1.5" />
                </a>
              </li>
              <li>
                <Link 
                  to="/help" 
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link 
                  to="/guides" 
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Career Guides
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/careers" 
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} ResumeMatch. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link 
              to="/privacy" 
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link 
              to="/terms" 
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link 
              to="/cookies" 
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
