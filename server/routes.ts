import type { Express } from "express";
import { createServer, type Server } from "http";
import { log } from "./index";

async function sendZeptoEmail(token: string, to: { address: string; name: string }, subject: string, htmlbody: string) {
  const response = await fetch("https://api.zeptomail.com/v1.1/email", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": token,
    },
    body: JSON.stringify({
      from: {
        address: "noreply@cityfresh.co.za",
        name: "CityFresh"
      },
      to: [{ email_address: to }],
      subject,
      htmlbody,
    }),
  });
  return response;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/send-mail", async (req, res) => {
    try {
      const { name, phone, email, message } = req.body;

      if (!name || !phone || !message) {
        return res.status(400).json({ message: "Name, phone and message are required" });
      }

      const token = process.env.ZEPTOMAIL_TOKEN;
      if (!token) {
        log("ZEPTOMAIL_TOKEN not configured", "mail");
        return res.status(500).json({ message: "Email service not configured" });
      }

      const adminEmailBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #2d8a4e; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">CityFresh - New Enquiry</h1>
          </div>
          <div style="padding: 24px; background: #f9fafb;">
            <h2 style="color: #1a2e1a; margin-top: 0;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Name:</td><td style="padding: 8px 0; color: #6b7280;">${name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td><td style="padding: 8px 0; color: #6b7280;">${phone}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td><td style="padding: 8px 0; color: #6b7280;">${email || 'Not provided'}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e5e7eb;">
              <p style="font-weight: bold; color: #374151; margin-top: 0;">Message:</p>
              <p style="color: #6b7280; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="padding: 16px; text-align: center; color: #9ca3af; font-size: 12px;">
            Sent from CityFresh website contact form
          </div>
        </div>
      `;

      const adminResponse = await sendZeptoEmail(
        token,
        { address: "info@cityfresh.co.za", name: "CityFresh" },
        `New Enquiry from ${name} - CityFresh Website`,
        adminEmailBody
      );

      if (!adminResponse.ok) {
        const result = await adminResponse.json();
        log(`ZeptoMail admin error: ${JSON.stringify(result)}`, "mail");
        return res.status(500).json({ message: "Failed to send email" });
      }

      log(`Admin email sent successfully for contact: ${name}`, "mail");

      if (email && email.trim()) {
        const userEmailBody = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #2d8a4e; padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">CityFresh</h1>
            </div>
            <div style="padding: 24px; background: #f9fafb;">
              <h2 style="color: #1a2e1a; margin-top: 0;">Thank you for contacting us, ${name}!</h2>
              <p style="color: #6b7280; line-height: 1.6;">We've received your message and will get back to you as soon as possible.</p>
              <p style="color: #6b7280; line-height: 1.6;">For a faster response, you can also reach us on WhatsApp:</p>
              <div style="text-align: center; margin: 24px 0;">
                <a href="https://wa.me/27693193534" style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">Chat on WhatsApp</a>
              </div>
              <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e5e7eb;">
                <p style="font-weight: bold; color: #374151; margin-top: 0;">Your message:</p>
                <p style="color: #6b7280; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            <div style="padding: 16px; text-align: center; color: #9ca3af; font-size: 12px;">
              CityFresh &middot; 25 Dirkie Uys Street, Somerset West, Cape Town<br/>
              <a href="tel:+27693193534" style="color: #9ca3af;">069 319 3534</a>
            </div>
          </div>
        `;

        try {
          const userResponse = await sendZeptoEmail(
            token,
            { address: email.trim(), name: name },
            "Thank you for contacting CityFresh!",
            userEmailBody
          );
          if (userResponse.ok) {
            log(`User confirmation email sent to: ${email}`, "mail");
          } else {
            const result = await userResponse.json();
            log(`User email failed (non-critical): ${JSON.stringify(result)}`, "mail");
          }
        } catch (userErr: any) {
          log(`User email error (non-critical): ${userErr.message}`, "mail");
        }
      }

      return res.json({ success: true, message: "Email sent successfully" });
    } catch (error: any) {
      log(`Mail error: ${error.message}`, "mail");
      return res.status(500).json({ message: "Failed to send email" });
    }
  });

  return httpServer;
}
