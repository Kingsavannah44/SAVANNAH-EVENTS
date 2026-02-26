# Savannah Events - Premier Event Management Website

A comprehensive, modern event management website built with Next.js, featuring event organizing, MC services, outside gatherings, and full event management capabilities.

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-cyan?style=flat&logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-5+-indigo?style=flat)

## ✨ Features

### Core Services
- **Event Organizing** - Complete event planning and coordination
- **MC Services** - Professional master of ceremonies
- **Outside Gatherings** - Outdoor venue transformation
- **Event Management** - Full-service event management

### Website Features
- 🎨 Modern, responsive design with Tailwind CSS
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Smooth animations with Framer Motion
- 📅 Interactive events calendar
- 🖼️ Dynamic gallery with category filters
- 💬 WhatsApp API integration for instant booking
- 📊 Google Analytics integration
- 🔍 SEO optimized with meta tags and structured data

### Admin Dashboard
- 📈 Dashboard overview with statistics
- 📅 Event management (CRUD operations)
- 📋 Booking management with status tracking
- 👥 Client management
- ⚙️ Settings panel
- 🔐 Secure authentication with NextAuth.js

## 🚀 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Auth:** NextAuth.js
- **Database:** PostgreSQL + Prisma ORM
- **Icons:** Lucide React

## 📁 Project Structure

```
savannah-events/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard pages
│   │   ├── bookings/     # Bookings management
│   │   ├── clients/     # Clients management
│   │   ├── dashboard/   # Main dashboard
│   │   ├── events/     # Events management
│   │   ├── login/      # Admin login
│   │   └── settings/   # Settings page
│   ├── api/             # API routes
│   ├── contact/         # Contact page
│   ├── events/         # Events calendar page
│   ├── gallery/        # Gallery page
│   └── services/       # Services page
├── components/          # React components
│   ├── layouts/        # Header, Footer
│   ├── pages/          # Page components
│   └── ui/             # UI components
├── lib/                 # Utility functions
├── prisma/              # Database schema
└── public/              # Static files
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd savannah-events
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```

   Update `.env` with your values:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/savannahevents
   NEXTAUTH_SECRET=your-secret-key
   NEXTAUTH_URL=http://localhost:3000
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_WHATSAPP_NUMBER=254700000000
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open the website**
   Visit [http://localhost:3000](http://localhost:3000)

## 📋 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `NEXTAUTH_SECRET` | Secret for NextAuth.js | Yes |
| `NEXTAUTH_URL` | Base URL for auth | Yes |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics ID | No |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number for booking | Yes |

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npx prisma studio # Open Prisma database studio
```

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#1A4731` | Main brand color |
| Primary Light | `#2D6A4F` | Hover states |
| Primary Dark | `#0D1B12` | Dark backgrounds |
| Accent | `#D4A853` | CTAs, highlights |
| Background | `#FAF8F5` | Page background |

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card support
- JSON-LD structured data
- XML sitemap
- robots.txt configuration

## 📊 Google Analytics Events

The following events are tracked:
- Page views
- WhatsApp button clicks
- Contact form submissions
- Event booking clicks
- Gallery interactions

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel deploy
```

### Environment Setup on Vercel
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)
- [Prisma](https://www.prisma.io)

---

Built with ❤️ by Savannah Events
