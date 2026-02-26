# Savannah Events - Project Specification

## 1. Project Overview

**Project Name:** Savannah Events  
**Type:** Full-stack Event Management Website  
**Core Functionality:** A comprehensive event management platform offering event organizing, MC services, outside gatherings, and event management services with booking capabilities, admin dashboard, and WhatsApp integration.  
**Target Users:** Corporate clients, wedding planners, individuals seeking event services in Kenya and East Africa.

---

## 2. UI/UX Specification

### 2.1 Layout Structure

#### Page Sections
- **Header:** Fixed navigation with logo, main navigation links, WhatsApp CTA, and admin login
- **Hero:** Full-viewport hero sections with animated backgrounds and CTAs
- **Content Areas:** Services showcase, events calendar, gallery, testimonials
- **Footer:** Contact info, quick links, social media, business hours

#### Grid System
- Container max-width: 1280px
- Gutter: 24px (mobile: 16px)
- 12-column grid system via Tailwind CSS

#### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### 2.2 Visual Design

#### Color Palette
```css
--primary: #1A4731          /* Deep Forest Green */
--primary-light: #2D6A4F    /* Light Green */
--primary-dark: #0D1B12    /* Dark Green */

--accent: #D4A853          /* Gold */
--accent-light: #E9C46A    /* Light Gold */

--background: #FAF8F5      /* Warm Off-white */
--background-dark: #0D1B12 /* Dark Background */
```

#### Typography
- **Headings:** Playfair Display (serif)
  - H1: 48px / 60px mobile: 36px
  - H2: 36px / mobile: 28px
  - H3: 24px / mobile: 20px
  - H4: 20px / mobile: 18px
- **Body:** DM Sans (sans-serif)
  - Base: 16px
  - Small: 14px
  - Large: 18px

#### Spacing System
- Section padding: 80px vertical (mobile: 48px)
- Component gap: 24px
- Card padding: 24px

#### Visual Effects
- Card shadows: `0 4px 24px rgba(26, 71, 49, 0.08)`
- Elevated shadows: `0 8px 32px rgba(26, 71, 49, 0.12)`
- Border radius: Cards 16px, Buttons 8px, Inputs 8px

### 2.3 Components

#### Navigation
- Desktop: Horizontal menu with hover states
- Mobile: Slide-in drawer with overlay
- Sticky header with backdrop blur on scroll

#### Buttons
- Primary: Gold background, dark text, hover darken
- Secondary: Outlined, primary color
- Ghost: Text only with hover background
- States: Hover, Active, Disabled, Loading

#### Cards
- Service cards with icon, title, description
- Event cards with date, title, location, category badge
- Testimonial cards with avatar, name, rating, content

#### Forms
- Input fields with labels and validation states
- Select dropdowns with custom styling
- Textarea for longer content

#### Modals
- Centered overlay with backdrop blur
- Close button, smooth enter/exit animations

---

## 3. Functionality Specification

### 3.1 Core Features

#### Pages
1. **Home Page**
   - Hero with CTA to WhatsApp booking
   - Services showcase (4 niches)
   - Stats counter
   - Upcoming events preview
   - Why choose us section
   - Testimonials
   - CTA section

2. **Services Page**
   - Detailed service descriptions
   - Features lists
   - Pricing information
   - FAQ section
   - Booking CTA

3. **Events Calendar Page**
   - Interactive monthly calendar
   - Event list view
   - Category filtering
   - Event detail modal
   - Booking functionality

4. **Gallery Page**
   - Masonry grid layout
   - Category filters
   - Lightbox viewer
   - Image navigation

5. **Contact Page**
   - Contact form with validation
   - Contact information cards
   - WhatsApp integration
   - Business hours

6. **Admin Dashboard**
   - Overview statistics
   - Recent bookings table
   - Quick actions

7. **Admin Events Management**
   - Event CRUD operations
   - Publish/unpublish toggle
   - Category management

8. **Admin Bookings Management**
   - Booking list with filters
   - Status management (Pending/Confirmed/Cancelled/Completed)
   - Payment tracking

9. **Admin Clients Management**
   - Client list
   - Booking history
   - Contact information

10. **Admin Login**
    - Email/password authentication
    - NextAuth.js integration

### 3.2 Integrations

#### WhatsApp API
- Direct link to WhatsApp with pre-filled message
- Phone number from environment variable
- Multiple message templates

#### Google Analytics
- GA4 tracking code
- Page view events
- Custom events for conversions

#### Database
- PostgreSQL via Prisma ORM
- User authentication
- Event management
- Booking system
- Gallery images
- Testimonials
- Services

### 3.3 SEO

#### Meta Tags
- Title templates per page
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Canonical URLs

#### Structured Data
- Organization schema
- Event schema
- LocalBusiness schema
- FAQ schema

#### Technical SEO
- Sitemap generation
- Robots.txt
- Fast loading pages
- Semantic HTML

---

## 4. Acceptance Criteria

### Visual Checkpoints
- [ ] Color palette matches specification
- [ ] Typography is consistent throughout
- [ ] All pages are responsive
- [ ] Animations are smooth
- [ ] Navigation works on all devices

### Functional Checkpoints
- [ ] WhatsApp integration works
- [ ] Calendar displays correctly
- [ ] Gallery filters work
- [ ] Contact form validates
- [ ] Admin authentication works
- [ ] Admin dashboard displays data
- [ ] Google Analytics tracks

### SEO Checkpoints
- [ ] All pages have unique titles
- [ ] Meta descriptions are present
- [ ] Open Graph tags work
- [ ] Structured data is valid
- [ ] Pages load quickly

---

## 5. Technical Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Auth:** NextAuth.js
- **Database:** PostgreSQL + Prisma
- **Icons:** Lucide React
- **Hosting:** Vercel/Netlify

---

## 6. Environment Variables

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP_NUMBER=254700000000
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=...
NEXTAUTH_URL=http://localhost:3000
```
