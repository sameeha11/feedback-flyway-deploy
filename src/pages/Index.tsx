import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FeedbackForm } from "@/components/FeedbackForm";
import { MessageSquare, BarChart3, Zap, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Customer Feedback Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Collect, manage, and act on customer feedback to build better products and experiences.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" variant="outline">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <MessageSquare className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Easy Submission</CardTitle>
                <CardDescription>
                  Simple and intuitive feedback form for your customers
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <Zap className="h-10 w-10 mb-2 text-accent" />
                <CardTitle>Real-time Updates</CardTitle>
                <CardDescription>
                  Track feedback status and manage responses instantly
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <Shield className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Secure & Reliable</CardTitle>
                <CardDescription>
                  Your data is protected with enterprise-grade security
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Feedback Form Section */}
          <Card className="max-w-2xl mx-auto shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl">Share Your Feedback</CardTitle>
              <CardDescription>
                We value your input. Help us improve by sharing your thoughts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FeedbackForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
