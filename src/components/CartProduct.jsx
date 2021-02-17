import React, { createRef } from 'react';

class CartProduct extends React.Component {

    constructor(props) {
        super(props);
        this.qtyRef = createRef();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    createQtyList = () => {
        const qtyList = [];
        for(let i=1; i<=10; i++){
            if (this.props.cartProduct.quantity === i)
                qtyList.push(<option key={i} value={i}>{i}</option>);
            else
                qtyList.push(<option key={i} value={i}>{i}</option>);
        }
        return qtyList;
    }

    getActualPrice = () => {
        return this.props.cartProduct.price * (1- this.props.cartProduct.discount);
    }

    render() {
        
        return (
            <div className="card mb-3" style={{maxWidth: "750px"}}>
                <div className="row g-0">
                    <div className="col-2">
                        <img src={this.props.cartProduct.images[0]} alt="..." style={{maxHeight:"100%", maxWidth:"100%"}}></img>
                    </div>
                    <div className="col-10">
                        <div className="card-body">
                            <div className="d-flex justify-content-between border-bottom">
                                <h5 className="card-title">{this.props.cartProduct.name}</h5>
                                <button type="button" className="btn btn-danger py-0 px-1" 
                                        onClick={() => this.props.onDeleteCartProduct(this.props.cartProduct)}
                                        style={{maxHeight:'25px', maxWidth:'25px'}}
                                    ><i className="fas fa-times" style={{fontSize: '15px'}}></i></button>
                            </div>
                            <div className="row mt-2">
                                <div className="col-6 col-md-4">
                                    <p className="card-text">price: <del>${this.props.cartProduct.price}</del> ${(this.getActualPrice()).toLocaleString()}</p>
                                </div>
                                <div className="col-6 col-md-4">
                                    <form>
                                        <label htmlFor="qtyCart" className="card-text mr-1">qty: </label>
                                        <select name="qtyCart" defaultValue={this.props.cartProduct.quantity} ref={this.qtyRef} onChange={() => this.props.onQtyChange(this.props.cartProduct, this.qtyRef.current.value)}>
                                            {this.createQtyList()}
                                        </select>
                                    </form>
                                </div>
                                <div className="col-6 col-md-4">
                                    <p className="card-text">Total: ${(this.props.cartProduct.quantity * this.getActualPrice()).toLocaleString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartProduct;