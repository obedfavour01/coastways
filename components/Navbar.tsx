import Image from "next/image"


const Navbar = () => {
  return (
    <nav className="h-[10vh]  flex lg:justify-between px-8 items-center">
      {/* Logo */}
      <Image
        src="/images/logo2.png"
        alt="coastways logo"
        width={300}
        height={50}
        style={{ objectFit: "contain", }} />

      {/* Links */}

      <ul className="flex gap-8 items-center">
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Services</li>
        <button
          className=
          {`bg-transparent 
         rounded-lg 
         border border-black 
         hover:text-white
         hover:bg-black
         p-2`}>
          Send Item Now!
        </button>
      </ul>

    </nav>
  )
}

export default Navbar