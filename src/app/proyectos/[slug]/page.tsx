import { client } from "@/app/lib/contentful/client";
import Link from "next/link";
import ShareButton from "@/app/components/ShareButton";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ObraSection from "@/app/components/ObraSection";

async function getProyectoData(slug) {
  const res = await client.getEntries({
    content_type: "obra",
    "fields.slug": slug,
  });
  return res.items[0];
}

async function getAllObras() {
  const res = await client.getEntries({
    content_type: "obra",
  });
  return res.items;
}

export default async function PostObra({ params }) {
  const { slug } = params;
  const proyecto = await getProyectoData(slug);
  const obras = await getAllObras();

  const index = obras.findIndex((obra) => obra.fields.slug === slug);
  const nextProyecto = obras[(index + 1) % obras.length];
  console.log(nextProyecto);

  if (!proyecto) {
    return <div>Proyecto no encontrado</div>;
  }

  const {
    nombreDeObra,
    descripcionCorta,
    imagenDestacada,
    categoria,
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
        <nav className="flex w-full bg-[--primary] rounded-xl justify-between p-3 text-white">
          <Link href="/proyectos" className="p-2 rounded-full text-white">
            <FontAwesomeIcon className="" icon={faArrowLeft} />
          </Link>
          <p className="font-semibold align-middle content-center">youarq</p>
          <ShareButton url="" />
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
              <div className="flex w-full gap-4 ">
                <ObraSection
                  disenador={disenador}
                  directorDeObra={directorDeObra}
                />
                {nextProyecto && (
                  <Link href={`/proyectos/${nextProyecto.fields.slug}`}>
                    <div className="flex justify-start bg-orange-500 rounded-xl mt-1 flex-grow overflow-hidden">
                      <div className="flex w-full">
                        <div className="w-full">
                          <p>{nextProyecto.fields.nombreDeObra}</p>
                          <button>Siguiente obra</button>
                        </div>
                        <div className=" max-w-56">
                          <img
                            className=" w-full"
                            src={
                              nextProyecto.fields.imagenDestacada.fields.file
                                .url
                            }
                            alt=""
                          />
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
