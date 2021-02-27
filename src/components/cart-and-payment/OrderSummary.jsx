import React, {Component, createRef} from 'react';
import axios from 'axios';


class OrderSummary extends Component {
    constructor(props){
      super(props);

      this.cuponInputRef = createRef();
      this.cuponDiscountRef = createRef();
      this.totalAmountRef = createRef();
      this.amountAfterCupon = createRef();
      this.state = {
        coupons: {},
        myCoupon: {}
      }
    }

    getTotalAmount = () => {
        return this.props.getSubTotalAmount() * (1 +this.props.tax);
    }

    onActivateCoupon = (e) => {
        e.preventDefault();
        this.activateCoupon();
    }

    activateCoupon = () => {
        if (!this.cuponInputRef.current.value) {
            let myCoupon = {code: '', discount: 0}
            this.setState({myCoupon});
            localStorage.setItem('myCoupon', JSON.stringify(myCoupon));
            this.cuponDiscountRef.current.style.display = "none";
            this.totalAmountRef.current.style.textDecorationLine = "none";
            this.amountAfterCupon.current.style.display = "none";
        }
        else {   
            let cuponConfirmed = false
            Object.keys(this.state.coupons).forEach(element => {
                if (element === this.cuponInputRef.current.value){
                    cuponConfirmed = true;
                    let myCoupon = {code: element, discount: this.state.coupons[element]}
                    this.setState({myCoupon});
                    localStorage.setItem('myCoupon', JSON.stringify(myCoupon));
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

    componentDidMount() {
        axios.get('http://localhost:3000/coupons').then( response => {
            this.setState({ coupons: response.data });
        })

        let myCoupon = JSON.parse(localStorage.getItem('myCoupon'));
        if (myCoupon)
            this.setState({myCoupon});
    }

    render() {
        let myCoupon = this.state.myCoupon;
        
        return (
        <>
            <h4 className="border-bottom pb-2">Order Summary</h4>
            <p>Subtotal: ${(this.props.getSubTotalAmount()).toLocaleString()}</p>
            <p>Taxes: ${((this.props.getSubTotalAmount() * this.props.tax).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            <form>
                <div className="form-group">
                    <label htmlFor="cupon">Cupon-code:</label>
                    <input type="text" className="form-control d-inline" id="cuponInput" ref={this.cuponInputRef} defaultValue={myCoupon.code}></input>
                    <button type="submit" className="btn btn-outline-primary btn-sm d-inline" onClick={this.onActivateCoupon}>Activate coupon</button>
                </div>
            </form>
            <div className="text-success" ref={this.cuponDiscountRef} style={{display:'none'}}>{myCoupon.discount * 100}% discount</div>
            <p className="mt-1"><b>Total:</b> <span className="text-success" ref={this.totalAmountRef}>${(this.getTotalAmount()).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></p>
            <p className="text-success" ref={this.amountAfterCupon} style={{display:'none'}}>${(this.getTotalAmount() * (1 - myCoupon.discount)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>            
        </>
        )
    }
}

export default OrderSummary;