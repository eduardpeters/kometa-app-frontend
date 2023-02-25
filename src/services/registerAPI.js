import axios from "axios";

class registerAPI {

    static async postRegister( firstName, lastName, birthdate, nationalID, email, phone, password, role) {
        const requestUrl = `${process.env.REACT_APP_BASE_URL}register`;
        const requestBody = { firstName, lastName, birthdate, nationalID, email, phone, password, role};

        try {
            const response = await axios.post(requestUrl, requestBody);
            return response.data;
        }
        catch (error) {
            console.error(error);
            return error.response.data;
        }
    }
}

export default registerAPI;