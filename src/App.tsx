import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import StartProject from './pages/StartProject';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import { Sun, Moon } from 'lucide-react';
import { Button } from './components/ui/button';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? 'dark' 
      : 'light';
  });

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen relative">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <main>
                <Hero />
                <About />
                <Services />
                <Process />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/start-project" element={<StartProject />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      {/* Theme toggle button */}
      <Button 
        variant="outline" 
        size="icon" 
        className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg"
        onClick={toggleTheme}
      >
        {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}

export default App;
