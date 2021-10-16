import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import stores from '../data/stores.json'
import '../styles/Home.module.css'
import React, {useState} from "react"
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
  import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
  } from "@reach/combobox";

  import "@reach/combobox/styles.css";


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

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(12);
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
            <Search panTo = {panTo} />
            <Locate panTo = {panTo} />

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

function Locate({ panTo }) {
    return (
      <button
        className="locate"
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            () => null
          );
        }}
      >
        <img src="../public/compass.svg" alt="compass" />
      </button>
    );
  }

function Search ({panTo}) {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
          location: { lat: () => 57.6995819, lng: () => 11.9144126 },
          radius: 100 * 1000,
        },
    })

    const handleInput = (e) => {
        setValue(e.target.value);
      };
    
      const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();
    
        try {
          const results = await getGeocode({ address });
          const { lat, lng } = await getLatLng(results[0]);
          panTo({ lat, lng });
        } catch (error) {
          console.log("😱 Error: ", error);
        }
      };

    return (
        <div className="search">
          <Combobox 
            onSelect={handleSelect}>

            <ComboboxInput
              value={value}
              onChange={handleInput}
              disabled={!ready}
              placeholder="Search your location"
            />
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" &&
                    data.map(({ id, description }) => (
                        <ComboboxOption key={id} value={description} />
                    ))}
                </ComboboxList>
            </ComboboxPopover>
          </Combobox>
        </div>
      );
}
