import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Routes from './components/routing/Routes'
// import ProductPage from './components/Product/ProductPage';


// import components
import Footer from './components/Footer'
import Header from './components/Header'



function App() {
  return (
    <div>
            <Header/>
            <Routes/>
            {/* <ProductPage/> */}
            <Footer/>
    </div>
  );
}

export default App;