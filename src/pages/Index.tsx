import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowDown, Database, Cloud, Users, Mail, MessageSquare, CheckCircle, Lightbulb } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [selectedStep, setSelectedStep] = useState<string | null>(null);

  const stepDetails = {
    'reg-form': {
      title: 'Registration Form',
      location: 'Frontend (Public Website)',
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
      location: 'Frontend (Public Website)',
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
      location: 'Frontend (Public Website)',
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

  const StepComponent = ({ stepId, icon, title, subtitle, useCaseId }: { 
    stepId: string, 
    icon: React.ReactNode, 
    title: string, 
    subtitle?: string,
    useCaseId: string 
  }) => {
    const isSelected = selectedStep === `${useCaseId}-${stepId}`;
    const step = stepDetails[stepId as keyof typeof stepDetails];
    
    return (
      <div className="flex flex-col items-center">
        <div 
          className={`flex flex-col items-center cursor-pointer transition-all duration-200 ${
            isSelected ? 'transform scale-105' : 'hover:transform hover:scale-102'
          }`}
          onClick={() => setSelectedStep(isSelected ? null : `${useCaseId}-${stepId}`)}
        >
          <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-2 transition-colors ${
            isSelected 
              ? 'bg-blue-500 shadow-lg' 
              : stepId.includes('reg') 
                ? 'bg-purple-200 hover:bg-purple-300' 
                : stepId.includes('contact')
                  ? 'bg-blue-200 hover:bg-blue-300'
                  : 'bg-green-200 hover:bg-green-300'
          }`}>
            <div className={`transition-colors ${
              isSelected ? 'text-white' : 
              stepId.includes('reg') 
                ? 'text-purple-600' 
                : stepId.includes('contact')
                  ? 'text-blue-600'
                  : 'text-green-600'
            }`}>
              {icon}
            </div>
          </div>
          <span className={`text-sm font-medium text-center transition-colors ${
            isSelected ? 'text-blue-600 font-semibold' : ''
          }`}>{title}</span>
          {subtitle && (
            <span className="text-xs text-gray-600 text-center">{subtitle}</span>
          )}
          {step && (
            <Badge variant="outline" className={`mt-1 text-xs ${
              step.location.includes('Frontend') ? 'bg-orange-50 text-orange-700' : 'bg-white text-gray-700 border-gray-300'
            }`}>
              {step.location.includes('Frontend') ? 'Frontend' : 'Server'}
            </Badge>
          )}
        </div>
        
        {isSelected && step && (
          <div className="bg-white p-4 rounded border border-blue-200 mt-4 w-full max-w-md">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-medium">{step.title}</h4>
              <Badge variant="outline" className={
                step.location.includes('Frontend') 
                  ? 'bg-orange-50 text-orange-700' 
                  : 'bg-white text-gray-700 border-gray-300'
              }>
                {step.location}
              </Badge>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              {step.description}
            </p>
            <div className="bg-blue-50 p-3 rounded">
              <h5 className="font-medium text-sm mb-1">AI Prompt:</h5>
              <p className="text-sm italic text-blue-800">
                "{step.prompt}"
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };

  const FlowArrow = () => (
    <div className="flex items-center justify-center h-16 px-4">
      <ArrowRight className="h-6 w-6 text-gray-400" />
    </div>
  );

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Build Your Cloud App
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your application with authentication, database storage, and automated workflows.
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

        {/* Use Cases */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Step 2: Common Use Cases & Workflows</CardTitle>
            <CardDescription>
              Click on each step to see detailed implementation prompts and understand where each task runs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              
              {/* Use Case 1 - User Registration */}
              <div className={`border rounded-lg p-6 transition-colors ${
                selectedStep?.startsWith('registration') ? 'bg-green-50' : 'bg-gray-50'
              }`}>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="bg-purple-100">Use Case 1</Badge>
                  <h3 className="text-lg font-semibold">User Registration & Onboarding</h3>
                </div>
                
                <div className="flex items-center justify-center mb-6 overflow-x-auto">
                  <div className="flex items-center min-w-max">
                    <StepComponent 
                      stepId="reg-form"
                      icon={<Users className="h-8 w-8" />}
                      title="Registration Form"
                      useCaseId="registration"
                    />
                    
                    <FlowArrow />
                    
                    <StepComponent 
                      stepId="reg-user"
                      icon={<Database className="h-8 w-8" />}
                      title="Create Firebase User"
                      useCaseId="registration"
                    />
                    
                    <FlowArrow />
                    
                    <StepComponent 
                      stepId="reg-email"
                      icon={<MessageSquare className="h-8 w-8" />}
                      title="Send Welcome Email"
                      useCaseId="registration"
                    />
                    
                    <FlowArrow />
                    
                    <StepComponent 
                      stepId="reg-profile"
                      icon={<CheckCircle className="h-8 w-8" />}
                      title="Create User Profile"
                      useCaseId="registration"
                    />
                  </div>
                </div>
              </div>

              {/* Use Case 2 - Simple Contact Form */}
              <div className={`border rounded-lg p-6 transition-colors ${
                selectedStep?.startsWith('contact') ? 'bg-green-50' : 'bg-gray-50'
              }`}>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="bg-blue-100">Use Case 2</Badge>
                  <h3 className="text-lg font-semibold">Simple Contact Form</h3>
                </div>
                
                <div className="flex items-center justify-center mb-6 overflow-x-auto">
                  <div className="flex items-center min-w-max">
                    <StepComponent 
                      stepId="contact-form"
                      icon={<Users className="h-8 w-8" />}
                      title="Public Form"
                      subtitle="No login required"
                      useCaseId="contact"
                    />
                    
                    <FlowArrow />
                    
                    <StepComponent 
                      stepId="contact-email"
                      icon={<Mail className="h-8 w-8" />}
                      title="Send Email"
                      subtitle="Server-side"
                      useCaseId="contact"
                    />
                  </div>
                </div>
              </div>

              {/* Use Case 3 - Complete Workflow */}
              <div className={`border rounded-lg p-6 transition-colors ${
                selectedStep?.startsWith('workflow') ? 'bg-green-50' : 'bg-gray-50'
              }`}>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="bg-green-100">Use Case 3</Badge>
                  <h3 className="text-lg font-semibold">Complete Workflow Automation</h3>
                </div>
                
                <div className="flex items-center justify-center mb-6 overflow-x-auto">
                  <div className="flex items-center min-w-max">
                    <StepComponent 
                      stepId="workflow-form"
                      icon={<Users className="h-8 w-8" />}
                      title="Public Form"
                      useCaseId="workflow"
                    />
                    
                    <FlowArrow />
                    
                    <StepComponent 
                      stepId="workflow-db"
                      icon={<Database className="h-8 w-8" />}
                      title="Store in Database"
                      useCaseId="workflow"
                    />
                    
                    <FlowArrow />
                    
                    <StepComponent 
                      stepId="workflow-slack"
                      icon={<MessageSquare className="h-8 w-8" />}
                      title="Slack Notification"
                      useCaseId="workflow"
                    />
                    
                    <FlowArrow />
                    
                    <StepComponent 
                      stepId="workflow-email"
                      icon={<Mail className="h-8 w-8" />}
                      title="Welcome Email"
                      useCaseId="workflow"
                    />
                  </div>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Pro Tip Banner */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-amber-100 rounded-full">
                  <Lightbulb className="h-5 w-5 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-amber-800">Pro Tip</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-amber-700">
                    You can link multiple applications to the same Supabase project. This approach creates a powerful development workflow that maximizes efficiency and minimizes complexity.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-amber-800 mb-2">Benefits:</h4>
                  <ul className="space-y-1 text-amber-700">
                    <li>• Smaller, more focused applications</li>
                    <li>• Reduced complexity per project</li>
                    <li>• More experimentation opportunities</li>
                    <li>• Burns fewer tokens</li>
                    <li>• Shared database and authentication</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">&copy; 2025 Launch by Lunch</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
