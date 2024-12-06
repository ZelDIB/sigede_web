import axios from "axios";
import BASEURL from "../utils/properties.js";

export const ServiceInstitutions = {
    async registerInstitution(institutionData) {
        try {
            const response = await axios.post(
                `${BASEURL}api/institutions/post-institution`,
                institutionData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            return response.data;
        } catch (error) {
            console.error("Error al registrar institución:", error);
            throw error.response?.data || error;
        }
    },

};
