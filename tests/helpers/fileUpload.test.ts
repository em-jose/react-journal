import { v2 as cloudinary } from "cloudinary";
import { getEnvironments } from "../../src/helpers/getEnvironments";
import { fileUpload } from "../../src/helpers/fileUpload";

const {
    VITE_CLOUDINARY_CLOUD_NAME,
    VITE_CLOUDINARY_API_KEY,
    VITE_CLOUDINARY_API_SECRET,
} = getEnvironments();

cloudinary.config({
    cloud_name: VITE_CLOUDINARY_CLOUD_NAME,
    api_key: VITE_CLOUDINARY_API_KEY,
    api_secret: VITE_CLOUDINARY_API_SECRET,
    secure: true,
});

describe("Tests over fileUpload", () => {
    test("Should upload file correctly to Cloudinary", async () => {
        const imageUrl =
            "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png";
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], "photo.jpg");
        const url = await fileUpload(file);

        expect(typeof url).toBe("string");

        const segments = url.split("/");
        const imageId = segments[segments.length - 1].replace(".png", "");

        const cloudResp = await cloudinary.api.delete_resources(
            ["journal/" + imageId],
            {
                resource_type: "image",
            }
        );
    });

    test("Should return null", async () => {
        const file = new File([], "photo.jpg");
        const url = await fileUpload(file);

        expect(url).toBe(null);
    });
});
