import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

class PayPalBtn extends React.Component {

    render() {
      const { amount, onSuccess, currency } = this.props;
        return (
            <PayPalButton
              amount={amount}
              currency={currency}
              onSuccess={(details, data) => onSuccess(details, data)}
              options={{
                clientId: "AXmfXys_QHqkGpbVK2UCvmPJ_X3P2dkIuqaGYWiChMXyLMKfsaMcXtpPEBHLlcq_k5O1NmnjG22OXXKw"
              }}
          />
        );
    }
}

export default PayPalBtn;