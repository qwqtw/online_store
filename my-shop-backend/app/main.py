from fastapi import FastAPI
from .payment import create_checkout_session, create_paypal_payment
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS for your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust if deployed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/create-checkout-session")
async def create_session():
    return await create_checkout_session()

@app.post("/create-paypal-payment")
async def create_paypal():
    return await create_paypal_payment()
