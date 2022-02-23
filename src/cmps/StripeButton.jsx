import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export function StripeCheckoutButton({ price }) {
    const publishableKey = 'pk_test_51KNYUtIIyzvjmBX2fYv12PPRARRHxLFToYiF31SS11VN9j9HUa2F7rdYWaUvZ3Haz67RU4nZmGQS1c4EZt5vVsRO00DRaBQLhW';
    const priceForStripe = price * 100;
    const onToken = token => {
        console.log(token)
        alert('Payment successful')
    }
    return (
        <div>
            <StripeCheckout
                label='Pay Now'
                name='CRWN Clothing ltd.'
                billingAddress
                shippingAddress
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />

        </div>
    );
}
