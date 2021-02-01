import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Product from './components/Product/Product.js';
import SideMenu from './components/SideMenu.js';

// import Shop from './components/Shop/Shop.js';

// const cartButtons = document.querySelector('#cart-add-button');
    
// cartButtons.forEach(button => {
//     button.addEventListener('click', cartClick);
// });
// console.log(cartButtons)
// if(cartButtons){
//   cartButtons.addEventListener('click', cartClick);
// function cartClick() {
//   if(this==undefined)
//     return;
//     let button = this;
//     console.log(button)
//     button.classList.add('clicked');
//     return;
// }
function App() {
  return (

<div>
    <Header></Header>
    <SideMenu></SideMenu>
    <Product></Product>
     {/* <Shop></Shop> */}
    <Footer></Footer> 

</div>

  );
}

export default App;
