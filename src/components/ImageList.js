import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    
    const images = props.images.map((image) => {
        // Assign a key to each item in a rendered collection - only required at the root component of each item
        return <ImageCard key={image.id} image={image} />;
    });
    
    return <div className="image-list">{images}</div>
};

export default ImageList;