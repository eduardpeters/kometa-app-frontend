import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import "../../assets/styles/map.css";
import mapboxAPI from "../../services/mapboxAPI";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

const Map = (props) => {
    const midpointCoordinates = props.origin.map(
        (originCoordinate, coordinateIndex) => (originCoordinate + (props.destination[coordinateIndex] - originCoordinate) / 2).toFixed(4)
    );
    const map = useRef(null);
    const mapContainer = useRef(null);
    const [lng, setLng] = useState(midpointCoordinates[0]);
    const [lat, setLat] = useState(midpointCoordinates[1]);
    const [zoom, setZoom] = useState(13);

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
        traceRoute(props.origin, props.destination);
    },[]);

    function placeMapPoints(coordinates, type) {
        if (map.current.getSource(type)) {
                return ;
        }
        const circleColor = type === 'start' ? '#6ed46e' : '#4763ff';
        map.current.addLayer({
            id: type,
            type: 'circle',
            source: {
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features: [
                  {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                      type: 'Point',
                      coordinates: coordinates
                    }
                  }
                ]
              }
            },
            paint: {
              'circle-radius': 10,
              'circle-color': circleColor,
              'circle-opacity': 0.75
            }
          });
    }

    async function traceRoute(originCoordinates, destinationCoordinates) {
        const response = await mapboxAPI.getRoute(originCoordinates, destinationCoordinates, mapboxgl.accessToken); 
        const responseData = response.routes[0];
        const routeCoordinates = responseData.geometry.coordinates;
        const geojson = {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'LineString',
                coordinates: routeCoordinates
            }
        };
        if (map.current.getSource('route')) {
            map.current.setSource('route').setData(geojson);
        }
        else {
            map.current.addLayer({
                id: 'route',
                type: 'line',
                source: {
                    type: 'geojson',
                    data: geojson
                },
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                paint: {
                    'line-color': '#3887be',
                    'line-width': 5,
                    'line-opacity': 0.75
                }
            });
        }
        placeMapPoints(originCoordinates, 'start');
        placeMapPoints(destinationCoordinates, 'end');
    }

    return (
        <div ref={mapContainer} className="map-container"></div>
    );
}

export default Map;