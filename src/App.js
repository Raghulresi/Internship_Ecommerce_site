import "./App.css";
import dp from "./dp.png";
import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Cart from "./Components/Cart.js";
import Login from "./Components/Login.js";

function App() {
  const [name, setName] = useState("name");
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <div className="App">
        <div className="navhead">
            <div className="navpart1">
                <div className="navimage"> <img src={dp} className="image" alt=""/> </div>
                <div className="navname"> <h1 className="name">{name}</h1></div>
            </div>
            <div className="navitems">
                 <div><h1><Link className="navitem"  to="/">Home</Link></h1></div>
                 <div><h1><Link className="navitem" to="/about">About</Link></h1></div>
                 <div><h1><Link className="navitem" to="/cart">Cart</Link></h1></div>
                 <div><h1><Link className="navitem" to="/login">Login</Link></h1></div>
            </div>
        </div>
        <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/about" element={<About name={name} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />} />
        <Route path="/login" element={<Login setUserName={setName} />} />
      </Routes>
    </div>
  );
}

export default App;
