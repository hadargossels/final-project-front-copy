import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

class PayPalBtn extends React.Component {

    render() {
      const { amount, onSuccess, currency,onError } = this.props;
        return (
            <PayPalButton
              amount={amount}
              currency={currency}
              onSuccess={(details, data) => onSuccess(details, data)}
              onError={(err)=>onError(err)}
              options={{
                currency:currency.toUpperCase(),
                clientId: "AdHtX87Y_wwJ7OI4OOwz01CaRd8x0JAl2sat4LOIfgM-Z3qn0ANXh66IoV002y-HelQ0MWUNKi8fLGbz"
              }}
          />
        );
    }
}

export default PayPalBtn;