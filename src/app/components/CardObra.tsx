import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";


const CardObra = ({post, width, size}) => {
    const { nombreDeObra, descripcionCorta, imagenDestacada, categoria, tag, subtitle,obraDestacada, slug} = post.fields

    if (size == "small") {
        return <Link className='w-full md:grow md:shrink md:basis-1/4' href={`http://localhost:3000/proyectos/${slug}`}>
            <div key={post.sys.id} className=" rounded-lg  w-[270px] bg-white card">
                <figure className="rounded-t-lg relative w-full h-52 overflow-hidden">
                    <p className=" text-xs absolute px-3 py-1 m-2 bg-white rounded-full">{categoria.fields.nombreCategoria}</p>
                    <img src={imagenDestacada.fields.file.url} alt={nombreDeObra} />
                </figure>
                <div className=" top-0 py-2 px-3 flex flex-row justify-between align-center">
                    <div>
                        <h2 className="">{nombreDeObra}</h2>
                    </div>
                        <div className=''>
                            <FontAwesomeIcon className=" animate-pulse" icon={faArrowRight} />
                        </div>
                </div> 
            </div>
        </Link>
    }

    return (<Link className='w-full md:grow md:shrink md:basis-1/4 md:max-w-[33%]' href={`http://localhost:3000/proyectos/${slug}`}>

            <div key={post.sys.id} className=" rounded-lg w-full card">
                <figure className=" card-figure rounded-t-lg relative overflow-hidden sm:max-h-96 w-full">
                    <p className=" text-xs absolute px-3 py-1 m-2 bg-white rounded-full">{categoria.fields.nombreCategoria}</p>
                    <img src={imagenDestacada.fields.file.url} alt={nombreDeObra}/>
                </figure>
                <div className=" top-0 py-3 px-4 flex flex-row justify-between">
                    <div>
                        <p className=" text-[9px]">{subtitle}</p>
                        <h2 className=" text-2xl">{nombreDeObra}</h2>
                    </div>
                
                        <FontAwesomeIcon className=" animate-pulse" icon={faArrowRight} />
                    {/* <p className="mb-3 text-sm">{descripcionCorta}</p>  */}
                    {/* {tag.map((tag, i) => (
                        <p className=" inline-block text-xs px-2 py-1 mr-1 mt-1 bg-slate-500 rounded-full text-white">{tag}</p>
                    ))} */}
                </div> 
            </div>
       
        
        
        </Link>)
}

export default CardObra

