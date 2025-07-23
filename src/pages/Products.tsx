import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Products = () => {
  const { addToCart } = useCart();

  const handleQuickAdd = (product: any) => {
    addToCart(product, product.colors[0], product.sizes[0]);
    toast.success(`تم إضافة ${product.nameAr} إلى السلة`);
  };

  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 animate-fade-up">منتجاتنا المميزة</h1>
        <p className="text-muted-foreground text-lg animate-fade-up" style={{animationDelay: '0.1s'}}>
          اكتشف مجموعتنا الرائعة من المنتجات عالية الجودة
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Card 
            key={product.id} 
            className="story-card overflow-hidden animate-slide-up" 
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.nameAr}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{product.nameAr}</h3>
                  <p className="text-muted-foreground text-sm">{product.categoryAr}</p>
                </div>

                <div className="flex items-center space-x-2 space-x-reverse">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} تقييم)
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    متوفر: {product.stock}
                  </span>
                </div>

                <div className="flex gap-3">
                  <Link to={`/product/${product.id}`} className="flex-1">
                    <Button variant="outline" className="w-full">
                      عرض التفاصيل
                    </Button>
                  </Link>
                  <Button
                    onClick={() => handleQuickAdd(product)}
                    className="story-button flex items-center gap-2"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>أضف للسلة</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;