import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useEffect, useState} from 'react'
import image from 'next/image'


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    let menu

    if(showMenu) {
        menu = 
            <nav id="mobileMenu">
            <Link href="/"><a>Home</a></Link>
            <Link href="/map"><a>Stores</a></Link>
            <Link href="/about"><a>About & Register</a></Link>
            </nav>
    }

    return ( 
        <>
        <Link href="https://google.com">
            <header>
                <h1 id="title">Good Near You</h1>
            </header>
        </Link>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <div className="navIcon">
                { <Image id="mobIcon" src="/Hamburger_icon.png" width={50} height={50} onClick={() => setShowMenu(!showMenu)} alt="menu icon"/>}
        </div>
        
        { menu }

        <nav id="topNav">
            <div className="logo">
                {/* <Image src="/gny.svg" width={535} height={65} /> */}
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/map"><a>Stores</a></Link>
            <Link href="/about"><a>About & Register</a></Link>
        </nav>
        </>
     );
}
 
export default Navbar;