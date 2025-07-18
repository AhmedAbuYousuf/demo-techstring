import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ClientsSlider from "@/components/sections/ClientsSlider";
import ProductsSection from "@/components/sections/ProductsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FeaturedBlogsSection from "@/components/sections/FeaturedBlogsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <ClientsSlider />
        
        <section id="products">
          <ProductsSection />
        </section>
        
        <ReviewsSection />
        
        <FeaturedBlogsSection />
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
