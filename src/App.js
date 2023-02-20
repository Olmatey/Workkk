import Discounted from "./components/Discounted";
import Explore from "./components/Explore";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Drinks from "./pages/Drinks";
import {drinks} from '../src/data'


function App() {
  return (
    <Router>
    <div className="App">
     <Nav/>
     <Route path='/' exact component={Home} />
     <Route path='/drinks'  render={() => <Drinks drinks={drinks}/>} />

     <Footer/>
    </div>
    </Router>
  );
}

export default App;
