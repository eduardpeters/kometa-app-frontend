import axios from "axios";

class mapboxAPI {

    static async getRoute(originCoordinates, destinationCoordinates, mapboxToken) {
        const requestUrl = `https://api.mapbox.com/directions/v5/mapbox/cycling/${originCoordinates[0]},${originCoordinates[1]};${destinationCoordinates[0]},${destinationCoordinates[1]}?steps=true&geometries=geojson&access_token=${mapboxToken}`;
        console.log("Send to backend!", requestUrl);
        try {
            const response = await axios.get(requestUrl);
            return response.data;
        }
        catch (error) {  
            console.error(error);
            return error.response.data;
        }
    }
}

export default mapboxAPI;