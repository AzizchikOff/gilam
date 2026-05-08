# GilamArt — Qo'lda to'qilgan gilam va mahsulotlar veb-sayti

> An'anaviy hunarmandchilik, zamonaviy dizayn bilan — React + Tailwind CSS + Framer Motion

---

## 🚀 Loyiha haqida

GilamArt — oilaviy ustaxonaning professional veb-sayti. Ko'rgazmali katalog (landing + mahsulotlar), onlayn buyurtma YO'Q — faqat so'rov va aloqa.

**Stack:**
- ⚛️ React 18 (Vite)
- 🛣️ React Router DOM v6
- 🎨 Tailwind CSS
- ✨ Framer Motion
- 🔧 Lucide React

---

## 📁 Loyiha tuzilishi

```
gilam-site/
├── public/
│   ├── _redirects          ← Netlify uchun
│   └── images/
│       ├── carpets/        ← Gilam rasmlari
│       ├── covers/         ← Chexol rasmlari
│       ├── bags/           ← Sumka rasmlari
│       ├── placemats/      ← Podtarelnik rasmlari
│       └── other/          ← Boshqa mahsulot rasmlari
├── src/
│   ├── components/
│   │   ├── layout/         ← Header, Footer, Layout
│   │   ├── ui/             ← Button, ProductCard, ImageModal, SectionTitle
│   │   └── home/           ← Hero, CategoryGrid, FeaturedProducts, AchievementsPreview, TestimonialsSection
│   ├── data/
│   │   └── products.js     ← Barcha mahsulot ma'lumotlari
│   ├── hooks/
│   │   └── useProducts.js  ← Custom hook (filter, search, related)
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ProductsPage.jsx
│   │   ├── ProductDetailPage.jsx
│   │   ├── AchievementsPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx             ← Routing (React.lazy + Suspense)
│   └── main.jsx
├── netlify.toml
└── package.json
```

---

## ⚙️ O'rnatish

### 1. Repozitoriyni klonlash

```bash
git clone https://github.com/sizning-username/gilam-site.git
cd gilam-site
```

### 2. Paketlarni o'rnatish

```bash
npm install
```

### 3. Lokal ishga tushirish

```bash
npm run dev
```

Brauzerda: `http://localhost:5173`

---

## 🏗️ Build va Deploy

### Build

```bash
npm run build
```

`dist/` papkasi yaratiladi.

### Netlify orqali deploy

**1-usul: GitHub ulash**
1. GitHub'ga push qiling
2. Netlify → "Add new site" → "Import from Git"
3. Repository tanlang
4. Build settings avtomatik aniqlanadi
5. Deploy!

**2-usul: Manual drag & drop**
1. `npm run build`
2. Netlify → "Sites" → `dist` papkasini drag & drop qiling

> ⚠️ `netlify.toml` va `public/_redirects` fayllari allaqachon to'g'ri sozlangan. Refresh muammosi bo'lmaydi.

---

## 🖼️ Rasm joylash

Mahsulot rasmlarini `public/images/` ichidagi mos papkaga joylang:

```
public/images/carpets/buxoro-klassik.jpg
public/images/covers/universal-set.jpg
...
```

`src/data/products.js` da `image` yo'li bilan mos kelishi kerak.

**Tavsiya:** Rasmlar `WebP` formatida, `800x600px` o'lchamida bo'lishi optimal.

---

## 📦 Yangi mahsulot qo'shish

`src/data/products.js` faylida `products` array'iga yangi obyekt qo'shing:

```js
{
  id: 13,                          // Unikal raqam
  category: 'carpets',             // carpets | covers | bags | placemats | other
  categoryName: 'Gilamlar',
  name: "Yangi gilam nomi",
  description: "Qisqa tavsif...",
  details: "Material: Jun | O'lcham: 200x300 sm",
  price: "1 500 000 so'm",
  image: '/images/carpets/yangi.jpg',
  featured: false,                 // true bo'lsa bosh sahifada chiqadi
  badge: null,                     // "Yangi" | "Bestseller" | "Premium" | null
}
```

---

## 🎨 Rang palitra

| Nom | Hex |
|-----|-----|
| Asosiy fon (bej) | `#F5E6D3` |
| Terakota | `#C87A5A` |
| Ikkinchi fon | `#FAFAFA` |
| Matn | `#2C2C2C` |

---

## 📞 Loyiha haqida

Texnik topshiriq asosida yaratilgan. Senior darajadagi React loyihasi:
- Lazy loading (React.lazy + Suspense)
- Error Boundary
- Custom hooks (useProducts)
- Framer Motion animatsiyalar
- Responsive dizayn (375px — 1440px+)
- SEO-friendly tuzilma
- Netlify redirect sozlamalari

---

*© 2026 GilamArt. An'anaviy hunarmandchilik · Zamonaviy dizayn*
# gilam
