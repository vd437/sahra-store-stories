import { Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingBag, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import storyLogo from '@/assets/story-logo.jpg';

const Index = () => {
  const { addToCart } = useCart();
  
  const featuredProducts = products.slice(0, 3);

  const handleQuickAdd = (product: any) => {
    addToCart(product, product.colors[0], product.sizes[0]);
    toast.success(`تم إضافة ${product.nameAr} إلى السلة`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="container py-24 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <img 
                src={storyLogo} 
                alt="Story Logo" 
                className="h-20 w-20 rounded-xl shadow-elegant animate-story-pulse" 
              />
            </div>
            
            <h1 className="text-6xl font-bold mb-6 animate-fade-up">
              مرحباً بكم في 
              <span className="gradient-primary bg-clip-text text-transparent"> Story</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-up leading-relaxed" style={{animationDelay: '0.1s'}}>
              اكتشف عالماً من المنتجات المميزة والأنيقة التي تحكي قصتك الفريدة. 
              نحن نؤمن بأن كل منتج له قصة، ونحن هنا لنساعدك في اكتشاف قصتك.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{animationDelay: '0.2s'}}>
              <Link to="/products">
                <Button className="story-button text-lg px-8 py-4">
                  <ShoppingBag className="ml-2 h-5 w-5" />
                  تصفح المنتجات
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="text-lg px-8 py-4 story-button-secondary">
                  اعرف المزيد عنا
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">لماذا تختار Story؟</h2>
            <p className="text-muted-foreground text-lg">نحن نقدم تجربة تسوق استثنائية</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="story-card text-center animate-slide-up">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Sparkles className="h-12 w-12 mx-auto text-primary animate-story-bounce" />
                </div>
                <h3 className="text-xl font-semibold mb-4">جودة فائقة</h3>
                <p className="text-muted-foreground">
                  منتجات مختارة بعناية لضمان أعلى مستويات الجودة والرضا
                </p>
              </CardContent>
            </Card>
            
            <Card className="story-card text-center animate-slide-up" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-8">
                <div className="mb-6">
                  <TrendingUp className="h-12 w-12 mx-auto text-primary animate-story-bounce" style={{animationDelay: '0.1s'}} />
                </div>
                <h3 className="text-xl font-semibold mb-4">أحدث الاتجاهات</h3>
                <p className="text-muted-foreground">
                  نواكب أحدث صيحات الموضة والتكنولوجيا لنقدم لك الأفضل
                </p>
              </CardContent>
            </Card>
            
            <Card className="story-card text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-8">
                <div className="mb-6">
                  <Star className="h-12 w-12 mx-auto text-primary animate-story-bounce" style={{animationDelay: '0.2s'}} />
                </div>
                <h3 className="text-xl font-semibold mb-4">خدمة مميزة</h3>
                <p className="text-muted-foreground">
                  فريق دعم متخصص وشحن سريع لضمان تجربة تسوق مثالية
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-lg px-4 py-2">منتجات مميزة</Badge>
            <h2 className="text-4xl font-bold mb-4">اختيارات المحررين</h2>
            <p className="text-muted-foreground text-lg">
              اكتشف أفضل منتجاتنا المختارة خصيصاً لك
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="story-card overflow-hidden group animate-slide-up" 
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.nameAr}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Badge variant="secondary" className="mb-2">{product.categoryAr}</Badge>
                      <h3 className="text-xl font-semibold mb-2">{product.nameAr}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {product.descriptionAr}
                      </p>
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
                        ({product.reviews})
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        ${product.price}
                      </span>
                      <Badge variant="outline">متوفر</Badge>
                    </div>

                    <div className="flex space-x-3 space-x-reverse">
                      <Link to={`/product/${product.id}`} className="flex-1">
                        <Button variant="outline" className="w-full transition-smooth hover:shadow-button">
                          عرض التفاصيل
                        </Button>
                      </Link>
                      <Button
                        onClick={() => handleQuickAdd(product)}
                        className="story-button"
                      >
                        <ShoppingBag className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button className="story-button text-lg px-8 py-4">
                مشاهدة جميع المنتجات
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              ابدأ رحلتك مع Story اليوم
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              انضم إلى آلاف العملاء الراضين واكتشف تجربة تسوق لا تُنسى. 
              كل منتج يحكي قصة، وقصتك تبدأ هنا.
            </p>
            <Link to="/products">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant text-lg px-8 py-4">
                ابدأ التسوق الآن
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;