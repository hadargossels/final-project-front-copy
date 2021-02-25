import React, { createRef } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/collapse';
import '../css/header.css';
import $ from 'jquery';
import CartProduct from './CartProduct.jsx';
import SignUp from './SignUp';


class Header extends React.Component {
    constructor(props){
        super(props);
        this.searchInputRef = createRef();
        this.modalCartRef = createRef();
        this.modalSignUpRef = createRef();

        this.state = {
            searchInput: ""        }
    }

    setSearchInput = () => {
        var value = this.searchInputRef.current.value.replace(/[^A-Za-z]/ig, '');
        this.searchInputRef.current.value = value;
        this.setState({searchInput: value});
    }

    displaySumCart = () => {
        if (this.props.qtySum > 0)
            return <span className="mx-2 text-center" style={{height: '25px', width: '25px', backgroundColor: '#333333', color:'white', borderRadius: '50%', display: 'inline-block'}}>{this.props.qtySum}</span>
    }


    setCartModal = () => {
        return (
            <div className="modal fade" id="cartModal" ref={this.modalCartRef} tabIndex="-1" role="dialog" aria-labelledby="modalLongTitle" aria-hidden="true">
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
                            <Link to="/cart"><button type="button" className="btn btn-primary" onClick={() => $(this.modalCartRef.current).modal('hide')}>Full shopping cart</button></Link>
                            <Link to="/payment"><button type="button" className="btn btn-primary" onClick={() => $(this.modalCartRef.current).modal('hide')}>Check-Out</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // setSignUpModal = () => {
    //     return (
    //         <div className="modal fade" id="signUpModal" ref={this.modalSignUpRef} tabIndex="-1" role="dialog" aria-labelledby="modalLongTitle" aria-hidden="true">
    //             <div className="modal-dialog" role="document">
    //                 <div className="modal-content">
    //                     <div className="modal-header">
    //                         <h5 className="modal-title" id="modalLongTitle">Sign Up</h5>
    //                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    //                         <span aria-hidden="true">&times;</span>
    //                         </button>
    //                     </div>
    //                     <div className="modal-body">
    //                         <SignUp></SignUp>
    //                     </div>
    //                     <div className="modal-footer"> 
    //                         <Link to="/cart"><button type="button" className="btn btn-primary" onClick={() => $(this.modalSignUpRef.current).modal('hide')}>Full shopping cart</button></Link>
    //                         <Link to="/payment"><button type="button" className="btn btn-primary" onClick={() => $(this.modalSignUpRef.current).modal('hide')}>Check-Out</button></Link>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
    

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
                                <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Store</div>
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
                            <div className="navbar-nav mx-2">
                                {this.displaySumCart()}         
                                <button type="button" className="mx-2 button-icon" style={{border: 'none'}} data-toggle="modal" data-target="#cartModal">
                                    <i className="fas fa-shopping-cart" style={{color: 'dodgerblue'}}></i>
                                </button>

                                {(Object.keys(this.props.user).length > 0)
                                    ?   <div>
                                            Hello {this.props.user.firstName}
                                        </div>
                                    : <></>
                                }

                                <div className="nav-item dropdown mx-2">
                                    <div className="nav-link dropdown-toggle px-0 py-0" id="loginNavbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-user" style={{color: 'dodgerblue'}}></i>
                                    </div>
                                    <div className="dropdown-menu" aria-labelledby="loginNavbarDropdown" style={{width: "170px"}}>
                                        {/* <button type="button" className="btn btn-light" data-toggle="modal" data-target="#signUpModal">Sign up</button>| */}
                                        <button type="button" className="btn btn-light"><Link to="/register">Register</Link></button>|
                                        <button type="button" className="btn btn-light" onClick={this.props.onSignOut}><Link to="#">Log out</Link></button>
                                    </div>
                                </div>
                                
                                
                                {/* <div className="collapse" id="login">
                                    <Link to="/login">Log in</Link>
                                    <Link to="#">Log out</Link>
                                </div> */}
                            </div>
                            <input className="form-control mr-sm-2" placeholder="Search" aria-label="Search" ref={this.searchInputRef} onChange={this.setSearchInput}></input >
                            <Link to={`/store?q=${this.state.searchInput}`} type="button" className="btn btn-outline-dark my-2 my-sm-0">Search</Link>
                        </form>
                    </div>
                </nav>

                {this.setCartModal()}
                {/* {this.setSignUpModal()} */}
            </>
        );
    }
    
}
export default Header;      