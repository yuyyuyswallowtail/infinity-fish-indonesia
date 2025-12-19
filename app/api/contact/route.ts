import nodemailer from "nodemailer";

interface ContactRequestBody {
  name: string;
  email: string;
  description: string;
  token: string;
}

interface RecaptchaResponse {
  success: boolean;
  score?: number;
  action?: string;
  "error-codes"?: string[];
}

export async function POST(req: Request): Promise<Response> {
  const body = (await req.json()) as ContactRequestBody;
  const { name, email, description, token } = body;

  if (!name || !email || !description || !token) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
    });
  }

  // 🔐 Verify reCAPTCHA
  const captchaRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    },
  );

  const captchaData = (await captchaRes.json()) as RecaptchaResponse;

  if (!captchaData.success) {
    return new Response(
      JSON.stringify({ error: "Captcha verification failed" }),
      { status: 403 },
    );
  }

  // 📧 Mail transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // 1️⃣ Email to YOU
    await transporter.sendMail({
      from: `"Contact Form" ${email}`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New description from ${name}`,
      html: `
        <h3>New Contact description</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>description:</b> ${description}</p>
      `,
    });

    // 2️⃣ Confirmation Email to USER
    await transporter.sendMail({
      from: `"Infinity Fish Indonesia>`,
      to: email,
      subject: "We received your description",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting us! We’ve received your description and will respond shortly.</p>
        <br />
        <p><b>Your description:</b></p>
        <p>${description}</p>
        <br />
        <p>Best regards,<br />Infinity Fish Indonesia</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Email failed to send" }), {
      status: 500,
    });
  }
}
