import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  discount?: number;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  category,
  isNew,
  isSale,
  discount,
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsLoading(false);
    // Add toast notification here
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="product-card group cursor-pointer">
      {/* Image Section */}
      <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <Badge className="bg-success text-white text-xs">New</Badge>
          )}
          {isSale && discount && (
            <Badge className="bg-destructive text-white text-xs">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="sm"
            variant="secondary"
            className="h-8 w-8 p-0 rounded-full shadow-medium"
            onClick={handleWishlist}
          >
            <Heart 
              className={`h-4 w-4 ${
                isWishlisted ? 'text-red-500 fill-current' : ''
              }`} 
            />
          </Button>
          
          <Button
            size="sm"
            variant="secondary"
            className="h-8 w-8 p-0 rounded-full shadow-medium"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* Quick Add to Cart - Shows on Hover */}
        <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            className="w-full btn-hero text-sm py-2"
            onClick={handleAddToCart}
            disabled={isLoading}
          >
            {isLoading ? (
              'Adding...'
            ) : (
              <>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        {/* Category */}
        <p className="text-xs text-muted-foreground uppercase tracking-wide">
          {category}
        </p>

        {/* Product Name */}
        <h3 className="font-semibold text-foreground line-clamp-2 min-h-[3rem]">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {renderStars(rating)}
          </div>
          <span className="text-sm text-muted-foreground">
            ({reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;