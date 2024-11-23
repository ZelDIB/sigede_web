import axios from "axios";
import BASEURL from "~/utils/properties";

export const  getAllInstitutions=async()=>{
    try {
        const response = await axios.get(`${BASEURL}api/institutions`);
        return response.data;
    }catch(e){
        console.error(e);
        return ("Ocurrio un error en la peticion");
    }
}