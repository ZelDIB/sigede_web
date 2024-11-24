import axios from "axios";
import BASEURL from "~/utils/properties";

export const getAllCapturitsByInstitutionId=async(institutionId)=>{
    try {
        const response = await axios.get(`${BASEURL}api/users/capturists/${institutionId}`);
        return response.data;
    }catch(e){
        console.error(e);
        return ("Ocurrio un error en la peticion");
    }
}