import React, { useContext } from "react";

import { Context } from "../context/Context";
import Image from "../components/Image"

function LikedPhotos() {
    const { getAllFavourite } = useContext(Context);
    const likedImgComponents = getAllFavourite().map(item =>
        <Image key={item.id}
            img={item}
        />);
    return (
        <main>
            <h1>Liked images</h1>
            <div className="photos">
                {
                    likedImgComponents.length > 0 ?
                        <div> {likedImgComponents} </div>
                        : <h2 className="empty"> You have liked no images. Like some! </h2>
                }
            </div>
        </main>
    );
}

export default LikedPhotos;