import AdaptativeImagen from "./AdaptativeImagen"; // Asegúrate de importar el componente correctamente
import { PostFields, Foto, Arquitecto } from "@/types/contentful";

interface ObraSectionProps {
  nombreDeObra?: string;
  descripcionCorta?: string;
  imagenDestacada?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  tag?: string[];
  subtitle?: string;
  fotosAntes?: Foto[];
  descripcionAntes?: string;
  fotosDurantes?: Foto[];
  descripcionDurante?: string;
  fotosDespues?: Foto[];
  descripcionDespues?: string;
  disenador?: Arquitecto[];
  directorDeObra?: Arquitecto[];
}

const ObraSection: React.FC<ObraSectionProps> = (props) => {
  if (props.nombreDeObra) {
    return (
      <section className="p-5 flex flex-col rounded-xl mt-1 bg-white ">
        <div className="flex flex-wrap justify-between w-full bg-white rounded-md md:flex-nowrap  ">
          <div className=" py-10 md:min-w-[50%] md:p-16 md:h-fit md:sticky md:top-[calc(100vh-70%)] md:flex-col">
            <h3 className="text-xl text-gray-400">{props.subtitle}</h3>
            <h1 className="text-7xl font-bold mt-2 md:mt-10">{props.nombreDeObra}</h1>
            <p className="mb-3 text-lg flex mt-2 text-gray-600 flex-row md:max-w-3xl">
              {props.descripcionCorta}
            </p>
            <div className="flex gap-1 text-sm text-slate-600 flex-wrap w-full ">
              {props.tag.map((tag, index) => (
                <p key={index} className=" px-3 py-1 bg-slate-100 capitalize rounded-full">{tag}</p>
              ))}
            </div>
          </div>
          <div className="md:flex md:justify-end ">
            <AdaptativeImagen
              src={props.imagenDestacada.fields.file.url}
              alt={props.nombreDeObra}
              className=""
            />
          </div>
        </div>
      </section>
    );
  }

  if (props.fotosAntes) {
    return (
      <section className="flex justify-end flex-col bg-white rounded-xl mt-1 p-5 md:flex-row">
        <div className="py-10 md:min-w-[50%] md:p-16 md:flex md:h-fit  md:content-center md:sticky md:top-[calc(100vh-70%)] md:flex-col">
          <h4 className="text-5xl font-bold mt-2">Primeros pasos</h4>
          <p className="mb-3 text-lg flex mt-2 text-gray-600 flex-row md:max-w-3xl">{props.descripcionAntes}</p>
        </div>
        <div className="gap-2 flex flex-col">
          <h3 className="text-xl font-bold mb-2 ">Fotos del Antes</h3>
          <div className="grid gap-5">
            {props.fotosAntes.map((foto, i) => (
              <AdaptativeImagen key={i}
                src={foto.fields.file.url}
                alt={`Foto antes ${i}`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (props.fotosDurantes) {
    return (
      <section className="flex justify-end flex-col bg-white rounded-xl mt-1 p-5  md:flex-row">
        <div className="py-10 md:min-w-[50%] md:p-16 md:flex md:h-fit  md:content-center md:sticky md:top-[calc(100vh-70%)] md:flex-col">
          <h4 className="text-5xl font-bold mt-2">En la obra</h4>
          <p className=" mb-3 text-lg flex mt-2 text-gray-600 flex-row md:max-w-3xl">{props.descripcionDurante}</p>
        </div>
        <div className="gap-2 flex flex-col">
          <h3 className="text-xl font-bold mb-2 ">Fotos Durante</h3>
          <div className="grid gap-5">
            {props.fotosDurantes.map((foto, i) => (
              <AdaptativeImagen key={i}
                src={foto.fields.file.url}
                alt={`Foto antes ${i}`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (props.fotosDespues) {
    console.log(props.fotosDespues);
    return (
      <section className="flex flex-col  bg-white rounded-xl mt-1  p-5 md:flex-row">
        <div className="py-10 max-w-4xl flex flex-col justify-center md:min-w-[50%] md:p-16 md:flex md:h-fit  md:content-center md:sticky md:top-[calc(100vh-70%)] md:flex-col">
          <h4 className="text-5xl font-bold mt-2">Resultado</h4>
          <p className="mb-3 text-lg flex mt-2 text-gray-600 flex-row md:max-w-3xl">{props.descripcionDespues}</p>
        </div>
        <div className="gap-2 flex flex-col">
          <h3 className="text-xl font-bold mb-2 ">Fotos Despues</h3>
          <div className="grid gap-5">
            {props.fotosDespues.map((foto, i) => (
              <AdaptativeImagen key={i}
                src={foto.fields.file.url}
                alt={`Foto antes ${i}`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (props.disenador && props.directorDeObra) {
    return (
      <section className="flex gap-10 bg-white rounded-xl mt-1 p-5 py-10 justify-around min-w-[70%]">
        <div>
          <h3>Diseñador</h3>
          <p className="text-xl font-bold">
            {props.disenador[0].fields.nombreArquitecto}
          </p>
          <AdaptativeImagen
            src={props.disenador[0].fields.fotoArquitecto.fields.file.url}
            alt="Foto del diseñador"
            className={" w-36"}
          />
        </div>
        <div>
          <h3>Director de Obra</h3>
          <p className="text-xl font-bold">
            {props.directorDeObra[0].fields.nombreArquitecto}
          </p>
          <AdaptativeImagen
            src={props.directorDeObra[0].fields.fotoArquitecto.fields.file.url}
            alt="Foto del director de obra"
            className={" w-36"}
          />
        </div>
      </section>
    );
  }

  return null; // No renderizar nada si no se cumplen las condiciones
};

export default ObraSection;
