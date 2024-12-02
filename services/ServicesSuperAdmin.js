import axios from "axios";
import BASEURL from "~/utils/properties";

export const  getAllInstitutions=async()=>{
    try {
        const response = await axios.get(`${BASEURL}api/institutions/get-all`);
        return response.data;
    }catch(e){
        console.error(e);
        return ("Ocurrio un error en la peticion");
    }
}


export const  registerOrgatization= async (data)=>{
    try {
        const response = await axios.post(`${BASEURL}api/institutions/post-institution`,data);
        return response.data;
    }catch(e){
        console.error(e);
        return ("Ocurrio un error en la peticion");
    }   
}


export const getAdminsByInstitutionId=async(institutionId)=>{
    try {
        const response = await axios.get(`${BASEURL}api/users/admins/${institutionId}`);
        return response.data;
    }catch(e){
        console.error(e);
        return ("Ocurrio un error en la peticion");
    }
}

export const getInstitutionInfoByinstitutionId=async(institutionId)=>{
    try {
        const response = await axios.get(`${BASEURL}api/institutions/${institutionId}`);
        return response.data;
    }catch(e){
        console.error(e);
        return ("Ocurrio un error en la peticion");
    }
}



export const  registerAdminInOrganization= async (data)=>{
    try {
        const response = await axios.post(`${BASEURL}api/admin/register`,data);
        return response.data;
    }catch(e){
        console.error(e);
        return ("Ocurrio un error en la peticion");
    }   
}

export const  updateInstitution= async (data)=>{
    try {
        const response = await axios.put(`${BASEURL}api/institutions/update`,data);
        return response.data;
    }catch(e){
        console.error(e);
        return ("Ocurrio un error en la peticion");
    }   
}

