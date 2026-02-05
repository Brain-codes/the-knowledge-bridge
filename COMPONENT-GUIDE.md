# Component Architecture

## 📁 Folder Structure

```
src/
├── components/
│   ├── ui/              # Atomic/Base UI Components
│   │   ├── Heading.astro
│   │   ├── Text.astro
│   │   ├── Container.astro
│   │   └── Icon.astro
│   ├── hero/            # Hero Section Components
│   │   ├── HeroSection.astro
│   │   ├── HeroBackground.astro
│   │   ├── HeroTitle.astro
│   │   ├── HeroDescription.astro
│   │   └── StarIcon.astro
│   └── Button.astro     # Reusable Button Component
├── layouts/
│   └── Layout.astro     # Base layout with SEO
└── pages/
    └── index.astro      # Home page
```

## 🧩 Component Philosophy

Following **Atomic Design** principles:

### Atoms (ui/)

Small, reusable components with single responsibility:

- **Heading.astro** - All heading elements with consistent styling
- **Text.astro** - Paragraph and text elements
- **Container.astro** - Layout container with responsive padding
- **Icon.astro** - Icon wrapper component

### Molecules (hero/)

Combinations of atoms for specific features:

- **HeroTitle.astro** - Main hero heading
- **HeroDescription.astro** - Hero description text
- **StarIcon.astro** - Decorative star element
- **HeroBackground.astro** - Background layers

### Organisms (hero/)

Complete sections:

- **HeroSection.astro** - Full hero section composition

## 🎨 Design Tokens

### Colors (Tailwind)

From Figma design:

```js
primary: {
  green: '#005E02',    // Main brand color
  text: '#041F00',     // Primary text
  dark: '#041F00',     // Dark text
  light: 'rgba(21, 184, 0, 0.12)', // Light overlay
}
```

### Typography

- **Font**: Clash Display (from Fontshare)
- **Weights**: 200, 300, 400, 500, 600, 700

### Spacing

Using Tailwind's default spacing scale with responsive utilities.

## 🔧 Component Props

### Heading.astro

```astro
level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'  // Default: h2
size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'  // Default: lg
weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'  // Default: bold
color?: string  // Tailwind class, Default: text-primary-dark
align?: 'left' | 'center' | 'right'  // Default: left
class?: string  // Additional classes
```

### Text.astro

```astro
size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'  // Default: base
weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'  // Default: normal
color?: string  // Tailwind class, Default: text-primary-text
align?: 'left' | 'center' | 'right' | 'justify'  // Default: left
as?: 'p' | 'span' | 'div'  // Default: p
class?: string
```

### Container.astro

```astro
maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'  // Default: 3xl
padding?: 'none' | 'sm' | 'md' | 'lg'  // Default: md
class?: string
```

## 📝 Usage Examples

### Creating a New Section

```astro
---
import Container from '../components/ui/Container.astro';
import Heading from '../components/ui/Heading.astro';
import Text from '../components/ui/Text.astro';
---

<section class="py-20">
  <Container maxWidth="2xl">
    <Heading level="h2" size="2xl" align="center" class="mb-6">
      Your Section Title
    </Heading>
    <Text size="lg" align="center">
      Your description text here.
    </Text>
  </Container>
</section>
```

### Adding a New Component

1. **Atomic components** → `src/components/ui/`
2. **Feature components** → `src/components/[feature-name]/`
3. **Section components** → Group by feature

## 🎯 Best Practices

1. **Keep components small** - Each component should do one thing well
2. **Use semantic HTML** - Proper heading hierarchy, meaningful elements
3. **Props for flexibility** - Make components reusable with props
4. **Consistent naming** - Use descriptive names (HeroTitle, not Title1)
5. **Responsive by default** - Use Tailwind responsive utilities
6. **Accessibility** - Include proper ARIA labels, alt text

## 🖼️ Images

Images are stored in `public/images/` and referenced as `/images/filename.ext`

Current images:

- `background-pattern.svg` - Hero background pattern
- `star-icon.svg` - Decorative 4-point star
- `hero-background.png` - Bottom section background

**Note**: Replace placeholder images with actual Figma exports for production.

## 🚀 Next Steps

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Build for production: `npm run build`
4. Replace placeholder images with actual Figma assets
5. Add more sections as needed using the component library
