import './App.css';
import dp from "./dp.png";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Cart from "./Components/Cart.js";
function App() {
  return (
    <div className="App">
        <div className="navhead">
            <div className="navpart1">
                <div className="navimage"> <img src={dp} className="image" alt=""/> </div>
                <div className="navname"> <h1 className="name">name</h1></div>
            </div>
            <div className="navitems">
                 <div><h1><Link className="navitem"  to="/">Home</Link></h1></div>
                 <div><h1><Link className="navitem" to="/about">About</Link></h1></div>
                 <div><h1><Link className="navitem" to="/cart">Cart</Link></h1></div>
            </div>
        </div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
