import { Resend } from "resend";

export async function handler(event) {
  try {
    console.log("Function triggered ✅");

    const body = JSON.parse(event.body || "{}");

    if (!body.record) {
      throw new Error("No record found");
    }

    const { name, email, message } = body.record;

    const resend = new Resend(process.env.RESEND_API_KEY);

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "nath.bishal@icloud.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    console.log("Email sent:", response);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("FULL ERROR ❌:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
}