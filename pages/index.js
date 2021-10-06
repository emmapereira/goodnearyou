import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Good Near You | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>This is the homepage of our project welcome to Good Near You</p>
        <Link href="/map">
          <a className={styles.btn}>See the map with the stores</a>
        </Link>
      </div>
    </>
  )
}
