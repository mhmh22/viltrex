import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Industry options
const industries = [
  "Healthcare",
  "Finance & Banking",
  "Retail & E-commerce",
  "Manufacturing",
  "Education",
  "Technology",
  "Media & Entertainment",
  "Real Estate",
  "Transportation & Logistics",
  "Energy & Utilities",
  "Government",
  "Other"
];

// Company size options
const companySizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "501-1000 employees",
  "1000+ employees"
];

// Budget options
const budgetOptions = [
  "< $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "> $100,000",
  "Not sure yet"
];

// Timeline options
const timelineOptions = [
  "As soon as possible",
  "1-3 months",
  "3-6 months",
  "6+ months",
  "Not sure yet"
];

// AI services
const aiServices = [
  { id: "customChatbots", label: "Custom AI Chatbots" },
  { id: "dataAnalytics", label: "AI Data Analytics" },
  { id: "nlpSolutions", label: "Natural Language Processing" },
  { id: "computerVision", label: "Computer Vision Solutions" },
  { id: "processAutomation", label: "AI Process Automation" },
  { id: "predictionModels", label: "Predictive Models" },
  { id: "customAiApps", label: "Custom AI Applications" },
  { id: "aiIntegration", label: "AI Integration Services" },
  { id: "other", label: "Other" }
];

// Form schema
const formSchema = z.object({
  // Step 1: Basic Information
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  company: z.string().min(1, { message: "Company name is required" }),
  jobTitle: z.string().optional(),
  industry: z.string().min(1, { message: "Please select your industry" }),
  companySize: z.string().min(1, { message: "Please select your company size" }),
  
  // Step 2: Project Details
  projectGoals: z.string().min(10, { message: "Please describe your project goals in more detail" }),
  budget: z.string().min(1, { message: "Please select a budget range" }),
  timeline: z.string().min(1, { message: "Please select a timeline" }),
  servicesNeeded: z.array(z.string()).min(1, { message: "Please select at least one service" }),
  otherServices: z.string().optional(),
  
  // Step 3: Additional Information
  dataAvailability: z.string().optional(),
  technicalResources: z.string().optional(),
  successMetrics: z.string().optional(),
  challenges: z.string().optional(),
  hearAboutUs: z.string().optional(),
  additionalInfo: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const StartProject = () => {
  const [formStep, setFormStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  
  const { 
    control, 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors, isValid } 
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      servicesNeeded: [],
    }
  });
  
  const watchServices = watch("servicesNeeded");
  const showOtherServices = watchServices?.includes("other");
  
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    
    // Show Calendly after a brief delay
    setTimeout(() => {
      setShowCalendly(true);
    }, 1500);
  };

  const goToNextStep = () => {
    setFormStep(current => current + 1);
  };

  const goToPrevStep = () => {
    setFormStep(current => current - 1);
  };
  
  // Check if the current step is valid
  const isStepValid = () => {
    if (formStep === 1) {
      const step1Fields = ['name', 'email', 'company', 'industry', 'companySize'];
      return step1Fields.every(field => !errors[field as keyof FormData]);
    }
    if (formStep === 2) {
      const step2Fields = ['projectGoals', 'budget', 'timeline', 'servicesNeeded'];
      return step2Fields.every(field => !errors[field as keyof FormData]);
    }
    return true;
  };

  return (
    <>
      <Header />
      <section className="py-28 bg-gray-50 dark:bg-gray-800 relative overflow-hidden min-h-screen">
        {/* Background decoration */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Start Your <span className="gradient-text">AI Project</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Tell us about your project needs, and we'll help you build the perfect AI solution.
            </p>
          </div>
          
          {/* Progress steps */}
          {!isSubmitted && (
            <div className="flex items-center justify-center mb-12 max-w-md mx-auto">
              <div className="flex-1 relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${formStep >= 1 ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'} mx-auto mb-2`}>
                  1
                </div>
                <div className="text-center text-sm font-medium">Company Info</div>
                {/* Connector */}
                <div className="absolute top-5 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10"></div>
              </div>
              
              <div className="flex-1 relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${formStep >= 2 ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'} mx-auto mb-2`}>
                  2
                </div>
                <div className="text-center text-sm font-medium">Project Details</div>
                {/* Connector */}
                <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10"></div>
              </div>
              
              <div className="flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${formStep >= 3 ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'} mx-auto mb-2`}>
                  3
                </div>
                <div className="text-center text-sm font-medium">Additional Info</div>
              </div>
            </div>
          )}
          
          <div className="max-w-2xl mx-auto">
            <Card className="border shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {isSubmitted 
                    ? "Thank You!" 
                    : formStep === 1 
                      ? "Tell Us About Your Company" 
                      : formStep === 2 
                        ? "Project Requirements" 
                        : "Additional Information"}
                </CardTitle>
                {!isSubmitted && (
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    {formStep === 1 
                      ? "Help us understand your organization better" 
                      : formStep === 2 
                        ? "Tell us about your AI project requirements" 
                        : "Additional context that will help us prepare for our call"}
                  </p>
                )}
              </CardHeader>
              
              <CardContent>
                {isSubmitted ? (
                  showCalendly ? (
                    <div className="py-4">
                      <h3 className="text-xl font-bold mb-4">Schedule a Discovery Call</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Choose a time that works for you, and our team will discuss your project in detail.
                      </p>
                      <div className="h-[600px]">
                        {/* In a real implementation, you would use the Calendly embed script */}
                        <iframe 
                          src="https://calendly.com/viltrex/discovery" 
                          width="100%" 
                          height="100%" 
                          frameBorder="0"
                        ></iframe>
                      </div>
                    </div>
                  ) : (
                    <div className="py-12 flex flex-col items-center text-center">
                      <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Information Received!</h3>
                      <p className="text-gray-600 dark:text-gray-300 max-w-md mb-8">
                        Thank you for sharing your project details. Our team is reviewing your information, and we'll be prepared to discuss your AI solution in our discovery call.
                      </p>
                      <div className="animate-pulse">
                        <p className="text-primary font-medium">Loading scheduling calendar...</p>
                      </div>
                    </div>
                  )
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {formStep === 1 && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Full Name *</Label>
                          <Input
                            id="name"
                            {...register("name")}
                            className={`w-full ${errors.name ? "border-red-500" : ""}`}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Work Email *</Label>
                          <Input
                            type="email"
                            id="email"
                            {...register("email")}
                            className={`w-full ${errors.email ? "border-red-500" : ""}`}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            {...register("phone")}
                            className="w-full"
                            placeholder="Optional"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-gray-700 dark:text-gray-300">Company Name *</Label>
                          <Input
                            id="company"
                            {...register("company")}
                            className={`w-full ${errors.company ? "border-red-500" : ""}`}
                          />
                          {errors.company && (
                            <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="jobTitle" className="text-gray-700 dark:text-gray-300">Job Title</Label>
                          <Input
                            id="jobTitle"
                            {...register("jobTitle")}
                            className="w-full"
                            placeholder="Optional"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="industry" className="text-gray-700 dark:text-gray-300">Industry *</Label>
                          <Controller
                            name="industry"
                            control={control}
                            render={({ field }) => (
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger className={`w-full ${errors.industry ? "border-red-500" : ""}`}>
                                  <SelectValue placeholder="Select your industry" />
                                </SelectTrigger>
                                <SelectContent>
                                  {industries.map((industry) => (
                                    <SelectItem key={industry} value={industry}>
                                      {industry}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            )}
                          />
                          {errors.industry && (
                            <p className="text-red-500 text-sm mt-1">{errors.industry.message}</p>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="companySize" className="text-gray-700 dark:text-gray-300">Company Size *</Label>
                          <Controller
                            name="companySize"
                            control={control}
                            render={({ field }) => (
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger className={`w-full ${errors.companySize ? "border-red-500" : ""}`}>
                                  <SelectValue placeholder="Select company size" />
                                </SelectTrigger>
                                <SelectContent>
                                  {companySizes.map((size) => (
                                    <SelectItem key={size} value={size}>
                                      {size}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            )}
                          />
                          {errors.companySize && (
                            <p className="text-red-500 text-sm mt-1">{errors.companySize.message}</p>
                          )}
                        </div>
                        
                        <div className="flex justify-end pt-4">
                          <Button
                            type="button"
                            onClick={goToNextStep}
                            disabled={!isStepValid()}
                            className="py-6 rounded-lg text-base shadow-md hover:shadow-lg transition-all group"
                          >
                            Continue
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </>
                    )}
                    
                    {formStep === 2 && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="projectGoals" className="text-gray-700 dark:text-gray-300">Project Goals & Objectives *</Label>
                          <Textarea
                            id="projectGoals"
                            {...register("projectGoals")}
                            rows={3}
                            className={`w-full resize-none ${errors.projectGoals ? "border-red-500" : ""}`}
                            placeholder="What are you trying to achieve with this AI solution?"
                          />
                          {errors.projectGoals && (
                            <p className="text-red-500 text-sm mt-1">{errors.projectGoals.message}</p>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <Label className="text-gray-700 dark:text-gray-300">AI Services Needed *</Label>
                          <div className="grid grid-cols-2 gap-3 mt-2">
                            {aiServices.map((service) => (
                              <div className="flex items-start space-x-2" key={service.id}>
                                <Checkbox 
                                  id={service.id} 
                                  {...register("servicesNeeded")} 
                                  value={service.id}
                                  className="mt-1"
                                />
                                <Label 
                                  htmlFor={service.id} 
                                  className="text-sm leading-tight cursor-pointer"
                                >
                                  {service.label}
                                </Label>
                              </div>
                            ))}
                          </div>
                          {errors.servicesNeeded && (
                            <p className="text-red-500 text-sm mt-1">{errors.servicesNeeded.message}</p>
                          )}

                          {showOtherServices && (
                            <div className="mt-3">
                              <Label htmlFor="otherServices" className="text-gray-700 dark:text-gray-300">Please specify other services</Label>
                              <Input
                                id="otherServices"
                                {...register("otherServices")}
                                className="w-full mt-1"
                                placeholder="Tell us what other AI services you need"
                              />
                            </div>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <Label className="text-gray-700 dark:text-gray-300">Estimated Budget *</Label>
                          <Controller
                            name="budget"
                            control={control}
                            render={({ field }) => (
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-2 gap-3 mt-2"
                              >
                                {budgetOptions.map((option) => (
                                  <div key={option} className={`flex items-center space-x-2 border p-3 rounded-lg ${field.value === option ? 'border-primary bg-primary/5' : 'border-gray-200 dark:border-gray-700'}`}>
                                    <RadioGroupItem value={option} id={`budget-${option}`} />
                                    <Label htmlFor={`budget-${option}`} className="cursor-pointer w-full">
                                      {option}
                                    </Label>
                                  </div>
                                ))}
                              </RadioGroup>
                            )}
                          />
                          {errors.budget && (
                            <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <Label className="text-gray-700 dark:text-gray-300">Project Timeline *</Label>
                          <Controller
                            name="timeline"
                            control={control}
                            render={({ field }) => (
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-2 gap-3 mt-2"
                              >
                                {timelineOptions.map((option) => (
                                  <div key={option} className={`flex items-center space-x-2 border p-3 rounded-lg ${field.value === option ? 'border-primary bg-primary/5' : 'border-gray-200 dark:border-gray-700'}`}>
                                    <RadioGroupItem value={option} id={`timeline-${option}`} />
                                    <Label htmlFor={`timeline-${option}`} className="cursor-pointer w-full">
                                      {option}
                                    </Label>
                                  </div>
                                ))}
                              </RadioGroup>
                            )}
                          />
                          {errors.timeline && (
                            <p className="text-red-500 text-sm mt-1">{errors.timeline.message}</p>
                          )}
                        </div>
                        
                        <div className="flex justify-between pt-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={goToPrevStep}
                            className="py-6 rounded-lg text-base group"
                          >
                            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back
                          </Button>
                          <Button
                            type="button"
                            onClick={goToNextStep}
                            disabled={!isStepValid()}
                            className="py-6 rounded-lg text-base shadow-md hover:shadow-lg transition-all group"
                          >
                            Continue
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </>
                    )}
                    
                    {formStep === 3 && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="dataAvailability" className="text-gray-700 dark:text-gray-300">Data Availability</Label>
                          <Controller
                            name="dataAvailability"
                            control={control}
                            render={({ field }) => (
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Do you have the necessary data for this project?" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="yes-ready">Yes, data is ready for use</SelectItem>
                                  <SelectItem value="yes-needs-processing">Yes, but needs processing</SelectItem>
                                  <SelectItem value="some-data">We have some data</SelectItem>
                                  <SelectItem value="no-data">No, we need to collect data</SelectItem>
                                  <SelectItem value="not-sure">Not sure</SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="technicalResources" className="text-gray-700 dark:text-gray-300">Internal Technical Resources</Label>
                          <Controller
                            name="technicalResources"
                            control={control}
                            render={({ field }) => (
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Do you have technical team members for this project?" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="dedicated-team">Yes, dedicated AI/ML team</SelectItem>
                                  <SelectItem value="developers">Yes, developers but no AI specialists</SelectItem>
                                  <SelectItem value="it-staff">IT staff only</SelectItem>
                                  <SelectItem value="no-team">No technical team</SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="successMetrics" className="text-gray-700 dark:text-gray-300">Success Metrics</Label>
                          <Textarea
                            id="successMetrics"
                            {...register("successMetrics")}
                            rows={2}
                            className="w-full resize-none"
                            placeholder="How will you measure the success of this AI solution?"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="challenges" className="text-gray-700 dark:text-gray-300">Current Challenges</Label>
                          <Textarea
                            id="challenges"
                            {...register("challenges")}
                            rows={2}
                            className="w-full resize-none"
                            placeholder="What challenges are you currently facing that you hope AI can solve?"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="hearAboutUs" className="text-gray-700 dark:text-gray-300">How did you hear about us?</Label>
                          <Input
                            id="hearAboutUs"
                            {...register("hearAboutUs")}
                            className="w-full"
                            placeholder="Google, LinkedIn, Referral, etc."
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="additionalInfo" className="text-gray-700 dark:text-gray-300">Additional Information</Label>
                          <Textarea
                            id="additionalInfo"
                            {...register("additionalInfo")}
                            rows={3}
                            className="w-full resize-none"
                            placeholder="Any other details you'd like to share about your project?"
                          />
                        </div>
                        
                        <div className="flex justify-between pt-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={goToPrevStep}
                            className="py-6 rounded-lg text-base group"
                          >
                            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back
                          </Button>
                          <Button
                            type="submit"
                            className="py-6 rounded-lg text-base shadow-md hover:shadow-lg transition-all group"
                          >
                            Submit & Schedule Call
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </>
                    )}
                  </form>
                )}
              </CardContent>
            </Card>
            
            {!isSubmitted && (
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                By submitting this form, you agree to our <a href="#" className="underline hover:text-primary">Privacy Policy</a> and 
                <a href="#" className="underline hover:text-primary"> Terms of Service</a>.
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default StartProject; 