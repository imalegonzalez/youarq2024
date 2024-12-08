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
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Baños",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Lavaderos",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Dormitorios",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Toda la casa",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Ampliaciones",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Estructural",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Exterior",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  
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
    console.log(isOpen)
  }

  const handleOpenServices = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setServiceIsOpen((open) => !open)
    console.log(serviceIsOpen)
  }

  useEffect(() => {
    setIsOpen((open) => false)
    setServiceIsOpen((open) => false)
  }, [pathname])
  

  if(dontShowNavbar){
    return null
  }
  return (
    <nav className={`w-full fixed z-20 transition-all duration-300 ease-in-out ${isScrolled ? 'mt-1' : 'mt-3'} ${isOpen ? 'p-0' : 'p-3'}`}>
      <div className={` md:max-w-6xl md:mx-auto md:flex-row md:px-3 flex wrap flex-col bg-white justify-between items-center bg-opacity-70 backdrop-blur-md border border-white border-opacity-20 rounded-full shadow-sm transition-all duration-300 ease-in-out ${isOpen ? 'nav-open' : 'nav-closed'}`}>
        <div className="menu-header">
          <Link href={"/"} className="flex font-bold items-center">Youarq</Link>
          <a onClick={handleOpen} className="menu_trigger" href="/">{isOpen ? "Cerrar" : "Menu"}</a>
        </div>
        <div className={`menu__bar transition-all duration-300 ease-in-out ${isOpen ? "is-open" : ""}`}>
          <div className="md:gap-5 font-normal text-sm menu_wrapper ">
            <div className="item-wrapper object-center items-center md:gap-2">
              <Link href="/como-trabajamos" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent p-4 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 md:rounded-md md:p-4  md:leading-none md:no-underline md:outline-none md:transition-colors md:hover:bg-accent md:hover:text-accent-foreground md:focus:bg-accent md:focus:text-accent-foreground">Cómo trabajamos</Link>
              <NavigationMenu className=" hidden md:flex">
                <NavigationMenuList className="">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">Remodelaciones</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-1  p-4 md:w-[200px] md:grid-cols-2 md:w-[400px] ">
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
              <span onClick={handleOpenServices} className="flex justify-between rounded-md p-4 leading-none no-underline outline-none transition-colors md:hidden hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"><p>Servicios</p><p>{">"}</p></span>
              {(serviceIsOpen ? 
                  <div className={`servicesMenu ${serviceIsOpen ? "is-open" : ""}`}>
                    <div className=" text-slate-500 text-[20px]" onClick={handleOpenServices}><h3>{"<"} {"Volver"}</h3></div>
                  <ul className="w-[60%]">
                   
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
              :null)}
              <Link href="/proyectos" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent p-4 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 md:rounded-md md:p-4  md:leading-none md:no-underline md:outline-none md:transition-colors md:hover:bg-accent md:hover:text-accent-foreground md:focus:bg-accent md:focus:text-accent-foreground">Nuestras obras</Link>               
              <Link href="/" className=" group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent p-4 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 md:rounded-md md:p-4  md:leading-none md:no-underline md:outline-none md:transition-colors md:hover:bg-accent md:hover:text-accent-foreground md:focus:bg-accent md:focus:text-accent-foreground">Diseños</Link>
            </div>
            <div className="gap-3 text-sm flex cta">
                <Link href="/asesoramiento" className=" px-8 py-4 md:px-4 md:py-2 md:content-center rounded-full text-white bg-[#EC6956] w-full text-center" >
                
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





