import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function truncate(text: string, length: number): string {
  return text.length > length ? text.substring(0, length) + '...' : text
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function generateCodeExample(language: string, example: string): string {
  const examples: Record<string, string> = {
    javascript: `
// Initialize ESPing client
const esping = new ESPingClient({
  apiKey: 'your-api-key',
  baseURL: 'http://your-esp32-ip'
});

// Send SMS
const response = await esping.sendSMS({
  to: '+1234567890',
  message: 'Hello from ESPing!'
});

console.log(response);
    `,
    python: `
# Initialize ESPing client
import esping

client = esping.Client(
    api_key='your-api-key',
    base_url='http://your-esp32-ip'
)

# Send SMS
response = client.send_sms(
    to='+1234567890',
    message='Hello from ESPing!'
)

print(response)
    `,
    curl: `
# Send SMS via REST API
curl -X POST http://your-esp32-ip/api/sms \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer your-api-key" \\
  -d '{
    "to": "+1234567890",
    "message": "Hello from ESPing!"
  }'
    `,
    arduino: `
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

// ESP32 configuration
const char* ssid = "your-wifi";
const char* password = "your-password";
const char* espingHost = "192.168.1.100";

void sendSMS(String phoneNumber, String message) {
  HTTPClient http;
  http.begin("http://" + String(espingHost) + "/api/sms");
  http.addHeader("Content-Type", "application/json");
  http.addHeader("Authorization", "Bearer your-api-key");
  
  StaticJsonDocument<200> doc;
  doc["to"] = phoneNumber;
  doc["message"] = message;
  
  String jsonString;
  serializeJson(doc, jsonString);
  
  int httpResponseCode = http.POST(jsonString);
  
  if (httpResponseCode > 0) {
    String response = http.getString();
    Serial.println("SMS sent successfully");
    Serial.println(response);
  }
  
  http.end();
}
    `
  }
  
  return examples[language] || examples.javascript
}