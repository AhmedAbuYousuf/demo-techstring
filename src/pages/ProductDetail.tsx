import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Users, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const productDetails = {
  "analytics-pro": {
    name: "Analytics Pro",
    category: "Analytics",
    description: "Advanced analytics and reporting dashboard that provides deep insights into your business data.",
    longDescription: "Analytics Pro is a comprehensive business intelligence platform that transforms raw data into actionable insights. With advanced visualization capabilities, real-time reporting, and predictive analytics, it empowers organizations to make data-driven decisions with confidence.",
    features: [
      "Real-time dashboard with customizable widgets",
      "Advanced data visualization and charting",
      "Predictive analytics and forecasting",
      "Automated report generation",
      "Integration with 100+ data sources",
      "White-label customization options"
    ],
    pricing: "$99/month",
    rating: 4.8,
    users: "10,000+",
    image: "photo-1551288049-bebda4e38f71"
  },
  // Add more product details here...
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? productDetails[id as keyof typeof productDetails] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
            <Link to="/products">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={`https://images.unsplash.com/${product.image}?w=600&h=400&fit=crop`}
                  alt={product.name}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-2">{product.category}</Badge>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-xl text-muted-foreground mb-6">{product.description}</p>
                
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <span className="font-semibold">{product.rating}</span>
                    <span className="text-muted-foreground">rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <span>{product.users} users</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl font-bold text-primary">{product.pricing}</span>
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                    Book a Demo
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6">About {product.name}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.longDescription}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;