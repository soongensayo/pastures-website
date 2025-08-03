import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Pastures Contact Form <contact@pastures.app>',
      to: ['soongen@pastures.app'],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #3b82f6, #10b981); padding: 30px; border-radius: 12px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">
              New Contact Form Submission
            </h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">
              From the Pastures website
            </p>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border-radius: 12px; border-left: 4px solid #3b82f6;">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">
                Contact Information
              </h3>
              <p style="margin: 0; color: #6b7280;">
                <strong>Name:</strong> ${name}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Subject:</strong> ${subject}
              </p>
            </div>
            
            <div>
              <h3 style="color: #374151; margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">
                Message
              </h3>
              <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          </div>
          
          <div style="margin-top: 20px; padding: 20px; background: #f0fdf4; border-radius: 8px; border-left: 4px solid #10b981;">
            <p style="margin: 0; color: #065f46; font-size: 14px;">
              💡 <strong>Quick Reply:</strong> Simply reply to this email to respond directly to ${name}
            </p>
          </div>
          
          <div style="margin-top: 30px; text-align: center; color: #9ca3af; font-size: 12px;">
            <p style="margin: 0;">
              "He makes me lie down in green <span style="color: #10b981; font-weight: 600;">pastures</span>..." - Psalm 23:2
            </p>
          </div>
        </div>
      `,
    })

    console.log('Email sent successfully:', data)

    return NextResponse.json(
      { message: 'Email sent successfully', id: data.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}