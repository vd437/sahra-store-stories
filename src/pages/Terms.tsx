import { Card, CardContent } from '@/components/ui/card';

const Terms = () => {
  return (
    <div className="container py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">شروط الاستخدام</h1>
      
      <Card className="story-card">
        <CardContent className="p-8 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">مقدمة</h2>
            <p className="text-muted-foreground leading-relaxed">
              مرحباً بكم في متجر Story. باستخدام موقعنا الإلكتروني وخدماتنا، 
              فإنكم توافقون على الالتزام بشروط الاستخدام هذه. يرجى قراءة هذه الشروط 
              بعناية قبل استخدام موقعنا.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">استخدام الموقع</h2>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>يجب أن تكونوا بعمر 18 سنة على الأقل لاستخدام موقعنا</li>
              <li>تتعهدون بتقديم معلومات صحيحة ودقيقة عند إنشاء حساب</li>
              <li>أنتم مسؤولون عن الحفاظ على سرية معلومات حسابكم</li>
              <li>يُمنع استخدام الموقع لأي أغراض غير قانونية أو ضارة</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">المنتجات والطلبات</h2>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>جميع الأسعار معروضة بالدولار الأمريكي وتشمل الضرائب المطبقة</li>
              <li>نحتفظ بالحق في تغيير الأسعار دون إشعار مسبق</li>
              <li>توفر المنتجات محدود وقابل للتغيير</li>
              <li>نحتفظ بالحق في إلغاء الطلبات لأسباب فنية أو قانونية</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">الدفع والفواتير</h2>
            <p className="text-muted-foreground leading-relaxed">
              نقبل طرق دفع متنوعة بما في ذلك البطاقات الائتمانية والدفع عند الاستلام. 
              جميع المعاملات المالية محمية بتقنيات تشفير متقدمة. يتم تحصيل المبلغ 
              عند تأكيد الطلب ومعالجته.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">الشحن والتسليم</h2>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>نوفر شحن مجاني لجميع الطلبات داخل المملكة</li>
              <li>مدة التسليم من 2-5 أيام عمل حسب الموقع</li>
              <li>العميل مسؤول عن تقديم عنوان صحيح ومفصل</li>
              <li>في حالة عدم وجود العميل، سيتم إعادة المحاولة مرة واحدة</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">الإرجاع والاستبدال</h2>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>يمكن إرجاع المنتجات خلال 14 يوم من تاريخ الاستلام</li>
              <li>يجب أن تكون المنتجات في حالتها الأصلية مع العبوة</li>
              <li>تكاليف الإرجاع يتحملها العميل ما لم يكن هناك عيب في المنتج</li>
              <li>سيتم رد المبلغ خلال 5-7 أيام عمل بعد استلام المنتج المرتجع</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">الملكية الفكرية</h2>
            <p className="text-muted-foreground leading-relaxed">
              جميع المحتويات الموجودة على موقعنا، بما في ذلك النصوص والصور والشعارات 
              والتصاميم، محمية بحقوق الطبع والنشر والعلامات التجارية. يُمنع استخدام 
              أي من هذه المحتويات دون إذن كتابي مسبق منا.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">إخلاء المسؤولية</h2>
            <p className="text-muted-foreground leading-relaxed">
              نحن نسعى لتقديم معلومات دقيقة ومحدثة، لكن لا نضمن خلو الموقع من الأخطاء. 
              نحن غير مسؤولين عن أي أضرار مباشرة أو غير مباشرة قد تنتج عن استخدام موقعنا.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">تعديل الشروط</h2>
            <p className="text-muted-foreground leading-relaxed">
              نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إشعاركم بأي تغييرات 
              مهمة عبر البريد الإلكتروني أو إشعار على الموقع.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">التواصل معنا</h2>
            <p className="text-muted-foreground leading-relaxed">
              لأي استفسارات حول شروط الاستخدام، يرجى التواصل معنا:
            </p>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p>البريد الإلكتروني: support@story.com</p>
              <p>الهاتف: +966 12 345 6789</p>
              <p>العنوان: الرياض، المملكة العربية السعودية</p>
            </div>
          </div>

          <div className="pt-6 border-t">
            <p className="text-sm text-muted-foreground">
              آخر تحديث: 23 يوليو 2025
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Terms;