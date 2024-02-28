import { client } from "@/app/lib/contentful/client"

export default async function PostObra({ params }) {
  const res = await client.getEntries({
    content_type: 'obra',
    'fields.slug': `${params.slug}` ,
  })
  
  const { nombreDeObra, descripcionCorta, imagenDestacada, categoria, tag, subtitle,obraDestacada, slug, fotosDurante } = res.items[0].fields
  console.log(fotosDurante)
  return (
    <div className="flex flex-col bg-slate-300 p-6 rounded-md">
      <h1 className="flex max-w-full">{nombreDeObra}</h1>
      <img src={imagenDestacada.fields.file.url} alt={nombreDeObra} height={100} width={350} />
      <p className="mb-3 text-sm flex flex-nowrap flex-row">{descripcionCorta}</p>  
      <div className="flex">
          {tag.map((tag, i) => (
            <p className=" inline-block text-xs px-2 py-1 mr-1 mt-1 bg-slate-500 rounded-full text-white">{tag}</p>
          ))}
      </div>
    </div>
  )
  

  };

