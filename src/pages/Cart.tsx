import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const handleUpdateQuantity = (item: any, newQuantity: number) => {
    updateQuantity(item.product.id, item.selectedColor, item.selectedSize, newQuantity);
  };

  const handleRemoveItem = (item: any) => {
    removeFromCart(item.product.id, item.selectedColor, item.selectedSize);
    toast.success(`تم حذف ${item.product.nameAr} من السلة`);
  };

  const handleCheckout = () => {
    toast.success('تم تأكيد الطلب! سيتم التواصل معك قريباً.');
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="container py-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
          <h1 className="text-2xl font-bold mb-4">السلة فارغة</h1>
          <p className="text-muted-foreground mb-8">
            لم تقم بإضافة أي منتجات إلى السلة بعد
          </p>
          <Link to="/products">
            <Button className="story-button">تصفح المنتجات</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">سلة التسوق</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item, index) => (
            <Card key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`} className="story-card">
              <CardContent className="p-6">
                <div className="flex space-x-4 space-x-reverse">
                  <div className="w-24 h-24 rounded-lg overflow-hidden">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.nameAr}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg">{item.product.nameAr}</h3>
                      <p className="text-muted-foreground text-sm">
                        {item.product.categoryAr}
                      </p>
                    </div>

                    <div className="flex space-x-4 space-x-reverse text-sm">
                      <span>اللون: {item.selectedColor}</span>
                      <span>المقاس: {item.selectedSize}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleUpdateQuantity(item, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleUpdateQuantity(item, item.quantity + 1)}
                          disabled={item.quantity >= item.product.stock}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex items-center space-x-4 space-x-reverse">
                        <span className="font-semibold text-lg">
                          ${item.product.price * item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveItem(item)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="story-card sticky top-24">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6">ملخص الطلب</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>المجموع الفرعي:</span>
                  <span>${getTotalPrice()}</span>
                </div>
                <div className="flex justify-between">
                  <span>الشحن:</span>
                  <span className="text-green-600">مجاني</span>
                </div>
                <hr className="border-border" />
                <div className="flex justify-between text-lg font-semibold">
                  <span>المجموع الكلي:</span>
                  <span className="text-primary">${getTotalPrice()}</span>
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                className="story-button w-full mb-4"
              >
                تأكيد الطلب
              </Button>

              <Button
                variant="outline"
                onClick={clearCart}
                className="w-full"
              >
                إفراغ السلة
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;