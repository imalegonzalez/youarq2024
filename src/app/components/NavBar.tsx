"use client"
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
 
} from "@/app/components/shadcn/navigation-menu"

import { cn } from "@/lib/utils"
import Link from "next/link";
import { useEffect, useState } from "react";

const components = [
  {
    title: "Cocinas",
    href: "/cocinas",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Baños",
    href: "/banos",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Estructurales",
    href: "/estructurales",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Toda la casa",
    href: "/integrales",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  }
  
]

interface ListItemProps {
  className?: string;
  title: string;
  children?: React.ReactNode;
  href: string;
}

const ListItem: React.FC<ListItemProps> = (({ className, title, children, href, ...props }) => {
  return (
    <li>
      <NavigationMenuLink>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})

const NavBar = () => {
  const pathname = usePathname()
  // Verifica si la ruta actual coincide con las rutas especificadas
  const dontShowNavbar = pathname.startsWith('/proyectos/') || pathname.startsWith('/estimado');
  const [isOpen, setIsOpen] = useState(false)
  const [serviceIsOpen, setServiceIsOpen] = useState(false)
  
  // Nuevo estado para manejar el scroll
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0); // Cambia el estado basado en la posición del scroll
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Agrega el listener de scroll
    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpia el listener al desmontar
    };
  }, []);
  
  const handleOpen = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    setIsOpen((open) => !open)
    setServiceIsOpen((open) => false)
    
  }

  const handleOpenServices = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault()
    setServiceIsOpen((open) => !open)
    
  }

  useEffect(() => {
    setIsOpen((open) => false)
    setServiceIsOpen((open) => false)
  }, [pathname])
  

  if(dontShowNavbar){
    return null
  }
  return (
    <nav className={`w-full fixed z-20 transition-none ${isScrolled ? 'mt-1' : 'mt-3'} ${isOpen ? 'p-0 mt-0' : 'p-3'}`}>
      <div className={`md:max-w-6xl md:mx-auto md:flex-row md:px-3 flex wrap flex-col bg-white justify-between items-center bg-opacity-70 backdrop-blur-md border border-white border-opacity-20 rounded-full shadow-sm transition-[background-color,opacity,transform] duration-300 ease-in-out ${isOpen ? 'nav-open rounded-none -mt-3' : 'nav-closed'}`}>
        <div className={`menu-header transition-[opacity,transform] duration-300 ease-in-out ${isOpen ? 'mt-6' : ''}`}>
          <Link href={"/"} className="flex font-bold items-center">Youarq</Link>
          <a onClick={handleOpen} className="menu_trigger" href="/">{isOpen ? "Cerrar" : "Menu"}</a>
        </div>
        <div className={`menu__bar transition-[opacity,max-height,transform] duration-300 ease-in-out ${isOpen ? "is-open opacity-100 max-h-screen" : "opacity-0 max-h-0 md:opacity-100 md:max-h-screen"}`}>
          <div className="md:gap-5 font-normal text-sm menu_wrapper px-8 md:px-0 ">
            <div className="item-wrapper object-center items-left md:items-center md:gap-2">
              <Link href="/como-trabajamos" className={`leading-none group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent p-4 text-md md:text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 md:rounded-md md:p-4  md:leading-none md:no-underline md:outline-none md:transition-colors md:hover:bg-accent md:hover:text-accent-foreground md:focus:bg-accent md:focus:text-accent-foreground ${serviceIsOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>Cómo trabajamos</Link>
              <NavigationMenu className=" hidden md:flex">
                <NavigationMenuList className="">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">Remodelaciones</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-1 p-4 md:w-[250px] md:grid-cols-1 ">
                          {components.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                            
                            </ListItem>
                          ))}
                        </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <span onClick={handleOpenServices} className={`text-md flex justify-between rounded-md p-4 leading-none no-underline outline-none transition-colors md:hidden hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${serviceIsOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}><p>Servicios</p><p> {">"}</p></span>
              <div className={`flex p-10 absolute w-screen h-screen z-20 bg-transparent left-0 top-10 flex-col justify-start transition-all duration-300 ease-in-out transform ${
                serviceIsOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"
              }`}>
                <div className=" text-slate-500 text-[20px]" onClick={handleOpenServices}><h3>{"<"} {"Volver"}</h3></div>
                <ul className="w-[60%] gap-10 flex flex-col mt-10">
                 
                            {components.map((component) => (
                              <li
                                key={component.title}
                                
                              >
                                <a href={component.href}>
                                {component.title}
                                </a>
                              </li>
                            ))}
                </ul>
              </div>
              <Link href="/proyectos" className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent p-4 text-md md:text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 md:rounded-md md:p-4  md:leading-none md:no-underline md:outline-none md:transition-colors md:hover:bg-accent md:hover:text-accent-foreground md:focus:bg-accent md:focus:text-accent-foreground ${serviceIsOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>Nuestras obras</Link>               
              <Link href="/" className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent p-4 text-md md:text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 md:rounded-md md:p-4  md:leading-none md:no-underline md:outline-none md:transition-colors md:hover:bg-accent md:hover:text-accent-foreground md:focus:bg-accent md:focus:text-accent-foreground ${serviceIsOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>Quienes somos</Link>
            </div>
            <div className={`gap-3 text-sm flex sticky bottom-0 w-full ${serviceIsOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
                <Link href="/asesoramiento" className="mt-10 md:mt-0 px-8 py-4 md:px-4 md:py-2 md:content-center rounded-full text-white bg-[#EC6956] w-full text-center" >
                
                <p>Pedí un presupuesto</p>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
   

  )
}

export default NavBar





