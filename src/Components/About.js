import React from 'react';
import "./Home.css";

function About({ name }) {
    return (
        <div className="home">
            <div className="homehead">
                <div className="products">
                    <div>
                        <h1>About Our Store</h1>
                    </div>
                    <div className="productimg">
                        <p>
                            Welcome {name}! This demo store shows how you can browse products,
                            add them to your cart, and remove items as needed.
                        </p>
                        <p>
                            We built this simple e-commerce interface using React and React Router.
                            Use the Home page to add products, and the Cart page to manage them.
                        </p>
                        <p>
                            Our goal is to help you learn how state flows through components
                            and how cart data can be shared across routes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;