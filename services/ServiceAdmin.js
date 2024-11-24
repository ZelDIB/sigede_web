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


export const registerCapturist=async(data)=>{
    console.log(data)
    try {
        const response = await axios.post(`${BASEURL}api/capturers/register`,data);
        return response.data;
    }catch(e){
        console.error(e);
        return ("Ocurrio un error en la peticion");
    }
}
