export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await res.json();

    return {
        props: { stores: data }
    }
}

const Map = ({ stores }) => {
    return ( 
        <div>
            <h1>See the map with all the stores here</h1>
            {stores.map(store => (
                <div key={store.id}>
                    <a>
                        <h3>
                            {store.title}
                        </h3>
                    </a>
                </div>
            ))} 
        </div>
     );
}
 
export default Map;