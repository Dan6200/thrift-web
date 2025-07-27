import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, BarChart3, TrendingUp } from "lucide-react";
import Link from "next/link";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Store className="h-12 w-12 text-primary mr-3" />
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-hero-secondary bg-clip-text text-transparent">
              E-Commerce Analytics
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Comprehensive dashboard for multitenant e-commerce platforms. 
            Monitor sales, analyze customer behavior, and optimize your business performance.
          </p>
          <Link href="/vendor-analytics/dashboard">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View Dashboard
              <BarChart3 className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 text-primary mr-2" />
                Real-time Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Monitor your revenue, orders, and customer metrics in real-time with interactive charts and visualizations.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 text-hero-secondary mr-2" />
                Sales Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Deep dive into sales performance by product, category, and channel to identify growth opportunities.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Store className="h-5 w-5 text-hero-primary mr-2" />
                Multi-tenant Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Designed for multitenant platforms with store-specific analytics and customizable filtering options.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
