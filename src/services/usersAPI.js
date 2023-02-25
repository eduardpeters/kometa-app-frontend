import axios from "axios";

class usersAPI {

    static async updateAvailability(token, isAvailable) {
        const requestUrl = `${process.env.REACT_APP_BASE_URL}users/available?available=${isAvailable}`;

        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        console.log("Send to backend!", requestUrl, config);
        try {
            const response = await axios.patch(requestUrl,{},config);
            return response.data;
        }
        catch (error) {  
            console.error(error);
            return error.response.data;
        }
    }
}

export default usersAPI;