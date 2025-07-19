import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Send email to you (business owner)
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Message",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    // 2. Send auto-reply to the user
    await transporter.sendMail({
      from: `"Essential Sites" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for reaching out to Essential Sites!",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting <strong>Essential Sites</strong>! We've received your message and will get back to you within 24 hours.</p>
        <p><em>Your message:</em></p>
        <blockquote style="border-left: 3px solid #ccc; padding-left: 10px; margin-left: 0;">${message}</blockquote>
        <p>We appreciate your interest and look forward to connecting with you!</p>
        <p>– The Essential Sites Team</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Email failed to send." }), { status: 500 });
  }
}
