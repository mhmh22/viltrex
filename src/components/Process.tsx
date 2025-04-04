import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, MessageSquare, Code2, Rocket, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from 'react';
import { Link } from "react-router-dom";

const Process = () => {
  const processSteps = [
    {
      id: 1,
      title: "Discovery & Strategy",
      description: "We start by understanding your business needs, challenges, and goals to create a tailored AI strategy aligned with your objectives.",
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      color: "#4F46E5",
      keyPoints: [
        "Business needs assessment",
        "Opportunity identification",
        "Technical feasibility analysis",
        "Strategic roadmap creation"
      ]
    },
    {
      id: 2,
      title: "Design & Planning",
      description: "Our experts design a detailed solution architecture and plan the development process with clear milestones and deliverables.",
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      color: "#8B5CF6",
      keyPoints: [
        "Solution architecture",
        "Technology selection",
        "Data requirements planning",
        "Development roadmap"
      ]
    },
    {
      id: 3,
      title: "Development & Testing",
      description: "We build your AI solution using industry best practices, with continuous testing to ensure quality, performance, and accuracy.",
      icon: <Code2 className="w-6 h-6 text-white" />,
      color: "#10B981",
      keyPoints: [
        "Agile development",
        "AI model training",
        "Quality assurance",
        "Performance optimization"
      ]
    },
    {
      id: 4,
      title: "Deployment & Growth",
      description: "We deploy your solution and provide ongoing support, monitoring, and optimization to ensure maximum ROI and business impact.",
      icon: <Rocket className="w-6 h-6 text-white" />,
      color: "#F59E0B",
      keyPoints: [
        "Seamless integration",
        "User training",
        "Performance monitoring",
        "Continuous improvement"
      ]
    }
  ];

  return (
    <section id="process" className="py-28 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-24 left-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-24 right-0 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge 
              variant="outline" 
              className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-300 text-sm font-medium mb-6"
            >
              Our Methodology
            </Badge>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="section-title mb-6"
          >
            How We <span className="gradient-text">Deliver Results</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-description"
          >
            Our proven process ensures we deliver high-quality AI solutions 
            that meet your business needs and drive measurable outcomes.
          </motion.p>
        </div>
        
        {/* Timeline - Desktop */}
        <div className="hidden lg:block mb-20">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 dark:bg-gray-700 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-4 gap-6 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col items-center ${index % 2 === 0 ? 'pt-0 pb-32' : 'pt-32 pb-0'}`}
                >
                  {/* Step circle on timeline */}
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center z-10 shadow-lg mb-6"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.icon}
                  </div>
                  
                  {/* Content box */}
                  <Card className="w-full hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="pb-2">
                      <Badge className="w-fit text-xs font-medium mb-2" style={{ backgroundColor: `${step.color}20`, color: step.color }}>
                        STEP {step.id}
                      </Badge>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{step.description}</p>
                      
                      <Separator className="my-4" />
                      
                      <ul className="space-y-2">
                        {step.keyPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: step.color }} />
                            <span className="text-gray-700 dark:text-gray-400">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Timeline - Mobile */}
        <div className="lg:hidden space-y-12 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          {processSteps.map((step, index) => (
            <motion.div 
              key={step.id} 
              className="relative pl-16"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Step circle on timeline */}
              <div 
                className="absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center z-10"
                style={{ backgroundColor: step.color }}
              >
                {React.cloneElement(step.icon, { className: "w-4 h-4 text-white" })}
              </div>
              
              {/* Content box */}
              <Card>
                <CardHeader className="pb-2">
                  <Badge className="w-fit text-xs font-medium" style={{ backgroundColor: `${step.color}20`, color: step.color }}>
                    STEP {step.id}
                  </Badge>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{step.description}</p>
                  
                  <div className="grid grid-cols-1 gap-2">
                    {step.keyPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: step.color }} />
                        <span className="text-sm text-gray-700 dark:text-gray-400">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl"></div>
            <CardContent className="p-8 relative z-10">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Your AI Solution?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Let's work together to develop a powerful AI solution tailored to your business needs.
              </p>
              <Button
                size="lg"
                className="text-lg font-medium h-14 px-8 rounded-full shadow-lg hover:shadow-xl transition-all group"
                asChild
              >
                <Link to="/start-project">
                  Start Building Your Solution
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Process; 