const { PrismaClient } = require('@prisma/client')
const { hash } = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await hash('admin123', 10)
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@savannahevents.com' },
    update: {},
    create: {
      email: 'admin@savannahevents.com',
      name: 'Admin',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  console.log('✅ Admin user created:', admin.email)
  console.log('📧 Email: admin@savannahevents.com')
  console.log('🔑 Password: admin123')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
