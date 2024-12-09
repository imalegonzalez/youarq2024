'use client'

import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

export default function BackButton() {
  const router = useRouter()

  return (
    <button 
      onClick={() => router.back()} 
      className="p-2 rounded-full text-white"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  )
} 