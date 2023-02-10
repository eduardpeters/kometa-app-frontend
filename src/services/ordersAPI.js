import axios from "axios";

class ordersAPI {

    static async getOrders(token) {
        const requestUrl = `${process.env.REACT_APP_BASE_URL}orders`;
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }

        console.log("Send to backend!", requestUrl, config);
        try {
            const response = await axios.get(requestUrl, config);
            return response.data;
        }
        catch (error) {  
            console.error(error);
            return error.response.data;
        }
    }
}

export default ordersAPI;