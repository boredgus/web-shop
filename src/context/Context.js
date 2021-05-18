import React, { useState, useEffect } from "react";
import { config } from "../config/general"

const Context = React.createContext();

function ContextProvider({ children }) {
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [isModalWindow, setIsModalWindow] = useState(false);

    useEffect(() => {
        fetch(config.allPhotosUrl)
            .then(response => response.json())
            .then(data => setAllPhotos(data));
    }, [])

    function toggleFavorite(id) {
        const updated = allPhotos.map(photo => {
            if (photo.id === id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo;
        })
        setAllPhotos(updated)
    }

    function addToCart(img) {
        setCartItems((cart) => ([
            ...(cart), img
        ]))
    }

    function removeFromCart(img) {
        setCartItems(prevState => prevState.filter(item => item.id !== img.id));
    }

    function clearCart() {
        setCartItems([]);
    }

    function getItem(id) {
        return allPhotos.find((item) => item.id === id);
    }

    function getAllFavourite() {
        return allPhotos.filter((item) => item.isFavorite);
    }

    function toggleIsModalWindow(value) {
        setIsModalWindow(value);
    }

    return (
        <Context.Provider value={{ allPhotos, toggleFavorite, cartItems, addToCart, removeFromCart, clearCart, getItem, getAllFavourite, isModalWindow, toggleIsModalWindow }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context };