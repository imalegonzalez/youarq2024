"use client"

import { usePathname } from "next/navigation";

const NavBar = () => {

  const pathname = usePathname()
  // Verifica si la ruta actual comienza con '/proyectos/'
  const showNavbar = !pathname.startsWith('/proyectos/');

  if(!showNavbar){
    return null
  }
  return (
    <>
      <section className=" fixed h-20 px-5 flex w-full relative bg-white justify-between items-center ">
        <p>Youarq</p>
        <div className=" gap-3 text-sm flex">
        <p>Home</p>
        <p>Pedir Presupuesto</p>
        </div>
      </section>
    </>
   

  )
}

export default NavBar
