import Link from 'next/link'

const Navbar = () => {
  return (
    <div>

        <li><Link href="/"><a>Home</a></Link></li>
         <li><Link href="/about"><a>About</a></Link></li>
     <li><Link href="/contact"><a>Contact</a></Link></li>
    <li><Link href="/product"><a>Product</a></Link></li>

    </div>
  )
}

export default Navbar