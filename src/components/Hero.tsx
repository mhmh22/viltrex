import { Button } from "@/components/ui/button";
import { Fragment } from "react";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6">
              Transform Business Through{" "}
              <span className="gradient-text">AI Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto lg:mx-0">
              We help companies leverage artificial intelligence to drive growth, efficiency, and create competitive advantage in today's rapidly evolving digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-lg font-medium h-14 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg font-medium h-14 px-8 rounded-full border-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                asChild
              >
                <a href="#services">Explore Services</a>
              </Button>
            </div>
            
            {/* Trust badges */}
            <div className="mt-16 flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="text-sm text-gray-500 dark:text-gray-400 flex flex-col items-center lg:items-start">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">98%</div>
                <div>Client Satisfaction</div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 flex flex-col items-center lg:items-start">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">50+</div>
                <div>Enterprise Clients</div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 flex flex-col items-center lg:items-start">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">10+</div>
                <div>Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 hidden lg:flex justify-end">
            <div className="relative w-full h-[500px]">
              {/* Abstract geometric shape background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
              
              {/* Floating tech elements */}
              {Array.from({ length: 5 }).map((_, i) => (
                <Fragment key={i}>
                  <div 
                    className={`absolute ${getRandomPosition()} w-${getRandomSize()} h-${getRandomSize()} bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-lg opacity-80 dark:opacity-90 backdrop-blur-sm animate-pulse`}
                    style={{ animationDelay: `${i * 0.7}s`, animationDuration: `${3 + i * 0.5}s` }}
                  ></div>
                  <div 
                    className={`absolute ${getRandomPosition()} w-${getRandomSize()} h-${getRandomSize()} bg-white dark:bg-gray-800 rounded-lg shadow-md glass-card animate-pulse`}
                    style={{ animationDelay: `${i * 0.5}s`, animationDuration: `${4 + i * 0.5}s` }}
                  ></div>
                </Fragment>
              ))}
              
              {/* Central visual element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white dark:bg-gray-800 rounded-3xl shadow-xl glass-card flex items-center justify-center p-6 z-10">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl w-full h-full flex items-center justify-center text-white">
                  <svg className="w-32 h-32 opacity-90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper functions for random positioning
function getRandomPosition() {
  const positions = [
    "top-1/4 left-1/4", "top-1/3 left-1/2", "top-1/2 left-1/4", 
    "top-3/4 left-1/3", "top-1/3 left-3/4", "top-2/3 left-2/3"
  ];
  return positions[Math.floor(Math.random() * positions.length)];
}

function getRandomSize() {
  const sizes = ["16", "20", "24", "32", "40"];
  return sizes[Math.floor(Math.random() * sizes.length)];
}

export default Hero; 