import { useState, useEffect } from 'react';
import getCloudinaryImage from '../utils/cloudinary';
import {CloudinaryImage} from "@cloudinary/url-gen";

const useCloudinaryImage = (imageName: string) => {
    const [cloudinaryImage, setCloudinaryImage] = useState<CloudinaryImage|null>(null);

    useEffect(() => {
        const fetchImage = () => {
            const image = getCloudinaryImage(imageName);
            setCloudinaryImage(image);
        };

        fetchImage();
    }, [imageName]);

    return cloudinaryImage;
};

export default useCloudinaryImage;
