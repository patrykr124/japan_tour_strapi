import Stripe from "stripe";
import type { NextApiRequest, NextApiResponse } from "next";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end("Method not allowed")
  }

  const {product} = JSON.parse(req.body);


  try {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [
          {
            price_data: {
              currency: "pln",
              product_data: {
                name: product.name,
                description: product.description,
              },
              unit_amount: product.price * 100, 
            },
            quantity: 1,
          },
        ],
        success_url: `${req.headers.origin}/`,
        cancel_url: `${req.headers.origin}/`,
      });
  
      return res.status(200).json({ url: session.url });
  
  } catch (error) {
    console.log("Stripe session error:", error)
    return res.status(500).end("Internal Server Error")
  }
}