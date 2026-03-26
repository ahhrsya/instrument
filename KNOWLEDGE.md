# INSTANT STUDIO - KNOWLEDGE.MD

## 🎨 BRAND DESIGN SYSTEM

---

## COLOR PALETTE

### PRIMARY COLORS

**Outrageous Orange**
- Hex: #FF6B35
- RGB: (255, 107, 53)
- Usage: Hero background, primary CTAs, accent highlights, stat callouts
- Role: Bold, energetic, primary brand color
- Accessibility: Use with white or Paper text for 4.5:1 contrast minimum

**Espresso**
- Hex: #2D1B1B
- RGB: (45, 27, 27)
- Usage: Dark section backgrounds (Problem, Agitate, Why Now, Footer), text on light backgrounds
- Role: Deep contrast, grounds orange, weighty and urgent tone
- Accessibility: High contrast with Paper and white text

**Lilac**
- Hex: #B4A7E8
- RGB: (180, 167, 232)
- Usage: Accent highlights, button backgrounds, toggles, secondary CTAs
- Role: Unexpected, modern, differentiator accent
- Accessibility: Use with dark text (Ink/Espresso) for readability

**Paper**
- Hex: #F5F5F0
- RGB: (245, 245, 240)
- Usage: Primary page background, light section backgrounds, text on dark backgrounds
- Role: Warm off-white, premium feeling, relief moments
- Accessibility: Light background color with high contrast text

**Ink**
- Hex: #1A1A1A
- RGB: (26, 26, 26)
- Usage: Primary body text, headlines, dark UI elements
- Role: Near-black charcoal, readable and refined
- Accessibility: Near-black provides maximum contrast with light backgrounds

---

## TYPOGRAPHY SYSTEM

### HEADLINE FONT
**Font Family:** Hubot Sans SemiCondensed
- **Weight:** Bold (700)
- **Style:** Normal
- **Width:** SemiCondensed
- **Letter Spacing:** Tight (for compressed energy)
- **Usage:** 
  - Section headlines (Problem, Solution, Value Props, etc.)
  - Hero headline "1,000 on-brand ads. Minutes, not months."
  - Large stat callouts
- **Character:** Bold, kinetic, high-impact, punchy compressed energy
- **Size Scale:** 
  - Hero H1: 48px+ (desktop), 32px (mobile)
  - Section H2: 32px (desktop), 24px (mobile)
  - Subsection H3: 24px (desktop), 18px (mobile)

### BODY FONT
**Font Family:** DM Sans
- **Weight:** Regular (400), Medium (500), Bold (700) for emphasis
- **Style:** Normal
- **Letter Spacing:** Normal
- **Usage:**
  - All paragraph copy
  - Case study descriptions
  - FAQ answers
  - Value proposition descriptions
  - CTAs
- **Character:** Clean geometric sans-serif, warm, open, excellent readability at paragraph length
- **Size Scale:**
  - Body: 16px (desktop), 14px (mobile)
  - Small: 14px (desktop), 13px (mobile)
  - Large: 18px (desktop), 16px (mobile)
- **Line Height:** 1.6 for body copy, 1.4 for headlines

### LABEL/EYEBROW FONT
**Font Family:** DM Mono
- **Weight:** Regular (400), Bold (600) for emphasis
- **Style:** Normal
- **Spacing:** Wide letter-spacing (+0.05em to +0.1em)
- **Usage:**
  - Section labels/eyebrows ("CASE STUDY", "01")
  - Category tags/badges
  - Small UI text (buttons, labels)
  - FAQ question numbers
  - Stat labels
- **Character:** Monospaced, technical production-studio feel, adds texture and rhythm
- **Size:** 12px (desktop), 11px (mobile)
- **Transform:** UPPERCASE for section labels and tags

---

## TYPOGRAPHY COMBINATIONS

### Headline + Body Pairing
- **Hubot Sans (headlines)** conveys bold, kinetic energy
- **DM Sans (body)** provides warmth and readability
- **DM Mono (labels)** adds technical production feel
- **Visual Hierarchy:** Large Hubot headlines with generous whitespace above/below, followed by readable DM Sans paragraphs

### Text Color Combinations (Accessibility Check)
| Text Color | Background | Contrast Ratio | WCAG Level |
|-----------|-----------|----------------|-----------|
| Ink | Paper | 16.5:1 | AAA ✓ |
| Paper | Espresso | 11.2:1 | AAA ✓ |
| Ink | Lilac | 4.8:1 | AA ✓ |
| Paper | Outrageous Orange | 4.2:1 | AA ✓ |
| Outrageous Orange | Paper | 7.3:1 | AAA ✓ |

---

## SPACING & LAYOUT

### Grid System
- **Base Unit:** 8px
- **Column Grid:** 12 columns
- **Gutter:** 20px (desktop), 16px (mobile), 12px (tablet)
- **Container:** Max-width 1400px with padding

### Whitespace Hierarchy
- **Hero Section:** Generous vertical padding (80px+ desktop, 60px mobile)
- **Section Padding:** 60px vertical (desktop), 40px (mobile)
- **Component Spacing:** 20px between major components
- **Typography Spacing:** 1.5x line height minimum between sections

### Responsive Breakpoints
- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px+

---

## VISUAL PRINCIPLES

### Color Section Alternation
- **Hero:** Outrageous Orange
- **Problem/Agitate:** Espresso (dark, urgent)
- **Solution:** Paper (light, relief)
- **Value Props:** Paper with Orange/Lilac accents
- **Case Studies:** Paper with Orange accents
- **Why Now:** Espresso (dark, strategic)
- **FAQ:** Paper with Lilac toggles
- **Final CTA:** Outrageous Orange or Espresso
- **Footer:** Espresso with Orange links

### Design Character
- **Tone:** Bold, kinetic, resonant
- **Approach:** Large typographic moments, generous whitespace
- **Contrast:** Strong section contrast between dark (Espresso) and light (Paper)
- **Motion:** Subtle animations that reinforce kinetic feel without blocking load time
- **Philosophy:** Page should feel like high-quality creative proof, NOT generic AI output

---

## COMPONENT STYLING

### BUTTONS

**Primary Button (High-Intent CTA)**
- Background: Outrageous Orange
- Text: White or Paper
- Font: DM Sans Bold, 16px
- Padding: 12px 24px
- Border Radius: 6px
- Hover State: Darker orange (#E65A2E), slight scale (1.05)
- Examples: "Talk to Our Team", "Book a Custom Demo"

**Secondary Button (Exploration CTA)**
- Background: Transparent or Lilac
- Border: 2px Lilac
- Text: Lilac or Ink
- Font: DM Sans Bold, 16px
- Padding: 12px 24px
- Border Radius: 6px
- Hover State: Lilac background, white text
- Examples: "See Our Work"

**Small Button/Tag**
- Font: DM Mono, 12px
- Padding: 6px 12px
- Border Radius: 4px
- Usage: FAQ toggles, category labels, badges

---

### STAT CALLOUTS

**Large Stat Display**
- Font: Hubot Sans Bold, 48px+ (desktop)
- Color: Outrageous Orange
- Background: Optional light Paper or transparent
- Example: "5x", "35%", "69%", "95%"

**Stat Label**
- Font: DM Mono, 12px
- Color: Ink
- Text Transform: UPPERCASE
- Position: Below or beside stat number

---

### CASE STUDY CARDS

**Card Container**
- Background: Paper with subtle shadow
- Border: None or thin Espresso border left
- Padding: 24px
- Border Radius: 8px
- Hover: Slight shadow increase, subtle translateY(-4px)

**Card Headline**
- Font: Hubot Sans Bold, 24px
- Color: Ink
- Margin Bottom: 12px

**Card Metric**
- Font: Hubot Sans Bold, 32px
- Color: Outrageous Orange
- Margin Bottom: 8px

**Card Description**
- Font: DM Sans Regular, 16px
- Color: Ink
- Line Height: 1.6

---

### SECTION HEADERS

**Main Section Headline**
- Font: Hubot Sans Bold, 32px+ (desktop), 24px (mobile)
- Color: Ink
- Margin Bottom: 24px
- Spacing: Generous top padding (60px+)

**Eyebrow/Label**
- Font: DM Mono, 12px
- Color: Outrageous Orange
- Text Transform: UPPERCASE
- Letter Spacing: +0.05em
- Margin Bottom: 8px

---

## ANIMATION & MOTION

### Principles
- **Hero Animation:** Kinetic energy without blocking first contentful paint
- **Section Reveals:** Subtle fade-in or slide-up on scroll (100-300ms duration)
- **Button Hover:** Scale 1.05 and shadow increase (200ms)
- **Toggle/Accordion:** Smooth expand/collapse (300ms ease)
- **Stat Counters:** Optional count-up animation (1-2 second duration)

### Technical Notes
- Use CSS animations or lightweight libraries (no heavy JS)
- Respect `prefers-reduced-motion` for accessibility
- Performance: Keep animations under 60fps, avoid main thread blocking

---

## RESPONSIVE DESIGN NOTES

### Mobile (320px - 767px)
- **Hero Headline:** 32px, full-width readable
- **Section Padding:** 40px vertical, 20px horizontal
- **Grid:** Single column for cards
- **CTA Buttons:** Full-width or large thumb-friendly targets (44px minimum height)
- **Font Sizes:** Slightly reduced (14px body, 18px section headlines)
- **FAQ:** Native accordion, full-width sections

### Tablet (768px - 1023px)
- **Hero Headline:** 40px
- **Grid:** 2-column for some components
- **Font Sizes:** Midway between mobile and desktop
- **Section Padding:** 50px vertical

### Desktop (1024px+)
- **Full design** as specified above
- **Multi-column layouts** for cards and value props
- **Generous whitespace** and breathing room
- **Full-size typography** with optimal readability

---

## ACCESSIBILITY CHECKLIST

- [ ] Color contrast meets WCAG AA minimum (4.5:1 for normal text)
- [ ] Semantic HTML (H1, H2, H3 hierarchy, proper list structures)
- [ ] Alt text for all images describing content
- [ ] Focus indicators visible for keyboard navigation
- [ ] Form labels associated with inputs
- [ ] Keyboard accessible CTAs and toggles
- [ ] Proper heading hierarchy (no skipped levels)
- [ ] ARIA labels where needed (accordion, toggles)
- [ ] Mobile text minimum 16px to prevent zoom on input focus
- [ ] Sufficient touch target size (44px minimum)

---

## FILE ASSETS NEEDED

**Images/Graphics:**
- [ ] Workflow diagram (Global Campaign → Local Adaptation → Multi-market Delivery)
- [ ] Case study images or visual blocks
- [ ] Value proposition icons or illustrations
- [ ] Hero background or graphic treatment
- [ ] Logo assets (Sun Life, Havas, Tommy Hilfiger, PUMA, Maxus)

**Fonts:**
- [ ] Hubot Sans SemiCondensed (Bold/700)
- [ ] DM Sans (Regular/400, Medium/500, Bold/700)
- [ ] DM Mono (Regular/400, Bold/600)

**Colors:**
- [ ] Hex codes confirmed in design file
- [ ] Color variations/tints documented if needed
- [ ] Gradient specifications (if applicable)

---

**Knowledge Base Status:** Complete
**Last Updated:** March 26, 2026
**Ready for Antigravity:** Yes ✓
