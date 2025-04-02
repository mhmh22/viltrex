import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Network, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "AI Strategy Consulting",
      description: "We develop comprehensive AI implementation roadmaps aligned with your business objectives and market positioning.",
      icon: <Brain className="w-12 h-12 text-primary" />,
      features: ["Strategic Assessment", "ROI Forecasting", "Implementation Planning"]
    },
    {
      title: "Custom AI Development",
      description: "Our engineering team builds bespoke AI solutions tailored to your unique business challenges and requirements.",
      icon: <Code className="w-12 h-12 text-primary" />,
      features: ["ML Model Development", "Computer Vision", "Natural Language Processing"]
    },
    {
      title: "AI Integration",
      description: "We seamlessly integrate AI capabilities into your existing systems and workflows for frictionless adoption.",
      icon: <Network className="w-12 h-12 text-primary" />,
      features: ["API Development", "System Integration", "Workflow Automation"]
    },
    {
      title: "Data Science & Analytics",
      description: "Unlock valuable insights from your data through advanced analytics and machine learning techniques.",
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      features: ["Predictive Analytics", "Data Visualization", "Business Intelligence"]
    }
  ];

  return (
    <section id="services" className="py-28 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="section-title mb-6">
            Our <span className="gradient-text">Services</span>
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
              className="group transition-all duration-300 hover:shadow-xl border-t-4 border-t-primary/40 hover:border-t-primary overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="pt-8 pb-4">
                <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                
                <ul className="pt-4 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-10 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2 gradient-text">98%</h3>
              <p className="text-gray-600 dark:text-gray-300">Client satisfaction rate across all projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2 gradient-text">150+</h3>
              <p className="text-gray-600 dark:text-gray-300">AI solutions successfully implemented</p>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-3xl font-bold mb-2 gradient-text">10x</h3>
              <p className="text-gray-600 dark:text-gray-300">Average ROI for our enterprise clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 