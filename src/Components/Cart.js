import React from 'react';
import "./Home.css";

function Cart({ cartItems, onRemoveFromCart }) {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="home">
            <div className="homehead">
                <div className="products">
                    <div>
                        <h1>Your Cart</h1>
                    </div>
                    {cartItems.length === 0 ? (
                        <div className="productimg">
                            <p>Your cart is empty. Add items from Home.</p>
                        </div>
                    ) : (
                        <div className="product">
                            {cartItems.map((item) => (
                                <div key={item.id} className="productimg">
                                    <div><img className="img" src={item.image} alt={item.title} /></div>
                                    <div><h2>{item.title}</h2></div>
                                    <div><h1>${item.price}</h1></div>
                                    <div><p>Qty: {item.quantity}</p></div>
                                    <div>
                                        <button onClick={() => onRemoveFromCart(item.id)}>
                                            Remove from Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <div className="productimg">
                                <h2>Total: ${total}</h2>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cart;