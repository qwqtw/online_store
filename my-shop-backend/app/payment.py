import stripe
import paypalrestsdk
from fastapi import HTTPException

# Set your Stripe secret key
stripe.api_key = 'your_stripe_secret_key'

# Set your PayPal credentials
paypalrestsdk.configure({
    'mode': 'sandbox',  # Change to 'live' for production
    'client_id': 'your_paypal_client_id',
    'client_secret': 'your_paypal_client_secret'
})

# Stripe Checkout Session Creation
async def create_checkout_session():
    try:
        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[
                {
                    'price_data': {
                        'currency': 'usd',
                        'product_data': {
                            'name': 'AI Artwork',
                        },
                        'unit_amount': 5000,  # Amount in cents ($50)
                    },
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url="http://localhost:3000/success",
            cancel_url="http://localhost:3000/cancel",
        )
        return {"id": session.id}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

# PayPal Payment Creation
async def create_paypal_payment():
    payment = paypalrestsdk.Payment({
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "transactions": [{
            "amount": {
                "total": "50.00",
                "currency": "USD"
            },
            "description": "AI Artwork"
        }],
        "redirect_urls": {
            "return_url": "http://localhost:3000/success",
            "cancel_url": "http://localhost:3000/cancel"
        }
    })

    if payment.create():
        return {"approval_url": payment.links[1].href}
    else:
        raise HTTPException(status_code=400, detail="PayPal payment creation failed")
