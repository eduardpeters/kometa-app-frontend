import axios from "axios";

class ordersAPI {

    static async getOrders(token, status) {
        let requestUrl = `${process.env.REACT_APP_BASE_URL}orders`;
        if (status) {
            requestUrl = requestUrl.concat('/?status=', status.join('&status='));
        }
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        try {
            const response = await axios.get(requestUrl, config);
            return response.data;
        }
        catch (error) {
            console.error(error);
            return error.response.data;
        }
    }


    static async patchOrder(token, orderStatus, orderUUID) {
        const requestUrl = `${process.env.REACT_APP_BASE_URL}orders/${orderUUID}`;
        const patchBody = {orderStatus: orderStatus};
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        try {
            const response = await axios.patch(requestUrl, patchBody, config);
            return response.data;
        }
        catch (error) {
            console.error(error);
            return error.response.data;
        }
    }



    static async postOrder(token, orderDetails) {
        const requestUrl = `${process.env.REACT_APP_BASE_URL}orders`;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        try {
            const response = await axios.post(requestUrl, orderDetails, config);
            return response.data;
        }
        catch (error) {
            console.error(error);
            return error.response.data;
        }

    }

}

export default ordersAPI;