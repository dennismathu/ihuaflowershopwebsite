# Design Guidelines: Ihua Flowers Shop Landing Page

## Design Approach

**Reference-Based Design**: Drawing inspiration from premium floral e-commerce sites (1-800-Flowers, Interflora, FTD) with emphasis on emotional connection, visual appeal, and trust-building for a local Kenyan market.

## Core Design Principles

1. **Emotional Resonance**: Design should evoke feelings of celebration, love, remembrance, and natural beauty
2. **Local Authenticity**: Reflect Kiambu/Kenyan context while maintaining international quality standards
3. **Respectful Versatility**: Balance joyful occasion designs with dignified sympathy/funeral aesthetics
4. **Trust & Reliability**: Emphasize local presence, same-day delivery, and family-run business credibility

---

## Color Palette

### Primary Colors
- **Brand Magenta**: 336 75% 48% (emotional warmth, celebration)
- **Soft Lilac**: 300 30% 75% (elegance, sophistication)
- **Fresh Green**: 100 35% 60% (natural, growth, life)

### Funeral/Sympathy Palette (for dedicated sections)
- **Respectful Purple**: 270 25% 45% (remembrance, dignity)
- **Calm Gray**: 0 0% 50% (neutrality, peace)
- **Soft White**: 0 0% 98% (purity, reverence)

### Accent Colors
- **Warm Gold**: 45 100% 50% (premium touch, special occasions)
- **Deep Rose**: 345 80% 40% (romantic occasions)

---

## Typography

**Font Families**: 
- Primary: Poppins (300, 400, 500, 600, 700) - modern readability
- Display/Headers: Dancing Script (400, 500, 600) - elegant, handcrafted feel

**Type Scale**:
- Hero Headline: 3.5rem desktop / 2rem mobile, Dancing Script for "Ihua Flowers Shop", Poppins for tagline
- Section Titles: 2.5rem desktop / 1.8rem mobile, Poppins 600
- Body Text: 1rem, Poppins 400, line-height 1.6
- Cards/Captions: 0.9rem, Poppins 400

---

## Layout System

**Spacing Primitives**: Tailwind units of 4, 8, 12, 16, 20, 24 (consistent rhythm)

**Grid Strategy**:
- Services: 3-column desktop, 2-column tablet, 1-column mobile
- Testimonials: 3-column desktop, 2-column tablet, 1-column mobile
- Featured Bouquets: Horizontal scroll carousel, 4 cards visible desktop, 1.5 cards mobile
- Funeral Section: 2-column split (info + featured arrangements)

**Container Max-Width**: 1200px with 20px side padding

---

## Component Library

### Hero Section
- **Full-Width Hero Image**: User's uploaded floral image as background with gradient overlay (magenta to transparent, 60% opacity)
- **Content Layout**: Centered text over image with blurred background cards for readability
- **Headline Structure**: "Ihua Flowers Shop" in Dancing Script, "Handcrafted Bouquets for Every Moment in Githunguri" in Poppins
- **Dual CTAs**: "Order Flowers Now" (solid magenta) + "Custom Arrangements" (outline white with blur background)
- **Height**: 85vh on desktop, 70vh on mobile

### Trust Strip
- 4-icon horizontal grid (same-day delivery, funeral flowers available, custom bouquets, local Githunguri service)
- Icons: Font Awesome, 2rem size, magenta color
- Background: Light gray (0 0% 98%)

### Services Grid (7 cards - including new funeral section)
- **Card Design**: White background, rounded-20px, subtle shadow, hover lift effect
- **Icon Treatment**: Gradient circle background (magenta to lilac), white icon inside
- **Order**: Occasions → Custom → Delivery → Corporate → Subscriptions → **Funeral Flowers** → Storefront
- **Funeral Card**: Use respectful purple icon background, dignified copy: "Sympathy & Funeral Arrangements - Thoughtful tributes to honor loved ones"

### Featured Bouquets Carousel
- **Card Count**: 5 bouquets (Romantic Roses, Birthday Mix, Elegant White, Sunny Day, **Sympathy Wreath**)
- **Funeral Bouquet**: White lilies/chrysanthemums placeholder, purple/gray gradient, dignified pricing
- **Card Structure**: Image top, price tag overlay, title, description, CTA button
- **Navigation**: Left/right arrow buttons, touch swipe enabled

### NEW: Funeral Flowers Section
- **Placement**: After services, before featured bouquets
- **Layout**: 2-column split
  - Left: Heartfelt copy about sympathy arrangements, respectful imagery
  - Right: 2-3 funeral arrangement cards in vertical stack
- **Color Treatment**: Use calm grays and soft purples, avoid bright colors
- **Typography**: Softer, more formal tone in copy
- **CTA**: "View Sympathy Flowers" button in respectful purple

### Testimonials
- 3-card grid, customer photos/avatars, 5-star ratings
- Include at least one testimonial mentioning funeral service: "Beautiful sympathy arrangement delivered to Githunguri on time. Very respectful service."

### About Section
- 2-column: Text left, team/shop image placeholder right
- Emphasis on "Family-run business serving Githunguri and Kiambu" 
- Mention both celebratory and funeral flower expertise

### CTA Banner
- Full-width magenta gradient background
- White text: "Need Flowers for Any Occasion? We're Here to Help"
- Large button: "Contact Us" with WhatsApp icon

### Contact Footer
- **Information Display**:
  - Phones: +254 735 838165, +254 791 216273
  - WhatsApp: +254 791 216273 (with clickable icon)
  - Email: info@ihuaflowers.com
  - Location: Githunguri, Kiambu
- **Floating WhatsApp Button**: Bottom-right corner, magenta background, white icon, pulse animation
- **Footer Links**: Quick links to services, privacy policy, terms
- **Social Media**: Facebook, Instagram, Twitter icons

---

## Images

### Hero Image
- **Source**: User's uploaded floral image (gemini image to the side.png)
- **Treatment**: Full-width background, subtle gradient overlay (magenta 336 75% 48% to transparent, 60% opacity from left)
- **Positioning**: Center, cover, no-repeat
- **Alt Text**: "Beautiful fresh flower arrangements at Ihua Flowers Shop Githunguri"

### Service/Bouquet Placeholders
- Use gradient backgrounds with Font Awesome icons until real photos available
- Romantic: Rose icon, red-pink gradient
- Birthday: Seedling icon, rainbow gradient  
- Elegant: Spa icon, purple-lilac gradient
- Funeral: Candle/peace icon, gray-purple gradient
- Sunflower: Sun icon, yellow-orange gradient

### About Section Image
- Placeholder for shop/team photo
- Suggested: Shop storefront in Githunguri or florist at work
- Alt: "Ihua Flowers Shop team in Githunguri Kiambu"

---

## Animations & Interactions

**Minimal, Purposeful Motion**:
- Scroll-triggered fade-in for service cards (0.6s ease, 30px translateY)
- Carousel slide transitions (0.5s ease)
- Button hover: 2px translateY lift, enhanced shadow
- Hero scroll indicator: Gentle bounce animation
- NO complex parallax or heavy animations

---

## Accessibility & Responsiveness

- Touch targets minimum 44x44px
- Color contrast ratio 4.5:1 for all text
- Funeral section uses accessible purple (WCAG AA compliant)
- Mobile: Single column stacking, larger touch buttons
- Tablet: 2-column grids where appropriate
- Desktop: Full 3-column grids, carousel shows 4 cards

---

## Key Differentiators

1. **Dual Emotional Range**: Celebrate joyful occasions AND provide dignified funeral services with distinct visual treatments
2. **Local Trust**: Emphasize Githunguri/Kiambu presence throughout copy and testimonials  
3. **Immediate Contact**: Multiple phone numbers, prominent WhatsApp integration for Kenyan market
4. **Cultural Sensitivity**: Funeral section designed with respect and appropriate color psychology

---

## Brand Voice in Design

- **Celebratory Sections**: Warm, vibrant, joyful (magenta, lilac, green)
- **Funeral Section**: Calm, respectful, comforting (purple, gray, soft white)
- **Overall Tone**: Professional yet approachable, family-run warmth with quality assurance