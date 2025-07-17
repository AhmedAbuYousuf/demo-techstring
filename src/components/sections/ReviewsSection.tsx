import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechFlow Inc.",
      content: "SaaS Pro has completely transformed our operations. The analytics insights have helped us increase efficiency by 40% and make better strategic decisions.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      position: "CTO, DataVerse",
      content: "The automation suite is incredible. We've reduced manual processes by 70% and our team can now focus on high-value activities that drive growth.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      position: "Operations Director, CloudScale",
      content: "Outstanding platform with exceptional support. The security features give us peace of mind, and the integration capabilities are seamless.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders are saying about our solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white border-0 shadow-medium hover:shadow-large transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{review.content}"
                  </p>
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{review.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.position}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-soft">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
              ))}
            </div>
            <span className="text-foreground font-medium">4.9/5 from 2,500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;