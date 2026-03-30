const {Resend} = require("resend");

const resend = new Resend(process.env.Resend_API_KEY);

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const { name, email, message } = body.record;

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'nath.bishal@icloud.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Message From Portfolio website</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};