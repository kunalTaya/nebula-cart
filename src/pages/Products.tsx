import { useState, useEffect } from 'react';
import { Search, Filter, SlidersHorizontal, Grid3x3, List } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');

  // Extended demo products
  const allProducts = [
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
      category: 'Electronics',
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
      category: 'Electronics',
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
      category: 'Electronics',
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
      category: 'Fashion',
    },
    {
      id: '8',
      name: 'Smart Home Security Camera',
      price: 159.99,
      originalPrice: 199.99,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
      rating: 4.6,
      reviews: 567,
      category: 'Electronics',
      isSale: true,
      discount: 20,
    },
    {
      id: '9',
      name: 'Organic Cotton T-Shirt',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      rating: 4.4,
      reviews: 189,
      category: 'Fashion',
      isNew: true,
    },
    {
      id: '10',
      name: 'Stainless Steel Water Bottle',
      price: 24.99,
      originalPrice: 34.99,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400',
      rating: 4.8,
      reviews: 312,
      category: 'Sports',
      isSale: true,
      discount: 28,
    },
    {
      id: '11',
      name: 'Modern Table Lamp',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      rating: 4.5,
      reviews: 156,
      category: 'Home',
    },
    {
      id: '12',
      name: 'Wireless Phone Charger',
      price: 39.99,
      originalPrice: 59.99,
      image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400',
      rating: 4.6,
      reviews: 278,
      category: 'Electronics',
      isSale: true,
      discount: 33,
    },
  ];

  const categories = [
    'all',
    'Electronics',
    'Fashion',
    'Home',
    'Sports',
    'Photography',
    'Furniture',
  ];

  const sortOptions = [
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' },
  ];

  useEffect(() => {
    setProducts(allProducts);
    setFilteredProducts(allProducts);
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered = [...filtered].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(filtered);
  }, [products, searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background grid-background-subtle">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Products
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover our complete collection of premium products
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between">
          {/* Search Bar */}
          <div className="relative lg:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort Filter */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* View Mode Toggle */}
            <div className="flex border border-border rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="px-3"
              >
                <Grid3x3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="px-3"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Active Filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          {searchQuery && (
            <Badge variant="secondary" className="px-3 py-1">
              Search: "{searchQuery}"
              <button
                onClick={() => setSearchQuery('')}
                className="ml-2 text-xs"
              >
                ×
              </button>
            </Badge>
          )}
          {selectedCategory !== 'all' && (
            <Badge variant="secondary" className="px-3 py-1">
              Category: {selectedCategory}
              <button
                onClick={() => setSelectedCategory('all')}
                className="ml-2 text-xs"
              >
                ×
              </button>
            </Badge>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6 text-muted-foreground">
          Showing {filteredProducts.length} of {products.length} products
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 mb-12 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              No products found matching your criteria.
            </div>
            <Button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Products;