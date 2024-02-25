import { toast } from "react-hot-toast"
import { apiConnector } from "./apiConnector";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchCategories = async () => {
    try {
        const {data, response} = await apiConnector('GET', `${API_URL}/categories/`);
        if (!response.ok) {
            throw new Error('Request failed with status ' + response.status);
        }
        console.log(response)
        return data.data;
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
}

export const fetchProducts = async () => {
    try {
        const {data, response} = await apiConnector('GET', `${API_URL}/products/`);
        if (!response.ok) {
            throw new Error('Request failed with status ' + response.status);
        }
        return data;
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
}