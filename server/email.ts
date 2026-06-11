import { Inbound } from "inboundemail";

const apiKey = process.env.INBOUND_API_KEY || "";

if (!apiKey) {
  console.warn("INBOUND_API_KEY not found — emails will not be sent");
}

const client = apiKey ? new Inbound(apiKey) : null;

export async function sendEmail(
  to: string | string[],
  subject: string,
  html: string
): Promise<boolean> {
  if (!client) {
    console.error("Email client not configured - INBOUND_API_KEY is missing");
    return false;
  }

  try {
    await client.emails.send({
      from: "Cledwyn from Lekker Network <cledwyn@lekker.network>",
      to,
      subject,
      html,
    });
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
}
