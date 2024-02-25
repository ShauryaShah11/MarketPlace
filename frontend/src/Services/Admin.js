import Axios from 'axios';
const url= "http://localhost:4000";

export const handleAllCustomer = async () => {
    const data = await Axios.get(`${url}/api/users/getAllcustomer`).then((response) => {
        return response.data;
    });

    return data;
}

export const handleAllProduct = async () => {
    const data = await Axios.get(`${url}/api/products`).then((response) => {
        return response.data;
    });

    return data;
}

export const handleAllCategory = async () => {
    const data = await Axios.get(`${url}/api/categories`,).then((response) => {
        return response.data;
    });

    return data;
} 
export const handleadd = async (inf) => {
    const data = await Axios.post(`${url}/api/categories/add`,inf).then((response) => {
        return response.data;
    });

    return data;
} 
