export const fileUpload = async (file) => {
    if (!file) throw new Error("There is no file to upload");

    const cloudUrl = "https://api.cloudinary.com/v1_1/dgeqgj6ya/upload";
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "react-journal");

    try {
        const resp = await fetch(cloudUrl, {
            method: "POST",
            body: formData,
        });

        if (!resp.ok) throw new Error("Error on image upload");

        const cloudResp = await resp.json();

        return cloudResp.secure_url;
    } catch (error) {
        throw new Error(error.message);
    }
};
