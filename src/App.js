

import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Footer from './components/Footer';
import Cakes from './components/Cakes';
import Sortbar from './components/Sortbar';


function App() {
      
  return (
    <div>
      <Header/>
      {/* <Product/> */}
      <Cakes/>
      <Footer/>

    </div>
  );
}

export default App;
