import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge'
import { 
  Cpu, 
  Radio, 
  Zap, 
  Wifi, 
  AlertTriangle, 
  CheckCircle, 
  ExternalLink,
  Download,
  Settings,
  Cable,
  Link
} from 'lucide-react'

const components = [
  {
    name: 'ESP32 Development Board',
    description: 'Main microcontroller with WiFi and Bluetooth',
    required: true,
    options: ['ESP32-WROOM-32', 'ESP32-WROVER', 'ESP32-S2', 'ESP32-C3'],
    price: '$5-15',
    notes: 'Any ESP32 variant with at least 4MB flash memory'
  },
  {
    name: 'GSM Module',
    description: 'Cellular communication module for SMS functionality',
    required: true,
    options: ['SIM800L', 'SIM900A', 'A6 Module', 'SIM7600'],
    price: '$8-25',
    notes: 'SIM800L is recommended for beginners'
  },
  {
    name: 'SIM Card',
    description: 'Active SIM card with SMS capability',
    required: true,
    options: ['Prepaid SIM', 'IoT SIM', 'Data SIM with SMS'],
    price: '$5-20/month',
    notes: 'Ensure your carrier supports 2G/3G networks'
  },
  {
    name: 'Power Supply',
    description: 'Stable power source for GSM module',
    required: true,
    options: ['5V 2A Adapter', 'Li-Po Battery', 'USB Power Bank'],
    price: '$5-15',
    notes: 'GSM modules require high current during transmission'
  },
  {
    name: 'Antenna',
    description: 'GSM antenna for cellular signal reception',
    required: true,
    options: ['Helical Antenna', 'PCB Antenna', 'External Antenna'],
    price: '$2-10',
    notes: 'Usually included with GSM module'
  },
  {
    name: 'Jumper Wires',
    description: 'Connecting wires for prototyping',
    required: true,
    options: ['Male-to-Male', 'Male-to-Female', 'Female-to-Female'],
    price: '$3-8',
    notes: 'Get a variety pack with different types'
  },
  {
    name: 'Breadboard',
    description: 'Solderless prototyping board',
    required: false,
    options: ['Half-size', 'Full-size', 'Mini breadboard'],
    price: '$3-10',
    notes: 'Alternative to direct soldering for testing'
  },
  {
    name: 'OLED Display',
    description: 'Optional display for status information',
    required: false,
    options: ['0.96" OLED', '1.3" OLED', 'LCD 16x2'],
    price: '$5-15',
    notes: 'Useful for debugging and status monitoring'
  }
]

const connections = [
  {
    component: 'SIM800L',
    esp32_pin: 'GPIO17',
    gsm_pin: 'TXD',
    description: 'Serial communication - ESP32 RX'
  },
  {
    component: 'SIM800L',
    esp32_pin: 'GPIO16',
    gsm_pin: 'RXD',
    description: 'Serial communication - ESP32 TX'
  },
  {
    component: 'SIM800L',
    esp32_pin: '5V',
    gsm_pin: 'VCC',
    description: 'Power supply (3.7V-4.2V for SIM800L)'
  },
  {
    component: 'SIM800L',
    esp32_pin: 'GND',
    gsm_pin: 'GND',
    description: 'Ground connection'
  },
  {
    component: 'SIM800L',
    esp32_pin: 'GPIO18',
    gsm_pin: 'RST',
    description: 'Reset pin (optional)'
  },
  {
    component: 'OLED (Optional)',
    esp32_pin: 'GPIO21',
    gsm_pin: 'SDA',
    description: 'I2C data line'
  },
  {
    component: 'OLED (Optional)',
    esp32_pin: 'GPIO22',
    gsm_pin: 'SCL',
    description: 'I2C clock line'
  },
  {
    component: 'OLED (Optional)',
    esp32_pin: '3.3V',
    gsm_pin: 'VCC',
    description: 'Power supply for OLED'
  }
]

export default function HardwarePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Hardware Setup Guide
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Complete guide to assembling your ESPing SMS gateway hardware. 
          Learn about component selection, wiring, and best practices for a reliable setup.
        </p>
      </div>

      {/* Overview */}
      <Card className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Cpu className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold">System Overview</h2>
        </div>
        <p className="text-muted-foreground mb-6">
          ESPing consists of an ESP32 microcontroller connected to a GSM module, 
          creating a bridge between WiFi and cellular networks for SMS communication.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="text-center p-4 border rounded-lg">
            <Wifi className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold">WiFi Connectivity</h3>
            <p className="text-sm text-muted-foreground">ESP32 connects to internet</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <Radio className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <h3 className="font-semibold">GSM Communication</h3>
            <p className="text-sm text-muted-foreground">Send/receive SMS messages</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <Cable className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <h3 className="font-semibold">Serial Interface</h3>
            <p className="text-sm text-muted-foreground">ESP32 ↔ GSM communication</p>
          </div>
        </div>
      </Card>

      {/* Component List */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Required Components</h2>
        <div className="space-y-4">
          {components.map((component, index) => (
            <Card key={component.name} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-bold text-primary">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{component.name}</h3>
                    <p className="text-sm text-muted-foreground">{component.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={component.required ? 'default' : 'secondary'}>
                    {component.required ? 'Required' : 'Optional'}
                  </Badge>
                  <div className="text-sm font-semibold text-primary mt-1">{component.price}</div>
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-medium mb-2">Options:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {component.options.map((option, optionIndex) => (
                      <li key={optionIndex}>• {option}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Notes:</h4>
                  <p className="text-sm text-muted-foreground">{component.notes}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Wiring Diagram */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Wiring Connections</h2>
        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Cable className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">ESP32 to SIM800L Connections</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">ESP32 Pin</th>
                  <th className="text-left p-3 font-semibold">GSM Module Pin</th>
                  <th className="text-left p-3 font-semibold">Component</th>
                  <th className="text-left p-3 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {connections.map((connection, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3">
                      <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                        {connection.esp32_pin}
                      </code>
                    </td>
                    <td className="p-3">
                      <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                        {connection.gsm_pin}
                      </code>
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">
                      {connection.component}
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">
                      {connection.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* Assembly Instructions */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Step-by-Step Assembly</h2>
        <div className="space-y-6">
          {[
            {
              step: 1,
              title: 'Prepare Components',
              content: 'Gather all components and tools. Ensure your workspace is clean and well-lit. Check that all components are working before assembly.',
              icon: Settings
            },
            {
              step: 2,
              title: 'Insert SIM Card',
              content: 'Carefully insert the SIM card into the GSM module. Make sure it\'s properly seated and the contacts are clean.',
              icon: Radio
            },
            {
              step: 3,
              title: 'Power Connections',
              content: 'Connect the power lines first: 5V and GND. Ensure stable power supply to avoid communication issues.',
              icon: Zap
            },
            {
              step: 4,
              title: 'Serial Communication',
              content: 'Connect the TX/RX pins for serial communication. Note that ESP32 RX connects to GSM TX and vice versa.',
              icon: Cable
            },
            {
              step: 5,
              title: 'Optional Components',
              content: 'If using an OLED display or other optional components, connect them according to the wiring diagram.',
              icon: Cpu
            },
            {
              step: 6,
              title: 'Test Connections',
              content: 'Double-check all connections before powering on. Use a multimeter to verify continuity if needed.',
              icon: CheckCircle
            }
          ].map((instruction, index) => (
            <Card key={instruction.step} className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {instruction.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <instruction.icon className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">{instruction.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{instruction.content}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Important Notes */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Important Considerations</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 border-amber-500/20 bg-amber-500/5">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Power Requirements</h3>
                <ul className="text-sm text-amber-600 dark:text-amber-400 space-y-1">
                  <li>• GSM modules require high current (up to 2A during transmission)</li>
                  <li>• Use a stable 5V power supply, not just USB power</li>
                  <li>• Add capacitors for power smoothing if experiencing resets</li>
                  <li>• Battery backup recommended for critical applications</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-blue-500/20 bg-blue-500/5">
            <div className="flex items-start space-x-3">
              <Radio className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Signal Quality</h3>
                <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                  <li>• Position antenna away from ESP32 to avoid interference</li>
                  <li>• Test signal strength in your intended location</li>
                  <li>• Use external antenna for better range if needed</li>
                  <li>• Avoid metal enclosures that block cellular signals</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Troubleshooting */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Common Issues</h2>
        <div className="space-y-4">
          {[
            {
              problem: "GSM module doesn't respond",
              solutions: ["Check power connections and voltage", "Verify TX/RX wiring", "Ensure SIM card is properly inserted", "Check baud rate configuration"]
            },
            {
              problem: "Poor signal quality",
              solutions: ["Reposition antenna", "Move to area with better coverage", "Use external antenna", "Check carrier frequency bands"]
            },
            {
              problem: "ESP32 keeps resetting",
              solutions: ["Use adequate power supply", "Add power filtering capacitors", "Check for loose connections", "Reduce GSM transmission power"]
            },
            {
              problem: "Can't send SMS",
              solutions: ["Verify SIM card has credit", "Check APN settings", "Ensure network registration", "Test with AT commands first"]
            }
          ].map((issue, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-semibold mb-3 text-red-600 dark:text-red-400">
                {issue.problem}
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {issue.solutions.map((solution, solutionIndex) => (
                  <li key={solutionIndex}>• {solution}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Next Steps */}
      <Card className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Hardware Setup Complete!</h2>
        <p className="text-muted-foreground mb-6">
          Once your hardware is assembled and tested, you're ready to flash the firmware and configure your ESPing device.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="glow" asChild>
            <Link href="/docs/getting-started">
              <Download className="mr-2 h-4 w-4" />
              Flash Firmware
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/troubleshooting">
              <ExternalLink className="mr-2 h-4 w-4" />
              Troubleshooting Guide
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  )
}
