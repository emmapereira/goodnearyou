import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Recommended = () => {
    return ( 
        <div className="content">
            <h3>This week's recommended stores</h3>
            
            <Link href="https://www.thrivestore.se/">
                <div className={styles.squarerec1}></div>
            </Link>

            <Link href="https://www.humanasecondhand.se/gbg">
                <div className={styles.squarerec2}></div>
            </Link>

            <Link href="https://arkivetsthlm.se/">
                <div className={styles.squarerec3}></div>
            </Link>
        </div>
     );
}
 
export default Recommended;