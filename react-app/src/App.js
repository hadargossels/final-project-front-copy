/* import './App.css'; */

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Product from './Components/Product/Product';
import Products from './Components/Products/Products';

const prodsArr = [{img: "/images/brands/ASUS/XONAR AE/1.png", imgAlt: "asus-xonar-ae", name: "ASUS XONAR AE", price: 216.99, rating: 3.5, stock: true, discount: false, discountPercentage: 0.05, category: "Hardware", subCategory: "Sound Cards", type: "Internal", brand: "ASUS"},
                  {img: "/images/brands/Creative/Sound BlasterX AE-5/1.png", imgAlt: "creative-sound--blasterx-ae-5", name: "Creative Sound BlasterX AE-5", price: 680.00, rating: 0, stock: false, discount: false, discountPercentage: 0.12, category: "Hardware", subCategory: "Sound Cards", type: "Internal", brand: "Creative"},
                  {img: "/images/brands/EVGA/NU Audio/1.png", imgAlt: "evga-nu-audio", name: "EVGA NU Audio", price: 752.23, rating: 1.0, stock: true, discount: true, discountPercentage: 0.10, category: "Hardware", subCategory: "Sound Cards", type: "Internal", brand: "EVGA"},
                  {img: "/images/brands/Edifier/e25HD Luna HD (Black)/1.jpg", imgAlt: "edifier-e25hd-luna-hd-black", name: "Edifier e25HD Luna HD (Black)", price: 749.00, rating: 4.0, stock: false, discount: false, discountPercentage: 0.20, category: "Peripheral", subCategory: "Speakers", type: "2.0", brand: "Edifier"},
                  {img: "/images/brands/Edifier/e25HD Luna HD (Red)/1.jpeg", imgAlt: "edifier-e25hd-luna-hd-red", name: "Edifier e25HD Luna HD (Red)", price: 749.00, rating: 4.0, stock: true, discount: false, discountPercentage: 0.20, category: "Peripheral", subCategory: "Speakers", type: "2.0", brand: "Edifier"},
                  {img: "/images/brands/Edifier/e25HD Luna HD (White)/1.jpg", imgAlt: "edifier-e25hd-luna-hd-white", name: "Edifier e25HD Luna HD (White)", price: 749.00, rating: 4.0, stock: true, discount: false, discountPercentage: 0.20, category: "Peripheral", subCategory: "Speakers", type: "2.0", brand: "Edifier"},
                  {img: "/images/brands/Microsoft/Windows 10 Home x64 Retail/1.png", imgAlt: "microsoft-windows-10-home-x64-retail", name: "Windows 10 Home x64 Retail", price: 400.00, rating: 0, stock: false, discount: false, discountPercentage: 0.20, category: "Softwares", subCategory: "Operating Systems", type: "Retail", brand: "Microsoft"},
                  {img: "/images/brands/Microsoft/Windows 10 Pro x64 Retail/1.png", imgAlt: "microsoft-windows-10-pro-x64-retail", name: "Windows 10 Pro x64 Retail", price: 600.00, rating: 0, stock: true, discount: true, discountPercentage: 0.05, category: "Softwares", subCategory: "Operating Systems", type: "Retail", brand: "Microsoft"}];

export default function App() {
      return(
         <div>
            <Header />
{/*             <Product /> */}
            <Products prodsArr={prodsArr}/>
            <Footer />
         </div>
      );
}
