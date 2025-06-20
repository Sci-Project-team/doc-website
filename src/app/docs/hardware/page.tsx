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
  DollarSign,
  ShoppingCart
} from 'lucide-react'

const components = [
  {
    name: 'ESP32 Development Board',
    description: 'Main microcontroller with WiFi and Bluetooth capabilities',
    required: true,
    options: ['ESP32-WROOM-32', 'ESP32-WROVER', 'ESP32-S2', 'ESP32-C3'],
    price: '1,500 - 4,500 DZD',
    notes: 'Any ESP32 variant with at least 4MB flash memory. WROOM-32 recommended for beginners.',
    specifications: ['240MHz dual-core processor', '520KB SRAM', '4MB Flash', 'WiFi + Bluetooth']
  },
  {
    name: 'SIM800L GSM Module',
    description: 'Cellular communication module for SMS functionality',
    required: true,
    options: ['SIM800L', 'SIM900A', 'A6 Module', 'SIM7600'],
    price: '2,400 - 7,500 DZD',
    notes: 'SIM800L is recommended for beginners. Supports 2G networks.',
    specifications: ['Quad-band GSM/GPRS', 'SMS and voice calls', 'Low power consumption', 'Compact size']
  },
  {
    name: 'SIM Card',
    description: 'Active SIM card with SMS capability',
    required: true,
    options: ['Mobilis Prepaid', 'Ooredoo Prepaid', 'Djezzy Prepaid'],
    price: '500 - 2,000 DZD/month',
    notes: 'Ensure your carrier supports 2G/3G networks. Prepaid recommended for testing.',
    specifications: ['SMS service enabled', '2G/3G network support', 'Sufficient credit', 'Active subscription']
  },
  {
    name: 'Power Supply (5V 2A)',
    description: 'Stable power source for GSM module',
    required: true,
    options: ['5V 2A Adapter', 'Power Bank', 'USB Power Supply'],
    price: '1,500 - 4,500 DZD',
    notes: 'GSM modules require high current during transmission. Stable power is critical.',
    specifications: ['5V output voltage', '2A minimum current', 'Stable regulation', 'Low noise']
  },
  {
    name: 'GSM Antenna',
    description: 'Antenna for cellular signal reception',
    required: true,
    options: ['Helical Antenna', 'PCB Antenna', 'External Antenna'],
    price: '600 - 3,000 DZD',
    notes: 'Usually included with GSM module. External antenna improves signal quality.',
    specifications: ['900/1800 MHz frequency', 'SMA connector', 'Omnidirectional', 'Good gain']
  },
  {
    name: 'Jumper Wires & Breadboard',
    description: 'Connecting wires and prototyping board',
    required: true,
    options: ['Jumper Wire Kit', 'Breadboard Set', 'Prototyping Kit'],
    price: '900 - 2,400 DZD',
    notes: 'Get a variety pack with different wire types. Half-size breadboard sufficient.',
    specifications: ['Male-to-male wires', 'Male-to-female wires', '400-point breadboard', 'Good connections']
  },
  {
    name: 'OLED Display (Optional)',
    description: 'Display for status information and debugging',
    required: false,
    options: ['0.96" OLED I2C', '1.3" OLED SPI', 'LCD 16x2'],
    price: '1,500 - 4,500 DZD',
    notes: 'Useful for debugging and status monitoring. I2C interface recommended.',
    specifications: ['128x64 resolution', 'I2C interface', 'Low power', 'Clear display']
  },
  {
    name: 'MicroSD Card (Optional)',
    description: 'Additional storage for message logs',
    required: false,
    options: ['8GB MicroSD', '16GB MicroSD', '32GB MicroSD'],
    price: '900 - 1,800 DZD',
    notes: 'For extended message history storage. Class 10 recommended.',
    specifications: ['8GB minimum', 'Class 10 speed', 'Reliable brand', 'FAT32 format']
  }
]

const connections = [
  {
    component: 'SIM800L',
    esp32_pin: 'GPIO17 (RX2)',
    gsm_pin: 'TXD',
    description: 'Serial communication - ESP32 receives data from GSM'
  },
  {
    component: 'SIM800L',
    esp32_pin: 'GPIO16 (TX2)',
    gsm_pin: 'RXD',
    description: 'Serial communication - ESP32 sends data to GSM'
  },
  {
    component: 'SIM800L',
    esp32_pin: '5V (VIN)',
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
    description: 'Reset pin (optional but recommended)'
  },
  {
    component: 'OLED Display',
    esp32_pin: 'GPIO21 (SDA)',
    gsm_pin: 'SDA',
    description: 'I2C data line for display'
  },
  {
    component: 'OLED Display',
    esp32_pin: 'GPIO22 (SCL)',
    gsm_pin: 'SCL',
    description: 'I2C clock line for display'
  },
  {
    component: 'OLED Display',
    esp32_pin: '3.3V',
    gsm_pin: 'VCC',
    description: 'Power supply for OLED display'
  }
]

const totalCosts = [
  {
    setup: 'Basic Configuration',
    description: 'Minimum components for SMS gateway',
    components: ['ESP32', 'SIM800L', 'SIM Card', 'Power Supply', 'Antenna', 'Cables'],
    totalDZD: '7,500 - 22,000 DZD',
    monthly: '500 - 2,000 DZD/month',
    recommended: 'Ideal for prototyping and testing'
  },
  {
    setup: 'Complete Configuration',
    description: 'All components including optional ones',
    components: ['Basic Configuration', 'OLED Display', 'MicroSD Card', 'Enclosure'],
    totalDZD: '10,500 - 28,500 DZD',
    monthly: '500 - 2,000 DZD/month',
    recommended: 'Recommended for professional use'
  },
  {
    setup: 'Raspberry Pi Configuration',
    description: 'Advanced configuration with Raspberry Pi backend',
    components: ['Complete Configuration', 'Raspberry Pi 4', 'SD Card', 'Pi Power Supply'],
    totalDZD: '25,000 - 45,000 DZD',
    monthly: '500 - 2,000 DZD/month',
    recommended: 'For multi-user applications'
  }
]

export default function HardwarePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Hardware Configuration & Pricing
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Complete guide to assembling your SMS Gateway hardware with detailed pricing in Algerian Dinars. 
          Choose between a simple ESP32 configuration or an advanced configuration with Raspberry Pi.
        </p>
      </div>

      {/* Cost Overview */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-muted-foreground ">
          <DollarSign className="w-6 h-6 text-green-600" />
          Cost Overview
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {totalCosts.map((cost, index) => (
            <Card key={index} className={`${index === 1 ? 'border-blue-500 shadow-lg' : ''}`}>
              {index === 1 && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500">
                  Recommended
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{cost.setup}</CardTitle>
                <CardDescription>{cost.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-green-600">{cost.totalDZD}</span>
                  <div className="text-sm text-muted-foreground mt-1">
                    + {cost.monthly} (monthly fees)
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Included components:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {cost.components.map((component, compIndex) => (
                        <li key={compIndex}>• {component}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-blue-600 font-medium">{cost.recommended}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* System Overview */}
      <Card className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Cpu className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold">System Overview</h2>
        </div>
        <p className="text-muted-foreground mb-6">
          The SMS Gateway consists of an ESP32 microcontroller connected to a GSM module, 
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
        <h2 className="text-2xl font-bold mb-6 text-muted-foreground">Required Components</h2>
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
                  <div className="text-sm font-semibold text-green-600 mt-1">{component.price}</div>
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-medium mb-2">Available options:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {component.options.map((option, optionIndex) => (
                      <li key={optionIndex}>• {option}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Important notes:</h4>
                  <p className="text-sm text-muted-foreground">{component.notes}</p>
                  {component.specifications && (
                    <div className="mt-2">
                      <h5 className="font-medium text-xs mb-1">Specifications:</h5>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {component.specifications.map((spec, specIndex) => (
                          <li key={specIndex}>• {spec}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Wiring Diagram */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-muted-foreground">Wiring Diagram</h2>
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
        <h2 className="text-2xl font-bold mb-6">Assembly Instructions</h2>
        <div className="space-y-6">
          {[
            {
              step: 1,
              title: 'Component Preparation',
              content: 'Gather all components and tools. Ensure your workspace is clean and well-lit. Verify that all components are working before assembly.',
              icon: Settings
            },
            {
              step: 2,
              title: 'SIM Card Insertion',
              content: 'Carefully insert the SIM card into the GSM module. Make sure it is properly seated and the contacts are clean.',
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
              content: 'Connect the TX/RX pins for serial communication. Note that RX of ESP32 connects to TX of GSM and vice versa.',
              icon: Cable
            },
            {
              step: 5,
              title: 'Optional Components',
              content: 'If using OLED display or other optional components, connect them according to the wiring diagram.',
              icon: Cpu
            },
            {
              step: 6,
              title: 'Connection Testing',
              content: 'Check all connections before powering on. Use a multimeter to verify continuity if necessary.',
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
        <h2 className="text-2xl font-bold mb-6 text-muted-foreground">Important Considerations</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 border-amber-500/20 bg-amber-500/5">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Power Requirements</h3>
                <ul className="text-sm text-amber-600 dark:text-amber-400 space-y-1">
                  <li>• GSM modules require high current (up to 2A during transmission)</li>
                  <li>• Use stable 5V power supply, not just USB power</li>
                  <li>• Add capacitors to smooth power if experiencing restarts</li>
                  <li>• Backup battery recommended for critical applications</li>
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
                  <li>• Test signal strength at your intended location</li>
                  <li>• Use external antenna for better range if needed</li>
                  <li>• Avoid metal enclosures that block cellular signals</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      

      
    </div>
  )
}