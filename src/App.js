import Routes from './components/routing/Routes'
import {BrowserRouter as Router} from 'react-router-dom'

// import components
import Footer from './components/Footer'
import Header from './components/Header'


function App() {
  return (
      <Router>
            <Header/>
            <Routes/>
            <Footer/>
      </Router>
  );
}

export default App;