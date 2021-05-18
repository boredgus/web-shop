import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import {config} from '../config/general';

function Header() {
    const isCartEmpty = useContext(Context).cartItems.length === 0;
    const doFavouriteExist = useContext(Context).getAllFavourite().length !== 0;
    const cartImage = isCartEmpty
        ? config.emptyCartImgUrl
        : config.notEmptyCartImgUrl
    const likedImage = doFavouriteExist
        ? config.filledHeartImgUrl
        : config.emptyHeartImgUrl;
    return (
        <header>
            <ul>
                <li></li>
                <li>
                    <Link to="/">
                        IMAGEness
                    </Link>
                </li>
                <li>
                    <Link to="/liked-images">
                        <img src={likedImage} alt="liked" />
                    </Link>
                    <Link to="/cart">
                        <img src={cartImage} alt="cart" />
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;