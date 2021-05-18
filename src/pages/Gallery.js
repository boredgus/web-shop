import React, { useContext } from "react";

import { Context } from "../context/Context";
import Image from "../components/Image"

function Gallery() {
    const { allPhotos } = useContext(Context);
    const imageComponents = allPhotos.map(item =>
        <Image key={item.id}
            img={item}
        />
    )
    return (
        <main className="photos">
            <div>
                {imageComponents}
            </div>
        </main>
    );
}

export default Gallery;