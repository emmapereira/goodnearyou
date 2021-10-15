import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useEffect} from 'react'


const Navbar = () => {
    return ( 
        <>
        <header>
            <h1 id="title">Good Near You</h1>
        </header>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <nav id="topNav">
            <div className="logo">
                {/* <Image src="/gny.svg" width={535} height={65} /> */}
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/map"><a>Map</a></Link>
            <Link href="/about"><a>About</a></Link>
        </nav>
        </>
     );
}
 
export default Navbar;