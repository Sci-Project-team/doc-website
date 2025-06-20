# Developer-Oriented Smart SMS Gateway

A comprehensive SMS gateway solution offering both ESP32-based lightweight implementation and Raspberry Pi-based advanced multi-user system for developer-oriented SMS communication.

## 🚀 Project Overview

This project provides two complementary solutions for implementing a developer-oriented SMS gateway:

- **ESP32-Based Solution**: Lightweight, autonomous system ideal for simple deployments and prototyping
- **Raspberry Pi-Based Solution**: Full-featured platform supporting multiple users and extensive integration capabilities

Both solutions eliminate dependency on cloud services while providing comprehensive developer tools and integration capabilities.

## 📋 Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Quick Start](#quick-start)
- [API Documentation](#api-documentation)
- [SDKs & Integrations](#sdks--integrations)
- [Mobile Application](#mobile-application)
- [Pricing](#pricing)
- [Demo](#demo)
- [Contributing](#contributing)
- [Team](#team)
- [License](#license)

## ✨ Features

### Core Functionality
- **Bidirectional SMS Communication**: Send and receive SMS messages via GSM module
- **Dual Architecture Support**: Choose between ESP32 or Raspberry Pi implementations
- **RESTful API**: Comprehensive API with OpenAPI 3.1 specification
- **Real-time Communication**: MQTT protocol support for live updates
- **Multi-user Support**: User authentication and management (Raspberry Pi solution)
- **Local Storage**: Message logging and history retention

### Developer Tools
- **Python SDK**: Complete SDK with authentication and message handling
- **JavaScript SDK**: Browser and Node.js compatible SDK
- **WordPress Plugin**: Seamless WordPress integration with admin interface
- **Node-RED Integration**: Flow-based SMS automation nodes
- **Zapier Integration**: Connect with 5000+ applications

## 🏗️ Architecture

### ESP32-Based Solution
```
ESP32 + SIM800L GSM Module
├── Embedded Web Server (REST API)
├── Local Storage (SD Card/Flash)
├── MQTT Client
└── Direct GSM Communication
```

### Raspberry Pi-Based Solution
```
Raspberry Pi 4 + ESP32 + SIM800L
├── FastAPI Backend (Python)
├── SQLite Database
├── MQTT Broker
├── Web Interface (React.js)
└── ESP32 GSM Bridge
```

## 🚀 Quick Start

### Hardware Requirements

**Common Components:**
- ESP32 Development Board
- SIM800L GSM Module
- Power Bank (5V, 2A)
- SIM Card with SMS service
- Jumper wires and breadboard

**Additional for Raspberry Pi Solution:**
- Raspberry Pi 4 (4GB+ recommended)
- MicroSD Card (32GB+)

### ESP32 Solution Setup

1. **Hardware Connection**
```
ESP32    SIM800L
Pin 16 → TXD
Pin 17 → RXD
3.3V   → VCC
GND    → GND
```

2. **Flash Firmware**
```bash
# Clone repository
git clone https://github.com/Sci-Project-team/doc-website.git
cd doc-website/esp32-firmware

# Configure WiFi and upload
arduino-cli compile --fqbn esp32:esp32:esp32 sms_gateway.ino
arduino-cli upload -p /dev/ttyUSB0 --fqbn esp32:esp32:esp32 sms_gateway.ino
```

3. **Access Web Interface**
```
http://192.168.1.100  # ESP32 IP address
```

### Raspberry Pi Solution Setup

1. **Install Dependencies**
```bash
# Clone repository
git clone https://github.com/Sci-Project-team/doc-website.git
cd doc-website

# Install Python dependencies
pip install -r requirements.txt

# Install Node.js dependencies
npm install
```

2. **Configure ESP32 Bridge**
```bash
# Flash ESP32 with bridge firmware
cd esp32-bridge
arduino-cli compile --fqbn esp32:esp32:esp32 mqtt_bridge.ino
arduino-cli upload -p /dev/ttyUSB0 --fqbn esp32:esp32:esp32 mqtt_bridge.ino
```

3. **Start Services**
```bash
# Start FastAPI backend
uvicorn main:app --host 0.0.0.0 --port 8000

# Start React frontend
npm run dev
```

## 📚 API Documentation

### Authentication

**Register User**
```http
POST /auth/register
Content-Type: application/json

{
  "username": "your_username",
  "email": "your_email@example.com",
  "password": "your_password",
  "full_name": "Your Full Name"
}
```

**Login**
```http
POST /auth/login
Content-Type: application/x-www-form-urlencoded

username=your_username&password=your_password&grant_type=password
```

### SMS Operations

**Send SMS**
```http
POST /sms
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "phone_number": "+213794478998",
  "message": "Hello from SMS Gateway"
}
```

**Get Inbox**
```http
GET /sms/inbox
Authorization: Bearer YOUR_TOKEN
```

**Get Sent Messages**
```http
GET /sms/sent
Authorization: Bearer YOUR_TOKEN
```

**View Logs**
```http
GET /logs
Authorization: Bearer YOUR_TOKEN
```

### Interactive Documentation
Access the full API documentation at: `http://your-server:8000/docs`

## 🛠️ SDKs & Integrations

### Python SDK

**Installation**
```bash
pip install sms-gateway-sdk
```

**Usage**
```python
from sms_gateway import SMSGateway

# Initialize connection
gateway = SMSGateway(
    host="192.168.1.100",
    api_key="your_api_key",
    solution_type="esp32"  # or "raspberry"
)

# Send SMS
result = gateway.send_sms(
    to="+213794478998",
    message="Hello from SMS Gateway"
)

if result.success:
    print(f"Message sent successfully. ID: {result.message_id}")
else:
    print(f"Failed to send message: {result.error}")

# Get inbox
messages = gateway.get_inbox(limit=10, unread_only=True)
for message in messages:
    print(f"From {message.phone_number}: {message.content}")

# Real-time monitoring
def on_message_received(message):
    print(f"New message from {message.phone_number}: {message.content}")

gateway.on_message_received(on_message_received)
gateway.start_monitoring()
```

### JavaScript SDK

**Installation**
```bash
npm install sms-gateway-js
```

**Usage**
```javascript
import { SMSGateway } from 'sms-gateway-js';

const gateway = new SMSGateway({
  baseURL: 'http://192.168.1.100',
  apiKey: 'your_api_key',
  realTime: true
});

// Send message
gateway.sendSMS('+213794478998', 'Hello World!')
  .then(result => console.log('Message sent:', result))
  .catch(error => console.error('Error:', error));

// Real-time message listening
gateway.onMessageReceived((message) => {
  console.log('New message:', message);
  updateUI(message);
});
```

### WordPress Plugin

The WordPress SMS Gateway plugin provides seamless integration with WordPress sites through a comprehensive administrative interface.

**Features:**
- **Shortcode Support**: `[sms_gateway]` shortcode for embedding SMS functionality
- **Administrative Dashboard**: Dedicated SMS Gateway menu with configuration panels
- **API Integration**: RESTful integration with secure token management
- **Message Management**: Bidirectional SMS communication with logging capabilities

**Installation:**
1. Download the plugin from the releases section
2. Upload to your WordPress `/wp-content/plugins/` directory
3. Activate the plugin through the WordPress admin panel
4. Configure API settings in SMS Gateway → Settings

### Node-RED Integration

**Installation:**
```bash
npm install node-red-contrib-sms-gateway
```

**Features:**
- **SMS Gateway Configuration Node**: Central hub storing FastAPI base URL and API authentication
- **SMS Gateway Node**: Primary node supporting multiple operations (Send SMS, Get Inbox, Get Sent Messages)
- **Visual Flow Design**: Drag-and-drop interface for creating SMS automation workflows
- **Real-time Processing**: Flows triggered by incoming messages or scheduled events

### Zapier Integration

Connect your SMS Gateway with 5000+ applications through Zapier integration.

**Setup:**
1. Search for "ESPing (ESP SMS Gateway)" in Zapier
2. Connect your account using API credentials
3. Create Zaps with SMS triggers and actions

**Popular Use Cases:**
- Google Calendar → SMS notifications
- Form submissions → SMS alerts
- CRM updates → SMS notifications

## 📱 Mobile Application: ESPing

**ESPing** is a comprehensive Android mobile application developed in Kotlin that provides native access to SMS gateway functionality.

**Features:**
- **Adaptive Backend Connection**: Automatically detects ESP32 or Raspberry Pi solutions
- **Multi-Solution Login**: Token-based authentication with secure credential storage
- **Real-time Notifications**: Live SMS status updates and message reception
- **Offline Capability**: Message queuing during connectivity issues with automatic retry

**Download:** [GitHub Releases](https://github.com/Sci-Project-team/doc-website/releases)

## 💰 Pricing (DZD)

### Traditional SMS Costs in Algeria

| Operator | Market Share | Domestic SMS | International |
|----------|-------------|--------------|---------------|
| Djezzy | ~35% | 5-7 DZD | 7.5-17.8 DZD |
| Ooredoo | ~30% | 6-8 DZD | 15.0-17.8 DZD |
| Mobilis | ~30% | 5-7 DZD | 17.0 DZD |
| ATM | ~5% | 6-8 DZD | 20.2 DZD |

### Our Solution Benefits
- **Zero per-message costs** after initial hardware investment
- **Complete data privacy** - no third-party involvement
- **Offline capability** - works without internet connectivity
- **Full customization** - modify behavior to your needs

**Hardware Investment:**
- ESP32 Solution: ~8,000-12,000 DZD
- Raspberry Pi Solution: ~25,000-35,000 DZD

## 🎥 Demo

Watch our comprehensive demonstration showcasing:
- ESP32 and Raspberry Pi solution comparisons
- Real-time SMS sending and receiving
- WordPress plugin functionality
- Node-RED flow automation
- Zapier integration workflows
- Mobile app features and connectivity

**Demo Video:** *(Link to be updated with actual demonstration video)*

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on how to submit pull requests, report issues, and suggest improvements.

### Development Setup

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👥 Team

This project was developed by students from the National Higher School of Computer Science (ESI) in Algeria:

- **DJABRI Maroua** - Project Lead & ESP32 Development
- **BOUYAHIAOUI Meriem** - Raspberry Pi Backend & API Development  
- **DINARI Yasmine** - Frontend Development & UI/UX Design
- **REZZOUG Aicha** - Mobile Application Development (Kotlin)
- **MESSIKH Wissal** - WordPress Plugin & Integration Development
- **AMIRAT Thanina** - Documentation & Testing

**Academic Supervision:** National Higher School of Computer Science (ESI, EX INI)  
**Program:** Intelligent and Communicating Systems (ICS)  
**Specialty:** 2nd Year SIL G01

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **GitHub Repository**: [https://github.com/Sci-Project-team/doc-website](https://github.com/Sci-Project-team/doc-website)
- **API Documentation**: [http://your-server:8000/docs](http://your-server:8000/docs)
- **Mobile App Repository**: [ESPing Android App](https://github.com/Sci-Project-team/doc-website)

## 📞 Support

For support, email us at [your-email@example.com] or create an issue on GitHub.

---

**Made with ❤️ in Algeria by ESI Students**