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
    try {
        const response = await axios.post(`${BASEURL}api/capturists/register`,data);
        return response.data;
    }catch(e){
        console.error(e);
        return ("Ocurrio un error en la peticion");
    }
}


export const getOneCapturist=async(userAccountId,institutionId)=>{
    try {
        const response = await axios.get(`${BASEURL}api/capturists/get-capturist/${userAccountId}/${institutionId}`);
        return response.data;
    }catch(e){
        console.error(e);
        return ("Ocurrio un error en la peticion");
    }
}
export const updateCapturist=async(data)=>{
    try {
        const response = await axios.put(`${BASEURL}api/capturists/update-basic-data`,data);
        return response.data;
    }catch(e){
        console.error(e);
        return ("Ocurrio un error en la peticion");
    }
}






