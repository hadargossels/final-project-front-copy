import './App.css';
import Header from './components/Header';
// import ProductPage from './components/ProductPage';
import Footer from './components/Footer';
import CatalogPage from './components/CatalogPage';

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