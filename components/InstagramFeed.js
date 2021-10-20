import styles from '../styles/Home.module.css'
import Link from 'next/link'

const InstagramFeed = () => {
    return ( 
        <div className="content">
            <h3>The store's instagrams</h3>
            
            <Link href="https://www.instagram.com/p/CUzVPXrLTY6/">
                <div className={styles.square1}></div>
            </Link>

            <Link href="https://www.instagram.com/p/CVCuZFGs4ir/">
                <div className={styles.square2}></div>
            </Link>

            <Link href="https://www.instagram.com/p/CUaOLjeM3kk/">
                <div className={styles.square3}></div>
            </Link>

            <Link href="https://www.instagram.com/p/CTxSWiWlSC0/">
                <div className={styles.square4}></div>
            </Link>

            <Link href="https://www.instagram.com/p/CUf11ArAD3e/">
                <div className={styles.square5}></div>
            </Link>

            <Link href="https://www.instagram.com/p/CVNQ-RJsz3N/">
                <div className={styles.square6}></div>
            </Link>
        </div>
     );
}
 
export default InstagramFeed;