import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../context/Context"
import useHover from "../hooks/UseHover";
import { config } from '../config/general';


function CartComponent({ item }) {
    const { removeFromCart } = useContext(Context);
    const [hovered, ref] = useHover(false);
    const trashBinImgUrl = !hovered ? config.trashBinImgUrl : config.filledTrashBinImgUrl;
    
    return (
        <li key={item.id} className="cart-item">
            <span>{item.id}</span>
            <img className="item" src={item.src} alt={`cartImage-${item.id}`} />
            <img
                style={{ width: 25 }}
                src={trashBinImgUrl}
                alt="trash-bin"
                onClick={() => removeFromCart(item)}
                ref={ref} />
            <p className="price">&#8372; {item.price}</p>
        </li>
    )
}
CartComponent.propTypes = {
    item: PropTypes.shape({
        src: PropTypes.string.isRequired
    })
}

export default CartComponent;