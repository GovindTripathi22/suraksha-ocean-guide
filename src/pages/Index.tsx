import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, MapPin, Smartphone, Globe, Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-ocean.jpg";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "AI-Powered Safety",
      description: "Dynamic risk assessment with real-time threat detection and multilingual support",
    },
    {
      icon: MapPin,
      title: "Smart Geo-Fencing",
      description: "Intelligent zone monitoring with automated alerts and safe-reach destinations",
    },
    {
      icon: Smartphone,
      title: "Panic Button System",
      description: "One-touch emergency response with GPS tracking and blockchain-secured identity",
    },
    {
      icon: Users,
      title: "Authority Dashboard",
      description: "Real-time incident management with patrol coordination and response tracking",
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Voice commands and translations in 15+ languages with local emergency integration",
    },
    {
      icon: Zap,
      title: "Offline-First Design",
      description: "SMS fallback and local storage ensure safety features work without internet",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-transparent" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="float-animation">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary-glow via-accent to-primary bg-clip-text text-transparent">
              SurakshaNet
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Next-generation tourist safety ecosystem powered by AI, blockchain, and real-time protection
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="ocean-glow px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary-glow text-foreground transition-all duration-300"
              onClick={() => navigate("/tourist")}
            >
              Try Tourist App
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card px-8 py-4 text-lg font-semibold border-primary/30 hover:border-primary text-foreground transition-all duration-300"
              onClick={() => navigate("/authority")}
            >
              Authority Dashboard
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 blur-xl animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-accent/20 blur-xl animate-float" style={{animationDelay: "1s"}} />
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Revolutionary Safety Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card ocean-glow group">
                <CardContent className="p-8 text-center">
                  <feature.icon className="w-16 h-16 mx-auto mb-6 text-primary group-hover:text-accent transition-colors duration-300" />
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
            Trusted by Millions Worldwide
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8">
              <div className="text-4xl font-bold text-primary mb-2">2M+</div>
              <div className="text-muted-foreground">Active Tourists</div>
            </div>
            <div className="glass-card p-8">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Partner Cities</div>
            </div>
            <div className="glass-card p-8">
              <div className="text-4xl font-bold text-primary-glow mb-2">99.9%</div>
              <div className="text-muted-foreground">Response Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 SurakshaNet. Securing tourism with advanced technology and AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;