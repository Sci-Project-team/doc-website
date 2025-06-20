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
  CheckCircle,
  Users,
  MessageSquare,
  BookOpen,
  Shield
} from 'lucide-react'

const endpoints = [
  {
    method: 'POST',
    path: '/auth/register',
    title: 'Register User',
    description: 'Register a new user account',
    auth: false,
    category: 'Authentication',
    icon: Users,
    parameters: [
      { name: 'username', type: 'string', required: true, description: 'Username (3-50 characters)' },
      { name: 'email', type: 'string', required: true, description: 'Valid email address' },
      { name: 'password', type: 'string', required: true, description: 'Password (minimum 8 characters)' },
      { name: 'full_name', type: 'string', required: false, description: 'Full name of the user' }
    ],
    requestExample: {
      "username": "johndoe",
      "email": "john@example.com",
      "password": "securepass123",
      "full_name": "John Doe"
    },
    responses: [
      { 
        status: 201, 
        description: 'User created successfully',
        example: {
          "message": "User created successfully",
          "user_id": 12345,
          "username": "johndoe"
        }
      },
      { 
        status: 400, 
        description: 'Validation error',
        example: {
          "error": "Validation failed",
          "details": {
            "username": "Username already exists",
            "email": "Invalid email format"
          }
        }
      }
    ]
  },
  {
    method: 'POST',
    path: '/auth/login',
    title: 'Login User',
    description: 'Authenticate user and get access token',
    auth: false,
    category: 'Authentication',
    icon: Key,
    parameters: [
      { name: 'username', type: 'string', required: true, description: 'Username' },
      { name: 'password', type: 'string', required: true, description: 'Password' },
      { name: 'grant_type', type: 'string', required: false, description: 'OAuth2 grant type' }
    ],
    requestExample: {
      "username": "johndoe",
      "password": "securepass123",
      "grant_type": "password"
    },
    responses: [
      { 
        status: 200, 
        description: 'Login successful, returns access token',
        example: {
          "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
          "token_type": "bearer",
          "expires_in": 3600,
          "user": {
            "id": 12345,
            "username": "johndoe",
            "email": "john@example.com"
          }
        }
      },
      { 
        status: 401, 
        description: 'Invalid credentials',
        example: {
          "error": "Invalid credentials",
          "message": "Username or password is incorrect"
        }
      }
    ]
  },
  {
    method: 'POST',
    path: '/sms',
    title: 'Send SMS',
    description: 'Send an SMS message to a specified phone number',
    auth: true,
    category: 'SMS Operations',
    icon: Send,
    parameters: [
      { name: 'phone_number', type: 'string', required: true, description: 'Recipient phone number in international format' },
      { name: 'message', type: 'string', required: true, description: 'SMS message content' }
    ],
    requestExample: {
      "phone_number": "+213555123456",
      "message": "Hello! This is a test SMS from our API."
    },
    responses: [
      { 
        status: 200, 
        description: 'SMS sent successfully',
        example: {
          "message_id": "msg_67890",
          "status": "sent",
          "phone_number": "+213555123456",
          "message": "Hello! This is a test SMS from our API.",
          "timestamp": "2025-06-20T14:30:00Z",
          "cost": 0.05
        }
      },
      { 
        status: 400, 
        description: 'Invalid request parameters',
        example: {
          "error": "Invalid phone number",
          "message": "Phone number must be in international format"
        }
      },
      { 
        status: 401, 
        description: 'Authentication required',
        example: {
          "error": "Unauthorized",
          "message": "Access token is required"
        }
      }
    ]
  },
  {
    method: 'GET',
    path: '/sms/inbox',
    title: 'List Received SMS',
    description: 'Get all received SMS messages',
    auth: true,
    category: 'SMS Operations',
    icon: Inbox,
    parameters: [],
    responses: [
      { 
        status: 200, 
        description: 'List of received SMS messages',
        example: {
          "messages": [
            {
              "id": "msg_in_123",
              "from": "+213666789012",
              "message": "Reply: Thank you for your message!",
              "received_at": "2025-06-20T14:25:00Z",
              "status": "received"
            },
            {
              "id": "msg_in_124",
              "from": "+213777890123",
              "message": "STOP",
              "received_at": "2025-06-20T14:20:00Z",
              "status": "received"
            }
          ],
          "total": 2,
          "page": 1
        }
      },
      { 
        status: 401, 
        description: 'Authentication required',
        example: {
          "error": "Unauthorized",
          "message": "Access token is required"
        }
      }
    ]
  },
  {
    method: 'GET',
    path: '/sms/sent',
    title: 'List Sent SMS',
    description: 'Get all sent SMS messages',
    auth: true,
    category: 'SMS Operations',
    icon: MessageSquare,
    parameters: [],
    responses: [
      { 
        status: 200, 
        description: 'List of sent SMS messages',
        example: {
          "messages": [
            {
              "id": "msg_67890",
              "to": "+213555123456",
              "message": "Hello! This is a test SMS from our API.",
              "sent_at": "2025-06-20T14:30:00Z",
              "status": "delivered",
              "cost": 0.05
            },
            {
              "id": "msg_67891",
              "to": "+213666789012",
              "message": "Your verification code is: 123456",
              "sent_at": "2025-06-20T14:28:00Z",
              "status": "sent",
              "cost": 0.05
            }
          ],
          "total": 2,
          "page": 1
        }
      },
      { 
        status: 401, 
        description: 'Authentication required',
        example: {
          "error": "Unauthorized",
          "message": "Access token is required"
        }
      }
    ]
  },
  {
    method: 'GET',
    path: '/logs',
    title: 'Get SMS Logs',
    description: 'Retrieve SMS operation logs',
    auth: true,
    category: 'SMS Operations',
    icon: Activity,
    parameters: [],
    responses: [
      { 
        status: 200, 
        description: 'SMS logs retrieved successfully',
        example: {
          "logs": [
            {
              "id": "log_001",
              "action": "sms_sent",
              "message_id": "msg_67890",
              "phone_number": "+213555123456",
              "timestamp": "2025-06-20T14:30:00Z",
              "status": "success",
              "user_id": 12345
            },
            {
              "id": "log_002",
              "action": "sms_received",
              "message_id": "msg_in_123",
              "phone_number": "+213666789012",
              "timestamp": "2025-06-20T14:25:00Z",
              "status": "success",
              "user_id": 12345
            }
          ],
          "total": 2,
          "page": 1
        }
      },
      { 
        status: 401, 
        description: 'Authentication required',
        example: {
          "error": "Unauthorized",
          "message": "Access token is required"
        }
      }
    ]
  },
  {
    method: 'GET',
    path: '/admin/users',
    title: 'List Users (Admin)',
    description: 'Get list of all users (admin only)',
    auth: true,
    category: 'Admin',
    icon: Users,
    parameters: [],
    responses: [
      { 
        status: 200, 
        description: 'List of users',
        example: {
          "users": [
            {
              "id": 12345,
              "username": "johndoe",
              "email": "john@example.com",
              "full_name": "John Doe",
              "created_at": "2025-06-15T10:00:00Z",
              "last_login": "2025-06-20T14:30:00Z",
              "is_active": true,
              "messages_sent": 25
            },
            {
              "id": 12346,
              "username": "janedoe",
              "email": "jane@example.com",
              "full_name": "Jane Doe",
              "created_at": "2025-06-16T11:00:00Z",
              "last_login": "2025-06-19T16:20:00Z",
              "is_active": true,
              "messages_sent": 12
            }
          ],
          "total": 2,
          "page": 1
        }
      },
      { 
        status: 403, 
        description: 'Admin access required',
        example: {
          "error": "Forbidden",
          "message": "Admin privileges required to access this resource"
        }
      }
    ]
  },
  {
    method: 'GET',
    path: '/admin/messages',
    title: 'List Messages (Admin)',
    description: 'Get list of all messages (admin only)',
    auth: true,
    category: 'Admin',
    icon: Shield,
    parameters: [],
    responses: [
      { 
        status: 200, 
        description: 'List of messages',
        example: {
          "messages": [
            {
              "id": "msg_67890",
              "user_id": 12345,
              "username": "johndoe",
              "type": "outbound",
              "phone_number": "+213555123456",
              "message": "Hello! This is a test SMS from our API.",
              "timestamp": "2025-06-20T14:30:00Z",
              "status": "delivered",
              "cost": 0.05
            },
            {
              "id": "msg_in_123",
              "user_id": 12345,
              "username": "johndoe",
              "type": "inbound",
              "phone_number": "+213666789012",
              "message": "Reply: Thank you for your message!",
              "timestamp": "2025-06-20T14:25:00Z",
              "status": "received",
              "cost": 0.00
            }
          ],
          "total": 2,
          "page": 1
        }
      },
      { 
        status: 403, 
        description: 'Admin access required',
        example: {
          "error": "Forbidden",
          "message": "Admin privileges required to access this resource"
        }
      }
    ]
  }
]

// Group endpoints by category
const groupedEndpoints = endpoints.reduce<Record<string, typeof endpoints>>((
  acc, endpoint
) => {
  if (!acc[endpoint.category]) {
    acc[endpoint.category] = []
  }
  acc[endpoint.category].push(endpoint)
  return acc
}, {} as Record<string, typeof endpoints>)

export default function APIReference() {
  return (
    <div className="min-h-screen ">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4 py-8">
          <div className="flex justify-center mb-4">
            <div className="p-3  rounded-full">
              <BookOpen className="w-8 h-8 text-muted-foreground" />
            </div>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-muted-foreground">API Reference</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete reference for the SMS Gateway API endpoints. Authenticate, send messages, and manage your SMS operations.
          </p>
        </div>

        {/* Base URL Card */}
        <Card className=" border-blue-200 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 /20 rounded-lg">
                <Globe className="w-6 h-6 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-muted-foreground mb-1">Base URL</h3>
                <code className="text-sm font-mono  text-blue-300 px-4 py-2 rounded-lg border shadow-sm">
                  http://192.168.33.237:8000
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Endpoints by Category */}
        {Object.entries(groupedEndpoints).map(([category, categoryEndpoints]) => (
          <div key={category} className="space-y-4">
            <div className="flex items-center gap-3 py-4 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-muted-foreground">{category}</h2>
              <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                {categoryEndpoints.length} endpoint{categoryEndpoints.length !== 1 ? 's' : ''}
              </Badge>
            </div>
            
            <div className="grid gap-6">
              {categoryEndpoints.map((endpoint, index) => {
                const IconComponent = endpoint.icon
                return (
                  <Card key={index} className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-blue-50 rounded-lg">
                            <IconComponent className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <Badge 
                                variant={endpoint.method === 'GET' ? 'secondary' : 'default'}
                                className={`font-semibold ${
                                  endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                                  endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                                  'bg-gray-100 text-gray-800'
                                }`}
                              >
                                {endpoint.method}
                              </Badge>
                              <code className="text-sm font-mono bg-gray-100 text-gray-800 px-3 py-1 rounded-md">
                                {endpoint.path}
                              </code>
                            </div>
                            <CardTitle className="text-xl text-gray-900">{endpoint.title}</CardTitle>
                            <CardDescription className="text-muted-foreground mt-1">{endpoint.description}</CardDescription>
                          </div>
                        </div>
                        {endpoint.auth && (
                          <Badge variant="outline" className="text-xs border-orange-200 text-orange-700 bg-orange-50">
                            <Key className="w-3 h-3 mr-1" />
                            Auth Required
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* Request Example */}
                      {endpoint.requestExample && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            Request Example
                          </h4>
                          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-100 whitespace-pre-wrap">
                              <code>{JSON.stringify(endpoint.requestExample, null, 2)}</code>
                            </pre>
                          </div>
                        </div>
                      )}

                      {endpoint.parameters.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Code className="w-4 h-4" />
                            Parameters
                          </h4>
                          <div className="grid gap-3">
                            {endpoint.parameters.map((param, paramIndex) => (
                              <div key={paramIndex} className="border rounded-lg p-4 bg-gray-50/50 hover:bg-gray-100/50 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                  <code className="text-sm font-mono font-semibold text-gray-900  px-2 py-1 rounded border">
                                    {param.name}
                                  </code>
                                  <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                                    {param.type}
                                  </Badge>
                                  {param.required && (
                                    <Badge variant="destructive" className="text-xs">
                                      Required
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">{param.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Responses
                        </h4>
                        <div className="space-y-4">
                          {endpoint.responses.map((response, responseIndex) => (
                            <div key={responseIndex} className="border rounded-lg ">
                              <div className="flex items-center gap-3 p-3 border-b bg-gray-50">
                                <Badge 
                                  variant={response.status < 300 ? 'default' : 'destructive'}
                                  className={`w-16 justify-center font-mono ${
                                    response.status < 300 ? 'bg-green-100 text-green-800' : ''
                                  }`}
                                >
                                  {response.status}
                                </Badge>
                                <span className="text-sm text-gray-700 font-medium">{response.description}</span>
                              </div>
                              {response.example && (
                                <div className="p-4">
                                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                    <pre className="text-sm text-gray-100 whitespace-pre-wrap">
                                      <code>{JSON.stringify(response.example, null, 2)}</code>
                                    </pre>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}