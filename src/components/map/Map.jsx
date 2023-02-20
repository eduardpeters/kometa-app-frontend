import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "../../assets/styles/map.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

const Map = () => {
    const map = useRef(null);
    const mapContainer = useRef(null);
    const [lng, setLng] = useState(-3.7);
    const [lat, setLat] = useState(40.42);
    const [zoom, setZoom] = useState(12);

    useEffect(() => {
        if (map.current) {
            return;
        }
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [lng, lat],
            zoom: zoom
        });
        map.current.on("move", () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    },[]);

    return (
        <div ref={mapContainer} className="map-container"></div>
    );
}

export default Map;