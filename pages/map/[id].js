import stores from '../../data/stores.json'

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
        <div>
            <h1>{store.name}</h1>
            <p>{store.type}</p>
            <p>{store.address}</p>
            <p>{store.schedule}</p>
            <p>{store.description}</p>
        </div>
     );
}
 
export default Details;