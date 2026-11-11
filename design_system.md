---
name: Cazhibiscus Identity
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f4'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e3'
  on-surface: '#191c1d'
  on-surface-variant: '#40484a'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f1'
  outline: '#70787b'
  outline-variant: '#bfc8ca'
  surface-tint: '#2d6672'
  primary: '#003741'
  on-primary: '#ffffff'
  primary-container: '#0e4f5b'
  on-primary-container: '#88bfcd'
  inverse-primary: '#98cfdd'
  secondary: '#006875'
  on-secondary: '#ffffff'
  secondary-container: '#8aebfd'
  on-secondary-container: '#006b78'
  tertiary: '#373122'
  on-tertiary: '#ffffff'
  tertiary-container: '#4e4737'
  on-tertiary-container: '#c0b5a1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b3ecfa'
  primary-fixed-dim: '#98cfdd'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#0c4e5a'
  secondary-fixed: '#9cefff'
  secondary-fixed-dim: '#72d5e6'
  on-secondary-fixed: '#001f24'
  on-secondary-fixed-variant: '#004f58'
  tertiary-fixed: '#ede1cb'
  tertiary-fixed-dim: '#d0c5b0'
  on-tertiary-fixed: '#201b0e'
  on-tertiary-fixed-variant: '#4d4636'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e3'
typography:
  display-hero:
    fontFamily: EB Garamond
    fontSize: 80px
    fontWeight: '400'
    lineHeight: 90px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 54px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  nav-link:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 24px
  section-gap: 120px
---

## Brand & Style

The brand personality is rooted in the concept of a "Hidden Tropical Sanctuary." It balances the precision of high-end consumer technology with the warmth of a luxury editorial travel magazine. The design system prioritizes a sense of arrival and quietude, targeting a sophisticated traveler who values authenticity and understated opulence.

The design style is a hybrid of **Apple-inspired Minimalism** and **Glassmorphism**. It utilizes expansive whitespace to create a "breathing" interface, allowing high-quality photography to lead the experience. Translucent layers and soft background blurs evoke the shifting light of a coastal environment, while structured, editorial-inspired typography provides a sense of established heritage and authority.

## Colors

The palette is derived from the natural transition of a tropical day. **Deep Ocean** serves as the primary anchor for core brand moments and high-contrast text. **Ocean White** is the foundation for all surfaces, providing a cleaner, more sophisticated base than pure white. 

**Warm Sand** is used for subtle container backgrounds and sections to differentiate content without adding visual weight. **Lagoon** and **Palm Green** act as secondary tones for supportive UI elements and environmental cues, while **Sunset Coral** is reserved exclusively for high-priority calls to action or seasonal highlights, ensuring it retains its impact as a rare accent.

## Typography

The typographic hierarchy utilizes three distinct families to manage pace and tone. 

- **EB Garamond** (Hero): Used for primary marketing statements and large display moments. It should be typeset with tight tracking to emphasize its elegant, serifed character.
- **Playfair Display** (Section Titles): Provides a structured, editorial feel for content discovery and section headers.
- **Inter** (Body): Ensures maximum legibility for long-form descriptions and property details.
- **Manrope** (Utility): Used for navigation, buttons, and labels. Its geometric clarity provides the "tech-forward" feel required for a seamless booking experience.

## Layout & Spacing

This design system uses a **Fluid Grid** with fixed maximum constraints. On desktop, a 12-column layout is employed with generous 64px outer margins to maintain the "luxury boutique" feel. 

Vertical spacing is intentionally "airy." Section gaps should rarely be less than 120px on desktop to prevent visual clutter. Content is often staggered or offset to mimic the layout of an architectural digest, breaking the rigidity of standard web grids while maintaining alignment with the 8px base unit.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and soft, environmental shadows rather than heavy layering. 

- **Surface Layers:** Use a background blur of 20px-30px on white containers with 70-80% opacity. This creates a "frosted glass" effect that allows the tropical colors of the background photography to bleed through.
- **Shadows:** Shadows are highly diffused and low-opacity (5-10%), using a slight tint of the Primary Deep Ocean (#0E4F5B) instead of pure black to maintain a natural, organic feel.
- **Borders:** Subtle 1px borders in a lighter tint of the background color are used on glass elements to define edges against vibrant backgrounds.

## Shapes

The visual language uses a signature **24px (1.5rem)** corner radius for all primary containers, cards, and imagery. This large radius softens the interface, echoing the organic forms found in nature and high-end resort architecture. Smaller elements like buttons and input fields follow a consistent 8px or 12px radius to maintain a precise, functional look within the softer layout.

## Components

- **Buttons:** Primary buttons are solid Deep Ocean with Manrope Medium text in Ocean White. Secondary buttons use a glassmorphic background with a subtle border. Hover states should include a slight lift (elevation change) and a gentle expansion of the shadow.
- **Cards:** Property and Experience cards feature the signature 24px radius. Imagery is the focal point, with a subtle gradient overlay at the bottom to ensure legibility of white Playfair Display titles.
- **Inputs:** Form fields are minimalist with a 1px bottom border in Warm Sand. Focus states should transition the border to Deep Ocean with a soft Lagoon-tinted glow.
- **Chips:** Used for amenities (e.g., "Private Pool"). These should be Pill-shaped with a light Warm Sand background and Deep Ocean text, keeping the typography in Manrope Bold at 12px.
- **Navigation:** The header is a persistent glassmorphic bar that blurs the content beneath as the user scrolls, maintaining the "Hidden Sanctuary" atmosphere throughout the journey.
- **Date Picker:** Should feel tactile and spacious, utilizing a soft grid and the Warm Sand palette to highlight selected dates.
