'use client'
import { useToast } from "@/components/ui/use-toast"
import { faLink, faShare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Gallery = ({url, type, nombreDeObra}: {url?: string, type: string, nombreDeObra: string}) => {
    const { toast } = useToast()

    const copyToClipboard = e => {
      navigator.clipboard.writeText(window.location.toString())
      toast({
        title: "La URL ha sido copiada",
        description: "Comparte este proyecto",
      })
    }

    const handleShare = async () => {
      try {
        await navigator.share({ title: `Youarq - ${nombreDeObra}`, url: "" });
        console.log("Data was shared successfully");
      } catch (err) {
        console.error("Share failed:", err.message);
      }
    };
    
    return (
    <>
    {type === "copy" && <button onClick={copyToClipboard}><FontAwesomeIcon className="" icon={faLink} /></button>}
    {type === "share" && <button onClick={handleShare}><FontAwesomeIcon className="" icon={faShare} /></button>}
    </>
  )
}


export default Gallery


