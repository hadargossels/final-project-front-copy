import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import Store from './components/Store';
import {useState} from 'react'


function App() {

const [storeVis,setStoreVis] = useState('')
const updatestate = (str) => setStoreVis(str)
  return (
    <div>
      <Header updatestate={updatestate}/>
      {storeVis=='store' && <Store/>}
      {storeVis=='product' && <Product/>}
      <Footer/>
    </div>
  );
}

export default App;
