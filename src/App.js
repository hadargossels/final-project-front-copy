import './App.css';
import Header from './components/Header';
import ProductPage from './components/Product/ProductPage';
import Footer from './components/Footer';
import CatalogPage from './components//Catalog/CatalogPage';

function App() {
  return (
    <div>
            <Header/>
            {/* <ProductPage/> */}
            <CatalogPage/>
            <Footer/>
    </div>
  );
}

export default App;