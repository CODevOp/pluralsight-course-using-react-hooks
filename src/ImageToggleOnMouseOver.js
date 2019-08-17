import React, {useRef} from "react";

const ImageToggleOnMouseOver = ({primaryImage, secondaryImage}) => {

    const imageRef = useRef(null);
    return (
        <img 
        onMouseOver={() => {
            imageRef.current.src = primaryImage;
        }} onMouseOut={() => {
            imageRef.current.src = secondaryImage;
        }}
            src={primaryImage} 
            alt={secondaryImage}
            ref={imageRef}
        >
        </img>
    );
}

export default ImageToggleOnMouseOver;