import React, { Component } from 'react';
// import './headerStyle.css';
class Header extends Component{
   render(){
      return(
        <div className="container">
            <nav className="navBar">
                <i className="fas fa-bars">All</i>
                <a className = "btn from-top" href="#" >HOME</a>
                <a className = "btn from-left" href="#special" >SHOP</a>
                <a className = "btn from-right" href="#services" >SERVICES</a>
                <a className = "btn from-center" href="#about" >ABOUT</a>
                <a className = "btn from-bottom" href="#menu" >NEWS</a>
                <span className="btn from-bottom cartSpan"><i className="fas fa-shopping-cart"></i></span>
                <span className="from-bottom">Welcome Visitor</span>
            </nav>
        </div>
        // <div>
        // <div className="backdrop"></div>
        // <header className="main-header">
        //     <button id="side-menu-toggle ">Menu</button>
        //     <nav className="main-header__nav">
        //         <ul className="main-header__item-list">
        //             <li className="main-header__item">
        //                 <a className="<%= path === '/' ? 'active' : '' %>" href="/">Shop</a>
        //             </li>
        //             <li className="main-header__item">
        //                 <a className="<%= path === '/products' ? 'active' : '' %>" className="/products">Products</a>
        //             </li>
                    
        //                 <li className="main-header__item">
        //                     <a className="<%= path === '/cart' ? 'active' : '' %>" href="/cart">Cart</a>
        //                 </li>
        //                 <li className="main-header__item">
        //                     <a className="<%= path === '/orders' ? 'active' : '' %>" href="/orders">Orders</a>
        //                 </li>
        //                 <li className="main-header__item">
        //                     <a className="<%= path === '/admin/add-product' ? 'active' : '' %>" href="/admin/add-product">Add Product
        //                     </a>
        //                 </li>
        //                 <li className="main-header__item">
        //                     <a className="<%= path === '/admin/products' ? 'active' : '' %>" href="/admin/products">Admin Products
        //                     </a>
        //                 </li>
                    
        //         </ul>
        //         <ul className="main-header__item-list">
                  
        //                 <li className="main-header__item">
        //                     <a className="<%= path === '/login' ? 'active' : '' %>" href="/login">Login</a>
        //                 </li>
                    
        //                 <li className="main-header__item">
        //                     <form action="/logout" method="post">
        //                         <button type="submit">Logout</button>
        //                     </form>
        //                 </li>
                    
        //         </ul>
        //     </nav>
        // </header>

        /* <nav class="mobile-nav">
            <ul class="mobile-nav__item-list">
                <li class="mobile-nav__item">
                    <a class="<%= path === '/' ? 'active' : '' %>" href="/">Shop</a>
                </li>
                <li class="mobile-nav__item">
                    <a class="<%= path === '/products' ? 'active' : '' %>" href="/products">Products</a>
                </li>
                <% if (isAuthenticated) { %>
                    <li class="mobile-nav__item">
                        <a class="<%= path === '/cart' ? 'active' : '' %>" href="/cart">Cart</a>
                    </li>
                    <li class="mobile-nav__item">
                        <a class="<%= path === '/orders' ? 'active' : '' %>" href="/orders">Orders</a>
                    </li>
                    <li class="mobile-nav__item">
                        <a class="<%= path === '/admin/add-product' ? 'active' : '' %>" href="/admin/add-product">Add Product
                        </a>
                    </li>
                    <li class="mobile-nav__item">
                        <a class="<%= path === '/admin/products' ? 'active' : '' %>" href="/admin/products">Admin Products
                        </a>
                    </li>
                <% } %>
                <% if (!isAuthenticated) { %>
                    <li class="mobile-nav__item">
                        <a class="<%= path === '/login' ? 'active' : '' %>" href="/login">Login</a>
                    </li>
                <% } else { %>
                    <li class="mobile-nav__item">
                        <form action="/logout" method="post">
                            <button type="submit">Logout</button>
                        </form>
                    </li>
                <% } %>
            </ul>
        </nav> */
       



        //         <div className="btn from-top">From Top</div>
        //         <div className="btn from-left">From Left</div>
        //         <div className="btn from-right">From Right</div>
        //         <div className="btn from-center">From Center</div>
        //         <div className="btn from-bottom">From Bottom</div>
        // </div>
      );
   }
}
export default Header;
