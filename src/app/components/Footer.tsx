"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Balancer from 'react-wrap-balancer';


export default function Footer() {
  const pathname = usePathname()
  // Verifica si la ruta actual coincide con las rutas especificadas
  const dontShowNavbar = pathname.startsWith('/proyectos/') || pathname.startsWith('/estimado');

  if(dontShowNavbar){
    return null
  }
  return (
      <section className=" p-10 w-full md:p-20 bg-white flex flex-col max-w-6xl mx-auto rounded-lg mt-10 ">
        <div className="grid md:grid-cols-[1fr_0.5fr_0.5fr] gap-12">
          <div className="flex flex-col gap-6 not-prose">
            <Link href="/">
              <h3 className="sr-only">brijr/components</h3>
              <Image
                src={"/"}
                alt="Logo"
                width={120}
                height={27.27}
                className="dark:invert hover:opacity-75 transition-all"
              ></Image>
            </Link>
            <p>
              <Balancer>
                Youarq es una empresa de construccion y remodelacion de casas.
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Website</h5>
            <Link href="/">Blog</Link>
            <Link href="/">Authors</Link>
            <Link href="/">Categories</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Legal</h5>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
        <div className="border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center">
          <div className="flex gap-2">
            {/* <Button variant="outline" size="icon">
              <Github />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter />
            </Button>
            <Button variant="outline" size="icon">
              <Facebook />
            </Button> */}
          </div>
          <p className="text-muted-foreground">
            © <a href="https://youarq.com">youarq</a>
            . Todos los derechos reservados. 2019-2025.
          </p>
        </div>
      </section>
  );
}