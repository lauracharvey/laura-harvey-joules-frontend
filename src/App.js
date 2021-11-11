import './App.scss';
import Home from './Home';
import Navbar from './Navbar';
import Products from './Products'
import Product from './Product';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/women" element={<Products/>}></Route>
            <Route path=":url" element={<Product/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;