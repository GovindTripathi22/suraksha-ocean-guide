import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  MapPin, 
  AlertTriangle, 
  Phone, 
  Battery, 
  Wifi,
  WifiOff,
  Heart,
  Users,
  Navigation
} from "lucide-react";

export const TouristApp = () => {
  const [panicPressed, setPanicPressed] = useState(false);
  const [longPressTimer, setLongPressTimer] = useState<NodeJS.Timeout | null>(null);
  const [quickTapCount, setQuickTapCount] = useState(0);
  const [safetyScore, setSafetyScore] = useState(87);
  const [isOnline, setIsOnline] = useState(true);
  const [battery, setBattery] = useState(78);

  const handlePanicStart = () => {
    setPanicPressed(true);
    const timer = setTimeout(() => {
      triggerEmergencyAlert();
    }, 3000);
    setLongPressTimer(timer);
  };

  const handlePanicEnd = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
    setPanicPressed(false);
  };

  const handleQuickTap = () => {
    const newCount = quickTapCount + 1;
    setQuickTapCount(newCount);
    
    if (newCount === 5) {
      triggerSilentAlert();
      setQuickTapCount(0);
    }
    
    setTimeout(() => setQuickTapCount(0), 2000);
  };

  const triggerEmergencyAlert = () => {
    alert("🚨 EMERGENCY ALERT SENT! GPS location, Digital ID, and battery level transmitted to authorities.");
    setPanicPressed(false);
    setQuickTapCount(0);
  };

  const triggerSilentAlert = () => {
    alert("🔕 Silent distress alert sent to authorities discretely.");
  };

  useEffect(() => {
    // Simulate connectivity changes
    const interval = setInterval(() => {
      setIsOnline(Math.random() > 0.1);
      setBattery(prev => Math.max(0, prev - Math.random() * 2));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-md mx-auto bg-gradient-ocean min-h-screen">
      {/* Status Bar */}
      <div className="flex justify-between items-center p-4 glass-card">
        <div className="flex items-center space-x-2">
          {isOnline ? <Wifi className="w-4 h-4 text-primary" /> : <WifiOff className="w-4 h-4 text-destructive" />}
          <span className="text-sm text-foreground/80">{isOnline ? "Online" : "Offline"}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Battery className="w-4 h-4 text-foreground/80" />
          <span className="text-sm text-foreground/80">{battery}%</span>
        </div>
      </div>

      {/* Safety Score */}
      <Card className="glass-card m-4 ocean-glow">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between">
            <span className="text-foreground">Safety Score</span>
            <Badge 
              variant="secondary" 
              className={`text-lg font-bold ${
                safetyScore >= 80 ? 'bg-primary/20 text-primary' : 
                safetyScore >= 60 ? 'bg-yellow-500/20 text-yellow-400' : 
                'bg-destructive/20 text-destructive'
              }`}
            >
              {safetyScore}/100
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mr-2" />
              Currently in: Marina District, Safe Zone
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Weather: Clear, Well-lit area
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Panic Button */}
      <div className="p-8">
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-2">Emergency Response</h2>
          <p className="text-sm text-muted-foreground">
            Hold for 3s: Emergency Alert • Tap 5x: Silent Alert
          </p>
        </div>
        
        <div className="relative flex justify-center">
          <Button
            className={`w-32 h-32 rounded-full text-white font-bold text-xl transition-all duration-300 ${
              panicPressed 
                ? 'bg-destructive pulse-glow-animation scale-110' 
                : 'bg-destructive/80 hover:bg-destructive ocean-glow'
            }`}
            onMouseDown={handlePanicStart}
            onMouseUp={handlePanicEnd}
            onTouchStart={handlePanicStart}
            onTouchEnd={handlePanicEnd}
            onClick={handleQuickTap}
          >
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 mb-1" />
              PANIC
            </div>
          </Button>
          
          {quickTapCount > 0 && (
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold animate-pulse">
              {quickTapCount}
            </div>
          )}
        </div>

        {panicPressed && (
          <div className="mt-4 p-4 glass-card text-center">
            <div className="text-destructive font-semibold animate-pulse">
              Hold to send emergency alert...
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 p-4">
        <Card className="glass-card ocean-glow cursor-pointer hover:scale-105 transition-transform">
          <CardContent className="p-4 text-center">
            <Navigation className="w-8 h-8 mx-auto mb-2 text-primary" />
            <div className="text-sm font-medium text-foreground">Safe Route</div>
          </CardContent>
        </Card>
        
        <Card className="glass-card ocean-glow cursor-pointer hover:scale-105 transition-transform">
          <CardContent className="p-4 text-center">
            <Users className="w-8 h-8 mx-auto mb-2 text-accent" />
            <div className="text-sm font-medium text-foreground">Share Location</div>
          </CardContent>
        </Card>
        
        <Card className="glass-card ocean-glow cursor-pointer hover:scale-105 transition-transform">
          <CardContent className="p-4 text-center">
            <Phone className="w-8 h-8 mx-auto mb-2 text-primary" />
            <div className="text-sm font-medium text-foreground">Emergency Call</div>
          </CardContent>
        </Card>
        
        <Card className="glass-card ocean-glow cursor-pointer hover:scale-105 transition-transform">
          <CardContent className="p-4 text-center">
            <Heart className="w-8 h-8 mx-auto mb-2 text-destructive" />
            <div className="text-sm font-medium text-foreground">Health Info</div>
          </CardContent>
        </Card>
      </div>

      {!isOnline && (
        <div className="m-4 p-4 glass-card border-l-4 border-destructive">
          <div className="flex items-center">
            <WifiOff className="w-5 h-5 text-destructive mr-3" />
            <div>
              <div className="text-sm font-medium text-foreground">Offline Mode Active</div>
              <div className="text-xs text-muted-foreground">Emergency SMS fallback enabled</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};