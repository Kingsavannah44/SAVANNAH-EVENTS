# 🚀 Quick Start Guide

## Run the Application

### Option 1: Automated Setup (Recommended)
```bash
setup-and-run.bat
```

### Option 2: Manual Setup
```bash
# 1. Generate Prisma Client
npm run db:generate

# 2. Push Database Schema
npm run db:push

# 3. Create Admin User
npm run db:seed

# 4. Start Development Server
npm run dev
```

## 🔐 Admin Access

**Login URL:** http://localhost:3000/admin

**Credentials:**
- Email: `admin@savannahevents.com`
- Password: `admin123`

## 📋 What You Can Do

### As Admin:
1. **Dashboard** - View business metrics and statistics
2. **Events** - Manage all registered events
   - Add new events
   - Edit existing events
   - Publish/unpublish events
   - Mark events as featured
   - Delete events
3. **Bookings** - View and manage client bookings
4. **Clients** - Manage client information
5. **Settings** - Update admin profile and settings

### Public Website:
- **Home** - Hero section with dynamic services and background images
- **Services** - View all services offered
- **Events** - Browse upcoming events
- **Gallery** - View event photos
- **Contact** - Contact form and WhatsApp integration
- **Floating WhatsApp Button** - Glowing button on all pages

## ✨ Key Features

### Frontend:
- ✅ Professional navigation bar with active states
- ✅ Dynamic hero section with image carousel
- ✅ Floating WhatsApp button with glow effects
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth animations with Framer Motion
- ✅ Official WhatsApp icons

### Admin Dashboard:
- ✅ Secure authentication (NextAuth.js)
- ✅ Protected routes
- ✅ Events management with search and filters
- ✅ Real-time statistics
- ✅ Professional UI with Tailwind CSS

## 🛠️ Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- NextAuth.js
- Prisma ORM
- PostgreSQL

## 📞 Support
For issues or questions, check the README.md and ADMIN_SETUP.md files.
