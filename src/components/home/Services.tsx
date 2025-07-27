import { Truck, Shield, Clock, Headphones, RefreshCw, CreditCard } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free shipping on orders over $50 worldwide',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: '100% secure payment with SSL encryption',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Express delivery within 24-48 hours',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated customer support anytime',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30',
    },
    {
      icon: RefreshCw,
      title: 'Easy Returns',
      description: '30-day hassle-free return policy',
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-950/30',
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment',
      description: 'Multiple payment options available',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/30',
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide exceptional service and support to ensure your shopping experience is seamless
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-xl border border-border bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${service.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`h-8 w-8 ${service.color}`} />
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
  );
};

export default Services;