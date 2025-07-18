import { useState } from "react";
import { Search, Calendar, User, Clock, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "10 SaaS Trends That Will Shape 2024",
      excerpt: "Discover the emerging trends in the SaaS industry that will impact businesses worldwide this year. From AI integration to enhanced security measures.",
      author: "Sarah Johnson",
      date: "Dec 15, 2023",
      readTime: "5 min read",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=350&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "The Ultimate Guide to SaaS Customer Retention",
      excerpt: "Learn proven strategies to reduce churn and increase customer lifetime value in your SaaS business. Practical tips and real-world examples included.",
      author: "Michael Chen",
      date: "Dec 12, 2023",
      readTime: "8 min read",
      category: "Growth",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=350&fit=crop",
      featured: true
    },
    {
      id: 3,
      title: "Building Scalable SaaS Architecture",
      excerpt: "Essential principles and best practices for designing SaaS applications that scale with your business growth and user demands.",
      author: "Alex Rodriguez",
      date: "Dec 10, 2023",
      readTime: "6 min read",
      category: "Technical",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=350&fit=crop",
      featured: true
    },
    {
      id: 4,
      title: "SaaS Security Best Practices for 2024",
      excerpt: "Comprehensive guide to securing your SaaS application against modern threats and ensuring data protection compliance.",
      author: "Emily Davis",
      date: "Dec 8, 2023",
      readTime: "7 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=350&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Maximizing ROI with SaaS Analytics",
      excerpt: "How to leverage data analytics to optimize your SaaS business performance and make data-driven decisions.",
      author: "David Kim",
      date: "Dec 5, 2023",
      readTime: "6 min read",
      category: "Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=350&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "The Future of Cloud Computing in SaaS",
      excerpt: "Exploring upcoming cloud technologies and their impact on SaaS development and deployment strategies.",
      author: "Lisa Wang",
      date: "Dec 3, 2023",
      readTime: "5 min read",
      category: "Cloud",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=350&fit=crop",
      featured: false
    }
  ];

  const categories = ["All", "Trends", "Growth", "Technical", "Security", "Analytics", "Cloud"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">
              SaaS Insights & Articles
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Stay ahead of the curve with expert insights, industry trends, and practical guides for SaaS professionals
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white/50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-gradient-primary" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <div className="relative overflow-hidden rounded-t-lg">
                    {post.featured && (
                      <Badge className="absolute top-3 left-3 z-10 bg-gradient-primary">
                        Featured
                      </Badge>
                    )}
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                      Read Article
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;