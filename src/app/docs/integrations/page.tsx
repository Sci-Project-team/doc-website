import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge'
import { 
  Puzzle, 
  Zap, 
  Globe, 
  Code, 
  Download,
  ExternalLink,
  Play
} from 'lucide-react'
import Image from 'next/image'

export default function Integrations() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-muted-foreground">Integrations & Plugins</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Connect SMS Gateway with your favorite tools and platforms
        </p>
      </div>

      

      {/* Node-RED Integration */}
<Card>
  <CardHeader>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
        <Code className="w-5 h-5 text-red-600" />
      </div>
      <div>
        <CardTitle>Node-RED Integration</CardTitle>
        <CardDescription>Visual programming for IoT and automation</CardDescription>
      </div>
    </div>
  </CardHeader>
  <CardContent className="space-y-4">
    {/* Node-RED Demo Video */}
    <h4 className="font-semibold mb-2 flex items-center gap-2">
      <Play className="w-4 h-4" />
      Node-RED Integration Demo
    </h4>
    <video 
      controls 
      className="w-full aspect-video rounded-lg mb-3"
      preload="metadata"
    >
      <source src="/videos/node-red-demo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Features Section */}
    <div className="bg-gray-400 p-4 rounded-lg">
      <h4 className="font-semibold mb-2">Features:</h4>
      <ul className="list-disc list-inside space-y-1 text-sm">
        <li><strong>Send SMS Messages:</strong> Text messaging to phone numbers</li>
        <li><strong>Retrieve Inbox/Sent:</strong> Access message history</li>
        <li><strong>Secure Authentication:</strong> API key-based authentication</li>
        <li><strong>Connection Testing:</strong> Automatic verification</li>
        <li><strong>Error Handling:</strong> Comprehensive status reporting</li>
      </ul>
    </div>

    {/* Quick Setup Section */}
    <div className="bg-gray-400 p-4 rounded-lg">
      <h4 className="font-semibold mb-2">Quick Setup:</h4>
      <ol className="list-decimal list-inside space-y-1 text-sm">
        <li>Download from GitHub releases</li>
        <li>Install globally: <code className="bg-gray-300 px-1 rounded">npm install -g .</code></li>
        <li>Restart Node-RED</li>
        <li>Configure Base URL and API Key</li>
        <li>Drag SMS Gateway node to flow</li>
      </ol>
    </div>
    
    {/* Operations Section */}
    <div className="bg-gray-400 p-4 rounded-lg">
      <h4 className="font-semibold mb-2">Operations:</h4>
      <div className="space-y-1 text-sm">
        <div>• <strong>Send SMS:</strong> Message to phone number</div>
        <div>• <strong>Get Inbox:</strong> Retrieve received messages</div>
        <div>• <strong>Get Sent Messages:</strong> View sent history</div>
      </div>
    </div>

    {/* Requirements Section */}
    <div className="bg-gray-400 p-4 rounded-lg">
      <h4 className="font-semibold mb-2">Requirements:</h4>
      <div className="space-y-1 text-sm">
        <div>• FastAPI SMS Gateway Service</div>
        <div>• Valid API key</div>
        <div>• Node-RED 1.0.0+, Node.js 12+</div>
      </div>
    </div>
  </CardContent>
</Card>
      {/* Zapier Integration */}
<Card>
  <CardHeader>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
        <Zap className="w-5 h-5 text-orange-600" />
      </div>
      <div>
        <CardTitle>Zapier Integration</CardTitle>
        <CardDescription>Automate workflows between 5000+ apps</CardDescription>
      </div>
    </div>
  </CardHeader>
  <CardContent className="space-y-4">
    {/* Zapier Demo Video */}
    <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Play className="w-4 h-4" />
                Zapier Integration Demo
            </h4>
            <video 
                controls 
                className="w-full aspect-video rounded-lg mb-3"
                preload="metadata"
            >
                <source src="/videos/zapier-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

    <div className="bg-gray-400 p-4 rounded-lg">
      <h4 className="font-semibold mb-2">Setup Steps:</h4>
      <ol className="list-decimal list-inside space-y-1 text-sm">
        <li>Create a new Zap in Zapier</li>
        <li>Choose your trigger app (Gmail, Google Sheets, CRM, etc.)</li>
        <li>Configure your trigger settings</li>
        <li>Search for "SMS Gateway" in the Action step</li>
        <li>Select "Send SMS" as the action event</li>
        <li>Connect your SMS Gateway account by logging in through Zapier</li>
        <li>Map your trigger data to SMS fields (phone number, message)</li>
        <li>Test and publish your Zap</li>
      </ol>
    </div>
    
    <div className="bg-gray-400 p-4 rounded-lg">
      <h4 className="font-semibold mb-2">Account Connection:</h4>
      <div className="space-y-2 text-sm">
        <p>When setting up the SMS Gateway action, you'll be prompted to connect your account:</p>
        <ol className="list-decimal list-inside space-y-1 ml-4">
          <li>Click "Connect a new account" in the Action setup</li>
          <li>You'll be redirected to SMS Gateway login page</li>
          <li>Enter your SMS Gateway credentials</li>
          <li>Authorize Zapier to access your account</li>
          <li>Return to Zapier to complete the setup</li>
        </ol>
      </div>
    </div>

    <div className="bg-gray-400 p-4 rounded-lg">
      <h4 className="font-semibold mb-2">Field Mapping Example:</h4>
      <div className="space-y-2 text-sm">
        <div><strong>Destination Phone:</strong> Map from your trigger (e.g., Contact Phone from CRM)</div>
        <div><strong>Message:</strong> Use dynamic content from trigger or custom text</div>
        
      </div>
    </div>
  </CardContent>
</Card>


      {/* WordPress Integration */}
      <Card>
        <CardHeader>
            <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-blue-600" />
            </div>
            <div>
                <CardTitle>WordPress Plugin</CardTitle>
                <CardDescription>Send SMS notifications from your WordPress site</CardDescription>
            </div>
            </div>
        </CardHeader>
        <CardContent className="space-y-4">
            {/* WordPress Demo Video */}
            <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Play className="w-4 h-4" />
            WordPress Plugin Demo
            </h4>
            <video 
            controls 
            className="w-full aspect-video rounded-lg mb-3"
            preload="metadata"
            >
            <source src="/videos/wordpress-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>

            {/* Features Section */}
            <div className="bg-gray-400 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Features:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Admin Dashboard:</strong> Send SMS, view inbox/sent messages, API settings</li>
                <li><strong>Frontend Shortcodes:</strong> [sms_gateway_form], [sms_inbox], [sms_sent]</li>
                <li><strong>User Authentication:</strong> Login required for frontend features</li>
                <li><strong>AJAX Interface:</strong> Real-time form submission and updates</li>
            </ul>
            </div>

            {/* Quick Setup Section */}
            <div className="bg-gray-400 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Quick Setup:</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Upload and activate plugin</li>
                <li>Configure API settings (URL + Bearer Token)</li>
                <li>Test connection</li>
                <li>Add shortcodes to pages</li>
            </ol>
            </div>
            
            {/* Requirements Section */}
            <div className="bg-gray-400 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Requirements:</h4>
            <div className="space-y-1 text-sm">
                <div>• WordPress 5.0+, PHP 7.4+</div>
                <div>• Bearer token authentication</div>
                <div>• User login for frontend access</div>
            </div>
            </div>
        </CardContent>
        </Card>
    </div>
  )
}
