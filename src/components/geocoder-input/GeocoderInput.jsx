import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '../../assets/styles/geocoder-input.css';
import { useRef } from 'react';
import { useEffect } from 'react';

const GeocoderInput = props => {
    const geocoder = useRef();

    useEffect(() => {
        if (geocoder.current) {
            return;
        }
        geocoder.current = new MapboxGeocoder({
            // Initialize the geocoder
            accessToken: process.env.REACT_APP_MAPBOX_KEY, // Set the access token
            types: "address",
            placeholder: props.placeholder,
            bbox: [-4.58, 39.88, 3.05, 41.17], // Boundary for Community of Madrid
            proximity: {
                longitude: -3.7,
                latitude: 40.42
            } // Coordinates of Sol
        });
        // Set event handler to store coordinates of the user selection
        geocoder.current.on("result", (result) => {
            props.setAddress(result.result.place_name);
            props.setCoordinates(result.result.center);
        });
        // Add the geocoder to a container
        const containerID = `#geocoder-container-${props.reference}`;
        geocoder.current.addTo(containerID);
        console.log(geocoder.current);
        // Set class to remove clashing styling class from Map css
        geocoder.current.container.className = "mapboxgl-ctrl-geocoder";
    }, []);

    return (
        <div id={`geocoder-container-${props.reference}`}></div>
    );
}

export default GeocoderInput;