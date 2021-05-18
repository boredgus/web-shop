import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import CartComponent from "../components/CartComponent";
import ModalWindow from "../components/ModalWindow";

function Cart() {
    const { cartItems } = useContext(Context);
    const [buttonText, setButtonText] = useState("Place order");
    const cartComponents = cartItems.map(item =>
        <CartComponent key={item.id} item={item} />
    );
    const totalCost = cartItems.reduce((sum, current) => current.price + sum, 0);
    function placeOrder() {
        setButtonText("Ordering...");
        setTimeout(() => {
            setButtonText("Place order");
            document.querySelector('.modal-layer').style.display = "flex";
            document.querySelector('body').style.overflowY = "hidden";
        }, 3000);
    }

    return (
        <main>
            <h1>Cart</h1>
            <ol className="cart">
                {cartComponents}
            </ol>
            <div className="modal"></div>
            <ModalWindow />
            {
                cartItems.length > 0 ?
                    <div className="place-order">
                        <p className="total-cost">Total: {totalCost} UAH</p>
                        <button onClick={placeOrder}>{buttonText}</button>
                    </div>
                    : <h2 className="empty">The cart is empty. Add some photos!</h2>
            }

        </main>
    );
}

export default Cart;