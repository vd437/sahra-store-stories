import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Heart, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === parseInt(id || '0'));
  
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="container py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">المنتج غير موجود</h1>
        <Button onClick={() => navigate('/products')}>العودة للمنتجات</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize, quantity);
    toast.success(`تم إضافة ${quantity} من ${product.nameAr} إلى السلة`);
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(prev => prev + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="container py-8">
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center space-x-2 space-x-reverse"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>العودة</span>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-xl shadow-elegant">
            <img
              src={product.images[currentImageIndex]}
              alt={product.nameAr}
              className="w-full h-full object-cover"
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="flex space-x-3 space-x-reverse">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex
                      ? 'border-primary shadow-button'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.nameAr} - صورة ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge className="mb-3">{product.categoryAr}</Badge>
            <h1 className="text-3xl font-bold mb-4">{product.nameAr}</h1>
            
            <div className="flex items-center space-x-4 space-x-reverse mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">
                ({product.reviews} تقييم)
              </span>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {product.descriptionAr}
            </p>
          </div>

          <div className="text-3xl font-bold text-primary">
            ${product.price}
          </div>

          {/* Color Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium">اللون:</label>
            <div className="flex space-x-3 space-x-reverse">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    selectedColor === color
                      ? 'border-primary bg-primary text-primary-foreground shadow-button'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium">المقاس:</label>
            <div className="flex space-x-3 space-x-reverse">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    selectedSize === size
                      ? 'border-primary bg-primary text-primary-foreground shadow-button'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="space-y-3">
            <label className="text-sm font-medium">الكمية:</label>
            <div className="flex items-center space-x-3 space-x-reverse">
              <Button
                variant="outline"
                size="icon"
                onClick={decrementQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-16 text-center font-medium">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={incrementQuantity}
                disabled={quantity >= product.stock}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              متوفر: {product.stock} قطعة
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 space-x-reverse">
            <Button
              onClick={handleAddToCart}
              className="story-button flex-1 flex items-center justify-center space-x-2 space-x-reverse"
              disabled={product.stock === 0}
            >
              <ShoppingCart className="h-5 w-5" />
              <span>أضف إلى السلة</span>
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          {product.stock <= 5 && product.stock > 0 && (
            <div className="p-4 bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-lg">
              <p className="text-orange-800 dark:text-orange-200 text-sm">
                ⚠️ بقي {product.stock} قطع فقط!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;