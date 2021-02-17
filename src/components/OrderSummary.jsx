import React, {Component, createRef} from 'react';

class OrderSummary extends Component {
    constructor(props){
      super(props);

      this.cuponInputRef = createRef();
      this.cuponDiscountRef = createRef();
      this.totalAmountRef = createRef();
      this.amountAfterCupon = createRef();
      this.state = {
        cupons: {'': 0, "1234A": 0.15, "5555B": 0.2, "5678C": 0.3},
        couponCode: ''
      }
    }

    getTotalAmount = () => {
        return this.props.getSubTotalAmount() * (1 +this.props.tax);
    }

    ActivateCoupon = (e) => {
        e.preventDefault();

        if (!this.cuponInputRef.current.value) {
            this.setState({couponCode: ''});
            localStorage.setItem('couponCode', '');
            this.cuponDiscountRef.current.style.display = "none";
            this.totalAmountRef.current.style.textDecorationLine = "none";
            this.amountAfterCupon.current.style.display = "none";
        }
        else {   
            let cuponConfirmed = false
            Object.keys(this.state.cupons).forEach(element => {
                if (element === this.cuponInputRef.current.value){
                    cuponConfirmed = true;
                    this.setState({couponCode: element});
                    localStorage.setItem('couponCode', element);
                    this.cuponDiscountRef.current.style.display = "block";
                    this.totalAmountRef.current.style.textDecorationLine = "line-through";
                    this.amountAfterCupon.current.style.display = "block";
                }
            });
            if (!cuponConfirmed){
                alert("Coupon code is invalid")
            }
        }
    }

    render() {
        let couponCode = localStorage.getItem('couponCode');
        let myDiscount = this.state.cupons[couponCode];
        return (
        <>
            <h4 className="border-bottom pb-2">Order Summary</h4>
            <p>Subtotal: ${(this.props.getSubTotalAmount()).toLocaleString()}</p>
            <p>Taxes: ${((this.props.getSubTotalAmount() * this.props.tax).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            <form>
                <div className="form-group">
                    <label htmlFor="cupon">Cupon-code:</label>
                    <input type="text" className="form-control d-inline" id="cuponInput" ref={this.cuponInputRef} defaultValue={couponCode}></input>
                    <button type="submit" className="btn btn-outline-primary btn-sm d-inline" onClick={this.ActivateCoupon}>Activate coupon</button>
                </div>
            </form>
            <div className="text-success" ref={this.cuponDiscountRef} style={{display:'none'}}>{myDiscount * 100}% discount</div>
            <p className="mt-1"><b>Total:</b> <span className="text-success" ref={this.totalAmountRef}>${(this.getTotalAmount()).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></p>
            <p className="text-success" ref={this.amountAfterCupon} style={{display:'none'}}>${(this.getTotalAmount() * (1 - myDiscount)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>            
        </>
        )
    }
}

export default OrderSummary;