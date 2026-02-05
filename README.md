# Knowledge Bridge Landing Page

A lightweight, SEO-optimized landing page built with Astro and Tailwind CSS.

## 🚀 Features

- ⚡️ **Astro** - Zero JS by default, lightning-fast performance
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔍 **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- 📱 **Responsive** - Mobile-first design
- 🎯 **Lightweight** - Minimal bundle size for optimal performance

## � Installation

Install dependencies:

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## 🏗️ Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📝 Customization

### Update SEO Content

Edit the SEO configuration in `src/pages/index.astro`:

```astro
const seo = {
  title: "Your Title",
  description: "Your description",
  keywords: "your, keywords, here",
};
```

### Update Site URL

Edit `astro.config.mjs`:

```js
site: "https://yourdomain.com";
```

### Change Button Link

Edit the Button component in `src/pages/index.astro`:

```astro
<Button href="https://your-link.com">
  Your Button Text
</Button>
```

### Customize Colors

Edit `tailwind.config.mjs` to add your brand colors:

```js
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    },
  },
},
```

## 📂 Project Structure

```
/
├── public/           # Static assets (images, favicon, etc.)
├── src/
│   ├── components/   # Reusable components
│   ├── layouts/      # Page layouts with SEO
│   └── pages/        # Your pages (index.astro is the landing page)
├── astro.config.mjs  # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── package.json
```

## 🔍 SEO Checklist

- ✅ Meta title and description
- ✅ Open Graph tags (Facebook)
- ✅ Twitter Cards
- ✅ Canonical URL
- ✅ Keywords meta tag
- ✅ Robots meta tag
- ✅ Sitemap (auto-generated)
- ✅ Semantic HTML
- ✅ Fast loading time

## 📈 Performance

Astro generates static HTML with zero JavaScript by default, resulting in:

- Perfect Lighthouse scores
- Instant page loads
- Excellent SEO rankings
- Minimal bandwidth usage

## 📄 License

MIT
