import Image from "next/image";
import Link from "next/link";
import Balancer from 'react-wrap-balancer';


export default function Footer() {
  return (
      <section className=" p-20 bg-white flex flex-col">
        <div className="grid md:grid-cols-[1.5fr_0.5fr_0.5fr] gap-12">
          <div className="flex flex-col gap-6 not-prose">
            <Link href="/">
              <h3 className="sr-only">brijr/components</h3>
              <Image
                src={""}
                alt="Logo"
                width={120}
                height={27.27}
                className="dark:invert hover:opacity-75 transition-all"
              ></Image>
            </Link>
            <p>
              <Balancer>
                brijr/components is a collection of Next.js, React, Typescript
                components for building landing pages and websites.
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
            © <a href="https://github.com/brijr/components">brijr/components</a>
            . All rights reserved. 2024-present.
          </p>
        </div>
      </section>
  );
}