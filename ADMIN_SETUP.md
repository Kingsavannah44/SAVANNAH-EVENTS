# Admin Dashboard Setup

## Quick Start

### 1. Setup Database
```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Create admin user
npm run db:seed
```

### 2. Admin Login Credentials
- **Email:** admin@savannahevents.com
- **Password:** admin123

### 3. Access Admin Dashboard
1. Go to: http://localhost:3000/admin
2. Login with the credentials above
3. You'll be redirected to the dashboard

## Admin Features

### Dashboard (`/admin/dashboard`)
- View statistics (bookings, revenue, clients, events)
- See recent bookings
- Quick overview of business metrics

### Events Management (`/admin/events`)
- View all registered events
- Search and filter events by category
- Publish/unpublish events
- Mark events as featured
- Edit and delete events
- Add new events

### Bookings Management (`/admin/bookings`)
- View all bookings
- Update booking status (Pending, Confirmed, Cancelled, Completed)
- Track payment status
- Manage client bookings

### Clients Management (`/admin/clients`)
- View all clients
- Manage client information
- Track client bookings

### Settings (`/admin/settings`)
- Update admin profile
- Change password
- Configure system settings

## Security Features
- ✅ Protected routes (requires authentication)
- ✅ Session-based authentication with NextAuth
- ✅ Password hashing with bcrypt
- ✅ Automatic redirect to login for unauthenticated users
- ✅ Role-based access (ADMIN only)

## Database Schema
The admin can manage:
- **Events** - All event listings
- **Bookings** - Client bookings and reservations
- **Users** - Admin and client accounts
- **Gallery** - Event photos
- **Testimonials** - Client reviews
- **Services** - Service offerings
