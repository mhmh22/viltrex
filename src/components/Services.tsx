import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Network, BarChart3, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "AI Strategy Consulting",
      description: "We develop comprehensive AI implementation roadmaps aligned with your business objectives and market positioning.",
      icon: <Brain className="w-12 h-12 text-primary" />,
      features: ["Strategic Assessment", "ROI Forecasting", "Implementation Planning"],
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "Custom AI Development",
      description: "Our engineering team builds bespoke AI solutions tailored to your unique business challenges and requirements.",
      icon: <Code className="w-12 h-12 text-primary" />,
      features: ["ML Model Development", "Computer Vision", "Natural Language Processing"],
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "AI Integration",
      description: "We seamlessly integrate AI capabilities into your existing systems and workflows for frictionless adoption.",
      icon: <Network className="w-12 h-12 text-primary" />,
      features: ["API Development", "System Integration", "Workflow Automation"],
      color: "from-emerald-600 to-teal-600"
    },
    {
      title: "Data Science & Analytics",
      description: "Unlock valuable insights from your data through advanced analytics and machine learning techniques.",
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      features: ["Predictive Analytics", "Data Visualization", "Business Intelligence"],
      color: "from-amber-600 to-orange-600"
    }
  ];

  return (
    <section id="services" className="py-28 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-24 right-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-24 left-0 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-300 text-sm font-medium mb-6">
            Our Expertise
          </div>
          <h2 className="section-title mb-6">
            Transformative <span className="gradient-text">AI Services</span>
          </h2>
          <p className="section-description">
            We offer a comprehensive suite of AI services to help businesses innovate, 
            optimize operations, and gain competitive advantages in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group transition-all duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-800 hover:border-primary/20 dark:hover:border-primary/20 overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-70 dark:opacity-90 transition-all duration-300 group-hover:h-2" style={{ backgroundImage: `linear-gradient(to right, ${service.color.split(' ')[0].replace('from-', '')}, ${service.color.split(' ')[1].replace('to-', '')})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="pt-8 pb-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br opacity-90 mb-6 transition-transform duration-300 group-hover:scale-110 text-white" style={{ backgroundImage: `linear-gradient(to bottom right, ${service.color.split(' ')[0].replace('from-', '')}, ${service.color.split(' ')[1].replace('to-', '')})` }}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 min-h-[80px]">{service.description}</p>
                
                <ul className="pt-4 space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br" style={{ backgroundImage: `linear-gradient(to bottom right, ${service.color.split(' ')[0].replace('from-', '')}, ${service.color.split(' ')[1].replace('to-', '')})` }}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="ghost" size="sm" className="w-full mt-4 group">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-28 max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Why clients choose us</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-white dark:bg-gray-900 rounded-full shadow-md flex items-center justify-center mb-4">
                <h3 className="text-3xl font-bold gradient-text">98%</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Client satisfaction rate across all projects</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-white dark:bg-gray-900 rounded-full shadow-md flex items-center justify-center mb-4">
                <h3 className="text-3xl font-bold gradient-text">150+</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">AI solutions successfully implemented</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-white dark:bg-gray-900 rounded-full shadow-md flex items-center justify-center mb-4">
                <h3 className="text-3xl font-bold gradient-text">10x</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Average ROI for our enterprise clients</p>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button className="group">
              <span>View our case studies</span>
              <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 