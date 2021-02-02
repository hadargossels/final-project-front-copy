
import './App.css';
import Header from './components/header/Header'
import Middle from './components/middle/Middle'
import Display from './components/Display-middle/Display'
import Footer from './components/Footer/Footer' 

function App() {
  return (
    <div>
      <Header/>
      {/* <Middle/> */}
      <Display/>
      <Footer/>
    </div>
  );
}

export default App;
