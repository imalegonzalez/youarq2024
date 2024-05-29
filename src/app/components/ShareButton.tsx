'use client'
import { useToast } from "@/components/ui/use-toast"
import { faLink} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Gallery = ({url}) => {
    const { toast } = useToast()

    const copyToClipboard = e => {
      navigator.clipboard.writeText(window.location.toString())
      toast({
        title: "La URL ha sido copiada",
        description: "Comparte este proyecto",
      })
    }
    
    return (
    <>
       <button onClick={copyToClipboard}><FontAwesomeIcon className="" icon={faLink} /></button>
    </>
  )
}


export default Gallery


