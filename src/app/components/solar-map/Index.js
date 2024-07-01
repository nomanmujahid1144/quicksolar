import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Loader } from '@googlemaps/js-api-loader';

const containerStyle = {
  width: '100%',
  height: '100vh',
};


export const SolarMap = ({ solarData }) => {

    console.log(solarData)
    const defaultLocation = {
        lat: solarData.center.latitude,
        lng: solarData.center.longitude
    };


    // const [map, setMap] = useState(null);
    // const [placesLibrary, setPlacesLibrary] = useState(null);
    // const [geometryLibrary, setGeometryLibrary] = useState(null);

    // useEffect(() => {
    //     const loader = new Loader({ apiKey: googleMapsApiKey });
    //     const loadLibraries = async () => {
    //     const libraries = await loader.load(['maps', 'places', 'geometry']);
    //     setPlacesLibrary(libraries.places);
    //     setGeometryLibrary(libraries.geometry);
    //     };
    //     loadLibraries();
    // }, []);

    // const handleLoad = (map) => {
    //     setMap(map);
    // };

    // const handleLocationSearch = (address) => {
    //     if (!placesLibrary || !map) return;

    //     const geocoder = new google.maps.Geocoder();
    //     geocoder.geocode({ address }, (results, status) => {
    //     if (status === 'OK' && results[0]?.geometry?.location) {
    //         const location = results[0].geometry.location;
    //         map.setCenter(location);
    //     } else {
    //         console.error('Geocode was not successful for the following reason:', status);
    //     }
    //     });
    // };
  


    return (
        <LoadScript googleMapsApiKey={'AIzaSyB85YRBTg_OK38D6DeDLPhnu7G0Z3KkY0s'}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={defaultLocation}
                zoom={19}
                tilt={0}
                mapTypeId="satellite"
                mapTypeControl={false}
                fullscreenControl={false}
                rotateControl={false}
                streetViewControl={false}
                zoomControl={false}
            >
                <Marker position={defaultLocation} />
        </GoogleMap>
      </LoadScript>
    );
}