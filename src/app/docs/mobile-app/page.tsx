import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge'
import app1 from '../../../../public/app1.png'
import app2 from '../../../../public/app2.png'
import app3 from '../../../../public/app3.png'
import app4 from '../../../../public/app4.png'
import { 
  Smartphone, 
  Download, 
  Github, 
  Play, 
  Apple,
  Monitor,
  Wifi,
  Shield
} from 'lucide-react'

export default function MobileApp() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-muted-foreground">ESPing Mobile Application</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Native Android SMS Gateway management with adaptive backend support
        </p>
      </div>

      {/* App Overview */}
      <Card className="bg-gradient-to-r  border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="w-5 h-5" />
            ESPing SMS Gateway App
          </CardTitle>
          <CardDescription>
            Native Android solution with adaptive backend connection for ESP32 and Raspberry Pi systems
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4  rounded-lg border">
              <Monitor className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <h4 className="font-semibold">Real-time Monitoring</h4>
              <p className="text-sm text-muted-foreground">Monitor SMS status and delivery in real-time</p>
            </div>
            <div className="text-center p-4  rounded-lg border">
              <Wifi className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <h4 className="font-semibold">Remote Management</h4>
              <p className="text-sm text-muted-foreground">Manage your GSM module remotely</p>
            </div>
            <div className="text-center p-4  rounded-lg border">
              <Shield className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <h4 className="font-semibold">Secure Access</h4>
              <p className="text-sm text-muted-foreground">Secure authentication and encrypted communication</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>Key Features</CardTitle>
          <CardDescription>Everything you need to manage SMS operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Core Features</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-green-500"></Badge>
                  Send SMS messages individually or in bulk
                </li>
                
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-green-500"></Badge>
                  Real-time delivery status tracking
                </li>
                
                
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Advanced Features</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-blue-500"></Badge>
                  GSM module status monitoring
                </li>
                
                
                
                
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Screenshots */}
      <Card>
        <CardHeader>
          <CardTitle>App Screenshots</CardTitle>
          <CardDescription>See the app in action</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="aspect-[9/16] bg-transparent rounded-xl overflow-hidden shadow-lg">
              <img 
                src={app1.src} 
                alt="Dashboard Screenshot" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="aspect-[9/16] bg-transparent rounded-xl overflow-hidden shadow-lg">
              <img 
                src={app2.src} 
                alt="Send SMS Screenshot" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="aspect-[9/16] bg-transparent rounded-xl overflow-hidden shadow-lg">
              <img 
                src={app3.src} 
                alt="Message History Screenshot" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="aspect-[9/16] bg-transparent rounded-xl overflow-hidden shadow-lg">
              <img 
                src={app4.src} 
                alt="Settings Screenshot" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Download Links */}
      <Card>
        <CardHeader>
          <CardTitle>Download & Source Code</CardTitle>
          <CardDescription>Get the ESPing mobile app and explore the source code</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold">Download App</h4>
              </div>
              <div className="space-y-3">
                <Button asChild className="w-full justify-start" variant="default">
                  <a href="#" className="pointer-events-none opacity-50">
                    <Play className="w-4 h-4 mr-2" />
                    Google Play Store (Coming Soon)
                  </a>
                </Button>
                <Button asChild className="w-full justify-start" variant="outline">
                  <a href="#" className="pointer-events-none opacity-50">
                    <Download className="w-4 h-4 mr-2" />
                    Direct APK Download (Coming Soon)
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Native Android app built with Kotlin for optimal performance
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Github className="w-5 h-5 text-gray-800" />
                <h4 className="font-semibold">Source Code</h4>
              </div>
              <div className="space-y-3">
                <Button asChild className="w-full justify-start" variant="outline">
                  <a href="https://github.com/Sci-Project-team/sms-gateway-mobile" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
                <div className="flex gap-2">
                  <Badge variant="secondary">Kotlin</Badge>
                  <Badge variant="secondary">Android</Badge>
                  <Badge variant="secondary">Open Source</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                ESPing mobile app with adaptive backend connection for ESP32 and Raspberry Pi
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Details */}
      <Card>
        <CardHeader>
          <CardTitle>Technical Specifications</CardTitle>
          <CardDescription>ESPing app architecture and development details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                Development Stack
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Language:</span>
                  <strong>Kotlin</strong>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Platform:</span>
                  <strong>Android Native</strong>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Architecture:</span>
                  <strong>MVVM</strong>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">HTTP Client:</span>
                  <strong>Retrofit</strong>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Database:</span>
                  <strong>Room</strong>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Monitor className="w-4 h-4" />
                System Requirements
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Android:</span>
                  <strong>7.0+ (API 24+)</strong>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Storage:</span>
                  <strong>25 MB minimum</strong>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">RAM:</span>
                  <strong>2 GB recommended</strong>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Network:</span>
                  <strong>WiFi/Mobile Data</strong>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Permissions:</span>
                  <strong>Network, Notifications</strong>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Wifi className="w-4 h-4" />
                Backend Compatibility
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-blue-500"></Badge>
                  <span>ESP32 Direct Connection</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-green-500"></Badge>
                  <span>Raspberry Pi FastAPI</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-purple-500"></Badge>
                  <span>Adaptive Protocol Detection</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-orange-500"></Badge>
                  <span>REST API Communication</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-red-500"></Badge>
                  <span>Token-based Authentication</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-muted rounded-lg">
            <h5 className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Key Architecture Features
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><strong>Offline Capability:</strong> Local message queuing and draft management</p>
                <p><strong>Session Management:</strong> Persistent login with secure token storage</p>
              </div>
              <div>
                <p><strong>Multi-Solution Login:</strong> Adaptive authentication for ESP32/Raspberry Pi</p>
                <p><strong>Auto-Detection:</strong> Automatically detects and adapts to backend type</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}