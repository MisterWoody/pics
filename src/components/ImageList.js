import React from 'react';

const ImageList = (props) => {
    
    const images = props.images.map((image) => {
        // Assign a key to each item in a rendered collection - only required at the root component of each item
        return <img src={image.urls.regular} key={image.id} alt={image.alt_description}/>
    });
    
    return <div>{images}</div>
};

export default ImageList;