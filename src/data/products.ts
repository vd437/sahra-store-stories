import { Product } from '@/contexts/CartContext';
import headphones1 from '@/assets/headphones-1.jpg';
import smartwatch1 from '@/assets/smartwatch-1.jpg';
import backpack1 from '@/assets/backpack-1.jpg';

export const products: Product[] = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    nameAr: 'سماعات لاسلكية فاخرة',
    price: 299,
    images: [headphones1],
    description: 'Experience crystal-clear audio with our premium wireless headphones featuring noise cancellation and 30-hour battery life.',
    descriptionAr: 'استمتع بصوت واضح كالكريستال مع سماعاتنا اللاسلكية الفاخرة المزودة بتقنية إلغاء الضوضاء وبطارية تدوم 30 ساعة.',
    category: 'Electronics',
    categoryAr: 'إلكترونيات',
    colors: ['أسود', 'أبيض', 'فضي'],
    sizes: ['واحد'],
    stock: 25,
    rating: 4.8,
    reviews: 142
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    nameAr: 'ساعة ذكية للياقة البدنية',
    price: 199,
    images: [smartwatch1],
    description: 'Track your fitness goals with our advanced smartwatch featuring heart rate monitoring, GPS, and water resistance.',
    descriptionAr: 'تتبع أهداف لياقتك البدنية مع ساعتنا الذكية المتقدمة المزودة بمراقب معدل ضربات القلب و GPS ومقاومة للماء.',
    category: 'Wearables',
    categoryAr: 'أجهزة قابلة للارتداء',
    colors: ['أسود', 'أزرق', 'وردي'],
    sizes: ['42مم', '44مم'],
    stock: 18,
    rating: 4.6,
    reviews: 89
  },
  {
    id: 3,
    name: 'Luxury Leather Backpack',
    nameAr: 'حقيبة ظهر جلدية فاخرة',
    price: 149,
    images: [backpack1],
    description: 'Stylish and functional leather backpack perfect for work or travel, with multiple compartments and premium materials.',
    descriptionAr: 'حقيبة ظهر جلدية أنيقة وعملية مثالية للعمل أو السفر، مع جيوب متعددة ومواد فاخرة.',
    category: 'Fashion',
    categoryAr: 'أزياء',
    colors: ['بني', 'أسود', 'كستنائي'],
    sizes: ['متوسط', 'كبير'],
    stock: 12,
    rating: 4.7,
    reviews: 67
  }
];