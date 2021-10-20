import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import GMap from '../components/GMap'
import InstagramFeed from '../components/InstagramFeed'
import Recommended from '../components/Recommended'

export default function Home() {
  return (
    <>
      <Head>
        <title>Good Near You | Home</title>
        <meta name="keywords" content="goodnearyou"/>
      </Head>
      <div>
        <h2 className={styles.title}>Homepage</h2>
        <p className={styles.text}>Welcome to Good Near You! Our goal is to help you find sustainable fashion around you. 
        On the map below you can see all the stores in your selected area, from thrift stores and vintage stores, to slow fashion brands.
        Hope you find your perfect place. Happy shopping!</p>
      </div>
      <GMap/>
      <div id="fakeMap"></div>
      <Recommended/>
      <InstagramFeed/>
    </>
  )
}

/*<Link href="/map">
    <a className={styles.btn}>See the map with the stores</a>
</Link>*/
