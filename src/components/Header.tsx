import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled 
        ? "py-3 bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-900/90" 
        : "py-5 bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            <Link to="/" className="gradient-text hover:opacity-90 transition-opacity">VILTREX</Link>
          </h1>
        </div>
        
        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#services"
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-gray-700 dark:text-white hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"
                )}
              >
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#about"
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-gray-700 dark:text-white hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"
                )}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#case-studies"
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-gray-700 dark:text-white hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"
                )}
              >
                Case Studies
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button 
                variant="default" 
                size="sm" 
                className="ml-2" 
                asChild
              >
                <Link to="/start-project">Start Your Project</Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost"
          size="icon"
          className="md:hidden text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 shadow-md mt-2">
          <div className="flex flex-col py-4">
            <a href="#services" className="px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Services</a>
            <a href="#about" className="px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">About</a>
            <a href="#case-studies" className="px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Case Studies</a>
            <div className="px-6 py-3">
              <Button className="w-full" asChild>
                <Link to="/start-project">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header; 