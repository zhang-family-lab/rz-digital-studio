import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-12-15.clover',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { setupId, subscriptionId } = req.body;

      // Validate inputs
      if (!setupId || !subscriptionId) {
        return res.status(400).json({ error: 'Missing price IDs' });
      }

      // Create Checkout Session
      const session = await stripe.checkout.sessions.create({
        allow_promotion_codes: true,
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [
          // One-time Setup Fee
          {
            price: setupId,
            quantity: 1,
          },
          // Recurring Subscription
          {
            price: subscriptionId,
            quantity: 1,
          },
        ],
        success_url: `${req.headers.origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/#pricing`,
      });

      res.status(200).json({ sessionId: session.id, url: session.url });
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
