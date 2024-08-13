import Image from "next/image"
import Link from "next/link"


const navbar = [
    {src : '/assets/icons/search.svg', alt : "search"},
    {src : '/assets/icons/black-heart.svg', alt : "heart"},
    {src : '/assets/icons/user.svg', alt : "user"},
]


const Navbar = () => {
  return (
    <header className="w-full fixed">
        <nav className="nav">
             <Link href={"/"} className="flex items-center gap-1">
             <Image
             src="/assets/icons/logo.svg"
             width={28}
             height={28}
             alt="Website Logo"
             />
             <p className="nav-logo">Price<span className="text-primary">Wise</span></p>
             </Link>
             <div className="flex items-center gap-5">
                {navbar.map((icon) => (
                    <Image
                    src={icon.src}
                    key={icon.alt}
                    alt={icon.alt}
                    height={27}
                    width={27}
                    />
                ))}
             </div>
        </nav>
    </header>
  )
}

export default Navbar