import Head from 'next/head'
import styles from '../styles/Stores.module.css'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await res.json();

    return {
        props: { stores: data }
    }
}


const Map = ({ stores }) => {
    return ( 
        <>
        <Head>
                <title>Good Near You | Map</title>
                <meta name="keywords" content="goodnearyou"/>
            </Head>
        <div>
            <h1>See the map with all the stores here</h1>
            {stores.map(store => (
                <div key={store.id}>
                    <a className={styles.single}>
                        <h3>
                            {store.title}
                        </h3>
                    </a>
                </div>
            ))} 
        </div>
        </>
     );
}
 
export default Map;