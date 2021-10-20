import Head from 'next/head'
import stores from '../../data/stores.json'
import styles from '../../styles/Stores.module.css'

export const getStaticProps = async ({params}) => {
    const storesList = stores.filter(s => s.id.toString() == params.id)

    return {
        props: { 
            store: storesList[0], 
        },
    }
}

export const getStaticPaths = async () => {

    const paths = stores.map(store => {
        return {
            params: {id: store.id.toString()}
        }
    })
    return {
        paths, 
        fallback: false
    }
} 


const Details = ({store}) => {
    return ( 
        <>
        <Head>
        <meta name="Viewport" content="width=device-width, initial-scale=1, maximum-scale=2"></meta>
        </Head>

        <div className={styles.onestore}>
            <h1>{store.name}</h1>
            <img src="/hanging-clothes.jpeg" className={styles.imagestore}/>
            <p>Type of store: {store.type}</p>
            <p>Address: {store.address}</p>
            <p>Schedule: {store.schedule}</p>
            <p>What the store sells: {store.products}</p>
            <p>Style: {store.style}</p>
            <p>Price range: {store.price}</p>
            <p>Description: {store.description}</p>
        </div>
        </>
     );
}
 
export default Details;