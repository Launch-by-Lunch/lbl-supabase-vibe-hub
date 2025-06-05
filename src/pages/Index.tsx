
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Database, Cloud, Users, Mail, MessageSquare, CheckCircle } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Flatten all steps from all use cases into a single array
  const allSteps = [
    // Registration flow steps
    {
      id: 'reg-form',
      title: 'Registration Form',
      location: 'Client (Public Website)',
      prompt: 'Create a user registration form with email, password, and profile fields (name, company). Add form validation and handle submission to Firebase Auth.',
      description: 'This runs on your public website where users can access it without logging in.',
      useCase: 'User Registration & Onboarding',
      color: 'purple'
    },
    {
      id: 'reg-user',
      title: 'Create Firebase User',
      location: 'Server (Firebase Auth)',
      prompt: 'Set up Firebase Authentication to create user accounts. Configure email verification and handle authentication errors gracefully.',
      description: 'Firebase automatically handles user creation and authentication on their secure servers.',
      useCase: 'User Registration & Onboarding',
      color: 'purple'
    },
    {
      id: 'reg-email',
      title: 'Send Welcome Email',
      location: 'Server (Supabase Edge Function)',
      prompt: 'Create a Supabase Edge Function that triggers after user registration to send a welcome email using a service like SendGrid or Resend.',
      description: 'This runs on Supabase servers and is triggered automatically when a new user registers.',
      useCase: 'User Registration & Onboarding',
      color: 'purple'
    },
    {
      id: 'reg-profile',
      title: 'Create User Profile',
      location: 'Server (Firestore Database)',
      prompt: 'Create a Firestore document for the user profile with their additional information (name, company, registration date, etc.).',
      description: 'User data is stored securely in Firestore database on Google\'s servers.',
      useCase: 'User Registration & Onboarding',
      color: 'purple'
    },
    // Contact form steps
    {
      id: 'contact-form',
      title: 'Contact Form',
      location: 'Client (Public Website)',
      prompt: 'Create a contact form with fields for name, email, and message. Add form validation and handle submission.',
      description: 'This form is publicly accessible on your website without requiring user login.',
      useCase: 'Simple Contact Form',
      color: 'blue'
    },
    {
      id: 'contact-email',
      title: 'Send Contact Email',
      location: 'Server (Supabase Edge Function)',
      prompt: 'Create a Supabase Edge Function that receives form data and sends emails to both the user (confirmation) and admin (notification).',
      description: 'The email sending happens on Supabase servers to keep API keys secure.',
      useCase: 'Simple Contact Form',
      color: 'blue'
    },
    // Workflow automation steps
    {
      id: 'workflow-form',
      title: 'Lead Capture Form',
      location: 'Client (Public Website)',
      prompt: 'Create a lead capture form with fields for name, email, company, and interest. Add validation and submission handling.',
      description: 'This form collects leads from your public website visitors.',
      useCase: 'Complete Workflow Automation',
      color: 'green'
    },
    {
      id: 'workflow-db',
      title: 'Store in Database',
      location: 'Server (Supabase Database)',
      prompt: 'Create a Supabase table for leads and insert form data. Set up RLS policies for security.',
      description: 'Lead data is securely stored in Supabase PostgreSQL database.',
      useCase: 'Complete Workflow Automation',
      color: 'green'
    },
    {
      id: 'workflow-slack',
      title: 'Slack Notification',
      location: 'Server (Supabase Edge Function)',
      prompt: 'Create an Edge Function that sends a Slack webhook notification to your sales team when a new lead is captured.',
      description: 'Slack notifications are sent from Supabase servers using secure webhook URLs.',
      useCase: 'Complete Workflow Automation',
      color: 'green'
    },
    {
      id: 'workflow-email',
      title: 'Welcome Email',
      location: 'Server (Supabase Edge Function)',
      prompt: 'Set up an automated email sequence that sends a welcome email to new leads with relevant information.',
      description: 'Welcome emails are sent automatically from Supabase servers.',
      useCase: 'Complete Workflow Automation',
      color: 'green'
    }
  ];

  const currentStepData = allSteps[currentStep];

  const getStepIcon = (stepId: string) => {
    if (stepId.includes('form')) return <Users className="h-8 w-8" />;
    if (stepId.includes('user') || stepId.includes('db')) return <Database className="h-8 w-8" />;
    if (stepId.includes('email')) return <Mail className="h-8 w-8" />;
    if (stepId.includes('slack')) return <MessageSquare className="h-8 w-8" />;
    if (stepId.includes('profile')) return <CheckCircle className="h-8 w-8" />;
    return <Database className="h-8 w-8" />;
  };

  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        bg: 'bg-purple-500',
        bgLight: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-600'
      },
      blue: {
        bg: 'bg-blue-500',
        bgLight: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-600'
      },
      green: {
        bg: 'bg-green-500',
        bgLight: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  const nextStep = () => {
    if (currentStep < allSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            From Local App to Cloud-Powered Application
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your single-page application from localStorage to a powerful cloud backend 
            with authentication, database storage, and automated workflows.
          </p>
        </div>

        {/* Before & After Comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <Database className="h-5 w-5" />
                Before: Local Storage Only
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-red-700">
                <li>• Data lost when browser cleared</li>
                <li>• No user accounts or login</li>
                <li>• No data sharing between devices</li>
                <li>• No automated workflows</li>
                <li>• Limited functionality</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Cloud className="h-5 w-5" />
                After: Cloud-Powered
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-green-700">
                <li>• Permanent data storage</li>
                <li>• User authentication & accounts</li>
                <li>• Access from any device</li>
                <li>• Automated emails & notifications</li>
                <li>• Unlimited scalability</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Backend Options */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Step 1: Choose Your Backend Solution</CardTitle>
            <CardDescription>
              Select the best backend service for your application needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="supabase" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="supabase">Supabase</TabsTrigger>
                <TabsTrigger value="firebase">Firebase</TabsTrigger>
                <TabsTrigger value="auth0">Auth0</TabsTrigger>
                <TabsTrigger value="custom">Custom API</TabsTrigger>
              </TabsList>

              <TabsContent value="supabase" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Why Choose Supabase?</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Open source PostgreSQL database
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Built-in authentication
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Real-time subscriptions
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Edge functions for custom logic
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Setup Steps:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                      <li>Click the green Supabase button (top right)</li>
                      <li>Connect your Supabase project</li>
                      <li>Configure authentication providers</li>
                      <li>Set up your database tables</li>
                      <li>Deploy your application</li>
                    </ol>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="firebase" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Firebase Integration</h3>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">AI Prompt for Firebase Setup:</h4>
                      <p className="text-sm italic text-blue-800">
                        "Add Firebase authentication to my app with email/password login. 
                        Create a login form, registration form, and user dashboard. 
                        Include password reset functionality."
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">What You Get:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Google's scalable infrastructure</li>
                      <li>• Multiple auth providers (Google, Facebook, etc.)</li>
                      <li>• Real-time database</li>
                      <li>• Cloud functions</li>
                      <li>• Analytics and crash reporting</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="auth0" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Auth0 Integration</h3>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">AI Prompt for Auth0:</h4>
                      <p className="text-sm italic text-purple-800">
                        "Integrate Auth0 authentication into my React app. 
                        Set up login/logout functionality with user profile management. 
                        Add role-based access control."
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Enterprise Features:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Enterprise SSO (SAML, OIDC)</li>
                      <li>• Multi-factor authentication</li>
                      <li>• Advanced security features</li>
                      <li>• User management dashboard</li>
                      <li>• Compliance ready</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="custom" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Custom Company API</h3>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">AI Prompt for Custom API:</h4>
                      <p className="text-sm italic text-orange-800">
                        "Connect my app to our company's existing API. 
                        Create login forms that authenticate against our internal system. 
                        Handle JWT tokens and user sessions."
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">When to Choose This:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Existing company infrastructure</li>
                      <li>• Specific compliance requirements</li>
                      <li>• Custom business logic</li>
                      <li>• Data sovereignty concerns</li>
                      <li>• Legacy system integration</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Individual Step Presentation */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Step 2: Implementation Steps</CardTitle>
            <CardDescription>
              Follow each implementation step to build your cloud-powered application
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Navigation Header */}
            <div className="flex items-center justify-between mb-8">
              <Button 
                variant="outline" 
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>
              
              <div className="text-center">
                <Badge variant="outline" className={`mb-2 ${getColorClasses(currentStepData.color).bgLight}`}>
                  Step {currentStep + 1} of {allSteps.length}
                </Badge>
                <h3 className="text-xl font-semibold">{currentStepData.title}</h3>
                <p className="text-sm text-gray-600">{currentStepData.useCase}</p>
              </div>
              
              <Button 
                variant="outline" 
                onClick={nextStep}
                disabled={currentStep === allSteps.length - 1}
                className="flex items-center gap-2"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Current Step Display */}
            <div className={`border rounded-lg p-8 ${getColorClasses(currentStepData.color).bgLight} ${getColorClasses(currentStepData.color).border}`}>
              <div className="flex flex-col items-center text-center mb-6">
                <div className={`w-20 h-20 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(currentStepData.color).bg} shadow-lg`}>
                  <div className="text-white">
                    {getStepIcon(currentStepData.id)}
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-2">{currentStepData.title}</h4>
                <Badge variant="outline" className={
                  currentStepData.location.includes('Client') 
                    ? 'bg-orange-50 text-orange-700' 
                    : 'bg-green-50 text-green-700'
                }>
                  {currentStepData.location}
                </Badge>
              </div>

              <div className="max-w-2xl mx-auto space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-medium mb-2">What happens here:</h5>
                  <p className="text-sm text-gray-600">
                    {currentStepData.description}
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h5 className="font-medium text-sm mb-2 text-blue-800">AI Prompt to use:</h5>
                  <p className="text-sm italic text-blue-800">
                    "{currentStepData.prompt}"
                  </p>
                </div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                {allSteps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStep(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentStep 
                        ? getColorClasses(step.color).bg
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="mb-6 text-blue-100">
                Choose your backend solution and start building your cloud-powered application today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" size="lg">
                  Connect Supabase
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-600">
                  View Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
