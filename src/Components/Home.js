import React from 'react';
import "./Home.css";
import Ecom from "./ecomm.jpg";
import h1 from "./h1.webp";
import h2 from "./h2.webp";

function Home({ onAddToCart }) {
    const products = [
        { id: 1, image: h1, price: 999, title: "Wireless Speaker" },
        { id: 2, image: h2, price: 999, title: "Smart Watch" },
        { id: 3, image: h1, price: 999, title: "Headphones" },
    ];

    return (
        <div className="home">
            <div className="homehead">
                <div className="products">
                   <div>
                     <h1>Shop Now!!</h1>
                   </div>
                    <div className="product">
                        {products.map((item) => (
                            <div key={item.id} className="productimg">
                                <div><img className="img" src={item.image} alt={item.title} /></div>
                                <div><h1>${item.price}</h1></div>
                                <div><button onClick={() => onAddToCart(item)}>Add to Cart</button></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="image">
                    <center><h1 className="ecomname">E-Commerce</h1></center>
                    <img className="eimg" src={Ecom} alt="/" />
                </div>
            </div>
        </div>
    );
}

export default Home;    