const BASE_URL="http://localhost:4000/api/"
// PRODUCT ENDPOINTS
export const ProductEndpoints = {
    GET_PRODUCT_API: BASE_URL + "products/",
    CREATE_PRODUCT_API:BASE_URL+"products/add/"
}
//paymentEndpoints
export const paymentEndpoints = {
    VERIFY_API: BASE_URL + "payments/paymentVerification/",
    PAYMENT_API  :BASE_URL+"payments/checkout/",
    SEND_PAYMENT_SUCCESS_EMAIL_API:BASE_URL+"products/add/",
}
