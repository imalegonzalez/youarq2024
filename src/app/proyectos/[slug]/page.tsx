// src/app/proyectos/[slug]/page.tsx
import { client } from "@/app/lib/contentful/client";
import Link from "next/link";
import ShareButton from "@/app/components/ShareButton";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ObraSection from "@/app/components/ObraSection";
import { Post } from "@/types/contentful";
import BackButton from "@/app/components/BackButton";

async function getProyectoData(slug: string): Promise<Post | undefined> {
  const res = await client.getEntries({
    content_type: "obra",
    "fields.slug": slug,
  });
  return res.items[0] as Post;
}

async function getAllObras(): Promise<Post[]> {
  const res = await client.getEntries({
    content_type: "obra",
  });
  return res.items as Post[];
}

export default async function PostObra({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const proyecto = await getProyectoData(slug);
  const obras = await getAllObras();

  const index = obras.findIndex((obra) => obra.fields.slug === slug);
  const nextProyecto = obras[(index + 1) % obras.length];

  if (!proyecto) {
    return <div>Proyecto no encontrado</div>;
  }

  const {
    nombreDeObra,
    descripcionCorta,
    imagenDestacada,
    tag,
    subtitle,
    fotosAntes,
    descripcionAntes,
    fotosDurantes,
    descripcionDurante,
    descripcionDespues,
    fotosDespues,
    disenador,
    directorDeObra,
  } = proyecto.fields;



  return (
    <div className="bg-[#F7F6F5] p-1 obraSection">
      <div className="horizontal-scroll-wrapper">
        <nav className="flex w-full bg-[--primary] rounded-xl justify-between p-3 text-white sticky top-1 z-10 ring-1 ring-slate-900/10">
          {/* <Link href="/proyectos" className="p-2 rounded-full text-white">
            <FontAwesomeIcon className="" icon={faArrowLeft} />
          </Link> */}
          <BackButton />
          <Link href="/" className="font-semibold align-middle content-center">youarq</Link>
          <div className="flex items-center justify-center gap-4 px-2">
            <span className="flex items-center justify-center">
              <ShareButton nombreDeObra={nombreDeObra} type="share" url="" />
            </span>
              {/* <ShareButton type="copy" url="" /> */}
          </div>
        </nav>
        <div className="">
          <div className="">
            <div className="gap-4 flex flex-col">
              <ObraSection
                subtitle={subtitle}
                nombreDeObra={nombreDeObra}
                descripcionCorta={descripcionCorta}
                imagenDestacada={imagenDestacada}
                tag={tag}
              />
              <ObraSection
                descripcionAntes={descripcionAntes}
                fotosAntes={fotosAntes}
              />
              <ObraSection
                descripcionDurante={descripcionDurante}
                fotosDurantes={fotosDurantes}
              />
              <ObraSection
                descripcionDespues={descripcionDespues}
                fotosDespues={fotosDespues}
              />
              <div className="flex flex-wrap w-full gap-4">
                <ObraSection
                  disenador={disenador}
                  directorDeObra={directorDeObra}
                />
                {nextProyecto && (
                  <Link className=" flex-auto" href={`/proyectos/${nextProyecto.fields.slug}`}>
                    <div className="flex justify-start items-center h-[97%] bg-[--primary] rounded-xl mt-1 flex-grow overflow-hidden">
                      <div className="flex w-full ">
                        <div className="w-full p-5">
                          <button className=" text-slate-100 text-xs">Siguiente obra</button>
                          <p className=" font-bold text-slate-100 mt-[-5px]">{nextProyecto.fields.nombreDeObra}</p>
                        </div>
                        <div className="max-w-56">
                          {/* <img
                            className="w-full"
                            src={nextProyecto.fields.imagenDestacada.fields.file.url}
                            alt={nextProyecto.fields.nombreDeObra}
                          /> */}
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
