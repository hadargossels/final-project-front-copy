import React, { createRef } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import '../Header.css';
import $ from 'jquery';
import CartProduct from './CartProduct.jsx';


class Header extends React.Component {
    constructor(props){
        super(props);
        this.searchInputRef = createRef();
        this.modalRef = createRef();

        this.state = {
            searchInput: ""
        }
    }

    setSearchInput = () => {
        var value = this.searchInputRef.current.value.replace(/[^A-Za-z]/ig, '');
        this.searchInputRef.current.value = value;
        this.setState({searchInput: value});
    }

    displaySumCart = () => {
        if (this.props.qtySum > 0)
            return <span className="mx-2 text-center" style={{height: '20px', width: '20px', backgroundColor: '#333333', color:'white', borderRadius: '50%', display: 'inline-block'}}>{this.props.qtySum}</span>
    }

    setCartModal = () => {
        return (
            <div className="modal fade" id="cartModal" ref={this.modalRef} tabIndex="-1" role="dialog" aria-labelledby="modalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalLongTitle">Shopping Cart</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.cartProducts.map(cartProduct => 
                            <CartProduct 
                                key={cartProduct.id} 
                                cartProduct={cartProduct} 
                                onQtyChange={this.props.onQtyChange}
                                onDeleteCartProduct={this.props.onDeleteCartProduct}
                            />)}
                        </div>
                        <div className="modal-footer"> 
                            <Link to="/cart"><button type="button" className="btn btn-primary" onClick={() => $(this.modalRef.current).modal('hide')}>Full shopping cart</button></Link>
                            <Link to="/payment"><button type="button" className="btn btn-primary" onClick={() => $(this.modalRef.current).modal('hide')}>Check-Out</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">HomeStyle</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link">Blog</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to='' className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Store</Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/store" className="dropdown-item">All Products</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to={{pathname: "/store/bedroom", category: "bedroom"}} className="dropdown-item">Bedroom</Link>
                                    <Link to={{pathname: "/store/bathroom", category: "bathroom"}} className="dropdown-item">Bathroom</Link>
                                    <Link to={{pathname: "/store/livingroom", category: "living room"}} className="dropdown-item">Living Room</Link>
                                </div>

                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0" onSubmit={(e) => e.preventDefault()}>
                            <div className="mx-2">
                                {this.displaySumCart()}           
                                <button type="button" className="mx-2 button-icon" style={{border: 'none'}} data-toggle="modal" data-target="#cartModal">
                                    <i className="fas fa-shopping-cart" style={{color: 'blue'}}></i>
                                </button>

                                <Link to="#" className="mx-2"><i className="fas fa-user"></i></Link>
                            </div>
                            <input className="form-control mr-sm-2" placeholder="Search" aria-label="Search" ref={this.searchInputRef} onChange={this.setSearchInput}></input >
                            <Link to={`/store?q=${this.state.searchInput}`} type="button" className="btn btn-outline-success my-2 my-sm-0">Search</Link>
                        </form>
                    </div>
                </nav>

                {this.setCartModal()}
            </>
        );
    }
    
}
export default Header;      