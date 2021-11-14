import './App.scss';
import Navbar from './Navbar';
import Home from './Home'
import Products from './Products';
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
            <Route path="/!" element={<Products/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
    )
}

export default App;