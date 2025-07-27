import { useState, useEffect } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/products/ProductCard';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  // Demo products data
  const demoProducts = [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      price: 199.99,
      originalPrice: 249.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      rating: 4.8,
      reviews: 1247,
      category: 'Electronics',
      isNew: true,
      isSale: true,
      discount: 20,
    },
    {
      id: '2',
      name: 'Smart Fitness Watch',
      price: 299.99,
      originalPrice: 399.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      rating: 4.7,
      reviews: 892,
      category: 'Wearables',
      isSale: true,
      discount: 25,
    },
    {
      id: '3',
      name: 'Professional Camera Lens',
      price: 599.99,
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400',
      rating: 4.9,
      reviews: 456,
      category: 'Photography',
      isNew: true,
    },
    {
      id: '4',
      name: 'Ergonomic Office Chair',
      price: 449.99,
      originalPrice: 549.99,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
      rating: 4.6,
      reviews: 324,
      category: 'Furniture',
      isSale: true,
      discount: 18,
    },
    {
      id: '5',
      name: 'Mechanical Gaming Keyboard',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400',
      rating: 4.8,
      reviews: 678,
      category: 'Gaming',
      isNew: true,
    },
    {
      id: '6',
      name: 'Portable Bluetooth Speaker',
      price: 89.99,
      originalPrice: 119.99,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
      rating: 4.5,
      reviews: 234,
      category: 'Audio',
      isSale: true,
      discount: 25,
    },
    {
      id: '7',
      name: 'Designer Laptop Backpack',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
      rating: 4.7,
      reviews: 445,
      category: 'Accessories',
    },
    {
      id: '8',
      name: 'Smart Home Security Camera',
      price: 159.99,
      originalPrice: 199.99,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
      rating: 4.6,
      reviews: 567,
      category: 'Smart Home',
      isSale: true,
      discount: 20,
    },
  ];

  useEffect(() => {
    setProducts(demoProducts);
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            <Zap className="h-4 w-4 mr-1" />
            Featured Products
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trending Now
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular products loved by thousands of customers worldwide
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/products">
            <Button size="lg" className="btn-hero group">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;