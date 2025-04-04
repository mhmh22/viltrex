import { Lightbulb, Shield, Users, Target, TrendingUp, Award } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <section id="about" className="py-28 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 dark:bg-blue-900/20 rounded-bl-full opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-50 dark:bg-indigo-900/20 rounded-tr-full opacity-70"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge 
            variant="outline" 
            className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-300 text-sm font-medium mb-6"
          >
            About Us
          </Badge>
          <h2 className="section-title mb-6">
            Meet <span className="gradient-text">Viltrex</span>
          </h2>
          <p className="section-description">
            An innovative AI company dedicated to helping businesses 
            <span className="text-primary font-semibold"> transform</span>, 
            <span className="text-purple-500 font-semibold"> innovate</span>, and 
            <span className="text-emerald-500 font-semibold"> succeed</span>.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-stretch gap-16">
          <div className="lg:w-1/2">
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Viltrex was founded with a vision to make artificial intelligence accessible and practical for businesses of all sizes. We combine industry expertise with advanced AI technologies to deliver solutions that drive real business value.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our approach brings together strategic thinking and technical excellence to help organizations navigate the AI landscape with confidence. We focus on practical applications that solve real business challenges.
              </p>
              
              <p className="text-lg leading-relaxed">
                We believe that AI shouldn't be complicated or exclusive. That's why we're committed to creating solutions that are powerful yet intuitive, sophisticated yet accessible for organizations at any stage of their AI journey.
              </p>
              
              {/* Company Highlights */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                <Card className="group hover:border-primary dark:hover:border-primary transition-colors duration-300">
                  <CardContent className="p-5 flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary opacity-70 group-hover:opacity-100" />
                    <div>
                      <div className="text-xl font-bold text-primary mb-0">Excellence</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">In Every Solution</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="group hover:border-primary dark:hover:border-primary transition-colors duration-300">
                  <CardContent className="p-5 flex items-center gap-3">
                    <Target className="w-6 h-6 text-primary opacity-70 group-hover:opacity-100" />
                    <div>
                      <div className="text-xl font-bold text-primary mb-0">Focused</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">On Your Success</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="group hover:border-primary dark:hover:border-primary transition-colors duration-300">
                  <CardContent className="p-5 flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary opacity-70 group-hover:opacity-100" />
                    <div>
                      <div className="text-xl font-bold text-primary mb-0">24/7</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">Client Support</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="group hover:border-primary dark:hover:border-primary transition-colors duration-300">
                  <CardContent className="p-5 flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-primary opacity-70 group-hover:opacity-100" />
                    <div>
                      <div className="text-xl font-bold text-primary mb-0">Proven</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">Business Results</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <Card className="h-full shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Innovation</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      We continuously pursue new ideas and approaches that push the boundaries of what AI can achieve for your business.
                    </p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Trust & Integrity</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      We operate with complete transparency and ethical responsibility, ensuring that your data and business interests are always protected.
                    </p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Results-Driven</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      We measure our success by the tangible business outcomes and competitive advantages we create for our clients.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                  <div className="text-gray-500 dark:text-gray-400 text-sm text-center italic">
                    "We blend technical expertise with business acumen to deliver results that matter."
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 