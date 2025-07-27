import { Truck, Shield, Clock, Headphones, RefreshCw, CreditCard, Globe, Package, Star, CheckCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Services = () => {
  const mainServices = [
    {
      icon: Truck,
      title: 'Global Shipping',
      description: 'Fast and reliable delivery to over 50 countries worldwide',
      features: [
        'Free shipping on orders over $50',
        'Express delivery in 24-48 hours',
        'Real-time tracking',
        'Insured shipments',
      ],
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: 'Multiple secure payment options with industry-leading protection',
      features: [
        'SSL encrypted transactions',
        'PCI DSS compliant',
        'Fraud protection',
        'Secure wallet integration',
      ],
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
    },
    {
      icon: Headphones,
      title: '24/7 Customer Support',
      description: 'Round-the-clock assistance from our dedicated support team',
      features: [
        'Live chat support',
        'Phone support',
        'Email assistance',
        'Multilingual support',
      ],
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    },
    {
      icon: RefreshCw,
      title: 'Easy Returns',
      description: 'Hassle-free returns and exchanges with no questions asked',
      features: [
        '30-day return window',
        'Free return shipping',
        'Quick refund processing',
        'Exchange options',
      ],
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30',
    },
  ];

  const additionalServices = [
    {
      icon: Package,
      title: 'Gift Wrapping',
      description: 'Professional gift wrapping service for special occasions',
    },
    {
      icon: Star,
      title: 'Premium Membership',
      description: 'Exclusive benefits and early access to new products',
    },
    {
      icon: Globe,
      title: 'International Support',
      description: 'Local language support and regional customer service',
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: 'Money-back guarantee on all products if not satisfied',
    },
  ];

  const shippingOptions = [
    {
      name: 'Standard Shipping',
      time: '5-7 business days',
      price: 'Free on orders $50+',
      description: 'Reliable delivery for everyday orders',
    },
    {
      name: 'Express Shipping',
      time: '2-3 business days',
      price: '$9.99',
      description: 'Faster delivery for urgent orders',
    },
    {
      name: 'Overnight Shipping',
      time: '1 business day',
      price: '$19.99',
      description: 'Next-day delivery for time-sensitive items',
    },
    {
      name: 'Same-Day Delivery',
      time: 'Within 4 hours',
      price: '$24.99',
      description: 'Available in select metro areas',
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
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Premium Services for Every Customer
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We go beyond just selling products. Experience our comprehensive range of services 
              designed to make your shopping journey seamless and enjoyable.
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {mainServices.map((service, index) => (
                <Card key={index} className="border-border hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${service.bgColor} mb-4`}>
                      <service.icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Shipping Options */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Shipping Options
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the delivery option that best fits your needs and timeline
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {shippingOptions.map((option, index) => (
                <Card key={index} className="text-center border-border hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{option.name}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{option.time}</div>
                    <div className="text-lg text-muted-foreground">{option.price}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{option.description}</p>
                    <Button variant="outline" className="w-full">
                      Select Option
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Additional Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Extra services to enhance your shopping experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Guarantee */}
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Service Guarantee
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              We're committed to providing exceptional service. If you're not completely satisfied, 
              we'll make it right - that's our promise to you.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-white/80">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-white/80">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">30 Days</div>
                <div className="text-white/80">Return Policy</div>
              </div>
            </div>

            <div className="mt-12">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Contact Support Team
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;