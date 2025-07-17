import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookDemoModal from "@/components/BookDemoModal";
import heroImage from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-6 py-24 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Hero Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-foreground">Trusted by 10,000+ businesses worldwide</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Transform Your</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Business Today
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Unlock the power of innovation with our comprehensive SaaS solutions. 
              Streamline operations, boost productivity, and accelerate growth with cutting-edge technology.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 shadow-large"
                onClick={() => setIsModalOpen(true)}
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Hero Image/Dashboard Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-large p-4 border border-gray-200 backdrop-blur-sm">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img 
                    src={heroImage} 
                    alt="SaaS Pro Dashboard" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HeroSection;