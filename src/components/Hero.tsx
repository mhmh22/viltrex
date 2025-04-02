import { Button } from "@/components/ui/button";
import { Fragment } from "react";
import { ArrowRight, ChevronRight, Sparkles, Brain, Cpu } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Next-Generation AI Solutions
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6">
              Transform Business Through{" "}
              <span className="gradient-text relative inline-block">
                AI Innovation
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 4 150 4 298 10" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="2" y1="10" x2="298" y2="10" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#4F46E5" stopOpacity="0"/>
                      <stop offset="0.5" stopColor="#4F46E5"/>
                      <stop offset="1" stopColor="#4F46E5" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto lg:mx-0">
              We help companies leverage artificial intelligence to drive growth, efficiency, and create competitive advantage in today's rapidly evolving digital landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-lg font-medium h-14 px-8 rounded-full shadow-lg hover:shadow-xl transition-all group"
                asChild
              >
                <a href="#contact">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
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
            
            {/* Client logos */}
            <div className="mt-16">
              <p className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-4">Trusted by innovative companies</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 items-center opacity-70">
                {['Google', 'Microsoft', 'Amazon', 'Tesla', 'IBM'].map((company) => (
                  <span key={company} className="text-xl font-bold text-gray-900 dark:text-white">{company}</span>
                ))}
              </div>
            </div>
            
            {/* Trust metrics */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1 flex items-center justify-center lg:justify-start">
                  98%
                  <span className="text-blue-500 text-xl ml-1">+</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1 flex items-center justify-center lg:justify-start">
                  50
                  <span className="text-blue-500 text-xl ml-1">+</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Enterprise Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1 flex items-center justify-center lg:justify-start">
                  10
                  <span className="text-blue-500 text-xl ml-1">+</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 hidden lg:flex justify-end">
            <div className="relative w-full h-[550px]">
              {/* Abstract geometric shape background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Main floating card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white dark:bg-gray-800 rounded-3xl shadow-xl glass-card flex items-center justify-center p-6 z-20 animate-float">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl w-full h-full flex items-center justify-center text-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-30"></div>
                  <Brain className="w-32 h-32 opacity-80" />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-white dark:bg-gray-800 rounded-xl shadow-lg glass-card p-4 flex items-center justify-center animate-float-slow">
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Cpu className="text-white w-10 h-10" />
                </div>
              </div>
              
              <div className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-white dark:bg-gray-800 rounded-xl shadow-lg glass-card p-4 flex items-center justify-center animate-float-medium" style={{ animationDelay: "1s" }}>
                <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 4.21002L12 6.81002L16.5 4.21002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 19.79V14.6L3 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12L16.5 14.6V19.79" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.27002 6.96002L12 12.01L20.73 6.96002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <div className="absolute top-2/3 left-1/3 w-20 h-20 bg-white dark:bg-gray-800 rounded-xl shadow-lg glass-card p-3 flex items-center justify-center animate-float-medium" style={{ animationDelay: "2s" }}>
                <div className="w-full h-full bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              {/* Animated particles */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div 
                  key={i}
                  className={`absolute ${getRandomPosition()} w-${getRandomSize()} h-${getRandomSize()} rounded-full bg-blue-500/30 dark:bg-blue-400/30 animate-pulse`}
                  style={{ animationDelay: `${i * 0.7}s`, animationDuration: `${3 + i * 0.5}s` }}
                ></div>
              ))}
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
  const sizes = ["6", "8", "10", "12"];
  return sizes[Math.floor(Math.random() * sizes.length)];
}

export default Hero; 