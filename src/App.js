//import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ProductPage from './components/ProductPage.jsx';
import Store from './components/Store.jsx';
// import Product from './components/Product.jsx';

function App() {
  return (
    <>
      <Header></Header>
      <Store></Store>
      {/* <Product></Product> */}
      {/* <ProductPage></ProductPage> */}
      <Footer></Footer>
    </>
  );
}

export default App;