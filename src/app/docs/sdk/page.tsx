'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs'
import { 
  Code, 
  Key, 
  Send, 
  AlertTriangle,
  BookOpen
} from 'lucide-react'

export default function SimplifiedSDK() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-muted-foreground">SDK Documentation</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Official Python and JavaScript SDKs for SMS Gateway integration
        </p>
      </div>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Auto-generated SDKs from OpenAPI specifications with full type safety and comprehensive error handling.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 rounded border">
              <h4 className="font-semibold">✅ Python SDK</h4>
              <p className="text-sm text-muted-foreground">Type hints, async support, easy integration</p>
            </div>
            <div className="p-3 rounded border">
              <h4 className="font-semibold">⚠️ JavaScript SDK</h4>
              <p className="text-sm text-muted-foreground">Callback-based (no async/await)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SDK Documentation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5" />
            SDK Documentation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="python" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="python">Python SDK</TabsTrigger>
              <TabsTrigger value="javascript">JavaScript SDK</TabsTrigger>
            </TabsList>

            <TabsContent value="python" className="space-y-4">
              <div className="p-3 rounded bg-gray-400 border">
                <p className="text-sm text-white-800">
                  <strong>Python SDK:</strong> Standard async/await support with comprehensive type hints
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Installation</h4>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`cd sdk-python
pip install -r requirements.txt
pip install .`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Key className="w-4 h-4" />
                  Authentication
                </h4>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`import openapi_client
from openapi_client.rest import ApiException

# Configure API client
configuration = openapi_client.Configuration(host="http://localhost:8000")

with openapi_client.ApiClient(configuration) as api_client:
    auth_api = openapi_client.AuthenticationApi(api_client)
    
    # Register user
    user_create = openapi_client.UserCreate(
        username="your_username",
        password="your_password", 
        email="user@example.com",
        full_name="Your Name"
    )
    
    try:
        # Register and login
        register_response = auth_api.register_auth_register_post(user_create)
        login_response = auth_api.login_auth_login_post("your_username", "your_password")
        access_token = login_response['access_token']
        
        # Update configuration with token
        configuration.access_token = access_token
        
    except ApiException as e:
        print(f"Error: {e}")`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send SMS
                </h4>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`# Create new client with updated configuration
with openapi_client.ApiClient(configuration) as api_client:
    sms_api = openapi_client.SMSApi(api_client)
    
    sms_create = openapi_client.SmsCreate(
        phone_number="+1234567890",
        message="Hello from Python SDK!"
    )
    
    try:
        response = sms_api.send_sms_sms_post(sms_create)
        print("SMS sent successfully:", response)
    except ApiException as e:
        print(f"Error: {e}")`}
                </pre>
              </div>
            </TabsContent>

            <TabsContent value="javascript" className="space-y-4">
              <div className="p-3 rounded bg-gray-400 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-white-600" />
                  <strong className="text-white-800">Important:</strong>
                </div>
                <ul className="text-sm text-white-800 space-y-1">
                  <li>• Uses callback-based APIs only (no async/await)</li>
                  <li>• UserCreate parameter order: username, email, password</li>
                  <li>• Using async/await causes "superagent request was sent twice" error</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Installation</h4>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`# Build SDK
cd sdk-js
npm install
npm run build
cd ..

# Install in your project
npm install ./sdk-js`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Key className="w-4 h-4" />
                  Authentication
                </h4>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto ">
{`const SmsGatewayApi = require('sms_gateway_api');

// Configure client
const defaultClient = SmsGatewayApi.ApiClient.instance;
defaultClient.basePath = 'http://localhost:8000';

const authApi = new SmsGatewayApi.AuthenticationApi();

// IMPORTANT: Parameter order is username, email, password
const userCreate = new SmsGatewayApi.UserCreate(
    'your_username',      // username
    'user@example.com',   // email  
    'your_password'       // password
);
userCreate.full_name = "Your Name";

// Register user (callback only - NO async/await)
authApi.registerAuthRegisterPost(userCreate, (error, data) => {
    if (error) {
        console.error('Registration failed:', error);
        return;
    }
    
    // Login after registration
    authApi.loginAuthLoginPost('your_username', 'your_password', {}, (loginError, loginData) => {
        if (loginError) {
            console.error('Login failed:', loginError);
            return;
        }
        
        // Configure with access token
        const oauth = defaultClient.authentications['OAuth2PasswordBearer'];
        oauth.accessToken = loginData.access_token;
        
        // Ready for authenticated requests
    });
});`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send SMS
                </h4>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`const smsApi = new SmsGatewayApi.SMSApi();

const smsCreate = new SmsGatewayApi.SmsCreate(
    '+1234567890',                    // phone_number
    'Hello from JavaScript SDK!'     // message
);

// Send SMS (callback only - NO async/await)
smsApi.sendSmsSmsPost(smsCreate, (error, data) => {
    if (error) {
        console.error('SMS failed:', error);
        return;
    }
    
    console.log('SMS sent successfully:', data);
});`}
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* API Reference */}
      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 border rounded">
              <h4 className="font-semibold mb-2">Authentication</h4>
              <div className="space-y-1 text-sm">
                <div><Badge variant="secondary">POST</Badge> /auth/register</div>
                <div><Badge variant="secondary">POST</Badge> /auth/login</div>
              </div>
            </div>
            <div className="p-3 border rounded">
              <h4 className="font-semibold mb-2">SMS</h4>
              <div className="space-y-1 text-sm">
                <div><Badge variant="secondary">POST</Badge> /sms</div>
                
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      
    </div>
  )
}