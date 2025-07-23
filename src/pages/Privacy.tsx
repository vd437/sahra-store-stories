import { Card, CardContent } from '@/components/ui/card';

const Privacy = () => {
  return (
    <div className="container py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">سياسة الخصوصية</h1>
      
      <Card className="story-card">
        <CardContent className="p-8 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">مقدمة</h2>
            <p className="text-muted-foreground leading-relaxed">
              نحن في متجر Story نقدر خصوصيتكم ونلتزم بحماية معلوماتكم الشخصية. 
              توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحماية معلوماتكم الشخصية 
              عند استخدام موقعنا الإلكتروني وخدماتنا.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">المعلومات التي نجمعها</h2>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>معلومات الاتصال (الاسم، البريد الإلكتروني، رقم الهاتف)</li>
              <li>معلومات الفواتير والشحن</li>
              <li>تفضيلات التسوق وسجل الطلبات</li>
              <li>معلومات تقنية عن جهازكم ومتصفحكم</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">كيف نستخدم معلوماتكم</h2>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>معالجة طلباتكم وتقديم خدمة العملاء</li>
              <li>إرسال تحديثات حول طلباتكم</li>
              <li>تحسين موقعنا وخدماتنا</li>
              <li>إرسال عروض وتحديثات تسويقية (بموافقتكم)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">حماية المعلومات</h2>
            <p className="text-muted-foreground leading-relaxed">
              نستخدم تقنيات أمان متقدمة لحماية معلوماتكم الشخصية، بما في ذلك التشفير 
              وأنظمة الحماية الآمنة. نحن لا نشارك معلوماتكم الشخصية مع أطراف ثالثة 
              دون موافقتكم الصريحة.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">ملفات تعريف الارتباط</h2>
            <p className="text-muted-foreground leading-relaxed">
              نستخدم ملفات تعريف الارتباط لتحسين تجربتكم على موقعنا وتذكر تفضيلاتكم. 
              يمكنكم التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحكم.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">حقوقكم</h2>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>الحق في الوصول إلى معلوماتكم الشخصية</li>
              <li>الحق في تصحيح أو تحديث معلوماتكم</li>
              <li>الحق في حذف معلوماتكم الشخصية</li>
              <li>الحق في إلغاء الاشتراك في النشرات الإخبارية</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">التواصل معنا</h2>
            <p className="text-muted-foreground leading-relaxed">
              إذا كان لديكم أي أسئلة حول سياسة الخصوصية هذه أو حول كيفية تعاملنا 
              مع معلوماتكم الشخصية، يرجى التواصل معنا على:
            </p>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p>البريد الإلكتروني: privacy@story.com</p>
              <p>الهاتف: +966 12 345 6789</p>
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

export default Privacy;