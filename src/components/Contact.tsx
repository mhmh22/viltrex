import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-28 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="section-title mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-description">
            Ready to transform your business with AI? Connect with our team to discuss 
            your specific needs and discover how we can help.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="md:w-2/5">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-0 shadow-xl h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-white">Let's Connect</CardTitle>
                <p className="text-gray-300 mt-2">Our team of AI experts are ready to help you navigate the possibilities.</p>
              </CardHeader>
              <CardContent className="space-y-8 pt-6">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">info@viltrex.com</p>
                    <p className="text-xs text-gray-400 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-xs text-gray-400 mt-1">Mon-Fri from 9am to 6pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Office</h4>
                    <p className="text-gray-300">123 AI Boulevard, Tech City</p>
                    <p className="text-xs text-gray-400 mt-1">Schedule a visit anytime</p>
                  </div>
                </div>
                
                <div className="pt-6 mt-6 border-t border-gray-700">
                  <h4 className="font-semibold text-white mb-4">Our Clients Include</h4>
                  <div className="flex flex-wrap gap-3">
                    <div className="py-1 px-3 bg-white/10 rounded-full text-xs text-gray-300">Fortune 500</div>
                    <div className="py-1 px-3 bg-white/10 rounded-full text-xs text-gray-300">Tech Startups</div>
                    <div className="py-1 px-3 bg-white/10 rounded-full text-xs text-gray-300">Healthcare</div>
                    <div className="py-1 px-3 bg-white/10 rounded-full text-xs text-gray-300">Finance</div>
                    <div className="py-1 px-3 bg-white/10 rounded-full text-xs text-gray-300">Manufacturing</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:w-3/5">
            <Card className="border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Send us a message</CardTitle>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Fill out the form below and we'll get back to you soon.</p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="py-12 flex flex-col items-center text-center">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent Successfully</h3>
                    <p className="text-gray-600 dark:text-gray-300 max-w-md">
                      Thank you for reaching out! We've received your message and will be in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-gray-700 dark:text-gray-300">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full resize-none"
                        required
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full py-6 rounded-lg text-base shadow-md hover:shadow-lg transition-all"
                    >
                      Send Message
                    </Button>
                    
                    <div className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                      By submitting this form, you agree to our <a href="#" className="underline">privacy policy</a>.
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 