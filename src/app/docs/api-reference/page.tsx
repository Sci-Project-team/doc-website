import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge'
import { 
  Code, 
  Globe, 
  Key, 
  Send, 
  Inbox, 
  Activity, 
  Trash2,
  Copy,
  CheckCircle
} from 'lucide-react'

const endpoints = [
  {
    method: 'POST',
    path: '/api/sms',
    title: 'Send SMS',
    description: 'Send an SMS message to a specified phone number',
    auth: true,
    parameters: [
      { name: 'to', type: 'string', required: true, description: 'Recipient phone number in international format' },
      { name: 'message', type: 'string', required: true, description: 'SMS message content (max 160 characters)' },
      { name: 'priority', type: 'number', required: false, description: 'Message priority (1-5, default: 3)' },
      { name: 'callback_url', type: 'string', required: false, description: 'Webhook URL for delivery reports' }
    ],
    responses: [
      { code: 200, description: 'SMS sent successfully' },
      { code: 400, description: 'Invalid request parameters' },
      { code: 401, description: 'Unauthorized - invalid API key' },
      { code: 429, description: 'Rate limit exceeded' },
      { code: 500, description: 'Internal server error' }
    ],
    example: {
      request: `{
  "to": "+1234567890",
  "message": "Hello from ESPing!",
  "priority": 3
}`,
      response: `{
  "success": true,
  "message_id": "msg_123456789",
  "status": "sent",
  "timestamp": "2024-01-15T10:30:00Z"
}`
    }
  },
  {
    method: 'GET',
    path: '/api/sms/inbox',
    title: 'Get Received Messages',
    description: 'Retrieve all received SMS messages',
    auth: true,
    parameters: [
      { name: 'limit', type: 'number', required: false, description: 'Number of messages to return (default: 50, max: 100)' },
      { name: 'offset', type: 'number', required: false, description: 'Number of messages to skip for pagination' },
      { name: 'since', type: 'string', required: false, description: 'ISO timestamp to filter messages since' }
    ],
    responses: [
      { code: 200, description: 'Messages retrieved successfully' },
      { code: 401, description: 'Unauthorized - invalid API key' },
      { code: 500, description: 'Internal server error' }
    ],
    example: {
      response: `{
  "success": true,
  "messages": [
    {
      "id": "msg_987654321",
      "from": "+1987654321",
      "message": "Reply message",
      "received_at": "2024-01-15T10:25:00Z",
      "read": false
    }
  ],
  "total": 1,
  "has_more": false
}`
    }
  },
  {
    method: 'GET',
    path: '/api/status',
    title: 'System Status',
    description: 'Get current system status and statistics',
    auth: false,
    parameters: [],
    responses: [
      { code: 200, description: 'Status retrieved successfully' }
    ],
    example: {
      response: `{
  "success": true,
  "status": "online",
  "gsm_signal": 85,
  "messages_sent": 1247,
  "messages_received": 89,
  "uptime": "7d 14h 32m",
  "firmware_version": "1.2.3"
}`
    }
  },
  {
    method: 'DELETE',
    path: '/api/sms/{id}',
    title: 'Delete Message',
    description: 'Delete a specific message from the inbox',
    auth: true,
    parameters: [
      { name: 'id', type: 'string', required: true, description: 'Message ID to delete' }
    ],
    responses: [
      { code: 200, description: 'Message deleted successfully' },
      { code: 404, description: 'Message not found' },
      { code: 401, description: 'Unauthorized - invalid API key' }
    ],
    example: {
      response: `{
  "success": true,
  "message": "Message deleted successfully"
}`
    }
  }
]

export default function ApiReferencePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          API Reference
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Complete reference for the ESPing REST API. All endpoints return JSON responses 
          and support standard HTTP status codes for error handling.
        </p>
      </div>

      {/* Base URL */}
      <Card className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Globe className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">Base URL</h2>
        </div>
        <div className="code-block">
          <code>http://your-esp32-ip/api</code>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Replace <code>your-esp32-ip</code> with the actual IP address of your ESP32 device.
        </p>
      </Card>

      {/* Authentication */}
      <Card className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Key className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">Authentication</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Most endpoints require authentication using an API key. Include the API key in the Authorization header:
        </p>
        <div className="code-block">
          <code>Authorization: Bearer your-api-key</code>
        </div>
        <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <p className="text-sm text-blue-700 dark:text-blue-300">
            <strong>Note:</strong> You can generate an API key from the ESP32 web interface at 
            <code>http://your-esp32-ip/settings</code>
          </p>
        </div>
      </Card>

      {/* Endpoints */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Endpoints</h2>
        
        {endpoints.map((endpoint, index) => (
          <Card key={endpoint.path} className="overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Badge 
                    variant={endpoint.method === 'GET' ? 'default' : endpoint.method === 'POST' ? 'secondary' : 'destructive'}
                    className="font-mono"
                  >
                    {endpoint.method}
                  </Badge>
                  <code className="text-lg font-semibold">{endpoint.path}</code>
                </div>
                {endpoint.auth && (
                  <Badge variant="outline" className="text-xs">
                    <Key className="w-3 h-3 mr-1" />
                    Auth Required
                  </Badge>
                )}
              </div>
              <CardDescription className="text-base">
                {endpoint.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Parameters */}
              {endpoint.parameters.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-3">Parameters</h4>
                  <div className="space-y-3">
                    {endpoint.parameters.map((param, paramIndex) => (
                      <div key={param.name} className="border rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <code className="text-sm font-semibold text-primary">{param.name}</code>
                          <Badge variant={param.required ? 'default' : 'secondary'} className="text-xs">
                            {param.required ? 'Required' : 'Optional'}
                          </Badge>
                          <span className="text-xs text-muted-foreground">({param.type})</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{param.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Response Codes */}
              <div>
                <h4 className="font-semibold mb-3">Response Codes</h4>
                <div className="space-y-2">
                  {endpoint.responses.map((response, responseIndex) => (
                    <div key={response.code} className="flex items-center space-x-3 text-sm">
                      <Badge 
                        variant={response.code === 200 ? 'default' : response.code < 400 ? 'secondary' : 'destructive'}
                        className="w-16 justify-center font-mono"
                      >
                        {response.code}
                      </Badge>
                      <span className="text-muted-foreground">{response.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Example */}
              <div>
                <h4 className="font-semibold mb-3">Example</h4>
                <div className="space-y-4">
                  {endpoint.example.request && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-muted-foreground">Request Body</span>
                        <Button variant="ghost" size="sm" className="h-6 px-2">
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="code-block">
                        <pre className="text-sm">{endpoint.example.request}</pre>
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">Response</span>
                      <Button variant="ghost" size="sm" className="h-6 px-2">
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="code-block">
                      <pre className="text-sm">{endpoint.example.response}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Rate Limiting */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Rate Limiting</h2>
        <p className="text-muted-foreground mb-4">
          The API implements rate limiting to prevent abuse and ensure fair usage:
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• <strong>SMS sending:</strong> 10 messages per minute</li>
          <li>• <strong>Inbox retrieval:</strong> 60 requests per minute</li>
          <li>• <strong>Status checks:</strong> 120 requests per minute</li>
        </ul>
        <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
          <p className="text-sm text-amber-700 dark:text-amber-300">
            <strong>Rate limit headers:</strong> Check the <code>X-RateLimit-Remaining</code> and 
            <code>X-RateLimit-Reset</code> headers in responses.
          </p>
        </div>
      </Card>

      {/* Error Handling */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Error Handling</h2>
        <p className="text-muted-foreground mb-4">
          All API responses follow a consistent error format:
        </p>
        <div className="code-block">
          <pre className="text-sm">{`{
  "success": false,
  "error": {
    "code": "INVALID_PHONE_NUMBER",
    "message": "The provided phone number is not valid",
    "details": {
      "field": "to",
      "value": "invalid-number"
    }
  }
}`}</pre>
        </div>
      </Card>
    </div>
  )
}
