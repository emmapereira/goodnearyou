import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"

function Map() {
    return ( 
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter = {{ lat: 45.4211, lng: -75.6903 }}
        />
     );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function Home() {
  return (
    <>
      <Head>
        <title>Good Near You | Home</title>
        <meta name="keywords" content="goodnearyou"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>This is the homepage of our project welcome to Good Near You</p>
        <Link href="/map">
          <a className={styles.btn}>See the map with the stores</a>
        </Link>
      </div>
      <div style={{width:"70vw", height: "70vh"}} >
          <MapWrapped 
          googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCi0xsW1SJeoMI75dm4BRz01ab-ryQR0mg'}
          loadingElement={<div style={{height: '100%'}} /> }
          containerElement={<div style={{height: '100%'}} /> }
          mapElement={<div style={{height: '100%'}} /> }
          />
        </div>
    </>
  )
}
