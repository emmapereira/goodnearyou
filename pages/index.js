import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import GMap from '../components/GMap'

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
      <GMap/>
      <div id="fakeMap"></div>
    </>
  )
}
