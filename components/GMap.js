import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map() {
    return ( 
        <GoogleMap 
            defaultZoom={8} 
            defaultCenter = {{lat: -34.397, lng: 150.644}}
        />
     );
}

const wrappedMap = withScriptjs(withGoogleMap(Map));

const GMap = () => {
    return ( 
        <div style={{width:"100vw", height: "100vh"}} >
        <wrappedMap 
        googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyCi0xsW1SJeoMI75dm4BRz01ab-ryQR0mg&callback=initMap'}
        loadingElement={<div style={{height: "100%"}} /> }
        containerElement={<div style={{height: "100%"}} /> }
        mapElement={<div style={{height: "100%"}} /> }
        />
        </div>
     );
}
 
export default GMap;