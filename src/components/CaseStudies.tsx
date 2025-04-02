import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      client: "TechCorp Industries",
      title: "AI-Powered Predictive Maintenance",
      description: "Implemented a machine learning solution that analyzed sensor data to predict equipment failures before they occurred, dramatically reducing downtime and maintenance costs.",
      outcome: "37% reduction in downtime",
      industry: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581091215367-9b6c00b3035a?q=80&w=500&auto=format&fit=crop"
    },
    {
      client: "HealthPlus Network",
      title: "Patient Care Optimization System",
      description: "Developed an AI system that helps healthcare providers optimize resource allocation and personalize treatment recommendations based on historical patient data and outcomes.",
      outcome: "22% improvement in care efficiency",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=500&auto=format&fit=crop"
    },
    {
      client: "Global Financial Services",
      title: "Fraud Detection Enhancement",
      description: "Created a sophisticated AI model that significantly improved fraud detection capabilities while reducing false positives, saving millions in potential fraud losses.",
      outcome: "94% accuracy in fraud detection",
      industry: "Finance",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=500&auto=format&fit=crop"
    }
  ];

  return (
    <section id="case-studies" className="py-28 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="section-title mb-6">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="section-description">
            See how we've helped organizations transform their businesses and achieve 
            remarkable results through innovative AI solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border-0 bg-white dark:bg-gray-900">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <CardHeader className="pb-0">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-2">
                    {study.industry}
                  </div>
                  <h3 className="text-xl font-bold mb-0">{study.title}</h3>
                </CardHeader>
                <CardContent className="py-4 flex-1">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{study.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{study.client}</span>
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">{study.outcome}</span>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="group px-8 h-12 rounded-full shadow-md hover:shadow-lg transition-all"
            asChild
          >
            <a href="#contact" className="flex items-center gap-2">
              Discuss Your Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
        
        <div className="mt-24 flex flex-col md:flex-row gap-8 text-center justify-center items-center">
          <div className="max-w-xs">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16V21M12 16L9 13M12 16L15 13M8 7C8 8.65685 9.34315 10 11 10H12.5C14.433 10 16 8.433 16 6.5C16 4.567 14.433 3 12.5 3C10.567 3 9.32273 4.567 9.03311 6.5M8 7H3M8 7C8 4.79086 9.79086 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Initial Consultation</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">We start by understanding your unique business challenges and objectives.</p>
          </div>
          
          <div className="w-12 h-0.5 md:w-0.5 md:h-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
          
          <div className="max-w-xs">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M12 3L13.9101 4.40287C14.5889 4.82828 15.4111 4.82828 16.0899 4.40287L18 3L19.5 4.5L18.0971 6.41013C17.6717 7.08887 17.6717 7.91113 18.0971 8.58987L19.5 10.5L18 12L16.0899 10.5971C15.4111 10.1717 14.5889 10.1717 13.9101 10.5971L12 12L10.0899 10.5971C9.41113 10.1717 8.58887 10.1717 7.91013 10.5971L6 12L4.5 10.5L5.90287 8.58987C6.32828 7.91113 6.32828 7.08887 5.90287 6.41013L4.5 4.5L6 3L7.91013 4.40287C8.58887 4.82828 9.41113 4.82828 10.0899 4.40287L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12L11.3753 18.6227C11.331 19.3969 11.8438 20.0967 12.6095 20.2544V20.2544C13.2913 20.3966 13.9836 20.0214 14.2462 19.3798L17 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Custom Solution Design</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">We create a tailored AI solution strategy specific to your business needs.</p>
          </div>
          
          <div className="w-12 h-0.5 md:w-0.5 md:h-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
          
          <div className="max-w-xs">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8L8 16M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM7 13C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13ZM17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Implementation & Results</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">We deliver and integrate your AI solution, ensuring it drives measurable results.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies; 