import React, { Component } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'


export default class PayPalBtn extends Component {
    render() {
        const { amount, onSuccess, currency } = this.props;
        return (
            <div>
                <PayPalButton
                    amount={amount}
                    currency={currency}
                    onSuccess={(details, data) => onSuccess(details, data)}
                    options={{
                        clientId: "AeEStMm_L2QKjrliKhy0j58qokpwNfZvwlsIYPXvJXan_ZOGMDlOmpMEyf1eW6dPNq6asTVXajSUCTeb"
                    }}
                />
            </div>
        )
    }
}
