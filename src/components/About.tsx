import { Shield, Lightbulb, Clock, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-28 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 dark:bg-blue-900/20 rounded-bl-full opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-50 dark:bg-indigo-900/20 rounded-tr-full opacity-70"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title mb-6">
            About <span className="gradient-text">Viltrex</span>
          </h2>
          <p className="section-description">
            We're a forward-thinking AI agency dedicated to helping businesses harness the 
            power of artificial intelligence to solve complex problems.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-stretch gap-16">
          <div className="lg:w-1/2">
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                Viltrex is a premier AI solutions company founded by a team of AI experts and industry veterans who saw the transformative potential of artificial intelligence across all business sectors.
              </p>
              
              <p className="text-lg">
                Our mission is to democratize advanced AI technologies, making them accessible and beneficial for organizations of all sizes. We combine deep technical expertise with strategic thinking to deliver AI solutions that create tangible business value.
              </p>
              
              <p className="text-lg">
                With a focus on innovation, quality, and client success, we help companies navigate the AI landscape, from strategy development to implementation and optimization.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-1">10+</div>
                  <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-1">50+</div>
                  <div className="text-gray-600 dark:text-gray-400">AI Experts</div>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-1">200+</div>
                  <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-1">15+</div>
                  <div className="text-gray-600 dark:text-gray-400">Industries Served</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden h-full">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-8">Our Core Values</h3>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Lightbulb className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Innovation</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        We constantly push the boundaries of what's possible with AI, staying ahead of the curve to bring cutting-edge solutions to our clients.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Integrity</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        We operate with transparency, honesty, and ethical responsibility in all aspects of our work, especially in data handling and AI development.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Client-Centric</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        We listen closely to our clients' needs and tailor our solutions to deliver maximum value and address their specific challenges.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Commitment</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        We're committed to achieving exceptional results for our clients, going above and beyond to ensure the success of every project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 