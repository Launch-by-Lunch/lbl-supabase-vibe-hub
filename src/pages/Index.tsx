import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowDown, Database, Cloud, Users, Mail, MessageSquare, CheckCircle } from "lucide-react";

const Index = () => {
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

        {/* Use Cases */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Step 2: Common Use Cases & Workflows</CardTitle>
            <CardDescription>
              See how your app can handle real-world scenarios with cloud backend
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              
              {/* Use Case 1 - New Registration Case */}
              <div className="border rounded-lg p-6 bg-purple-50">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="bg-purple-100">Use Case 1</Badge>
                  <h3 className="text-lg font-semibold">User Registration & Onboarding</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-200 rounded-lg flex items-center justify-center mb-2">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-center">Registration Form</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <ArrowDown className="h-6 w-6 text-gray-400 mb-2 md:hidden" />
                    <ArrowRight className="h-6 w-6 text-gray-400 mb-2 hidden md:block" />
                    <div className="w-16 h-16 bg-orange-200 rounded-lg flex items-center justify-center mb-2">
                      <Database className="h-8 w-8 text-orange-600" />
                    </div>
                    <span className="text-sm font-medium text-center">Create Firebase User</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <ArrowDown className="h-6 w-6 text-gray-400 mb-2 md:hidden" />
                    <ArrowRight className="h-6 w-6 text-gray-400 mb-2 hidden md:block" />
                    <div className="w-16 h-16 bg-yellow-200 rounded-lg flex items-center justify-center mb-2">
                      <MessageSquare className="h-8 w-8 text-yellow-600" />
                    </div>
                    <span className="text-sm font-medium text-center">Send Welcome Email</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <ArrowDown className="h-6 w-6 text-gray-400 mb-2 md:hidden" />
                    <ArrowRight className="h-6 w-6 text-gray-400 mb-2 hidden md:block" />
                    <div className="w-16 h-16 bg-green-200 rounded-lg flex items-center justify-center mb-2">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-center">Create User Profile</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-medium mb-2">AI Prompt:</h4>
                  <p className="text-sm italic">
                    "Add Firebase authentication with user registration. Create a registration form with email, password, and profile fields. After successful registration, automatically send a welcome email and create a user profile in Firestore. Add login redirect to dashboard."
                  </p>
                </div>
              </div>

              {/* Use Case 2 - Renamed to Use Case 2 */}
              <div className="border rounded-lg p-6 bg-blue-50">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="bg-blue-100">Use Case 2</Badge>
                  <h3 className="text-lg font-semibold">Simple Contact Form</h3>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-200 rounded-lg flex items-center justify-center mb-2">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium">Public Form</span>
                    <span className="text-xs text-gray-600">No login required</span>
                  </div>
                  
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-green-200 rounded-lg flex items-center justify-center mb-2">
                      <Mail className="h-8 w-8 text-green-600" />
                    </div>
                    <span className="text-sm font-medium">Send Email</span>
                    <span className="text-xs text-gray-600">Server-side</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-medium mb-2">AI Prompt:</h4>
                  <p className="text-sm italic">
                    "Create a contact form that sends emails using Supabase Edge Functions. 
                    Include fields for name, email, and message. Send confirmation email to user and notification to admin."
                  </p>
                </div>
              </div>

              {/* Use Case 3 - Renamed to Use Case 3 */}
              <div className="border rounded-lg p-6 bg-green-50">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="bg-green-100">Use Case 3</Badge>
                  <h3 className="text-lg font-semibold">Complete Workflow Automation</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-200 rounded-lg flex items-center justify-center mb-2">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-center">Public Form</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <ArrowDown className="h-6 w-6 text-gray-400 mb-2 md:hidden" />
                    <ArrowRight className="h-6 w-6 text-gray-400 mb-2 hidden md:block" />
                    <div className="w-16 h-16 bg-purple-200 rounded-lg flex items-center justify-center mb-2">
                      <Database className="h-8 w-8 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium text-center">Store in Database</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <ArrowDown className="h-6 w-6 text-gray-400 mb-2 md:hidden" />
                    <ArrowRight className="h-6 w-6 text-gray-400 mb-2 hidden md:block" />
                    <div className="w-16 h-16 bg-yellow-200 rounded-lg flex items-center justify-center mb-2">
                      <MessageSquare className="h-8 w-8 text-yellow-600" />
                    </div>
                    <span className="text-sm font-medium text-center">Slack Notification</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <ArrowDown className="h-6 w-6 text-gray-400 mb-2 md:hidden" />
                    <ArrowRight className="h-6 w-6 text-gray-400 mb-2 hidden md:block" />
                    <div className="w-16 h-16 bg-green-200 rounded-lg flex items-center justify-center mb-2">
                      <Mail className="h-8 w-8 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-center">Welcome Email</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-medium mb-2">AI Prompt:</h4>
                  <p className="text-sm italic">
                    "Create a lead capture form that: 1) Stores data in Supabase table, 
                    2) Sends Slack notification to sales team, 3) Triggers welcome email sequence. 
                    Include form validation and success confirmation."
                  </p>
                </div>
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
