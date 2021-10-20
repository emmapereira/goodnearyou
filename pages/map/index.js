import Head from 'next/head'
import styles from '../../styles/Stores.module.css'
import stores from '../../data/stores.json'
import GMap from '../../components/GMap'
import Link from 'next/link'

export const getStaticProps = async () => {

    /*const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await res.json();*/

    return {
        props: { storesList: stores }
    }
}


const Map = ({storesList}) => {
    return ( 
        <>
        <Head>
                <title>Good Near You | Map</title>
                <meta name="keywords" content="goodnearyou"/>
            </Head>
        <div>
            <h1>See the map with all the stores here</h1>

            <GMap/>

            {storesList.map(store => (
                <Link href = {'/map/' + store.id } key={store.id}>
                    <a className={styles.single}>
                        <h3>{store.name}</h3>
                        <h4>{store.address}</h4>
                        <h5>{store.type}</h5>
                    </a>
                </Link>
            ))} 
        </div>
        </>
     );
}
 
export default Map;