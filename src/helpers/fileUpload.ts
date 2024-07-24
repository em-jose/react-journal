export const fileUpload = async (file) => {
    if (!file) return null;

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
        return null;
    }
};
