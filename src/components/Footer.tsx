import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Story</h3>
            <p className="text-muted-foreground text-sm">
              متجر Story - وجهتك المفضلة للمنتجات المميزة والأنيقة. نحن نقدم أفضل المنتجات بجودة عالية وأسعار مناسبة.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">روابط مهمة</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                عن المتجر
              </Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                سياسة الخصوصية
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                شروط الاستخدام
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">تابعنا</h3>
            <div className="flex space-x-4 space-x-reverse">
              <a
                href="https://facebook.com/story"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/story"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/story"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Story. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;