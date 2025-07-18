import { ExternalLink, Calendar, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeaturedBlogsSection = () => {
  const featuredBlogs = [
    {
      id: 1,
      title: "10 SaaS Trends That Will Shape 2024",
      excerpt: "Discover the emerging trends in the SaaS industry that will impact businesses worldwide this year.",
      author: "Sarah Johnson",
      date: "Dec 15, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "The Ultimate Guide to SaaS Customer Retention",
      excerpt: "Learn proven strategies to reduce churn and increase customer lifetime value in your SaaS business.",
      author: "Michael Chen",
      date: "Dec 12, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Building Scalable SaaS Architecture",
      excerpt: "Essential principles and best practices for designing SaaS applications that scale with your business.",
      author: "Alex Rodriguez",
      date: "Dec 10, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Blog Posts</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay informed with the latest insights, trends, and best practices in the SaaS industry
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredBlogs.map((blog) => (
            <Card key={blog.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{blog.date}</span>
                  </div>
                  <span>{blog.readTime}</span>
                </div>
                
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Read More
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            View All Blog Posts
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogsSection;