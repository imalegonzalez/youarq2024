'use client'

import { useEffect, useState } from "react";
import CardObra from "./CardObra";

const Gallery = ({data}) => {
    const [filtroCategoria, setFiltroCategoria] = useState(null);
    const [tarjetasFiltradas, setTarjetasFiltradas] = useState(data);

    useEffect(() => {
        if (!filtroCategoria) {
        setTarjetasFiltradas(data);
        } else {
        const tarjetasFiltradas = data.filter((post) => post.fields.categoria.fields.nombreCategoria === filtroCategoria);
        setTarjetasFiltradas(tarjetasFiltradas);
        }
    }, [data, filtroCategoria]);

    const filtrarPorCategoria = (categoria) => {
        setFiltroCategoria(categoria);
    };
    return (
    <>
       <section className=" w-full flex flex-col md:px-12 ">
        <h2 className="w-full m-0 md:text-2xl text-gray-700 ">Todas las obras</h2>
        <div className="flex gap-2 mt-2 mb-2">
        <button
          className={`btn ${filtroCategoria === null ? 'btn-active' : ''}`}
          onClick={() => filtrarPorCategoria(null)}
        >
          Todas
        </button>
        <button
          className={`btn ${filtroCategoria === 'Baño' ? 'btn-active' : ''}`}
          onClick={() => filtrarPorCategoria('Baño')}
        >
          Baño
        </button>
        <button
          className={`btn ${filtroCategoria === 'Cocina' ? 'btn-active' : ''}`}
          onClick={() => filtrarPorCategoria('Cocina')}
        >
          Cocina
        </button>
        <button
          className={`btn ${filtroCategoria === 'Integral' ? 'btn-active' : ''}`}
          onClick={() => filtrarPorCategoria('Integral')}
        >
          Integral
        </button>
      </div>
        
        <div className=" flex gap-2 flex-wrap">
          {tarjetasFiltradas.map((post, i) => (
              <CardObra key={post.fields.slug} post={post}/>
          ))}
        </div>
      </section>
    </>
  )
}


export default Gallery


