'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs'
import { 
  Code, 
  Download, 
  Key, 
  Send, 
  Activity,
  BookOpen,
  Zap,
  Globe,
  Smartphone
} from 'lucide-react'

export default function SDK() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-muted-foreground">SDK Documentation</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Official SDKs for Python and JavaScript to integrate ESPing SMS Gateway easily into your applications
        </p>
      </div>

      {/* Overview */}
      <Card className="bg-gradient-to-r border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            SDK Overview
          </CardTitle>
          <CardDescription>
            Comprehensive developer tools for seamless SMS integration
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Our SDKs provide intuitive access to the ESPing SMS Gateway, supporting both ESP32 and Raspberry Pi architectures. 
            Whether you're building web applications, mobile backends, or IoT solutions, our SDKs simplify SMS integration 
            with comprehensive authentication, message handling, and real-time monitoring capabilities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4  rounded-lg border">
              <Zap className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <h4 className="font-semibold">Easy Integration</h4>
              <p className="text-xs text-muted-foreground">Simple API with minimal setup required</p>
            </div>
            <div className="text-center p-4  rounded-lg border">
              <Globe className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <h4 className="font-semibold">Multi-Platform</h4>
              <p className="text-xs text-muted-foreground">Works with both ESP32 and Raspberry Pi solutions</p>
            </div>
            <div className="text-center p-4  rounded-lg border">
              <Smartphone className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <h4 className="font-semibold">Real-time Support</h4>
              <p className="text-xs text-muted-foreground">Live message monitoring and status updates</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SDK Tabs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5" />
            SDK Documentation
          </CardTitle>
          <CardDescription>
            Choose your preferred programming language to get started with ESPing SMS Gateway
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="python" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="python" className="flex items-center gap-2">
                Python 
              </TabsTrigger>
              <TabsTrigger value="javascript" className="flex items-center gap-2">
                JavaScript
              </TabsTrigger>
            </TabsList>

            <TabsContent value="python" className="space-y-6">
              {/* Python SDK Content */}
              <div className=" p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-muted-foreground">Why Use the Python SDK?</h4>
                <p className="text-sm text-muted-foreground">
                  The Python SDK is designed for developers building server-side applications, automation workflows, 
                  and data-driven SMS solutions. It provides comprehensive error handling, automatic retry mechanisms, 
                  and support for both synchronous and asynchronous operations.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Installation</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Install the SDK using pip. Compatible with Python 3.7+ and supports both ESP32 and Raspberry Pi backends.
                </p>
                <pre className=" bg-gray-400 p-3 rounded text-sm overflow-x-auto">
pip install esping-sms-sdk
                </pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Key className="w-4 h-4" />
                  Authentication & Setup
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Initialize the client with your device IP and API credentials. The SDK automatically detects whether 
                  you're connecting to an ESP32 or Raspberry Pi solution.
                </p>
                <pre className=" bg-gray-400 p-3 rounded text-sm overflow-x-auto">
{`from esping_sms import SMSGateway

# For ESP32 solution
client = SMSGateway(
    host="192.168.1.100",  # Your ESP32 IP address
    api_key="your_api_key_here",
    solution_type="esp32"
)

# For Raspberry Pi solution
client = SMSGateway(
    host="192.168.1.200",  # Your Raspberry Pi IP
    username="your_username",
    password="your_password",
    solution_type="raspberry_pi"
)

# Alternative: Login with credentials
token = client.login("username", "password")
client.set_token(token)`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Sending SMS Messages
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Send single or bulk SMS messages with delivery confirmation and status tracking. 
                  Supports international phone numbers and message templates.
                </p>
                <pre className=" bg-gray-400 p-3 rounded text-sm overflow-x-auto">
{`# Send a single SMS
response = client.send_sms(
    phone_number="+213555123456",
    message="Hello from ESPing SMS Gateway!"
)

print(f"SMS sent with ID: {response['id']}")
print(f"Status: {response['status']}")
print(f"Timestamp: {response['created_at']}")

# Send bulk SMS to multiple recipients
recipients = ["+213555123456", "+213555654321", "+213777888999"]
response = client.send_bulk_sms(
    phone_numbers=recipients,
    message="Bulk notification from ESPing"
)

# Process results
for sms in response:
    if sms['status'] == 'sent':
        print(f"✅ SMS to {sms['phone_number']}: Success")
    else:
        print(f"❌ SMS to {sms['phone_number']}: {sms['error_message']}")

# Send with message templates
template_response = client.send_template_sms(
    phone_number="+213555123456",
    template_id="welcome_template",
    variables={"name": "Ahmed", "code": "1234"}
)`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  Message Management & Logs
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Retrieve message history, monitor delivery status, and access comprehensive logs for debugging and analytics.
                </p>
                <pre className=" bg-gray-400 p-3 rounded text-sm overflow-x-auto">
{`# Get all message logs
logs = client.get_logs()
for log in logs:
    print(f"{log['created_at']}: {log['message']} - {log['status']}")

# Get filtered logs with pagination
logs = client.get_logs(
    status="sent",           # Filter by status: sent, failed, pending
    limit=50,               # Number of records per page
    offset=0,               # Pagination offset
    date_from="2025-01-01", # Start date filter
    date_to="2025-01-31",   # End date filter
    phone_number="+213555123456"  # Filter by phone number
)

# Get inbox messages (received SMS)
inbox = client.get_inbox()
for message in inbox:
    print(f"From {message['phone_number']}: {message['message']}")
    print(f"Received: {message['received_at']}")

# Get sent messages with status
sent = client.get_sent_messages(limit=20)
for message in sent:
    status_icon = "✅" if message['status'] == 'delivered' else "⏳"
    print(f"{status_icon} To {message['phone_number']}: {message['message']}")
    print(f"Status: {message['status']} - {message['updated_at']}")

# Real-time message monitoring
def on_message_received(message):
    print(f"New SMS from {message['phone_number']}: {message['content']}")

def on_delivery_status(status_update):
    print(f"Message {status_update['message_id']} status: {status_update['status']}")

# Start monitoring (works with Raspberry Pi solution)
client.start_monitoring(
    on_message_received=on_message_received,
    on_delivery_status=on_delivery_status
)`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Complete Example Application</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  A complete example showing SMS gateway integration in a Python application with error handling and logging.
                </p>
                <pre className=" bg-gray-400 p-3 rounded text-sm overflow-x-auto">
{`#!/usr/bin/env python3
"""
ESPing SMS Gateway Integration Example
Demonstrates complete SMS functionality with error handling
"""
import os
import logging
from datetime import datetime
from esping_sms import SMSGateway, SMSError

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class SMSService:
    def __init__(self):
        self.client = SMSGateway(
            host=os.getenv('ESPING_HOST', '192.168.1.100'),
            api_key=os.getenv('ESPING_API_KEY'),
            solution_type=os.getenv('ESPING_TYPE', 'esp32')
        )
    
    def send_notification(self, phone_number, message):
        """Send SMS notification with error handling"""
        try:
            response = self.client.send_sms(
                phone_number=phone_number,
                message=message
            )
            
            logger.info(f"SMS sent successfully to {phone_number}")
            logger.info(f"Message ID: {response['id']}")
            return response
            
        except SMSError as e:
            logger.error(f"SMS sending failed: {e}")
            return None
        except Exception as e:
            logger.error(f"Unexpected error: {e}")
            return None

def main():
    """Main application example"""
    sms_service = SMSService()
    
    # Send welcome message
    result = sms_service.send_notification(
        phone_number="+213555123456",
        message="Welcome to ESPing SMS Gateway! Your account is now active."
    )
    
    if result:
        print(f"✅ Message sent successfully!")
        print(f"   Message ID: {result['id']}")
        print(f"   Status: {result['status']}")
    else:
        print("❌ Failed to send message")

if __name__ == "__main__":
    main()`}
                </pre>
              </div>
            </TabsContent>

            <TabsContent value="javascript" className="space-y-6">
              {/* JavaScript SDK Content */}
              <div className=" p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-muted-foreground">Why Use the JavaScript SDK?</h4>
                <p className="text-sm text-muted-foreground">
                  The JavaScript SDK works seamlessly in both browser and Node.js environments. It features promise-based APIs, 
                  TypeScript support, and real-time capabilities through WebSocket connections for modern web applications.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Installation</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Install via npm or yarn. The SDK includes TypeScript definitions and works with all modern JavaScript frameworks.
                </p>
                <pre className=" bg-gray-400 p-3 rounded text-sm ">
{`# Using npm
npm install esping-sms-sdk

# Using yarn
yarn add esping-sms-sdk

# For browser usage (CDN)
<script src="https://unpkg.com/esping-sms-sdk@latest/dist/esping-sms.min.js"></script>`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Key className="w-4 h-4" />
                  Authentication & Configuration
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Initialize the client with automatic solution detection and environment-specific optimizations.
                </p>
                <pre className=" bg-gray-400 p-3 rounded text-sm overflow-x-auto">
{`import { SMSGateway } from 'esping-sms-sdk';

// Initialize for ESP32 solution
const client = new SMSGateway({
  baseURL: 'http://192.168.1.100',
  apiKey: 'your_api_key_here',
  solutionType: 'esp32',
  timeout: 10000,  // Request timeout in ms
  retries: 3       // Automatic retry attempts
});

// Initialize for Raspberry Pi solution
const client = new SMSGateway({
  baseURL: 'http://192.168.1.200',
  username: 'your_username',
  password: 'your_password',
  solutionType: 'raspberry_pi',
  realTime: true   // Enable WebSocket for real-time updates
});

// Alternative: Login with credentials
try {
  const token = await client.login('username', 'password');
  client.setToken(token);
  console.log('Authentication successful');
} catch (error) {
  console.error('Login failed:', error.message);
}`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Sending SMS Messages
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Promise-based SMS sending with comprehensive error handling and delivery tracking.
                </p>
                <pre className=" bg-gray-400 p-3 rounded text-sm overflow-x-auto">
{`// Send a single SMS
try {
  const response = await client.sendSMS({
    phoneNumber: '+213555123456',
    message: 'Hello from ESPing SMS Gateway!'
  });
  
  console.log(\`SMS sent with ID: \${response.id}\`);
  console.log(\`Status: \${response.status}\`);
  console.log(\`Timestamp: \${response.createdAt}\`);
} catch (error) {
  console.error('Error sending SMS:', error.message);
}

// Send bulk SMS with progress tracking
const recipients = ['+213555123456', '+213555654321', '+213777888999'];
try {
  const responses = await client.sendBulkSMS({
    phoneNumbers: recipients,
    message: 'Bulk notification from ESPing',
    onProgress: (completed, total) => {
      console.log(\`Progress: \${completed}/\${total} messages sent\`);
    }
  });
  
  // Process results
  responses.forEach(sms => {
    const status = sms.status === 'sent' ? '✅' : '❌';
    console.log(\`\${status} SMS to \${sms.phoneNumber}: \${sms.status}\`);
  });
} catch (error) {
  console.error('Error sending bulk SMS:', error.message);
}

// Send with message templates
try {
  const response = await client.sendTemplateSMS({
    phoneNumber: '+213555123456',
    templateId: 'welcome_template',
    variables: { name: 'Ahmed', code: '1234' }
  });
  
  console.log('Template SMS sent:', response.id);
} catch (error) {
  console.error('Template SMS failed:', error.message);
}`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  Message Management & Real-time Updates
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Access message history, monitor delivery status, and receive real-time updates through WebSocket connections.
                </p>
                <pre className=" bg-gray-400 p-3 rounded text-sm overflow-x-auto">
{`// Get message logs with filtering
try {
  const logs = await client.getLogs({
    status: 'sent',
    limit: 50,
    offset: 0,
    dateFrom: '2025-01-01',
    dateTo: '2025-01-31',
    phoneNumber: '+213555123456'
  });
  
  logs.forEach(log => {
    console.log(\`\${log.createdAt}: \${log.message} - \${log.status}\`);
  });
} catch (error) {
  console.error('Error fetching logs:', error.message);
}

// Get inbox messages
try {
  const inbox = await client.getInbox({ limit: 20, unreadOnly: true });
  inbox.forEach(message => {
    console.log(\`From \${message.phoneNumber}: \${message.message}\`);
    console.log(\`Received: \${message.receivedAt}\`);
  });
} catch (error) {
  console.error('Error fetching inbox:', error.message);
}

// Real-time message monitoring (Raspberry Pi solution)
client.onMessageReceived((message) => {
  console.log(\`New SMS from \${message.phoneNumber}: \${message.content}\`);
  // Update UI or trigger notifications
  updateInboxUI(message);
});

client.onDeliveryStatus((statusUpdate) => {
  console.log(\`Message \${statusUpdate.messageId} status: \${statusUpdate.status}\`);
  // Update message status in UI
  updateMessageStatus(statusUpdate.messageId, statusUpdate.status);
});

// Start real-time monitoring
client.startRealTimeUpdates();`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2">React.js Integration Example</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Complete React component demonstrating SMS functionality with hooks and state management.
                </p>
                <pre className=" bg-gray-400 p-3 rounded text-sm overflow-x-auto">
{`import React, { useState, useEffect } from 'react';
import { SMSGateway } from 'esping-sms-sdk';

const SMSComponent = () => {
  const [client, setClient] = useState(null);
  const [messages, setMessages] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [messageText, setMessageText] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initialize SMS client
    const smsClient = new SMSGateway({
      baseURL: process.env.REACT_APP_ESPING_URL,
      apiKey: process.env.REACT_APP_ESPING_API_KEY,
      realTime: true
    });

    // Setup real-time message listener
    smsClient.onMessageReceived((message) => {
      setMessages(prev => [message, ...prev]);
    });

    setClient(smsClient);
  }, []);

  const sendSMS = async (e) => {
    e.preventDefault();
    if (!client || !phoneNumber || !messageText) return;

    setLoading(true);
    try {
      const response = await client.sendSMS({
        phoneNumber: phoneNumber,
        message: messageText
      });
      
      console.log('SMS sent successfully!', response.id);
      setPhoneNumber('');
      setMessageText('');
    } catch (error) {
      console.error('Failed to send SMS:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sms-component">
      <h2>ESPing SMS Gateway</h2>
      <form onSubmit={sendSMS}>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="+213555123456"
          required
        />
        <textarea
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Enter your message..."
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send SMS'}
        </button>
      </form>
    </div>
  );
};

export default SMSComponent;`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Node.js Server Example</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Express.js server integration with SMS webhook handling and API endpoints.
                </p>
                <pre className=" bg-gray-400 p-3 rounded text-sm overflow-x-auto">
{`const express = require('express');
const { SMSGateway } = require('esping-sms-sdk');

const app = express();
app.use(express.json());

// Initialize SMS Gateway
const smsClient = new SMSGateway({
  baseURL: process.env.ESPING_URL,
  apiKey: process.env.ESPING_API_KEY,
  solutionType: 'raspberry_pi'
});

// Send SMS endpoint
app.post('/api/sms/send', async (req, res) => {
  try {
    const { phoneNumber, message } = req.body;
    
    const response = await smsClient.sendSMS({
      phoneNumber,
      message
    });
    
    res.json({
      success: true,
      messageId: response.id,
      status: response.status
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

// Get messages endpoint
app.get('/api/sms/messages', async (req, res) => {
  try {
    const { limit = 20, status } = req.query;
    
    const messages = await smsClient.getLogs({
      limit: parseInt(limit),
      status
    });
    
    res.json({
      success: true,
      messages
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`SMS Gateway server running on port \${PORT}\`);
});`}
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

     
    </div>
  )
}
