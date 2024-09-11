import CardObra from "./CardObra"


const ObraDestacada = ({post}) => {
    const { nombreDeObra, descripcionCorta, imagenDestacada, categoria, tag, subtitle,obraDestacada, slug} = post.fields;
    return (
        obraDestacada ?
            (<CardObra size="small" post={post}/>)
            :
            null
    );
};

export default ObraDestacada


