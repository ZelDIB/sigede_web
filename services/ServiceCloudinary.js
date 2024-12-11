import axios from "axios";

export const ServiceCloudinary = {
    async uploadImage(file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "dpkl7ms3o-sigede"); 

        try {
            // Hacemos una copia de las cabeceras actuales, pero sin el Authorization
            const headers = { ...axios.defaults.headers };

            // Eliminamos el Authorization en esta solicitud específica
            delete headers["Authorization"];

            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dpkl7ms3o/image/upload",
                formData,
                { headers } // Pasamos las cabeceras sin el Authorization
            );
            return response.data.secure_url; 
        } catch (error) {
            console.error("Error al subir imagen a Cloudinary:", error);
            throw error;
        }
    },
};
