import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, source, honeypot } = req.body;

  // Simple Honeypot Anti-Spam Strategy
  // If the hidden 'honeypot' field is filled (by a bot), we ignore the request
  // but return success so the bot thinks it worked.
  if (honeypot) {
    console.log('Bot detected via honeypot. Ignoring.');
    return res.status(200).json({ message: 'Lead captured successfully' });
  }

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // Debug logging
  console.log('Attempting to send email...');
  console.log('EMAIL_USER present:', !!process.env.EMAIL_USER);
  console.log('EMAIL_PASS present:', !!process.env.EMAIL_PASS);

  try {
    // Configure the transporter
    // For Gmail, efficient setup often requires an App Password
    // Env vars: EMAIL_USER (your gmail), EMAIL_PASS (app password)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'qzhang03022@gmail.com', // The admin receiving the lead
      subject: `RZDigtialStudio: New Lead Captured from ${source || 'Website'}`,
      text: `
        You have a new lead capture!
        
        Email: ${email}
        Source: ${source}
        Date: ${new Date().toLocaleString()}
      `,
      html: `
        <h2>New Lead Captured</h2>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Source:</strong> ${source}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Lead captured successfully' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    // Even if email fails, we might want to log it or return success to user so they get access
    return res.status(500).json({ message: 'Failed to record lead', error: error.message });
  }
}
