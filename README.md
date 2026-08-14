# digi-market-catalog

مشروع واجهة كتالوج منتجات بسيط مبني بـ Vue 3 و Vite.

Live demo (الديمو الحي):

https://stately-gumption-5a8934.netlify.app/

وصف سريع:

- مشروع تعليمي/نمطي لعرض منتجات مع مكونات قابلة لإعادة الاستخدام (`ProductCard`, `CategoryCard`).
- يستخدم Vite للبناء، وVuetify للواجهات، ويحتوي على مسارات وواجهات عرض للمنتجات.

البدء السريع (محلياً):

متطلبات:

- Node.js (14+) وnpm

خطوات التشغيل:

```bash
npm install
npm run dev
```

بناء للنشر:

```bash
npm run build
npx serve dist
```

هيكل المشروع (موجز):

- `src/` : كود المصدر
  - `components/` : مكونات واجهة المستخدم
  - `views/` : صفحات/مشاهد التطبيق
  - `data/` : بيانات اختبارات/عينة المنتجات
- `public/` و `deploy-test/` : محتوى ثابت ونسخ للنشر

المساهمة:

- لإجراء تغييرات، أنشئ فرعاً جديداً، عدل، ثم ارسل Pull Request.

مزيد من الموارد:

- Vite: https://vitejs.dev/
- Vue 3: https://vuejs.org/

---

تم التعديل بواسطة GitHub Copilot — README مرتب ومضاف له رابط الديمو الحي.
