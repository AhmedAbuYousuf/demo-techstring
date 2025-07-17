import { ArrowRight, BarChart3, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProductsSection = () => {
  const products = [
    {
      icon: BarChart3,
      name: "Analytics Pro",
      description: "Advanced analytics and reporting dashboard with real-time insights and predictive modeling.",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reports"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Zap,
      name: "Automation Suite",
      description: "Complete workflow automation platform that streamlines your business processes.",
      features: ["Workflow builder", "Smart triggers", "Integration hub"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      name: "Security Shield",
      description: "Enterprise-grade security and compliance solution for data protection.",
      features: ["Advanced encryption", "Compliance tools", "Threat detection"],
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive suite of SaaS solutions designed to transform 
            your business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="group cursor-pointer transition-all duration-300 hover:shadow-large hover:-translate-y-2">
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">{product.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center text-primary font-medium group-hover:gap-3 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button size="lg" variant="outline" className="border-2 hover:bg-primary hover:text-primary-foreground">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;