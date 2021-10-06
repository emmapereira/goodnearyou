import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/gny.svg" width={535} height={65} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/map"><a>Map</a></Link>
            <Link href="/about"><a>About</a></Link>
        </nav>
     );
}
 
export default Navbar;