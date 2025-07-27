import { ArrowRight, ShoppingBag, Truck, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-ecommerce.jpg';

const Hero = () => {
  const features = [
    { icon: Truck, text: 'Free Shipping' },
    { icon: Shield, text: 'Secure Payment' },
    { icon: Star, text: '5-Star Service' },
  ];

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="E-commerce Hero"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 animate-bounce-gentle">
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <ShoppingBag className="h-8 w-8 text-white" />
        </div>
      </div>

      <div className="absolute bottom-32 right-20 animate-bounce-gentle delay-1000">
        <div className="w-12 h-12 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center">
          <Star className="h-6 w-6 text-accent-light" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
              ✨ New Collection Available
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Discover the
              <span className="block bg-gradient-to-r from-accent-light to-white bg-clip-text text-transparent">
                Future of Shopping
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0">
              Experience premium quality products with lightning-fast delivery. 
              Your satisfaction is our commitment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to="/products">
                <Button className="btn-hero text-lg px-8 py-4 group">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm"
              >
                Watch Demo
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-white/80">
                  <feature.icon className="h-5 w-5 text-accent-light" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/70 text-sm">Happy Customers</div>
            </div>
            
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-white/70 text-sm">Products</div>
            </div>
            
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">99%</div>
              <div className="text-white/70 text-sm">Satisfaction</div>
            </div>
            
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/70 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;