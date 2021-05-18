import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../context/Context";
import useHover from "../hooks/UseHover";

function Image({ img }) {
    const { toggleFavorite,
        cartItems,
        addToCart,
        removeFromCart } = useContext(Context);
    const [hovered, ref] = useHover(false);
    function heartIcon() {
        if (img.isFavorite) {
            return <img
                src='https://s1.iconbird.com/ico/2013/7/394/w128h1281374316199Hearticons02.png'
                alt='heart'
                onClick={() => toggleFavorite(img.id)} />
        } else if (hovered) {
            return <img
                src="https://purepng.com/public/uploads/large/red-outline-heart-sdi.png"
                alt='heart'
                onClick={() => toggleFavorite(img.id)} />
        }
    }

    function addIcon() {
        const isInCart = cartItems.some(item => item.id === img.id);
        if (isInCart)
            return <img
                src='https://cdn.iconscout.com/icon/free/png-256/shopping-cart-452-1163339.png'
                alt='added'
                onClick={() => { removeFromCart(img) }} />
        else if (hovered)
            return <img
                src='https://svgsilh.com/svg_v2/304947.svg'
                alt='add'
                onClick={() => { addToCart(img) }} />
    }

    return (
        <div className='item-container'
            ref={ref}>
            <div className='icons'>
                <div className="icon heart">
                    {heartIcon()}
                </div>
                <div className="icon price">
                    {img.price} UAH
                    </div>
                <div className="icon add">
                    {addIcon()}
                </div>
            </div>
            <img className="image"
                src={img.src}
                alt={img.id}
            />
        </div>
    );
}

Image.propTypes = {
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool,
        price: PropTypes.number
    })
}

export default Image;