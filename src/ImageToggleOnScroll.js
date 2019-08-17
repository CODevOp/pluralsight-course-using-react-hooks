import React, {useRef, useEffect, useState} from "react";

const ImageToggleOnScroll = ({primaryImage, secondaryImage}) => {

    const imageRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        setInView(isInView());
        setIsLoading(false);
        return ( () => {
            window.removeEventListener("scroll", scrollHandler);
        }, () => { [isLoading] });
    });
    
    // declare useState variable and setter
    // inView is variable and setter is setInView
    // variable inView is reference by the component
    const [inView, setInView] = useState(false);

    // called by scroll Handler to determine if in view
    const isInView = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
    };

    //
    const scrollHandler = () => {
        setInView(() => {
            return isInView();
        });
    };

    return isLoading ? null : (
        <img 
            src={inView ? secondaryImage : primaryImage} 
            alt={secondaryImage}
            ref={imageRef}
            width="200" height="200"
        />
    );
}

export default ImageToggleOnScroll;