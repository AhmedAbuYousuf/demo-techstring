import { useState } from "react";
import { Search, Filter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const products = [
  {
    id: "analytics-pro",
    name: "Analytics Pro",
    category: "Analytics",
    description: "Advanced analytics and reporting dashboard",
    image: "photo-1551288049-bebda4e38f71"
  },
  {
    id: "automation-suite",
    name: "Automation Suite", 
    category: "Automation",
    description: "Complete workflow automation platform",
    image: "photo-1518770660439-4636190af475"
  },
  {
    id: "collaboration-hub",
    name: "Collaboration Hub",
    category: "Collaboration", 
    description: "Team collaboration and project management",
    image: "photo-1556075798-4825dfaaf498"
  },
  {
    id: "data-sync",
    name: "Data Sync",
    category: "Integration",
    description: "Real-time data synchronization across platforms",
    image: "photo-1461749280684-dccba630e2f6"
  },
  {
    id: "security-shield",
    name: "Security Shield",
    category: "Security",
    description: "Enterprise-grade security and compliance",
    image: "photo-1563013544-824ae1b704d3"
  },
  {
    id: "performance-monitor",
    name: "Performance Monitor",
    category: "Monitoring",
    description: "Real-time performance monitoring and alerts",
    image: "photo-1487058792275-0ad4aaf24ca7"
  }
];

const categories = ["All", "Analytics", "Automation", "Collaboration", "Integration", "Security", "Monitoring"];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive suite of SaaS solutions designed to transform your business
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border rounded-md bg-background"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="group cursor-pointer transition-all duration-300 hover:shadow-large hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={`https://images.unsplash.com/${product.image}?w=400&h=250&fit=crop`}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 filter blur-sm"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg mb-1">{product.name}</h3>
                        <span className="text-white/80 text-sm">{product.category}</span>
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground">{product.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;