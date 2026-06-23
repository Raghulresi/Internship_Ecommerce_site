import React from 'react';
import "./Home.css";
import Ecom from "./ecomm.jpg";
import h1 from "./h1.webp";
import h2 from "./h2.webp";
function Home() {
    return (
        <div className="home">
            <div className="homehead">
                <div className="products">
                   <div>
                     <h1 >Shop Now!!</h1>
                   </div>
                    <div className="product">
                        <div className="productimg">
                           <div><img className="img" src={h1} alt="/" /></div>
                           <div><h1>$999</h1></div>
                           <div><button>Add to Cart</button></div>
                        </div>
                        <div className="productimg">
                            <div><img className="img" src={h2} alt="/" /></div>
                            <div><h1>$999</h1></div>
                           <div><button>Add to Cart</button></div>
                        </div>
                        <div className="productimg">
                           <div><img className="img" src={h1} alt="/" /></div>
                           <div><h1>$999</h1></div>
                           <div><button>Add to Cart</button></div>
                        </div>
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