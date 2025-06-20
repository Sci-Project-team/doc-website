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
        <h1 className="text-4xl font-bold tracking-tight">Integrations & Plugins</h1>
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
            


          <div className="bg-gray-400 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Installation Steps:</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Open Node-RED palette manager</li>
              <li>Search for "node-red-contrib-http-request"</li>
              <li>Install the HTTP request node</li>
              <li>Configure the SMS Gateway endpoint</li>
            </ol>
          </div>
          
          <div className="bg-gray-400 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Example Flow:</h4>
            <pre className="text-xs bg-gray-400 p-3 rounded border overflow-x-auto">
{`[
  {
    "id": "sms-node",
    "type": "http request",
    "name": "Send SMS",
    "method": "POST",
    "url": "https://api.smsgateway.dz/sms",
    "headers": {
      "Authorization": "Bearer YOUR_API_KEY",
      "Content-Type": "application/json"
    },
    "payload": {
      "phone_number": "{{msg.phone}}",
      "message": "{{msg.text}}"
    }
  }
]`}
            </pre>
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
            

          <div className="bg-gray-400 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Installation:</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Download the SMS Gateway WordPress plugin</li>
              <li>Upload to /wp-content/plugins/ directory</li>
              <li>Activate the plugin in WordPress admin</li>
              <li>Configure API settings in SMS Gateway menu</li>
            </ol>
          </div>
          
          <div className="bg-gray-400 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">PHP Code Example:</h4>
            <pre className="text-xs bg-gray-400 p-3 rounded border overflow-x-auto">
{`<?php
// Send SMS from WordPress
function send_sms_notification($phone, $message) {
    $api_key = get_option('sms_gateway_api_key');
    
    $response = wp_remote_post('https://api.smsgateway.dz/sms', array(
        'headers' => array(
            'Authorization' => 'Bearer ' . $api_key,
            'Content-Type' => 'application/json'
        ),
        'body' => json_encode(array(
            'phone_number' => $phone,
            'message' => $message
        ))
    ));
    
    return wp_remote_retrieve_response_code($response) === 200;
}
?>`}
            </pre>
          </div>
          
          
        </CardContent>
      </Card>
    </div>
  )
}
