import { CheckCircle, Users, Globe, Zap } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Customers" },
    { icon: Globe, value: "50+", label: "Countries" },
    { icon: Zap, value: "99.9%", label: "Uptime" },
    { icon: CheckCircle, value: "24/7", label: "Support" }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-foreground">About</span>{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  SaaS Pro
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are a leading SaaS company dedicated to revolutionizing how businesses operate 
                in the digital age. Since our founding, we've been committed to delivering 
                innovative solutions that empower organizations to achieve their full potential.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Our comprehensive suite of tools helps businesses streamline operations, 
                enhance collaboration, and make data-driven decisions. With a focus on 
                scalability, security, and user experience, we've become the trusted partner 
                for companies ranging from startups to Fortune 500 enterprises.
              </p>
              
              <div className="space-y-3">
                {[
                  "Enterprise-grade security and compliance",
                  "Scalable solutions that grow with your business",
                  "24/7 dedicated customer support",
                  "Seamless integrations with existing tools"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-soft text-center">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-primary rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-white/90 leading-relaxed">
                To empower businesses worldwide with innovative technology solutions 
                that drive growth, efficiency, and success in the digital era.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;