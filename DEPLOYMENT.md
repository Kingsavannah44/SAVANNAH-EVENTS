# Savannah Events - Deployment Checklist

## Pre-Deployment

### Environment Variables
- [ ] Set `DATABASE_URL` to production PostgreSQL database
- [ ] Generate secure `NEXTAUTH_SECRET` (use: `openssl rand -base64 32`)
- [ ] Set `NEXTAUTH_URL` to production domain
- [ ] Set `NEXT_PUBLIC_SITE_URL` to production domain
- [ ] Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` for Google Analytics
- [ ] Verify `NEXT_PUBLIC_WHATSAPP_NUMBER` is correct

### Database
- [ ] **Development:** SQLite is already configured (file:./dev.db)
- [ ] **Production Option 1 (SQLite):** Keep SQLite for simple deployments
- [ ] **Production Option 2 (PostgreSQL - Recommended):**
  - Set up PostgreSQL database
  - Update `prisma/schema.prisma` provider to `postgresql`
  - Update `DATABASE_URL` to PostgreSQL connection string
  - Run `npx prisma generate`
  - Run `npx prisma db push`
  - Run `npm run db:seed` to create admin user
- [ ] Update admin password after first login

### Security
- [ ] Remove any test/demo data
- [ ] Verify admin routes are protected
- [ ] Test authentication flow
- [ ] Enable HTTPS on production domain
- [ ] Set secure cookie settings in NextAuth

### Content
- [ ] Update contact information if needed
- [ ] Add real event images to `/public/images/`
- [ ] Update hero carousel images
- [ ] Add gallery images
- [ ] Verify all links work correctly

### SEO
- [ ] Update `robots.txt` with production domain
- [ ] Create sitemap.xml
- [ ] Verify meta tags on all pages
- [ ] Test Open Graph images
- [ ] Submit sitemap to Google Search Console

### Performance
- [ ] Run `npm run build` to check for errors
- [ ] Test on mobile devices
- [ ] Optimize images (use WebP format)
- [ ] Enable caching headers
- [ ] Test page load speeds

## Deployment Steps

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Manual Deployment
1. Run `npm run build`
2. Upload `.next`, `public`, `node_modules` to server
3. Set environment variables
4. Run `npm start`

## Post-Deployment

- [ ] Test all pages on production
- [ ] Test contact form
- [ ] Test WhatsApp integration
- [ ] Test admin login
- [ ] Test booking flow
- [ ] Monitor error logs
- [ ] Set up analytics tracking
- [ ] Set up uptime monitoring

## Admin Credentials

Default admin account:
- Email: admin@savannahevents.com
- Password: admin123

**IMPORTANT: Change password immediately after first login!**

## Support

For issues or questions:
- Email: info@savannahevents.com
- Phone: +254 715 970 249

## Backup

- [ ] Set up automated database backups
- [ ] Test backup restoration
- [ ] Document backup procedures
