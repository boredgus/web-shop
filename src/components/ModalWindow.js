import React, { useContext } from "react";
import { Context } from "../context/Context";

function ModalWindow() {
    const {cartItems} = useContext(Context);
    console.log(cartItems);
    const { clearCart } = useContext(Context);
    function closeModal() {
        const modal = document.getElementsByClassName('modal-layer')[0];
        modal?.remove();
        clearCart();
        document.querySelector('body').style.overflowY = "auto";
    }
    
    return (
        <div className="modal-layer">
            <div className="modal-root">
                <div className="modal-header">
                    <span className="title">Order description</span>
                    <div className="close-btn" onClick={closeModal}>×</div>
                </div>
                <div className="modal-body">
                    <h2>Order is sent successfully!</h2>
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;