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
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

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
                    onClick = {() => {
                        setSelected(store)
                    }}
                />
            ))}

            {selected ? (<InfoWindow position={{ lat: selected.lat, lng: selected.lng}}> 
                <div>
                    <h2>hey there</h2>
                </div>
            </InfoWindow>) : null}
            </GoogleMap>
        </div>
    );
}
 
export default GMap;