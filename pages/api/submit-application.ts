import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
    success: boolean;
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    const {
        fullName,
        email,
        identityDNA,
        academicTrends,
        visualEvidenceLink,
        narrativeBlock,
        major,
        honors,
        projects,
        creativePortfolio,
        leadership,
        easterEgg,
        designAesthetic,
    } = req.body;


    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('Missing email credentials');
        return res.status(500).json({ success: false, message: 'Server configuration error' });
    }


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS, // Application-specific password recommended
        },
    });

        const mailOptions = {
                from: process.env.EMAIL_USER,
                to: 'qzhang03022@gmail.com',
                subject: `New Portfolio Application from ${fullName}`,
                html: `
            <h2>New Student Portfolio Request</h2>
            <hr />
            <h3>Contact Info</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Major:</strong> ${major}</p>
            <hr />
            <h3>Core Narrative</h3>
      <p><strong>Identity DNA:</strong> ${identityDNA}</p>
      <p><strong>STAR Narrative (Adversity):</strong><br/>${narrativeBlock}</p>
      <p><strong>Easter Egg:</strong> ${easterEgg}</p>
      <hr />
      <h3>Assets & Evidence</h3>
      <p><strong>Visual Assets Link:</strong> <a href="${visualEvidenceLink}">${visualEvidenceLink}</a></p>
      <p><strong>Academic Trends:</strong> ${academicTrends}</p>
      <p><strong>Honors:</strong><br/>${honors}</p>
      <p><strong>Projects:</strong><br/>${projects}</p>
      <p><strong>Creative Portfolio:</strong> ${creativePortfolio}</p>
      <p><strong>Leadership:</strong> ${leadership}</p>
      <hr />
      <h3>Design</h3>
      <p><strong>Aesthetic Preference:</strong> ${designAesthetic}</p>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Application submitted successfully!' });
    } catch (error) {
        console.error('Email send error:', error);
        res.status(500).json({ success: false, message: 'Failed to send application.' });
    }
}
