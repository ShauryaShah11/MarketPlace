import Axios from 'axios';
// import { url } from './index.js';

const token = localStorage.getItem('jwt');
const config = {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
    withCredentials: true,
};
const url= "http://localhost:4000"

export const handleotpwithemail =async(inf) =>{
    const data = await Axios.post(`${url}/api/auth/sendotp-email/`, inf).then((response) => {
        return response.data;
    });

    return data;
}
export const handlesignupwithemail =async(inf) =>{
    const data = await Axios.post(`${url}/api/auth/signup-email/`, inf).then((response) => {
        return response.data;
    });

    return data;
}
export const handleloginwithemail =async(inf) =>{
    const data = await Axios.post(`${url}/api/auth/login/`, inf);
  

    return data.data;


}