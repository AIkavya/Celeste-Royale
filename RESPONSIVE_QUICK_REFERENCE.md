# Responsive Design Quick Reference

## Screen Size Breakpoints

```
┌─────────────────────────────────────────────────────────────┐
│  RESPONSIVE BREAKPOINTS FOR CELESTE ROYALE                  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  📱 Mobile (≤575px)                                         │
│     └─ Small phones (320-375px) & large phones (425-575px)  │
│     └─ Single column layouts                                │
│     └─ Full-width components                                │
│     └─ Optimized touch targets (44x44px min)                │
│                                                              │
│  📱 Large Mobile (576-767px)                                │
│     └─ Phablets & small tablets                             │
│     └─ Some two-column layouts                              │
│     └─ Better spacing utilization                           │
│                                                              │
│  📲 Tablet (768-991px)                                      │
│     └─ iPads & Android tablets (portrait)                   │
│     └─ Two-column grids                                     │
│     └─ Better use of horizontal space                       │
│                                                              │
│  💻 Desktop (992-1199px)                                    │
│     └─ Smaller desktops & large tablets (landscape)         │
│     └─ Three-column layouts                                 │
│     └─ Full navigation visible                              │
│                                                              │
│  🖥️  Large Desktop (≥1200px)                                │
│     └─ Full desktop experience                              │
│     └─ Maximum content width                                │
│     └─ All features optimized                               │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Component Responsive Behavior

### Hero Section
```
Desktop:  78vh height | 6rem padding top/bottom
Tablet:   70vh height | 4rem padding
Phone:    55vh height | 2rem padding | Centered text
```

### Navigation
```
Desktop: Full horizontal menu | Logo 44px
Tablet:  Hamburger menu at 991px
Phone:   Stacked menu | Logo 32px
```

### Grid Layouts
```
Rooms:      3 cols → 2 cols → 1 col
Services:   3 cols → 2 cols → 1 col
Gallery:    3 cols → 2 cols → 1 col
Blog:       3 cols → 2 cols → 1 col
Testimonials: Carousel → Touch-friendly
```

### Forms
```
Desktop: Multi-column layout
Tablet:  2-column layout
Phone:   Full-width single column
         Form inputs: 44px+ height
         Font-size: 16px (prevents zoom)
```

### Images
```
Desktop: 400x300px thumbnails
Tablet:  350x260px thumbnails
Phone:   Full-width responsive
         Height adjusts: 220px → 180px → 140px
```

### Buttons
```
Desktop: Side-by-side layout
Tablet:  Flexible wrapping
Phone:   Full-width or stacked
         Min-height: 44px
         Min-width: 44px
```

### Toast Notifications
```
Desktop: Fixed right position | 300px width
Tablet:  Adjusted margins | 280px width
Phone:   Full-width minus margins | 100% width
```

## Font Sizes & Line Heights

### Headings
```
h1:  2.5rem → 2.0rem → 1.8rem → 1.5rem → 1.4rem
h2:  2.0rem → 1.6rem → 1.6rem → 1.25rem → 1.1rem
h3:  1.5rem → 1.4rem → 1.4rem → 1.1rem → 1.0rem
h4:  1.3rem → 1.2rem → 1.2rem → 0.95rem → 0.95rem
h5:  1.1rem → 1.0rem → 1.0rem → 0.9rem → 0.9rem
h6:  1.0rem → 0.95rem → 0.95rem → 0.95rem → 0.95rem
```

### Body Text
```
Base:        16px → 15px → 14px → 13px
Lead:        1.25rem → 1.1rem → 1.0rem → 0.95rem
Small:       0.875rem → 0.85rem → 0.8rem → 0.75rem
```

## Padding & Margin Adjustments

### Containers
```
Desktop:     Full width with max-width 1200px
Tablet:      Padding 20px | max-width 100%
Large Phone: Padding 16px | max-width 100%
Phone:       Padding 12px | max-width 100%
```

### Sections
```
Desktop: py-5 (3rem padding top/bottom)
Tablet:  py-4 (2rem padding)
Phone:   py-3 (1rem padding)
```

### Cards
```
Desktop: p-4 (1.5rem) | gap 1rem
Tablet:  p-3 (1.25rem) | gap 0.75rem
Phone:   p-2 (0.75rem) | gap 0.5rem
```

## Touch & Interaction

### Touch Targets
- ✅ Minimum 44x44px for buttons
- ✅ Minimum 48x48px for tap-heavy areas
- ✅ 8px minimum spacing between targets
- ✅ No hover-dependent functionality

### Spacing
- ✅ Comfortable click areas
- ✅ No accidental taps
- ✅ Adequate visual separation

### Gestures
- ✅ Carousel: Touch swipe support
- ✅ Gallery: Lightbox with touch close
- ✅ Forms: All input types work
- ✅ Navigation: Hamburger menu touch-friendly

## Performance Optimizations

- ✅ CSS media queries (not JS)
- ✅ Hardware acceleration (transform/opacity)
- ✅ Smooth scrolling
- ✅ Touch-action optimized
- ✅ No layout shift on navigation
- ✅ Proper image sizing

## Accessibility

- ✅ Proper contrast ratios maintained
- ✅ Font sizes readable without zoom
- ✅ Touch targets clearly defined
- ✅ Focus states visible
- ✅ Semantic HTML structure
- ✅ ARIA labels on dynamic content

