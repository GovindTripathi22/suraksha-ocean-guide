import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Car,
  Search,
  Filter,
  MoreVertical,
  Shield,
  Activity,
  TrendingUp
} from "lucide-react";

export const AuthorityDashboard = () => {
  const [activeIncidents, setActiveIncidents] = useState([
    {
      id: "INC-001",
      type: "Emergency Alert",
      location: "Marina District, Zone A-7",
      tourist: "Tourist ID: T-4829",
      status: "Dispatched",
      priority: "High",
      timestamp: "2 min ago",
      officer: "Unit-23"
    },
    {
      id: "INC-002", 
      type: "Geo-fence Alert",
      location: "Old Town, Zone C-2",
      tourist: "Tourist ID: T-1573",
      status: "New",
      priority: "Medium",
      timestamp: "8 min ago",
      officer: "Unassigned"
    },
    {
      id: "INC-003",
      type: "Silent Distress",
      location: "Market Square, Zone B-5",
      tourist: "Tourist ID: T-9281",
      status: "Resolved",
      priority: "High",
      timestamp: "1 hr ago",
      officer: "Unit-17"
    }
  ]);

  const stats = {
    activeTourists: 1247,
    activeIncidents: 3,
    resolvedToday: 12,
    averageResponse: "4.2 min",
    patrolUnits: 8,
    safetyScore: 94
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'new': return 'bg-destructive/20 text-destructive';
      case 'dispatched': return 'bg-yellow-500/20 text-yellow-400';
      case 'resolved': return 'bg-primary/20 text-primary';
      default: return 'bg-muted';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'bg-destructive/20 text-destructive';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'low': return 'bg-primary/20 text-primary';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-ocean p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="glass-card p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Authority Command Center</h1>
              <p className="text-muted-foreground">Real-time tourist safety monitoring and incident management</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button variant="outline" size="sm" className="glass-card">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" size="sm" className="glass-card">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          <Card className="glass-card ocean-glow">
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-foreground">{stats.activeTourists}</div>
              <div className="text-xs text-muted-foreground">Active Tourists</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card ocean-glow">
            <CardContent className="p-4 text-center">
              <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-destructive" />
              <div className="text-2xl font-bold text-foreground">{stats.activeIncidents}</div>
              <div className="text-xs text-muted-foreground">Active Incidents</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card ocean-glow">
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-foreground">{stats.resolvedToday}</div>
              <div className="text-xs text-muted-foreground">Resolved Today</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card ocean-glow">
            <CardContent className="p-4 text-center">
              <Clock className="w-8 h-8 mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold text-foreground">{stats.averageResponse}</div>
              <div className="text-xs text-muted-foreground">Avg Response</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card ocean-glow">
            <CardContent className="p-4 text-center">
              <Car className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-foreground">{stats.patrolUnits}</div>
              <div className="text-xs text-muted-foreground">Patrol Units</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card ocean-glow">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-foreground">{stats.safetyScore}%</div>
              <div className="text-xs text-muted-foreground">Safety Score</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="incidents" className="w-full">
          <TabsList className="glass-card mb-6">
            <TabsTrigger value="incidents">Incident Queue</TabsTrigger>
            <TabsTrigger value="map">Live Map</TabsTrigger>
            <TabsTrigger value="patrol">Patrol Units</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="incidents">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Active Incidents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeIncidents.map((incident) => (
                    <div key={incident.id} className="glass-card p-4 hover:scale-[1.02] transition-transform">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge className={getStatusColor(incident.status)}>
                              {incident.status}
                            </Badge>
                            <Badge className={getPriorityColor(incident.priority)}>
                              {incident.priority}
                            </Badge>
                          </div>
                          
                          <h4 className="font-semibold text-foreground mb-1">{incident.type}</h4>
                          <div className="flex items-center text-sm text-muted-foreground mb-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            {incident.location}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Shield className="w-4 h-4 mr-1" />
                            {incident.tourist}
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground mb-2">{incident.timestamp}</div>
                          <div className="text-sm font-medium text-foreground">{incident.officer}</div>
                          <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="map">
            <Card className="glass-card">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-primary animate-float" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map View</h3>
                    <p className="text-muted-foreground">Real-time tourist locations, incidents, and patrol units</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="patrol">
            <Card className="glass-card">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Car className="w-16 h-16 mx-auto mb-4 text-accent animate-float" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Patrol Unit Management</h3>
                    <p className="text-muted-foreground">Deploy, track, and coordinate response units</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="glass-card">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-primary-glow/20 to-destructive/20 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Activity className="w-16 h-16 mx-auto mb-4 text-primary-glow animate-float" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Analytics & Insights</h3>
                    <p className="text-muted-foreground">Safety trends, risk patterns, and performance metrics</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};