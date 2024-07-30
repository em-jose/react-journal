import { getEnvironments } from "@/helpers/getEnvironments";

export const fileUpload = async (file) => {
    if (!file) return null;

    const { VITE_CLOUDINARY_CLOUD_URL } = getEnvironments();

    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "react-journal");

    try {
        const resp = await fetch(VITE_CLOUDINARY_CLOUD_URL, {
            method: "POST",
            body: formData,
        });

        if (!resp.ok) throw new Error("Error on image upload");

        const cloudResp = await resp.json();

        return cloudResp.secure_url;
    } catch (error) {
        return null;
    }
};
