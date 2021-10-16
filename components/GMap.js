import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import stores from '../data/stores.json'
import React, {useState} from "react"


const libraries = ["places"]

const mapContainerStyle = {
    width:"70vw", 
    height: "70vh"
}

const center = {
    lat: 57.6995819, 
    lng: 11.9144126
}

/*const options = {
    styles:
    disableDefaultUI: true,
    zoomControl: true,
}*/


const GMap = () => { 
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyCi0xsW1SJeoMI75dm4BRz01ab-ryQR0mg",            
        libraries
    })

    const [selected, setSelected] = React.useState(null)
    const [infoOpen, setInfoOpen] = React.useState(false)
    const [markerMap, setMarkerMap] = React.useState({})
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    // We have to create a mapping of our places to actual Marker objects
    const markerLoadHandler = (marker, store) => {
        return setMarkerMap(prevState => {
            return { ...prevState, [store.id]: marker };
        });
    };

    const markerClickHandler = (event, store) => {
        // Remember which place was clicked
        setSelected(store);
    
        // Required so clicking a 2nd marker works as expected
        if (infoOpen) {
          setInfoOpen(false);
        }
    
        setInfoOpen(true);
    }

    if (loadError) return "Error loading maps"
    if (!isLoaded) return "Loading Maps"

    return (
        <div>
            <GoogleMap 
                mapContainerStyle={mapContainerStyle} 
                zoom={12} 
                center = {center}
                //options = {options}
                onLoad={onMapLoad}
            >
             
            {stores.map((store) => ( 
                <Marker 
                    key = {store.id}
                    position = {{
                        lat: store.latitude,
                        lng: store.longitude
                    }}
                    onLoad={marker => markerLoadHandler(marker, store)}
                    onClick={event => markerClickHandler(event, store)}
                />
            ))}

            {infoOpen && selected && (
                <InfoWindow 
                    anchor={markerMap[selected.id]}
                    onCloseClick={() => setInfoOpen(false)} 
                > 
                    <div>
                        <h3>{selected.name}</h3>
                        <h4>{selected.address}</h4>
                    </div>
                </InfoWindow>
            )}

            </GoogleMap>
        </div>
    );
}
 
export default GMap;