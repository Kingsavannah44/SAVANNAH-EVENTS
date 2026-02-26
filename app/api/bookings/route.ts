import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET all bookings (admin only)
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || !session.user || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    const where = status ? { status: status as any } : {}

    const [bookings, total] = await Promise.all([
      prisma.booking.findMany({
        where,
        include: {
          event: true,
        },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.booking.count({ where }),
    ])

    return NextResponse.json({
      bookings,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    )
  }
}

// POST create a new booking
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      clientName,
      clientEmail,
      clientPhone,
      eventDate,
      eventType,
      guestCount,
      notes,
      totalAmount,
    } = body

    if (!clientName || !clientPhone || !eventDate || !eventType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const booking = await prisma.booking.create({
      data: {
        clientName,
        clientEmail,
        clientPhone,
        eventDate: new Date(eventDate),
        eventType: eventType as any,
        guestCount: guestCount ? parseInt(guestCount) : null,
        notes,
        totalAmount: totalAmount ? parseFloat(totalAmount) : null,
        status: 'PENDING',
        paymentStatus: 'UNPAID',
      },
    })

    return NextResponse.json(booking, { status: 201 })
  } catch (error) {
    console.error('Error creating booking:', error)
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    )
  }
}
