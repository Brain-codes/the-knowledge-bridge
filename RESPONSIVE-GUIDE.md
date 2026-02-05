# 📱 Responsive Design Guide

## Breakpoints (Tailwind CSS)

```
sm:  640px   (Mobile landscape / Small tablet)
md:  768px   (Tablet)
lg:  1024px  (Desktop)
xl:  1280px  (Large desktop)
2xl: 1536px  (Extra large desktop)
```

## 🎯 Mobile-First Approach

All components start with mobile styles and scale up:

```astro
<!-- ❌ Wrong - Desktop first -->
<h1 class="text-7xl md:text-4xl sm:text-3xl">

<!-- ✅ Correct - Mobile first -->
<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
```

## 📏 Responsive Components

### Hero Section

- **Mobile (< 640px)**:
  - Title: 3xl (1.875rem)
  - Description: sm (0.875rem)
  - Top padding: pt-20
  - Star icon: Hidden
- **Tablet (768px+)**:
  - Title: 5xl (3rem)
  - Description: lg (1.125rem)
  - Top padding: pt-36
  - Star icon: Visible
- **Desktop (1024px+)**:
  - Title: 6xl (3.75rem)
  - Description: xl (1.25rem)
  - Top padding: pt-48
- **Large Desktop (1280px+)**:
  - Title: 7xl (4.5rem)
  - Full spacing

### Spacing Scale

**Vertical Spacing** (Mobile → Desktop):

- mb-6 → mb-8 → mb-10 → mb-12
- pt-20 → pt-28 → pt-36 → pt-48

**Horizontal Padding**:

- px-4 → px-6 → px-8 → px-12 → px-16

### Images & Icons

**Star Icon**:

- Mobile: 16×16 (w-16)
- Small: 20×20 (w-20)
- Medium: 24×24 (w-24)
- Large: 28×28 (w-28)

**Background Heights**:

- Mobile: 45% bottom section
- Tablet: 55% bottom section
- Desktop: 58.5% bottom section

## 🧩 Component Responsive Patterns

### Headings

```astro
<Heading
  level="h1"
  class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-4"
>
  Your Title
</Heading>
```

### Text/Paragraphs

```astro
<Text
  class="text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8"
>
  Your description
</Text>
```

### Containers

```astro
<Container
  maxWidth="full"
  padding="lg"  <!-- Auto-responsive padding -->
>
  Content
</Container>
```

### Buttons

```astro
<Button
  size="lg"  <!-- Auto-responsive: px-6 py-3 → px-8 py-4 -->
>
  Click Me
</Button>
```

## ✅ Testing Checklist

Test on these viewport sizes:

- [ ] 320px (iPhone SE)
- [ ] 375px (iPhone 12/13/14)
- [ ] 390px (iPhone 14 Pro)
- [ ] 414px (iPhone 14 Pro Max)
- [ ] 768px (iPad Portrait)
- [ ] 1024px (iPad Landscape)
- [ ] 1280px (Small Desktop)
- [ ] 1920px (Full HD Desktop)

## 🛠️ Browser DevTools

**Chrome/Edge**: F12 → Toggle Device Toolbar (Ctrl+Shift+M)

**Responsive Testing**:

1. Open DevTools
2. Click device icon (or Ctrl+Shift+M)
3. Select device or enter custom dimensions
4. Test all breakpoints

## 📐 Responsive Utilities Reference

### Display

```
hidden sm:block        <!-- Hide mobile, show tablet+ -->
block md:hidden        <!-- Show mobile, hide tablet+ -->
```

### Flexbox

```
flex-col md:flex-row   <!-- Stack mobile, row desktop -->
items-start md:items-center
```

### Grid

```
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
gap-4 md:gap-6 lg:gap-8
```

### Typography

```
text-sm sm:text-base md:text-lg lg:text-xl
font-normal md:font-semibold
text-left md:text-center
```

### Spacing

```
p-4 md:p-6 lg:p-8      <!-- Padding -->
m-2 sm:m-4 md:m-6      <!-- Margin -->
gap-4 md:gap-8         <!-- Gap -->
```

## 🎨 Current Responsive Implementation

All components are now **fully responsive**:

✅ **HeroSection**: Responsive padding, spacing, visibility  
✅ **HeroTitle**: 5 breakpoint font sizes (3xl → 7xl)  
✅ **HeroDescription**: 4 breakpoint font sizes  
✅ **StarIcon**: Responsive sizing, hidden on mobile  
✅ **HeroBackground**: Responsive height percentages  
✅ **Container**: Enhanced responsive padding  
✅ **Button**: Responsive sizing at all sizes

## 💡 Pro Tips

1. **Always test on real devices** when possible
2. **Use Chrome DevTools** for quick testing
3. **Start mobile-first**, then enhance for larger screens
4. **Avoid fixed pixel widths** - use relative units
5. **Test landscape and portrait** on tablets
6. **Check touch targets** are 44×44px minimum
7. **Ensure text is readable** at all sizes (min 16px on mobile)
8. **Test with real content** not just placeholder text
