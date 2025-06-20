import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge'
import { Code, Play, Download, ExternalLink, Home, Shield, Thermometer, Bell } from 'lucide-react'
import Link from 'next/link'

const examples = [
  {
    title: 'Home Security Alert System',
    description: 'Send SMS alerts when motion is detected or doors/windows are opened',
    icon: Shield,
    difficulty: 'Beginner',
    time: '30 minutes',
    technologies: ['ESP32', 'PIR Sensor', 'Door Sensor'],
    demoUrl: '/demo/security-alerts',
    codeUrl: 'https://github.com/esping/examples/security-alerts'
  },
  {
    title: 'Temperature Monitoring',
    description: 'Monitor temperature and humidity, send alerts when thresholds are exceeded',
    icon: Thermometer,
    difficulty: 'Beginner',
    time: '20 minutes',
    technologies: ['ESP32', 'DHT22', 'ESPing API'],
    demoUrl: '/demo/temperature-monitor',
    codeUrl: 'https://github.com/esping/examples/temperature-monitor'
  },
  {
    title: 'Smart Home Integration',
    description: 'Control lights, fans, and appliances via SMS commands',
    icon: Home,
    difficulty: 'Intermediate',
    time: '45 minutes',
    technologies: ['ESP32', 'Relays', 'Home Assistant'],
    demoUrl: '/demo/smart-home',
    codeUrl: 'https://github.com/esping/examples/smart-home'
  },
  {
    title: 'IoT Device Status Monitor',
    description: 'Monitor multiple IoT devices and get SMS notifications for failures',
    icon: Bell,
    difficulty: 'Advanced',
    time: '60 minutes',
    technologies: ['ESP32', 'MQTT', 'Node-RED'],
    demoUrl: '/demo/device-monitor',
    codeUrl: 'https://github.com/esping/examples/device-monitor'
  }
]

const codeExamples = [
  {
    title: 'Python - Send Alert SMS',
    language: 'python',
    code: `import requests
import json

# ESPing configuration
ESPING_HOST = "192.168.1.100"
API_KEY = "your-api-key"
ALERT_NUMBER = "+213123456789"

def send_alert(message, priority=3):
    """Send SMS alert via ESPing"""
    url = f"http://{ESPING_HOST}/api/sms"
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "to": ALERT_NUMBER,
        "message": f"🚨 ALERT: {message}",
        "priority": priority
    }

    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        result = response.json()
        print(f"Alert sent successfully: {result['id']}")
        return True
    except requests.exceptions.RequestException as e:
        print(f"Failed to send alert: {e}")
        return False

# Example usage
if __name__ == "__main__":
    # Temperature alert example
    temperature = 35.5  # Celsius
    if temperature > 30:
        send_alert(f"High temperature detected: {temperature}°C")
    
    # Motion detection alert
    motion_detected = True
    if motion_detected:
        send_alert("Motion detected in living room", priority=5)`
  },
  {
    title: 'Arduino - ESP32 Temperature Monitor',
    language: 'cpp',
    code: `#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <DHT.h>

// WiFi credentials
const char* ssid = "your-wifi-ssid";
const char* password = "your-wifi-password";

// ESPing configuration
const char* espingHost = "192.168.1.100";
const char* apiKey = "your-api-key";
const char* alertNumber = "+213123456789";

// DHT sensor
#define DHT_PIN 4
#define DHT_TYPE DHT22
DHT dht(DHT_PIN, DHT_TYPE);

// Thresholds
const float TEMP_THRESHOLD = 30.0;
const float HUMIDITY_THRESHOLD = 80.0;

void setup() {
  Serial.begin(115200);
  dht.begin();

  // Connect to WiFi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");
}

void loop() {
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  if (isnan(temperature) || isnan(humidity)) {
    Serial.println("Failed to read from DHT sensor!");
    delay(2000);
    return;
  }

  Serial.printf("Temperature: %.1f°C, Humidity: %.1f%%\\n", temperature, humidity);

  // Check thresholds and send alerts
  if (temperature > TEMP_THRESHOLD) {
    String message = "High temperature alert: " + String(temperature) + "°C";
    sendSMSAlert(message);
  }

  if (humidity > HUMIDITY_THRESHOLD) {
    String message = "High humidity alert: " + String(humidity) + "%";
    sendSMSAlert(message);
  }

  delay(60000); // Check every minute
}

bool sendSMSAlert(String message) {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    String url = "http://" + String(espingHost) + "/api/sms";
    http.begin(url);
    http.addHeader("Content-Type", "application/json");
    http.addHeader("Authorization", "Bearer " + String(apiKey));

    // Create JSON payload
    DynamicJsonDocument doc(1024);
    doc["to"] = alertNumber;
    doc["message"] = "🌡️ " + message;
    doc["priority"] = 4;

    String jsonString;
    serializeJson(doc, jsonString);

    int httpResponseCode = http.POST(jsonString);

    if (httpResponseCode == 200) {
      String response = http.getString();
      Serial.println("SMS sent successfully: " + response);
      http.end();
      return true;
    } else {
      Serial.printf("Error sending SMS: %d\\n", httpResponseCode);
      http.end();
      return false;
    }
  }
  return false;
}`
  },
  {
    title: 'JavaScript - Web Dashboard',
    language: 'javascript',
    code: `class ESPingDashboard {
    constructor(host, apiKey) {
        this.host = host;
        this.apiKey = apiKey;
        this.baseUrl = \`http://\${host}/api\`;
    }

    async sendSMS(to, message, priority = 3) {
        try {
            const response = await fetch(\`\${this.baseUrl}/sms\`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': \`Bearer \${this.apiKey}\`
                },
                body: JSON.stringify({ to, message, priority })
            });
            
            if (!response.ok) {
                throw new Error(\`HTTP error! status: \${response.status}\`);
            }
            
            const result = await response.json();
            console.log('SMS sent:', result);
            return result;
        } catch (error) {
            console.error('Failed to send SMS:', error);
            throw error;
        }
    }

    async getSystemStatus() {
        try {
            const response = await fetch(\`\${this.baseUrl}/status\`);
            const status = await response.json();
            return status;
        } catch (error) {
            console.error('Failed to get status:', error);
            throw error;
        }
    }

    async getInboxMessages(limit = 20) {
        try {
            const response = await fetch(\`\${this.baseUrl}/sms/inbox?limit=\${limit}\`, {
                headers: {
                    'Authorization': \`Bearer \${this.apiKey}\`
                }
            });
            const messages = await response.json();
            return messages;
        } catch (error) {
            console.error('Failed to get inbox:', error);
            throw error;
        }
    }

    // Real-time monitoring
    startMonitoring(interval = 30000) {
        setInterval(async () => {
            try {
                const status = await this.getSystemStatus();
                this.updateDashboard(status);
                
                // Check for new messages
                const messages = await this.getInboxMessages(5);
                this.updateMessagesList(messages);
                
            } catch (error) {
                console.error('Monitoring error:', error);
            }
        }, interval);
    }

    updateDashboard(status) {
        document.getElementById('signal-strength').textContent = \`\${status.gsm_signal}%\`;
        document.getElementById('messages-sent').textContent = status.messages_sent;
        document.getElementById('uptime').textContent = status.uptime;
        
        // Update status indicator
        const indicator = document.getElementById('status-indicator');
        indicator.className = status.status === 'online' ? 'status-online' : 'status-offline';
    }

    updateMessagesList(messages) {
        const container = document.getElementById('messages-container');
        container.innerHTML = '';
        
        messages.forEach(msg => {
            const div = document.createElement('div');
            div.className = 'message-item';
            div.innerHTML = \`
                <div class="message-header">
                    <strong>\${msg.from}</strong>
                    <span class="timestamp">\${new Date(msg.received_at).toLocaleString()}</span>
                </div>
                <div class="message-content">\${msg.message}</div>
            \`;
            container.appendChild(div);
        });
    }
}

// Initialize dashboard
const dashboard = new ESPingDashboard('192.168.1.100', 'your-api-key');

// Start monitoring when page loads
document.addEventListener('DOMContentLoaded', () => {
    dashboard.startMonitoring();
    
    // Setup send SMS form
    document.getElementById('send-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const to = document.getElementById('phone-number').value;
        const message = document.getElementById('message').value;
        
        try {
            await dashboard.sendSMS(to, message);
            alert('SMS sent successfully!');
            document.getElementById('send-form').reset();
        } catch (error) {
            alert('Failed to send SMS: ' + error.message);
        }
    });
});`
  }
]

export default function ExamplesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Integration Examples</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Real-world examples and code samples to help you integrate ESPing into your projects.
          From simple alerts to complex IoT systems.
        </p>
      </div>

      {/* Featured Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {examples.map((example) => (
            <Card key={example.title} className="relative">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <example.icon className="h-8 w-8 text-primary" />
                  <Badge variant={example.difficulty === 'Beginner' ? 'default' : 
                                 example.difficulty === 'Intermediate' ? 'secondary' : 'outline'}>
                    {example.difficulty}
                  </Badge>
                </div>
                <CardTitle>{example.title}</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    ⏱️ Setup time: {example.time}
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {example.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <Link href={example.demoUrl}>
                        <Play className="h-4 w-4 mr-1" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={example.codeUrl}>
                        <Code className="h-4 w-4 mr-1" />
                        Source Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Code Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Code Examples</h2>
        <div className="space-y-6">
          {codeExamples.map((example, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{example.title}</CardTitle>
                  <Badge variant="outline">{example.language}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code className={`language-${example.language}`}>
                    {example.code}
                  </code>
                </pre>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Demo Video Section */}
      <section>
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">See ESPing in Action</h2>
          <p className="text-muted-foreground mb-6">
            Watch our comprehensive demo video showing real-world integrations and use cases.
          </p>
          <div className="bg-muted rounded-lg p-8 mb-6">
            <div className="text-muted-foreground">
              📹 Demo Video Coming Soon
              <br />
              <small>We're preparing a comprehensive video demonstration</small>
            </div>
          </div>
          <Button asChild>
            <Link href="/contact">
              Request Custom Demo
            </Link>
          </Button>
        </Card>
      </section>
    </div>
  )
}