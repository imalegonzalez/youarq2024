import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";


const CardObra = ({post}) => {
    const { nombreDeObra, descripcionCorta, imagenDestacada, categoria, tag, subtitle,obraDestacada, slug} = post.fields
    return <Link href={`http://localhost:3000/proyectos/${slug}`}>
            <div key={post.sys.id} className=" rounded-lg p-2  w-[200px] ml-2 bg-white">
            <figure className="rounded-lg relative w-full h-52 overflow-hidden">
                <p className=" text-xs absolute px-3 py-1 m-2 bg-white rounded-full">{categoria.fields.nombreCategoria}</p>
                <img src={imagenDestacada.fields.file.url} alt={nombreDeObra} />
            </figure>
            <div className=" top-0 py-2 flex flex-row justify-between">
                <div>
                    <p className=" text-[9px]">{subtitle}</p>
                    <h2 className=" font-bold">{nombreDeObra}</h2>
                </div>
               
                    <FontAwesomeIcon className=" animate-pulse" icon={faArrowRight} />
                {/* <p className="mb-3 text-sm">{descripcionCorta}</p>  */}
                {/* {tag.map((tag, i) => (
                    <p className=" inline-block text-xs px-2 py-1 mr-1 mt-1 bg-slate-500 rounded-full text-white">{tag}</p>
                ))} */}
            </div> 
        </div>
        </Link>
}

export default CardObra


