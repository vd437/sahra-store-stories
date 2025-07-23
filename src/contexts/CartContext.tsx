import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Product {
  id: number;
  name: string;
  nameAr: string;
  price: number;
  images: string[];
  description: string;
  descriptionAr: string;
  category: string;
  categoryAr: string;
  colors: string[];
  sizes: string[];
  stock: number;
  rating: number;
  reviews: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, color: string, size: string, quantity?: number) => void;
  removeFromCart: (productId: number, color: string, size: string) => void;
  updateQuantity: (productId: number, color: string, size: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('story-cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('story-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product, color: string, size: string, quantity = 1) => {
    setCartItems(prev => {
      const existingItem = prev.find(
        item => item.product.id === product.id && 
                 item.selectedColor === color && 
                 item.selectedSize === size
      );

      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id && 
          item.selectedColor === color && 
          item.selectedSize === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { product, quantity, selectedColor: color, selectedSize: size }];
    });
  };

  const removeFromCart = (productId: number, color: string, size: string) => {
    setCartItems(prev => 
      prev.filter(item => 
        !(item.product.id === productId && 
          item.selectedColor === color && 
          item.selectedSize === size)
      )
    );
  };

  const updateQuantity = (productId: number, color: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, color, size);
      return;
    }

    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId && 
        item.selectedColor === color && 
        item.selectedSize === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice,
      getTotalItems
    }}>
      {children}
    </CartContext.Provider>
  );
};