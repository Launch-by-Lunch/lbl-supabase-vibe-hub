import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, ArrowDown, Database, Cloud, Users, Mail, MessageSquare, CheckCircle } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const [currentUseCase, setCurrentUseCase] = useState(0);

  const useCases = [
    {
      id: 'registration',
      title: 'User Registration & Onboarding',
      description: 'Complete user registration flow with Firebase authentication and automated onboarding',
      color: 'purple',
      steps: ['reg-form', 'reg-user', 'reg-email', 'reg-profile']
    },
    {
      id: 'contact',
      title: 'Simple Contact Form',
      description: 'Basic contact form with email notifications',
      color: 'blue',
      steps: ['contact-form', 'contact-email']
    },
    {
      id: 'workflow',
      title: 'Complete Workflow Automation',
      description: 'Advanced lead capture with database storage and multi-channel notifications',
      color: 'green',
      steps: ['workflow-form', 'workflow-db', 'workflow-slack', 'workflow-email']
    }
  ];

  const stepDetails = {
    'reg-form': {
      title: 'Registration Form',
      location: 'Client (Public Website)',
      prompt: 'Create a user registration form with email, password, and profile fields (name, company). Add form validation and handle submission to Firebase Auth.',
      description: 'This runs on your public website where users can access it without logging in.'
    },
    'reg-user': {
      title: 'Create Firebase User',
      location: 'Server (Firebase Auth)',
      prompt: 'Set up Firebase Authentication to create user accounts. Configure email verification and handle authentication errors gracefully.',
      description: 'Firebase automatically handles user creation and authentication on their secure servers.'
    },
    'reg-email': {
      title: 'Send Welcome Email',
      location: 'Server (Supabase Edge Function)',
      prompt: 'Create a Supabase Edge Function that triggers after user registration to send a welcome email using a service like SendGrid or Resend.',
      description: 'This runs on Supabase servers and is triggered automatically when a new user registers.'
    },
    'reg-profile': {
      title: 'Create User Profile',
      location: 'Server (Firestore Database)',
      prompt: 'Create a Firestore document for the user profile with their additional information (name, company, registration date, etc.).',
      description: 'User data is stored securely in Firestore database on Google\'s servers.'
    },
    'contact-form': {
      title: 'Public Form',
      location: 'Client (Public Website)',
      prompt: 'Create a contact form with fields for name, email, and message. Add form validation and handle submission.',
      description: 'This form is publicly accessible on your website without requiring user login.'
    },
    'contact-email': {
      title: 'Send Email',
      location: 'Server (Supabase Edge Function)',
      prompt: 'Create a Supabase Edge Function that receives form data and sends emails to both the user (confirmation) and admin (notification).',
      description: 'The email sending happens on Supabase servers to keep API keys secure.'
    },
    'workflow-form': {
      title: 'Public Form',
      location: 'Client (Public Website)',
      prompt: 'Create a lead capture form with fields for name, email, company, and interest. Add validation and submission handling.',
      description: 'This form collects leads from your public website visitors.'
    },
    'workflow-db': {
      title: 'Store in Database',
      location: 'Server (Supabase Database)',
      prompt: 'Create a Supabase table for leads and insert form data. Set up RLS policies for security.',
      description: 'Lead data is securely stored in Supabase PostgreSQL database.'
    },
    'workflow-slack': {
      title: 'Slack Notification',
      location: 'Server (Supabase Edge Function)',
      prompt: 'Create an Edge Function that sends a Slack webhook notification to your sales team when a new lead is captured.',
      description: 'Slack notifications are sent from Supabase servers using secure webhook URLs.'
    },
    'workflow-email': {
      title: 'Welcome Email',
      location: 'Server (Supabase Edge Function)',
      prompt: 'Set up an automated email sequence that sends a welcome email to new leads with relevant information.',
      description: 'Welcome emails are sent automatically from Supabase servers.'
    }
  };

  const currentUseCaseData = useCases[currentUseCase];

  const getStepIcon = (stepId: string) => {
    if (stepId.includes('form')) return <Users className="h-8 w-8" />;
    if (stepId.includes('user') || stepId.includes('db')) return <Database className="h-8 w-8" />;
    if (stepId.includes('email')) return <Mail className="h-8 w-8" />;
    if (stepId.includes('slack')) return <MessageSquare className="h-8 w-8" />;
    if (stepId.includes('profile')) return <CheckCircle className="h-8 w-8" />;
    return <Database className="h-8 w-8" />;
  };

  const getColorClasses = (color: string, isSelected: boolean = false) => {
    const colors = {
      purple: {
        bg: isSelected ? 'bg-purple-500' : 'bg-purple-200 hover:bg-purple-300',
        text: isSelected ? 'text-white' : 'text-purple-600',
        border: 'border-purple-200',
        bgLight: 'bg-purple-50'
      },
      blue: {
        bg: isSelected ? 'bg-blue-500' : 'bg-blue-200 hover:bg-blue-300',
        text: isSelected ? 'text-white' : 'text-blue-600',
        border: 'border-blue-200',
        bgLight: 'bg-blue-50'
      },
      green: {
        bg: isSelected ? 'bg-green-500' : 'bg-green-200 hover:bg-green-300',
        text: isSelected ? 'text-white' : 'text-green-600',
        border: 'border-green-200',
        bgLight: 'bg-green-50'
      }
    };
    return colors[color as keyof typeof colors];
  };

  const StepComponent = ({ stepId }: { stepId: string }) => {
    const isSelected = selectedStep === stepId;
    const step = stepDetails[stepId as keyof typeof stepDetails];
    const colorClasses = getColorClasses(currentUseCaseData.color, isSelected);
    
    return (
      <div 
        className={`flex flex-col items-center cursor-pointer transition-all duration-200 ${
          isSelected ? 'transform scale-105' : 'hover:transform hover:scale-102'
        }`}
        onClick={() => setSelectedStep(stepId)}
      >
        <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-2 transition-colors ${
          isSelected ? 'bg-blue-500 shadow-lg' : colorClasses.bg
        }`}>
          <div className={`transition-colors ${
            isSelected ? 'text-white' : colorClasses.text
          }`}>
            {getStepIcon(stepId)}
          </div>
        </div>
        <span className={`text-sm font-medium text-center transition-colors ${
          isSelected ? 'text-blue-600 font-semibold' : ''
        }`}>{step.title}</span>
        {step && (
          <Badge variant="outline" className={`mt-1 text-xs ${
            step.location.includes('Client') ? 'bg-orange-50 text-orange-700' : 'bg-green-50 text-green-700'
          }`}>
            {step.location.includes('Client') ? 'Client' : 'Server'}
          </Badge>
        )}
      </div>
    );
  };

  const nextUseCase = () => {
    if (currentUseCase < useCases.length - 1) {
      setCurrentUseCase(currentUseCase + 1);
      setSelectedStep(null);
    }
  };

  const prevUseCase = () => {
    if (currentUseCase > 0) {
      setCurrentUseCase(currentUseCase - 1);
      setSelectedStep(null);
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

        {/* Stepped Use Cases Presentation */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Step-by-Step Implementation Guide</CardTitle>
            <CardDescription>
              Navigate through different use cases to understand the complete workflow
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Navigation Header */}
            <div className="flex items-center justify-between mb-8">
              <Button 
                variant="outline" 
                onClick={prevUseCase}
                disabled={currentUseCase === 0}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>
              
              <div className="text-center">
                <Badge variant="outline" className={`mb-2 ${getColorClasses(currentUseCaseData.color).bgLight}`}>
                  Use Case {currentUseCase + 1} of {useCases.length}
                </Badge>
                <h3 className="text-xl font-semibold">{currentUseCaseData.title}</h3>
                <p className="text-sm text-gray-600">{currentUseCaseData.description}</p>
              </div>
              
              <Button 
                variant="outline" 
                onClick={nextUseCase}
                disabled={currentUseCase === useCases.length - 1}
                className="flex items-center gap-2"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Current Use Case Workflow */}
            <div className={`border rounded-lg p-6 ${getColorClasses(currentUseCaseData.color).bgLight} ${getColorClasses(currentUseCaseData.color).border}`}>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
                {currentUseCaseData.steps.map((stepId, index) => (
                  <div key={stepId} className="flex items-center">
                    <StepComponent stepId={stepId} />
                    {index < currentUseCaseData.steps.length - 1 && (
                      <>
                        <ArrowDown className="h-6 w-6 text-gray-400 md:hidden mx-2" />
                        <ArrowRight className="h-6 w-6 text-gray-400 hidden md:block mx-4" />
                      </>
                    )}
                  </div>
                ))}
              </div>

              {selectedStep && stepDetails[selectedStep as keyof typeof stepDetails] && (
                <div className="bg-white p-4 rounded border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium">{stepDetails[selectedStep as keyof typeof stepDetails].title}</h4>
                    <Badge variant="outline" className={
                      stepDetails[selectedStep as keyof typeof stepDetails].location.includes('Client') 
                        ? 'bg-orange-50 text-orange-700' 
                        : 'bg-green-50 text-green-700'
                    }>
                      {stepDetails[selectedStep as keyof typeof stepDetails].location}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {stepDetails[selectedStep as keyof typeof stepDetails].description}
                  </p>
                  <div className="bg-blue-50 p-3 rounded">
                    <h5 className="font-medium text-sm mb-1">AI Prompt:</h5>
                    <p className="text-sm italic text-blue-800">
                      "{stepDetails[selectedStep as keyof typeof stepDetails].prompt}"
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Step Indicators */}
            <div className="flex justify-center mt-6">
              <div className="flex space-x-2">
                {useCases.map((useCase, index) => (
                  <button
                    key={useCase.id}
                    onClick={() => {
                      setCurrentUseCase(index);
                      setSelectedStep(null);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentUseCase 
                        ? 'bg-blue-500' 
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
