import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";

const getCloudinaryImage = (imageName: string) => {
        return new CloudinaryImage(imageName, { cloudName: 'dgvuo8wbh' }).resize(fill().width(100).height(150));
};

export default getCloudinaryImage;
