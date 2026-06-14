# Telawat Landing — Site Notes (ذاكرة الموقع)

> ملف ذاكرة حيّ يُحدَّث مع كل تغيير في الموقع. الهدف: موقع هبوط **جاد، ديني الطابع،
> إبداعي** يمتدّ من هوية تطبيق Telawat (مصحف + تسميع + مواقيت/أذان/قبلة + ورد يومي).
> ثنائي اللغة AR(RTL)/EN(LTR)، مظهران Dark/Light، Vite + Vue 3 + Tailwind v4 +
> vue-i18n + vue-router، نشر على GitHub Pages.

التنفيذ والقرارات المرجعية:
- الخطة الكاملة: `C:\Users\anplu\.claude\plans\telawat-declarative-whale.md`
- مصدر الهوية = كود تطبيق أندرويد: `C:\Users\anplu\AndroidProjects\Telawat\core\...`

---

## 1) لوحة الألوان الحقيقية (منقولة من التطبيق)

### اللون الأساسي = Teal (أخضر مزرق)، لا الزمردي
من `core/designsystem/.../theme/Color.kt`. اللون البذرة وخلفية أيقونة التطبيق =
**Teal40 `#006A62`** → يُعيَّن على `--color-primary-700`.

سلّم `--color-primary-*` في `src/assets/main.css` (مثبّت على درجات التطبيق، والبقية
استيفاء خطّي بينها):

| token | hex | المصدر |
|------|------|--------|
| primary-50  | `#EBFFFA` | أفتح من Teal95 |
| primary-100 | `#CDFFF1` | **Teal95** |
| primary-200 | `#A0F0DF` | **Teal90** |
| primary-300 | `#76E4D2` | استيفاء |
| primary-400 | `#4DD9C6` | **Teal80** |
| primary-500 | `#33B4A5` | استيفاء |
| primary-600 | `#1A8F83` | استيفاء |
| primary-700 | `#006A62` | **Teal40** (البذرة) |
| primary-800 | `#00504A` | **Teal30** |
| primary-900 | `#003733` | **Teal20** |
| primary-950 | `#001F1C` | **Teal10** |

### المحايدات (teal-tinted) — سلّم `--color-ink-*`
من محايدات التطبيق (`NeutralBackground/Surface`, `TealGrey*`):
`ink-50 #FAFDFB` (bg فاتح) · `ink-100 #F1F5F2` (سطح فاتح) · `ink-200 #E2EAE7` ·
`ink-300 #CDE8E1` · `ink-400 #B1CCC6` · `ink-500 #7F938E` · `ink-600 #4A635F` ·
`ink-700 #324B47` · `ink-800 #1B3431` · `ink-900 #161D1B` (سطح غامق) ·
`ink-950 #0E1513` (bg غامق). نستخدم `ink` بدل `slate` في الأقسام المعاد تصميمها.

### الذهبي accent (تطعيم دافئ) — `--color-gold-*`
`gold-300 #FCD34D · gold-400 #FBBF24 · gold-500 #F59E0B · gold-600 #D97706`
(+ `gold-200 #FDE68A`, `gold-700 #B45309` للحواف). يُستخدم بقلّة: الخيط السفلي،
النجمة الثمانية، شارات الثقة.

### قيم سماء «أوقات اليوم» — من `identity/PrayerPalette.kt`
توكنز `--sky-<phase>-{top,mid,bottom,accent,silhouette}` + utilities
`.sky-fajr/.sky-sunrise/.sky-day/.sky-asr/.sky-maghrib/.sky-isha`
(تدرّج عمودي: top 0% → mid 55% → bottom 100%).

| phase | top | mid | bottom | accent | silhouette |
|-------|-----|-----|--------|--------|-----------|
| fajr    | #0D1333 | #4A3A6B | #E7926B | #FFD9A8 | #0A0F26 |
| sunrise | #2E5A86 | #E0986A | #FFD27A | #FFE6B0 | #2A2331 |
| day     | #1E73B0 | #53A1D8 | #C7E6FA | #FFF1C0 | #15324C |
| asr     | #2C6E9E | #74A6BE | #EBC987 | #FFD58A | #243A4A |
| maghrib | #2A1A4A | #A8456E | #F2873F | #FFC18A | #1A1030 |
| isha    | #060A20 | #161E47 | #33285C | #BFD0FF | #05071A |

السرد البصري نزولاً في الصفحة: هيرو (sunrise) → مميزات (نهار/محايد) →
تنزيل (maghrib/isha) → دعم.

---

## 2) الخطوط

- **الواجهة/النص:** `IBM Plex Sans Arabic` (RTL) — `--font-ui`.
- **اللاتيني:** `IBM Plex Sans` — `--font-latin` (body في LTR).
- **العناوين الكبيرة:** `Reem Kufi` — `--font-display` / utility `.font-display`.
- **الآيات القرآنية فقط:** `Amiri Quran` — `--font-quran` / utility `.font-quran`.
- **محذوف من الواجهة:** Amiri / Scheherazade / Inter. **ممنوع:** Cairo.
- توافق خلفي: أبقينا `.font-scheherazade→display`, `.font-amiri→quran`,
  `.font-inter→latin` كأسماء aliases حتى لا تتعطّل أي مرجعية قديمة.
- التحميل: Google Fonts في `index.html`
  (`Amiri+Quran` + `IBM+Plex+Sans+Arabic` + `IBM+Plex+Sans` + `Reem+Kufi`).

---

## 3) الأصول البصرية (هوية التطبيق)

- **ظلّ المسجد** `src/components/ui/MosqueSilhouette.vue`: نسخ حرفي لثابت
  `MOSQUE_SILHOUETTE_PATH` من `identity/MosqueSilhouette.kt`، `viewBox 0 0 1755 1300`،
  مسار مركّب even-odd، `fill="currentColor"` ليتحكّم الأب باللون.
  `preserveAspectRatio="xMidYMax meet"` (المسجد كامل، موسّط، مرتكز للأسفل — مطابق
  لـ `drawMosqueCentered` داخل التطبيق). يُستعمل قاعدةً للهيرو وقسم التنزيل.
- **الهلال:** هندسة مطابقة لـ `crescentPath` في `PrayerSceneArt.kt`
  (قرص ناقص قرص أصغر r=0.88 بإزاحة (+0.48r, −0.34r)) — مكوّن/رسم SVG عند الحاجة.
- **عناصر زخرفية مضبوطة:** نجمة ثمانية + فاصل إسلامي (`IslamicDivider.vue`) + نجوم
  ثابتة قليلة — بقلّة وأناقة، لا زينة طفولية.

---

## 4) قنوات التنزيل + روابط البيئة

مكوّن موحّد **وحيد** `src/components/ui/StoreBadges.vue` يُستعمل في الهيرو وقسم التنزيل
(أزال تكرار/تضارب الأزرار). ثلاث شارات بنمط رسمي موحّد (pill داكن + أيقونة + سطرين):
1. **Google Play** — أيقونة Play الرسمية رباعية الألوان + «GET IT ON».
2. **Huawei AppGallery** — شعار AppGallery (squircle أحمر متدرّج + إمبلِم أبيض)
   + «EXPLORE IT ON». (لا الدائرة المخترَعة القديمة.)
3. **APK مباشر** — أيقونة تنزيل/أندرويد + «تنزيل مباشر».

الروابط من متغيّرات البيئة (`.env` / GitHub Secrets):
`VITE_GOOGLE_PLAY_URL` · `VITE_HUAWEI_URL` · `VITE_APK_URL` · `VITE_DONATION_URL`
(اختياري — زر التبرّع يظهر فقط عند ضبطه) · `VITE_BASE_URL` (مسار GitHub Pages).

---

## 5) التواصل (من `core/domain/AppInfo.kt`)

- `SUPPORT_EMAIL = telawat.app@gmail.com`
- `SUPPORT_URL   = https://github.com/hussam002`
- استُبدلت عبارة «عبر صفحة المتجر» في سياسة الخصوصية ببريد/GitHub حقيقي.

---

## 6) الحركة والوصولية (قيد حاسم)

المستخدم **حسّاس للوميض**؛ التطبيق نفسه يستخدم فناً **ثابتاً** عمداً.
- **محذوف/مهدّأ:** `twinkle`, `spin-slow`, `pulse-glow`, `shimmer-btn`, `float`.
- **مسموح:** `reveal` لطيف (دخول ناعم) + تحويلات hover هادئة فقط.
- `@media (prefers-reduced-motion: reduce)` يلغي كل الحركة والتحويلات عالمياً
  ويُظهر عناصر reveal فوراً.

---

## 7) اصطلاحات المكوّنات

- النصوص كلها عبر i18n (`src/locales/ar.ts` + `en.ts`) — لا نصوص مكتوبة في القوالب.
- العناوين: `.font-display` (Reem Kufi). الآيات: `.font-quran` (Amiri Quran).
- المظهر: `useTheme` (class `.dark` على `<html>`)؛ اللغة/الاتجاه: `applyLocale`.
- الشعار: `public/logo.svg` (يوفّره المستخدم) في الهيدر/الفوتر/favicon/OG.

---

## 8) TODO (ينتظر ملفات/قرارات المستخدم)

- [x] `public/logo.svg` — وُفِّر (`telawat-logo.svg`): مصحف + موجات تسميع على مربّع teal.
- [x] لقطة إطار الهاتف (الهيرو) — وُفِّرت `public/screenshots/featured.jpg`؛ المكوّن يتحسّس
      الامتداد (`featured.{jpg,png,webp}` ثم `home.png` ثم بديل اصطناعي).
- [ ] `public/og-image.png` (1200×630) لمشاركات OG — حالياً يشير إلى `/og-image.png` (مفقود).
- [ ] تعبئة روابط `VITE_*` الحقيقية كـ Repository Secrets (القيم الحالية placeholders).

أصول جاهزة في `public/`: `scenes/skyline-night.svg` + `scenes/skyline-sunset.svg`
(ظلال مدينة-مسجد عريضة، vector خفيف)، و`badges/` (شارات Play/AppGallery الرسمية + أيقونات).
مجلد `SVGs/` الخام مُتجاهَل في git (محلي فقط).

---

## 9) سجلّ التغييرات (Changelog)

- **2026-06-13 — إعادة التصميم الكاملة (مكتملة، تمرّ `npm run build`):**
  - `main.css`: سلّم teal الحقيقي + سلّم `ink` المحايد + توكنز سماء أوقات اليوم +
    عائلات الخطوط الجديدة، وتحويل الـ utilities المخصّصة إلى `@utility`
    (لدعم variants مثل `dark:sky-fajr`)، و`prefers-reduced-motion` عالمي. حُذفت
    حركات twinkle/spin/pulse/shimmer/float. (الخطوط `font-*` تُولَّد آلياً من `@theme`.)
  - `index.html`: روابط الخطوط الجديدة + meta/OG/twitter + theme-color + favicon=logo.
  - مكوّنات جديدة: `ui/MosqueSilhouette.vue` (مسار التطبيق الحرفي)،
    `ui/StoreBadges.vue` (شارات موحّدة بأيقونات رسمية). تحديث `ui/IslamicDivider.vue`
    (prop `tone`)، وتهدئة `ui/ThemeToggle.vue` + `ui/LanguageToggle.vue` (ألوان موروثة).
  - الهيدر: شعار `/logo.svg` بـ fallback، شفّاف فوق الهيرو ثم زجاج + خيط ذهبي.
    أُزيل الـ spacer (الهيرو يملأ الأعلى خلف الهيدر).
  - الهيرو: مشهد سماء (sunrise/فجر) + هلال حقيقي + نجوم ثابتة + مسجد بالأسفل +
    StoreBadges + إطار هاتف مع slot للقطة (fallback نظيف). نصّ أبيض-على-مشهد.
  - التنزيل: مشهد مغرب/عشاء + مسجد كامل + StoreBadges (lg) — بلا تكرار أزرار.
  - المميزات/الصلاحيات: لوحة teal/gold/ink موحّدة، رفعة هادئة (`card-lift`)، عناوين Reem Kufi.
  - الدعم: صدقة جارية (مشاركة + تواصل + تبرّع شرطي مخفيّ عند placeholder) + دعاء Amiri Quran.
  - الفوتر: شعار + روابط + أيقونتا تواصل (بريد/GitHub) + خيط ذهبي علوي.
  - سياسة الخصوصية: لوحة ink + روابط تواصل حقيقية (بريد/GitHub من AppInfo).
  - i18n: مفاتيح جديدة (`nav.menu`, `download.apk*`, `permissions.assurance`,
    `support.contact`) وتنظيف الإيموجي من `support.prayerRequest`.
  - `.env.example`: توثيق `VITE_DONATION_URL` كاختياري.
  - تحقّق بصري: AR(RTL)/EN(LTR) × Dark/Light — لا أخطاء console، `vue-tsc` و`vite build` نظيفان.

- **2026-06-13 — جولة تحسينات (بناءً على ملاحظات المستخدم):**
  - **الموبايل/الأزرار:** `StoreBadges` تصبح **عمودية بعرض كامل** على الموبايل
    (أهداف لمس أكبر) وتعود صفّاً على `sm+`. روابط `|| '#'` لتفادي روابط فارغة
    في الإنتاج عند غياب الأسرار.
  - **ظلّ المسجد:** أكبر بكثير وموسّط بقاعدة أرضية بعرض كامل (خيط أرضي + توهّج أفقي
    دافئ) في الهيرو وقسم التنزيل — ارتفاع `clamp(190px,30vw,340px)`.
  - **تدرّج الهيرو (الوضع النهاري):** استُبدل الشروق الباهت بمشهد **الفجر** الأنيق
    في الوضعين (Fajr نهاراً / Isha ليلاً)، مع هلال حقيقي بتوهّج + نجوم في الوضعين.
  - **تباين الأقسام:** أُضيف **fade علوي** لقسم التنزيل (من خلفية الصفحة إلى السماء)
    لتليين الحدّ الحادّ مع الخلفية البيضاء في الوضع النهاري.
  - `.gitignore`: تجاهل `.claude/`.
  - تحقّق: موبايل+سطح مكتب × Dark/Light — `vite build` نظيف.

- **2026-06-13 — النشر:** مستودع **عام** `hussam002/telawat-landing` + GitHub Pages
  (فرع `gh-pages` عبر workflow `deploy.yml`). الرابط: `https://hussam002.github.io/telawat-landing/`.
  روابط المتاجر تُضبط لاحقاً كـ Repository Secrets (`VITE_GOOGLE_PLAY_URL` ...).

- **2026-06-14 — جولة تحسينات (ملاحظات المستخدم + أصوله):**
  - **المشاهد:** اعتُمدت أصول المستخدم. الهيرو والتنزيل الآن = **تدرّج سماء CSS نظيف**
    (ليل أزرق للهيرو / مغرب للتنزيل) + **ظلّ مدينة-مسجد عريض** (`scenes/skyline-night.svg`,
    vector خفيف ~33KB) بعرض كامل في الأسفل + هلال/نجوم (هيرو) / توهّج شمس (تنزيل).
    استُبدل المسجد المفرد الموسّط الصغير، وحُذف `MosqueSilhouette.vue`.
    (جُرّبت مشاهد SVG كاملة محمَّلة 1.svg/2.svg لكنها ثقيلة ~280KB وتُبطئ الرسم؛ فاستُخدم
    أسلوب التطبيق نفسه: تدرّج + ظلّ خفيف + هلال.)
  - **التباين/النهاري:** التدرّجات ثابتة (ليل/مغرب) في الوضعين فاختفى تدرّج النهار السيّئ؛
    + **fade علوي** في التنزيل لتليين الحدّ مع الصفحة البيضاء.
  - **الأزرار:** `StoreBadges` صارت **زجاجية مصنفرة** (`bg-white/12` + blur + حلقة بيضاء)
    بدل الأسود الصلب — واضحة على المشاهد الداكنة (عالجت «الأزرار سوداء تماماً»).
  - **الشعار:** `telawat-logo.svg` → `public/logo.svg` يظهر في الهيدر/الفوتر/favicon.
  - **README:** عناوين إنجليزية فقط (أُزيل العربي) + صف تنزيل بثلاث شارات
    (Play/AppGallery الرسمية + APK).
  - **git:** `SVGs/` مُتجاهَل؛ وتُنظَّف سجلّات الالتزام (تُزال co-author).

- **2026-06-14 (جولة ثانية) — صقل بناءً على أصول/ملاحظات المستخدم:**
  - **أيقونات الأزرار:** استُبدلت أيقونات `StoreBadges` المضمّنة بأيقونات المستخدم الملوّنة
    (`badges/google-play-icon.svg` + `appgallery-icon.svg` + `android-icon.svg`) عبر `<img>`
    (يعزل معرّفات الـ SVG فلا تتصادم عند تكرار المكوّن في الصفحة).
  - **شعار الهيدر:** كان أبيض على شفّاف فيختفي على الشريط النهاري؛ وُضِع على **بلاطة teal**
    (`size-9` تدرّج primary + حلقة) فصار واضحاً في الوضعين. (الفوتر داكن دائماً فلا مشكلة.)
  - **لقطة التطبيق:** الهيرو يستخدم `screenshots/featured.*` مع سلسلة احتياطية تتحسّس الامتداد
    (`.jpg` → `.png` → `.webp` → `home.png` → بديل اصطناعي). أُسقطت `featured.jpg` فعلاً.
  - **تدرّج التنزيل (النهاري):** صار الـ fade العلوي **مزجاً معتماً** من لون الصفحة إلى لون القسم
    (`from-ink-50 to-[#2a1a4a]`، وداكناً `from-ink-950`) بدل `to-transparent` — أزال الغشاوة
    اللبنية فوق البنفسجي نهاراً مع الحفاظ على ليل ممتاز.
  - **عرض الـ skyline:** أُزيل `clipPath` الذي يقصّ اليسار، وضُيِّق الـ viewBox إلى محتوى المباني
    الفعلي (`15 0 895 328`) فصار **يغطّي العرض كاملاً** بلا قصّ من الطرفين.
  - **README:** ثلاث شارات shields.io موحّدة (`for-the-badge`) بدل صور متفاوتة الأحجام.
  - تحقّق: `vue-tsc`+`vite build` نظيفان؛ فحوص DOM/computed-styles تؤكّد كل النقاط
    (أداة اللقطات معطّلة هذه الجلسة). ونُظِّفت وسوم `</content>`/`</invoke>` المتسرّبة في ذيل الملف.
