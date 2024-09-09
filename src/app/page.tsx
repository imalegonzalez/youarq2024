import React from "react";
import { client } from "./lib/contentful/client";
import InfiniteScroll from "./components/InfiniteScroll";
import CardObra from "./components/CardObra";
import * as utils from './lib/utils';
import Resena from "./components/Resena";

// Data fetching function
async function fetchData() {
  const res = await client.getEntries({ content_type: "obra" });
  return res.items;
}

interface CardObraProps {
  obra: any;
  // otras propiedades
}

export default async function Home() {
  const data = await fetchData();

  return (
    <div className=" mt-28 flex">
      <Resena stars={5} name="Alejo Gonzalez" img="http://images.ctfassets.net/e51cz0cgcy2g/3g9W4LVrQNDhlLtRdwZ4Nm/7f6cf4e4c894ab2097bbdf5f075ff926/1.jpg" coment="Aun no lo puedo creer! Gracias a todo el equipazo de youarq por ayudarnos a construir nuestra cocina soñada! Gracias por ayudarnos a crear el corazón de nuestra casa! ❤️👏 🏠 excelente laburo!!! 👏😍"/>
      <Resena stars={5} name="Ivana Mitolo" img="http://images.ctfassets.net/e51cz0cgcy2g/1X6bDWylCqe2YXemPZh5Vc/768c284305cd01a75dfc65a456d2a7a6/Cabrera_7.webp" coment="Aun no lo puedo creer! Gracias a todo el equipazo de youarq por ayudarnos a construir nuestra cocina soñada!  Gracias por ayudarnos a crear el corazón de nuestra casa! ❤️👏 🏠 excelente laburo!!! 👏😍 Gracias por ayudarnos a crear el corazón de nuestra casa! ❤️👏 🏠 excelente laburo!!! 👏😍"/>
      <Resena stars={5} name="Lisa Conceicao" img="http://images.ctfassets.net/e51cz0cgcy2g/GhIYjIvEnaZxQEIl8hAJf/d4452de5697a5ed2ef01139599b26b26/Carhue_1.webp" coment="Aun no lo puedo creer! Gracias a todo el equipazo de youarq por ayudarnos a construir nuestra cocina soñada! Gracias por ayudarnos a crear el corazón de nuestra casa! ❤️👏 🏠 excelente laburo!!! 👏😍"/>
    </div>
  );
}