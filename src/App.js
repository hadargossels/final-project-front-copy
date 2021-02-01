import logo from './logo.svg';
import './App.css';
import Header from './components/productPage/Headrer-navbar';
import Middle from './components/productPage/Middle';
import Footer from './components/productPage/Footer';
import Album from './components/productPage/Album';



function App() {
  return (
    <div>
        <Header/><br/>
        <Album/>
        {/* <Header/> */}
        <Footer/>
    </div>
  );
}

export default App;
