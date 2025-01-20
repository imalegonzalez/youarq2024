import AdaptativeImagen from "./AdaptativeImagen"; // Asegúrate de importar el componente correctamente
import { PostFields, Foto, Arquitecto } from "@/types/contentful";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

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
        <div className="flex flex-wrap justify-between w-full bg-white rounded-md md:flex-nowrap max-w-6xl mx-auto  ">
          <div className=" py-10 md:min-w-[40%]  md:flex md:justify-center md:items-center ">
            <div>
            <h3 className="text-sm md:text-xl text-gray-400">
              {props.subtitle}
            </h3>
            <h1 className="text-4xl md:text-6xl font-bold mt-2  md:max-w-lg">
              {props.nombreDeObra}
            </h1>
            <p className="mb-3 text-md md:text-lg flex mt-2 text-gray-600 flex-row md:max-w-3xl">
              {props.descripcionCorta}
            </p>
            <div className="flex gap-1 text-sm text-slate-600 flex-wrap w-full ">
              {props.tag?.map((tag, index) => (
                <p
                  key={index}
                  className=" text-xs px-3 py-1 border-slate-00 border-solid border capitalize rounded-full"
                >
                  {tag}
                </p>
              ))}
            </div>
            </div>
          </div>
          <div className="md:flex md:justify-end md:sticky top-20 md:h-fit md:w-full ">
            {props.imagenDestacada && (
              <AdaptativeImagen
                src={props.imagenDestacada.fields.file.url}
                alt={props.nombreDeObra}
                className=""
              />
            )}
          </div>
        </div>
      </section>
    );
  }

  if (props.fotosAntes) {
    return (
      <section className="flex flex-col justify-center items-start md:items-center py-10 bg-white rounded-xl mt-1 p-5 ">
        <div className=" text-left md:text-center ">
          <h4 className="text-4xl md:text-4xl font-bold mt-2">Primeros Pasos</h4>
          {props.descripcionAntes && (
            <p className="mb-3 text-md flex mt-2 text-gray-600 flex-row md:max-w-3xl">
              {props.descripcionAntes}
            </p>
          )}
        </div>
        <div className="gap-2 flex flex-col min-w-full mx-auto">
          <div className="w-full max-w-6xl mx-auto">
            <Carousel className="" opts={{ align: "start" }}>
              <CarouselContent className="w-full">
                {props.fotosAntes.map((image) => (
                  <CarouselItem
                    key={image.sys.id}
                    className="flex justify-center basis-full md:basis-96"
                  >
                    <div className="aspect-[3/4] w-full relative">
                      <p className="text-xs text-black bg-white px-2 py-1 rounded-full absolute top-2 left-2 z-10">Antes</p>
                      <Image
                        src={
                          image.fields.file.url.startsWith("//")
                            ? `https:${image.fields.file.url}`
                            : image.fields.file.url
                        }
                        alt={`${props.nombreDeObra} - Antes`}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        priority
                        fill
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute flex justify-center items-center bottom-7 right-1/2 z-10">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    );
  }

  if (props.fotosDurantes) {
    return (
      <section className="flex flex-col justify-center items-start md:items-center py-10 bg-white rounded-xl mt-1 p-5 ">
        <div className=" text-left md:text-center ">
          <h4 className="text-4xl md:text-4xl font-bold mt-2">Durantes</h4>
          {props.descripcionDurante && (
            <p className="mb-3 text-md flex mt-2 text-gray-600 flex-row md:max-w-3xl">
              {props.descripcionDurante}
            </p>
          )}
        </div>
        <div className="gap-2 flex flex-col min-w-full mx-auto">
          <div className="w-full max-w-6xl mx-auto">
            <Carousel className="" opts={{ align: "start" }}>
              <CarouselContent className="w-full">
                {props.fotosDurantes.map((image) => (
                  <CarouselItem
                    key={image.sys.id}
                    className="flex justify-center basis-full md:basis-96"
                  >
                    <div className="aspect-[3/4] w-full relative">
                      <p className="text-xs text-black bg-white px-2 py-1 rounded-full absolute top-2 left-2 z-10">Durantes</p>
                      <Image
                        src={
                          image.fields.file.url.startsWith("//")
                            ? `https:${image.fields.file.url}`
                            : image.fields.file.url
                        }
                        alt={`${props.nombreDeObra} - Durantes`}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        
                        fill
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute flex justify-center items-center bottom-7 right-1/2 z-10">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    );
  }

  if (props.fotosDespues) {
    // console.log(props.fotosDespues);
    return (
      <section className="flex flex-col justify-center items-start md:items-center py-10 bg-white rounded-xl mt-1 p-5 ">
        <div className=" text-left md:text-center ">
          <h4 className="text-4xl md:text-4xl font-bold mt-2">Resultado</h4>
          {props.descripcionDespues && (
            <p className="mb-3 text-md flex mt-2 text-gray-600 flex-row md:max-w-3xl">
              {props.descripcionDespues}
            </p>
          )}
        </div>
        <div className="gap-2 flex flex-col min-w-full mx-auto">
          <div className="w-full max-w-6xl mx-auto">
            <Carousel className="" opts={{ align: "start" }}>
              <CarouselContent className="w-full">
                {props.fotosDespues.map((image) => (
                  <CarouselItem
                    key={image.sys.id}
                    className="flex justify-center basis-full md:basis-96"
                  >
                    <div className="aspect-[3/4] w-full relative">
                      <p className="text-xs text-black bg-white px-2 py-1 rounded-full absolute top-2 left-2 z-10">Despues</p>
                      <Image
                        src={
                          image.fields.file.url.startsWith("//")
                            ? `https:${image.fields.file.url}`
                            : image.fields.file.url
                        }
                        alt={`${props.nombreDeObra} - Despues`}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        
                        fill
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute flex justify-center items-center bottom-7 right-1/2 z-10">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    );
  }

  if (props.disenador && props.directorDeObra) {
    return (
      <section className="flex gap-10 bg-white rounded-xl  p-5 px-5 justify-around min-w-full md:min-w-[70%]">
        <div>
          <h3>Diseñador</h3>
          <p className="text-xl font-bold">
            {props.disenador[0].fields.nombreArquitecto}
          </p>
          <AdaptativeImagen
            src={props.disenador[0].fields.fotoArquitecto.fields.file.url}
            alt="Foto del diseñador"
            className={"w-36"}
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
            className={"w-36"}
          />
        </div>
      </section>
    );
  }

  return null; // No renderizar nada si no se cumplen las condiciones
};

export default ObraSection;
