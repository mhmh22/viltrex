import { Facebook, Twitter, Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
      <div className="absolute bottom-0 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold gradient-text mb-6">VILTREX</h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              Transforming businesses through cutting-edge AI solutions and expertise to drive growth and competitive advantage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-1 group">
                  AI Strategy
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-1 group">
                  Custom AI Development
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-1 group">
                  AI Integration
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-1 group">
                  Data Science
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-1 group">
                  About Us
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-1 group">
                  Case Studies
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-1 group">
                  Careers
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-1 group">
                  Blog
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest AI industry insights and updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 bg-gray-800 border-gray-700 border rounded-l-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button className="rounded-l-none">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">&copy; {currentYear} Viltrex AI Agency. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 