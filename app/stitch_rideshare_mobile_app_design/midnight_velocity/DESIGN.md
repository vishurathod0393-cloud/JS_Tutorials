---
name: Midnight Velocity
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#c2c6d8'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#8c90a1'
  outline-variant: '#424656'
  surface-tint: '#b3c5ff'
  primary: '#b3c5ff'
  on-primary: '#002b75'
  primary-container: '#0066ff'
  on-primary-container: '#f8f7ff'
  inverse-primary: '#0054d6'
  secondary: '#a5e7ff'
  on-secondary: '#003543'
  secondary-container: '#00d2ff'
  on-secondary-container: '#00566a'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#007aa5'
  on-tertiary-container: '#f1f8ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa4'
  secondary-fixed: '#b6ebff'
  secondary-fixed-dim: '#47d6ff'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e60'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#0f131c'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system targets urban commuters, business professionals, and late-night travelers who demand immediate, frictionless transit. The brand mood is confident, precise, and technologically advanced—evoking the calm focus of high-end automotive cockpits and urban skylines after dark.

The visual style merges **Modern Precision Minimalism** with subtle **Cockpit Glassmorphism**:
- Ultra-deep, non-reflective surfaces that eliminate visual glare during nighttime mobility.
- Electric cyan-blue accents that command instant focus for critical interactions (driver matching, real-time routing, safety triggers).
- High visual hierarchy engineered for one-handed thumb navigation, variable street lighting, and rapid in-motion readability.

## Colors

The palette leverages pure deep-space darks layered beneath high-energy electric signals to establish instant hierarchy on OLED mobile screens.

### Palette Architecture
- **Canvas / Root Background (`#0B0F17`):** Absolute ground plane representing nighttime roadways. Preserves OLED battery life and suppresses ambient glare.
- **Surface Elevation Tiers:**
  - **Surface Default (`#111827`):** Docked sheets, background map modules, persistent nav panels.
  - **Surface Raised (`#1E293B`):** Interactive cards, ride selection segments, driver info overlays.
  - **Surface Highlight (`#334155`):** Pressed states, floating control rings, divider thresholds.
- **Primary Signal (`#0066FF`):** Dominant action color for primary CTAs ("Confirm Ride", "Request Priority").
- **Secondary & Accent Signals (`#00D2FF` & `#38BDF8`):** Live telemetry, vehicle pins, route paths, active pickup surge multipliers.
- **Functional Semantics:**
  - **Success / On-Time (`#10B981`):** Driver arrived, trip completed, green lights.
  - **Alert / Surge (`#F59E0B`):** Surge pricing, route diversion, heavy traffic delays.
  - **Critical / Emergency (`#EF4444`):** Cancel trip, SOS beacon, disconnected GPS.
- **Text & Foreground:**
  - **Text Primary (`#F8FAFC`):** Headline text, ETA durations, fare figures.
  - **Text Secondary (`#94A3B8`):** Subheadings, plate numbers, street addresses.
  - **Text Muted (`#64748B`):** Inactive indicators, micro-metadata.

## Typography

The type system relies entirely on **Inter** to ensure maximum legibility at glancing angles and during vehicle vibration. 

- **Numeric Prioritization:** All monetary figures, ETAs, and license plate badges use tabular numeral settings (`font-feature-settings: "tnum" on, "cv05" on`) to eliminate jitter during real-time GPS countdowns.
- **Hierarchy Rules:** 
  - `display-lg-mobile` is reserved strictly for immediate status confirmations ("Your driver is arriving") and final receipt totals.
  - `headline-lg` and `headline-md` establish spatial anchors for destination lookups and vehicle tier selection (Black, Comfort, Electric).
  - All uppercase micro-copy (e.g., license plate tags, status pills) strictly employs `label-sm` with widened letter-spacing (`0.05em`) to maintain clarity against slate backgrounds.

## Layout & Spacing

The layout is built for fluid mobile-first ergonomics, keeping the map viewport alive in the upper visual hemisphere while concentrating touch targets within the lower thumb zone (bottom 40% of the screen).

- **Grid & Safe Zones:**
  - Standard mobile screens utilize a fluid 4-column column structure flanked by `margin` (`16px`) and `gutter` (`16px`).
  - Modal sheets stick to the bottom screen edge with explicit safe-area bottom insets (`min-height: env(safe-area-inset-bottom, 20px)`).
- **Interactive Thumb Zone Rhythm:**
  - Crucial interactions (booking trigger, safety button) require a minimum tap target of `48px` with `space-md` (`16px`) separation between parallel controls.
  - Bottom sheet content modules stack with `space-sm` (`8px`) vertical gaps for vehicle class selection items and `space-md` for grouped trip telemetry.

## Elevation & Depth

Depth is conveyed through **Tonal Lamination and Cockpit Glassmorphism** rather than traditional drop shadows, avoiding muddy edges on dark OLED screens.

1. **Base Layer (Elevation 0 - Map Canvas):** `#0B0F17` darkened custom vector tiles with muted streets and electric blue polyline paths.
2. **Docked Surface Layer (Elevation 1 - Bottom Drawer):** Background `#111827` at `94%` opacity with a hardware-accelerated `backdrop-filter: blur(20px)` and a crisp hairline top border (`1px solid rgba(255, 255, 255, 0.08)`).
3. **Floating Interactive Layer (Elevation 2 - Vehicle Cards & Floating Map Controls):** `#1E293B` background with subtle ambient blue-tinted drop shadows (`0 8px 24px -4px rgba(0, 102, 255, 0.12), 0 2px 6px 0 rgba(0, 0, 0, 0.4)`).
4. **Overlay / Active Layer (Elevation 3 - Selected Tier & Emergency Modals):** Accent-illuminated boundary using a multi-stop border gradient: `rgba(0, 210, 255, 0.5)` to `rgba(0, 102, 255, 0.2)` with a soft cyan glow halo (`box-shadow: 0 0 20px rgba(0, 210, 255, 0.15)`).

## Shapes

The design system employs a refined modern curvature balance (Level 2):

- **Cards & Bottom Sheets:** Primary cards, driver info sheets, and ride selection modules use `rounded-xl` (`1.5rem` / `24px`) along top sheet corners, transitioning down to `rounded-lg` (`1rem` / `16px`) for self-contained internal cards.
- **Controls & Input Fields:** Search bars, pickup location inputs, and standard buttons adhere to `rounded-lg` (`16px`).
- **Pills & Badges:** Ride status alerts, ETA indicators, promo chips, and vehicle category pills use absolute pill geometries (`border-radius: 9999px`) to immediately separate metadata from rectangular interactive cards.

## Components

### Buttons
- **Primary CTA ("Confirm"):** Full-width, `56px` height, `rounded-lg` (`16px`). Background is `#0066FF` featuring bold `label-lg` white text. Pressed state shifts to `#0052CC` with `scale(0.98)`.
- **Secondary ("Change Pickup / Add Stop"):** Dark slate `#1E293B` with `1px` subtle outline (`rgba(255, 255, 255, 0.08)`), hover/press lightens to `#334155`.
- **Floating Map Controls:** `44x44px` circular pill buttons (`rounded-full`) in `#111827` at `90%` blur, housing monochrome glyphs for re-centering location and SOS beacons.

### Vehicle Selection Cards
- Stacking horizontal cards (`#1E293B`) with `space-md` internal padding. Left section showcases vehicle rendering; center contains ride tier name and passenger capacity; right displays live ETA and dynamic pricing.
- **Selected State:** Border lights up with `1.5px solid #00D2FF`, paired with an ambient cyan reflection.

### Chips & Badges
- **Status Pills:** Continuous `9999px` radius, `space-xs` vertical padding, `space-sm` horizontal padding.
  - *Fastest ETA:* Dark cyan background (`rgba(0, 210, 255, 0.1)`) with `#00D2FF` text.
  - *Surge Active:* Amber tint (`rgba(245, 158, 11, 0.1)`) with `#F59E0B` text.
- **License Plate Chip:** Deep slate container (`#0B0F17`) featuring a `1px` light gray outline, monospaced Inter numerals, and a gold/blue state indicator marker.

### Input Fields (Pickup & Destination)
- Minimum height `52px`, `#111827` surface fill with low-contrast borders (`#1E293B`).
- Active focus triggers an electric border transition (`#0066FF`) and a subtle outer cyan glow.
- Leading markers: Green solid dot for pickup origin; Electric Blue square for final drop-off.

### Ride Tracking Timeline & List Modules
- Continuous thin vertical trajectory line (`2px solid #334155`) connecting origin and destination nodes.
- Driver information card anchors a rounded profile avatar (`48x48px`), star rating pill badge (`#F59E0B`), and direct call/message action buttons.