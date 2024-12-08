import axios from "axios";
import BASEURL from "~/utils/properties";
/*export const getAllUserByInstitutionAndRolename=async(data, page)=>{
    console.log(data)
    try {
        const response = await axios.post(`${BASEURL}api/users/get-all-by-institution-rolename?page=${page}&size=5&sort=name,desc`,data);
        return response.data;
    }catch(e){
        console.error(e);
        return ("Ocurrio un error en la peticion");
    }
}
    */
export const getAllCredentialByInstitutionIdAndName = async (data, page) => {
    try {
        const response = await axios.post(`${BASEURL}api/credentials/get-all-by-institution?page=${page}&size=10&sort=fullname,desc`, data);
        console.log(response.data)
        return response.data;
    } catch (e) {
        console.error(e);
        return ("Ocurrio un error en la peticion");
    }
}


export const getFormByInstitutionId=async (institutionId)=>{
    try {
        const response = await axios.get(`${BASEURL}api/user-info/get-institution-form/${institutionId}`);
        return response.data;
    } catch (e) {
        console.error(e);
        return ("Ocurrio un error en la peticion");
    }
}

export const registerCredential=async(data)=>{
    try {
        const response = await axios.post(`${BASEURL}api/credentials/new-credential`,data);
        return response.data;
    }catch(e){
        console.error(e);
        return ("Ocurrio un error en la peticion");
    }
}
export const getCapturistIdByEmail=async (email)=>{
    try {
        const response = await axios.get(`${BASEURL}api/capturists/get-capturistId/${email}`);
        return response.data;
    }catch(e){
        console.error(e);
        return ("Ocurrio un error en la peticion");
    }
}
