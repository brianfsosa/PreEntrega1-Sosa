import CartWidget from "./CartWidget"


function Navbar() {
  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between p-6 text-[#ECEFF6] bg-gradient-to-r from-cyan-900 to-cyan-950">
     <div>
        <h1><span className="font-bold mr-2">RPG</span>Store</h1>
     </div>
     <div>
        <ul className="flex gap-8 ">
            <li className="transition hover:ease-in-out hover:text-[#4196E5] hover:scale-125"><a href="#"><i className="fa-solid fa-wand-sparkles m-2"></i> Armas</a></li>
            <li className="transition hover:ease-in-out hover:text-[#4196E5] hover:scale-125"><a href="#"><i className="fa-solid fa-shield-halved m-2"></i> Armaduras</a></li>
            <li className="transition hover:ease-in-out hover:text-[#4196E5] hover:scale-125"><a href="#"><i className="fa-solid fa-flask m-2"></i> Pociones</a></li>
            <li className="transition hover:ease-in-out hover:text-[#4196E5] hover:scale-125"><a href="#"><i className="fa-solid fa-paw m-2"></i> Mascotas</a></li>
        </ul>
     </div>
     <div><CartWidget /></div>
    </nav>
  )
}

export default Navbar