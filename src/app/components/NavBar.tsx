"use client"
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/app/components/shadcn/navigation-menu"
import { cn } from "@/lib/utils"
import Link from "next/link";

const components = [
  {
    title: "Cocinas",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Baños",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Lavaderos",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Dormitorios",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Toda la casa",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Ampliaciones",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Estructural",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Exterior",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  
]

const ListItem = (({ className, title, children, href, ...props }) => {
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
  // Verifica si la ruta actual comienza con '/proyectos/'
  const showNavbar = !pathname.startsWith('/proyectos/');

  if(!showNavbar){
    return null
  }
  return (
    <>
      <section className="h-20 px-3 md:px-14 flex w-full fixed z-10 bg-white justify-between items-center ">
        <p className=" font-bold">Youarq</p>
        <div className=" gap-20 font-normal text-sm flex hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className=" gap-4 font-normal text-sm flex">
            <NavigationMenuItem>
                <NavigationMenuLink><Link href="/" className=" rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">Cómo trabajamos</Link></NavigationMenuLink> 
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1  p-4 md:w-[200px] md:grid-cols-2 lg:w-[400px] ">
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
              <NavigationMenuItem>
                <Link href="/" className=" rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">Nuestras obras</Link> 
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink><Link href="/" className=" rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">Diseños</Link></NavigationMenuLink> 
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className=" gap-3 text-sm flex">
          <a className=" px-8 py-3 rounded-xl text-white bg-[#EC6956]" href="">Pedí un presupuesto</a>
        </div>
      </section>
    </>
   

  )
}

export default NavBar





