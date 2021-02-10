import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Switch,Route,NavLink,BrowserRouter as Router, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs'
import Policy from './components/Policy/Policy'
import ShippingPolicy from './components/ShippingPolicy/ShippingPolicy'
import NotFound from './components/NotFound/NotFound'
import Login from "./components/Login/Login";
import ProductPage from './components/ProductPage/ProductPage'
import StorePage from './components/StorePage/StorePage';
import SignUp from './components/SignUp/SignUp'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import {arrayAllProduct} from './dataBase'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


let routing=(
<Router>
    <div>
        <Header/>
        {/* <div class="modal fade " id="idShoppingCart" tabIndex="-1" aria-labelledby="shoppingCartLabel" aria-hidden="true">
               <div class="modal-dialog shoppingCartModal" >
                  <div class="modal-content contentCart">
                     <div class="modal-header">
                     <h5 class="modal-title" id="shoppingCartLabel">My shopping cart</h5>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                        <ShoppingCart/>
                     </div>
                  </div>
               </div>
            </div>  */}
        <div id="d">
            <div id="inDiv">
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route  path="/contact" component={ContactUs}/>
                    <Route  path="/about" component={AboutUs}/>
                    <Route  path="/policy" component={Policy}/>
                    <Route  path="/shipping-Policy" component={ShippingPolicy}/>
                    <Route  exact path="/store" component={() => <StorePage categoryFilter={"Makeup"}/>}/>
                    <Route  exact path="/store/best_Sellers" component={bestSellersStore}/>
                    <Route  exact path="/store/category_face" component={()=>categoryStore("Face")}/>
                    <Route  exact path="/store/category_lips" component={()=>categoryStore("Lips")}/>
                    <Route  exact path="/store/category_eyes" component={()=>categoryStore("Eyes")}/>
                    <Route  exact path="/store/sales" component={salesStore}/>
                    <Route exact path="/shop" component={StorePage}/> 
                    <Route exact path="/login" component={Login}/>
                    <Route  path="/login/signup" component={SignUp}/>
                    <Route  path="/cart" component={ShoppingCart}/>
                    <Route  path="/product/:productName" component={ProductPage}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    </div>
    <ScrollToTop />
</Router>

);

ReactDOM.render( routing, document.getElementById('root'));


function bestSellersStore(){

    let bestSellersArr=[...arrayAllProduct];
    bestSellersArr.sort((a,b)=>a.buyNum-b.buyNum);
    bestSellersArr=bestSellersArr.slice(0,4);//the 4 besr seller product
    return <StorePage arrProduct={bestSellersArr} categoryFilter={"Makeup"} categoryHeader={"Best Sellers"}/>

}

function categoryStore(category) { 
    
    let categoryArr=[...arrayAllProduct];
    categoryArr=categoryArr.filter((v)=>v.categoryProduct==category);
    return <StorePage arrProduct={categoryArr} categoryFilter={category} categoryHeader={category}/>

 }

 function salesStore() { 
    
    let salesArr=[...arrayAllProduct];
    salesArr=salesArr.filter((v)=>v.discountProduct!="none");
    return <StorePage arrProduct={salesArr} categoryHeader={"Sales"}/>

 }