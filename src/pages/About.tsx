import { Award, Users, Heart, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'جودة عالية',
      description: 'نحن ملتزمون بتقديم منتجات عالية الجودة تلبي توقعاتكم وتتجاوزها'
    },
    {
      icon: Users,
      title: 'خدمة عملاء مميزة',
      description: 'فريق خدمة العملاء لدينا متاح دائماً لمساعدتكم والإجابة على استفساراتكم'
    },
    {
      icon: Heart,
      title: 'رضا العملاء',
      description: 'رضاكم هو أولويتنا، ونسعى جاهدين لتقديم تجربة تسوق استثنائية'
    },
    {
      icon: Truck,
      title: 'شحن سريع',
      description: 'نوفر خدمة شحن سريعة وآمنة لضمان وصول منتجاتكم في الوقت المحدد'
    }
  ];

  return (
    <div className="container py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 animate-fade-up">عن متجر Story</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{animationDelay: '0.1s'}}>
          مرحباً بكم في متجر Story، وجهتكم المفضلة للمنتجات المميزة والأنيقة. 
          نحن نؤمن بأن كل منتج له قصة، ونحن هنا لنساعدكم في اكتشاف قصتكم المميزة.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-16">
        <Card className="story-card">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">رسالتنا</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              نسعى لتوفير تجربة تسوق استثنائية من خلال تقديم منتجات عالية الجودة بأسعار مناسبة، 
              مع الحرص على تقديم خدمة عملاء مميزة تجعل كل عميل يشعر بالتقدير والاهتمام.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Features */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">لماذا تختار Story؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="story-card text-center animate-slide-up" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <feature.icon className="h-12 w-12 mx-auto text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">قيمنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">الأصالة</h3>
            <p className="text-muted-foreground">
              نحن ملتزمون بتقديم منتجات أصلية وأصيلة تعكس جودتنا ومعاييرنا العالية
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">الابتكار</h3>
            <p className="text-muted-foreground">
              نسعى دائماً لتطوير وتحسين خدماتنا ومنتجاتنا لنواكب أحدث التطورات
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">الشفافية</h3>
            <p className="text-muted-foreground">
              نؤمن بالشفافية في التعامل مع عملائنا ونحرص على بناء علاقات مبنية على الثقة
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;