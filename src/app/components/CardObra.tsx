// src/app/components/CardObra.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Post } from "../../types/contentful";

interface CardObraProps {
  post: Post;
  className?: string;
  size?: "glass" | "small";
  width?: any;
  type?: "link" | "noLink";
}

const CardObra: React.FC<CardObraProps> = ({
  post,
  width,
  size,
  className,
  type,
}) => {
  const {
    nombreDeObra,
    descripcionCorta,
    imagenDestacada,
    categoria,
    tag,
    subtitle,
    obraDestacada,
    slug,
  } = post.fields;

  if (size === "small") {
    return (
      <Link
        className={`w-[300px] md:grow md:shrink md:basis-1/4 ${className}`}
        href={`/proyectos/${slug}`}
      >
        <div key={post.sys.id} className="rounded-lg bg-white card">
          <figure className="relative h-52 w-full overflow-hidden">
            <p className="text-xs absolute px-3 py-1 m-2 bg-white rounded-full z-10">
              {categoria.fields.nombreCategoria}
            </p>
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={imagenDestacada.fields.file.url}
              alt={nombreDeObra}
            />
            <div className="bottom-0 py-2 px-3 flex flex-row justify-between items-center bg-white bg-opacity-30 backdrop-blur-md border border-white border-opacity-20 shadow-lg p-4 rounded-lg">
              <div>
                <h2>{nombreDeObra}</h2>
              </div>
              <div>
                <FontAwesomeIcon
                  className="animate-pulse"
                  icon={faArrowRight}
                />
              </div>
            </div>
          </figure>
        </div>
      </Link>
    );
  }

  if (size === "glass") {
    return (
      <Link
        className={`md:grow md:shrink md:basis-1/4 ${className}`}
        href={`/proyectos/${slug}`}
      >
        <div
          key={post.sys.id}
          className="mr-2 rounded-lg bg-white w-[270px] md:w-[300px] h-[250px]"
        >
          <figure className="relative h-full w-full overflow-hidden flex flex-col justify-between rounded-lg">
            <p className="text-xs px-3 py-1 m-2 bg-white rounded-full z-10 w-fit">
              {categoria.fields.nombreCategoria}
            </p>
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={imagenDestacada.fields.file.url}
              alt={nombreDeObra}
            />
            <div className="bottom-0 py-2 px-3 flex flex-row min-h-16 justify-between items-center bg-white bg-opacity-40 backdrop-blur-md border border-white border-opacity-20 shadow-lg p-4 rounded-lg">
              <div>
                <h2>{nombreDeObra}</h2>
              </div>
              <div>
                <FontAwesomeIcon
                  className="animate-pulse"
                  icon={faArrowRight}
                />
              </div>
            </div>
          </figure>
        </div>
      </Link>
    );
  }

  if (type === "noLink") {
    return (
      <div key={post.sys.id} className="rounded-lg w-full card">
        <figure className="relative h-full min-h-64 w-full overflow-hidden flex flex-col justify-between rounded-lg">
          <p className="text-xs px-3 py-1 m-2 bg-white rounded-full z-10 w-fit">
            {categoria.fields.nombreCategoria}
          </p>
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={imagenDestacada.fields.file.url}
            alt={nombreDeObra}
          />
          <div className="bottom-0 py-2 px-3 flex flex-row min-h-16 justify-between items-center bg-white bg-opacity-40 backdrop-blur-md border border-white border-opacity-20 shadow-lg p-4 rounded-lg">
            <div>
              <h2>{nombreDeObra}</h2>
            </div>
            <div>
              <FontAwesomeIcon className="animate-pulse" icon={faArrowRight} />
            </div>
          </div>
        </figure>
      </div>
    );
  }
  
  return (
    <Link
      className={`${className}`}
      href={`/proyectos/${slug}`}
    >
      <div key={post.sys.id} className="rounded-lg w-full card">
        <figure className="relative h-full min-h-64 w-full overflow-hidden flex flex-col justify-between rounded-lg">
          <p className="text-xs px-3 py-1 m-2 bg-white rounded-full z-10 w-fit">
            {categoria.fields.nombreCategoria}
          </p>
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={imagenDestacada.fields.file.url}
            alt={nombreDeObra}
          />
          <div className="bottom-0 py-2 px-3 flex flex-row min-h-16 justify-between items-center bg-white bg-opacity-40 backdrop-blur-md border border-white border-opacity-20 shadow-lg p-4 rounded-lg">
            <div>
              <h2>{nombreDeObra}</h2>
            </div>
            <div>
              <FontAwesomeIcon className="animate-pulse" icon={faArrowRight} />
            </div>
          </div>
        </figure>
      </div>
    </Link>
  );
};

export default CardObra;
