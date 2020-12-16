import './ImageList.css';
import React from 'react';

const ImageList = (props) => {
    
    const images = props.images.map(({urls, id, alt_description}) => {
        // Assign a key to each item in a rendered collection - only required at the root component of each item
        return <img src={urls.regular} key={id} alt={alt_description}/>
    });
    
    return <div className="image-list">{images}</div>
};

export default ImageList;