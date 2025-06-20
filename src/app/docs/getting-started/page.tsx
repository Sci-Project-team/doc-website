import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { 
  Download,
  Wifi,
  Zap,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Copy,
  Terminal,
  Smartphone,
  Settings
} from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    number: 1,
    title: 'Download Firmware',
    description: 'Get the latest ESPing firmware for your ESP32',
    icon: Download,
    content: (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Download the pre-compiled firmware binary for your ESP32 model:
        </p>
        <div className="grid gap-3">
          <Button variant="outline" className="justify-start" asChild>
            <Link href="/downloads/esping-esp32.bin">
              📦 ESP32 Standard (4MB Flash)
            </Link>
          </Button>
          <Button variant="outline" className="justify-start" asChild>
            <Link href="/downloads/esping-esp32-s2.bin">
              📦 ESP32-S2 (4MB Flash)
            </Link>
          </Button>
          <Button variant="outline" className="justify-start" asChild>
            <Link href="/downloads/esping-esp32-c3.bin">
              📦 ESP32-C3 (4MB Flash)
            </Link>
          </Button>
        </div>
      </div>
    )
  },
  {
    number: 2,
    title: 'Flash Firmware',
    description: 'Upload the firmware to your ESP32 using esptool',
    icon: Terminal,
    content: (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Use esptool.py to flash the firmware to your ESP32:
        </p>
        <div className="code-block">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-circuit-400">Command Line</span>
            <Button variant="ghost" size="sm" className="h-6 px-2">
              <Copy className="h-3 w-3" />
            </Button>
          </div>
          <pre className="text-sm">
            <code>{`# Install esptool
pip install esptool

# Flash firmware
esptool.py --chip esp32 --port /dev/ttyUSB0 \\
  --baud 460800 write_flash -z 0x1000 \\
  esping-esp32.bin`}</code>
          </pre>
        </div>
        <div className="text-xs text-muted-foreground">
          💡 Replace <code>/dev/ttyUSB0</code> with your ESP32's serial port
        </div>
      </div>
    )
  },
  {
    number: 3,
    title: 'Configure WiFi',
    description: 'Connect your ESP32 to your wireless network',
    icon: Wifi,
    content: (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          After flashing, the ESP32 will create a WiFi hotspot for initial configuration:
        </p>
        <ol className="text-sm space-y-2">
          <li className="flex items-start space-x-2">
            <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">1</span>
            <span>Connect to WiFi network: <code>ESPing-Setup</code></span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">2</span>
            <span>Open browser and go to: <code>http://192.168.4.1</code></span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">3</span>
            <span>Select your WiFi network and enter password</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">4</span>
            <span>Click "Connect" and wait for connection</span>
          </li>
        </ol>
      </div>
    )
  },
  {
    number: 4,
    title: 'Test Connection',
    description: 'Verify your ESPing device is online and ready',
    icon: CheckCircle,
    content: (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Once connected to WiFi, test the API connection:
        </p>
        <div className="code-block">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-circuit-400">Test API</span>
            <Button variant="ghost" size="sm" className="h-6 px-2">
              <Copy className="h-3 w-3" />
            </Button>
          </div>
          <pre className="text-sm">
            <code>{`curl http://your-esp32-ip/api/status`}</code>
          </pre>
        </div>
        <p className="text-xs text-muted-foreground">
          You should receive a JSON response with system information and status.
        </p>
      </div>
    )
  }
]

const requirements = [
  {
    category: 'Hardware',
    items: [
      'ESP32 development board (any variant)',
      'GSM module (SIM800L, SIM900, or compatible)',
      'Active SIM card with SMS capability',
      'Stable 5V power supply (2A recommended)',
      'Jumper wires for connections'
    ]
  },
  {
    category: 'Software',
    items: [
      'Python 3.6+ with pip installed',
      'esptool.py for firmware flashing',
      'Serial terminal (optional, for debugging)',
      'Web browser for configuration',
      'curl or Postman for API testing'
    ]
  }
]

export default function GettingStartedPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Getting Started with ESPing
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Follow this step-by-step guide to set up your ESP32 SMS gateway 
          and send your first SMS message in under 15 minutes.
        </p>
      </div>

      {/* Prerequisites */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center text-foreground">
          <Settings className="mr-2 h-6 w-6 text-primary " />
          Prerequisites
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {requirements.map((req, index) => (
            <Card key={req.category}>
              <CardHeader>
                <CardTitle className="text-lg">{req.category} Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card variant="circuit" className="p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-amber-400 mt-0.5" />
            <div>
              <h3 className="font-semibold text-white mb-2">Important Notes</h3>
              <ul className="text-sm text-circuit-300 space-y-1">
                <li>• Ensure your SIM card has sufficient credit for SMS</li>
                <li>• Use a stable power supply to avoid GSM connection issues</li>
                <li>• Check that your GSM module supports your carrier's frequency bands</li>
                <li>• Keep antenna connections secure for optimal signal strength</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>



      {/* Troubleshooting */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Having Issues?</h2>
        <div className="grid gap-4">
          <Card className="p-6">
            <h3 className="font-semibold mb-2">🔧 Common Problems</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• <strong>WiFi connection fails:</strong> Check network credentials and signal strength</li>
              <li>• <strong>Firmware flash error:</strong> Ensure correct COM port and ESP32 model</li>
              <li>• <strong>GSM not responding:</strong> Verify power supply and SIM card insertion</li>
              <li>• <strong>API not accessible:</strong> Check firewall settings and IP address</li>
            </ul>
          </Card>
          
          
        </div>
      </section>
    </div>
  )
}