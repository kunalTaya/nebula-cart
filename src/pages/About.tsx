import { Globe, Users, Award, TrendingUp, Heart, Shield } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const stats = [
    { number: '50K+', label: 'Happy Customers', icon: Users },
    { number: '10K+', label: 'Products', icon: Award },
    { number: '50+', label: 'Countries', icon: Globe },
    { number: '99%', label: 'Satisfaction', icon: TrendingUp },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We prioritize customer satisfaction above everything else, ensuring every interaction exceeds expectations.',
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and transactions are protected with industry-leading security measures and encryption.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'We deliver to over 50 countries worldwide, bringing quality products to your doorstep.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous quality checks to ensure it meets our high standards.',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c2d2?w=300',
      description: 'Leading the company with 15+ years of e-commerce experience.',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
      description: 'Driving innovation and technology excellence across all platforms.',
    },
    {
      name: 'Emily Davis',
      role: 'Head of Customer Experience',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
      description: 'Ensuring every customer has an exceptional shopping experience.',
    },
    {
      name: 'David Wilson',
      role: 'VP of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      description: 'Optimizing our global supply chain and fulfillment operations.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              About EcomStore
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Revolutionizing Online Shopping
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Since 2020, we've been dedicated to providing exceptional products and unmatched customer service. 
              Our mission is to make quality shopping accessible to everyone, anywhere in the world.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We believe that everyone deserves access to high-quality products at fair prices. 
                  Our platform connects customers with trusted sellers worldwide, creating a 
                  seamless shopping experience that puts quality and customer satisfaction first.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through innovation, dedication, and an unwavering commitment to excellence, 
                  we're building the future of e-commerce - one satisfied customer at a time.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300"
                  alt="Our warehouse"
                  className="rounded-lg shadow-medium"
                />
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300"
                  alt="Customer service"
                  className="rounded-lg shadow-medium mt-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do and help us deliver exceptional value to our customers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-border hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The passionate people behind EcomStore who make it all possible
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center border-border hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Global Reach Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Global Reach, Local Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              From our headquarters in Digital City to customers in over 50 countries worldwide, 
              we're proud to serve a global community while maintaining the personal touch of local service.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Worldwide Delivery</h3>
                <p className="text-muted-foreground">Fast, reliable shipping to over 50 countries</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Local Partnerships</h3>
                <p className="text-muted-foreground">Working with local businesses and suppliers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💚</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Sustainable Impact</h3>
                <p className="text-muted-foreground">Committed to environmental responsibility</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;