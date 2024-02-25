import { toast } from "react-hot-toast"
import { apiConnector } from "../apiconnector1"
import { ProductEndpoints } from "../endpoints"

const { GET_PRODUCT_API,CREATE_PRODUCT_API } = ProductEndpoints
const token = localStorage.getItem('token');
const BearerToken = `Bearer ${token}`;

export const getAllProduct = async () => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
        const response = await apiConnector("GET", GET_PRODUCT_API)
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Product Categories")
        }
        result = response?.data?.data
    } catch (error) {
        console.log("GET_ALL_PRODUCT_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

// add the course details
export const addProductDetails = async (data) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", CREATE_PRODUCT_API, data, {
        "Content-Type": "multipart/form-data",
        Authorization: BearerToken,
      })
      console.log("CREATE PRODUCT API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Add Product Details")
      }
      toast.success("Product Details Added Successfully")
      result = response?.data?.data
    } catch (error) {
      console.log("CREATE PRODUCT API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }