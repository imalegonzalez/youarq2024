'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, MessageSquareQuote, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const reviews = [
  {
    name: 'John Doe',
    job: 'Software Engineer',
    comment: 'This product has revolutionized our workflow. It\'s intuitive, powerful, and a joy to use every day.',
    image: 'https://images.ctfassets.net/e51cz0cgcy2g/GhIYjIvEnaZxQEIl8hAJf/d4452de5697a5ed2ef01139599b26b26/Carhue_1.webp'
  },
  {
    name: 'Jane Smith',
    job: 'UX Designer',
    comment: 'The attention to detail in this product is outstanding. It\'s clear that the team really understands user needs.',
    image: 'https://images.ctfassets.net/e51cz0cgcy2g/71mz94l6jqIDZtUtkjAQ87/b197794c55e8dc132bc66c97c8911882/Billinhurst_34.webp'
  },
  {
    name: 'Alex Johnson',
    job: 'Project Manager',
    comment: 'I\'ve seen a significant boost in team productivity since we started using this tool. Highly recommended!',
    image: 'https://images.ctfassets.net/e51cz0cgcy2g/GhIYjIvEnaZxQEIl8hAJf/d4452de5697a5ed2ef01139599b26b26/Carhue_1.webp'
  }
]

export default function CustomerReview() {
  const [currentReview, setCurrentReview] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(1) // 1 for forward, -1 for backward

  const nextReview = useCallback(() => {
    setDirection(1)
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }, [])

  const prevReview = useCallback(() => {
    setDirection(-1)
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }, [])

  const handleManualNavigation = useCallback(() => {
    setIsAutoPlaying(false)
    const timer = setTimeout(() => setIsAutoPlaying(true), 10000) // Resume autoplay after 10 seconds of inactivity
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isAutoPlaying) {
      const intervalId = setInterval(nextReview, 5000) // Advance every 5 seconds
      return () => clearInterval(intervalId)
    }
  }, [isAutoPlaying, nextReview])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  }

  const transition = {
    x: { type: 'spring', stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 },
  }

  return (
    <div className="px-3  relative md:max-w-6xl mx-auto">
      <h3 className="text-2xl font-regular  mb-4 text-center md:text-4xl md:text-left">Qué dicen nuestros clientes</h3>
      <div className="relative h-[600px] md:h-[400px] overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
        {/* Image Section */}
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentReview}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              className="absolute inset-0"
            >
              <img
                src={reviews[currentReview].image}
                alt={`${reviews[currentReview].name}'s review`}
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Review Section */}
        <div className="absolute z-10 right-0 md:top-0 bottom-0 w-full md:w-1/3 bg-white bg-opacity-60 backdrop-blur-lg p-8 md:p-12 flex flex-col justify-center">
          {/* Watermark */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end opacity-5 pointer-events-none">
            <MessageSquareQuote size={200} strokeWidth={0.5} />
          </div>

          {/* Review Content */}
          <div className="relative z-10 h-[150px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentReview}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
                className="absolute w-full"
              >
                <h2 className="text-2xl font-bold text-gray-800">{reviews[currentReview].name}</h2>
                <h3 className="text-lg text-gray-600 mb-4">{reviews[currentReview].job}</h3>
                <p className="text-gray-800 leading-relaxed">{reviews[currentReview].comment}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      {/* Navigation Buttons */}
      <div className=" z-10 top-0 flex justify-center space-x-4 mt-3">
        <button
          onClick={() => {
            prevReview();
            handleManualNavigation();
          }}
          className="p-2 rounded-full bg-white w-1/2 bg-opacity-50 hover:bg-opacity-30 transition-colors flex items-center justify-center border bg-card text-card-foreground shadow-sm"
          aria-label="Previous review"
        >
          <ChevronLeft size={24} color="black" />
        </button>
        <button
          onClick={() => {
            nextReview();
            handleManualNavigation();
          }}
          className="p-2 rounded-full bg-white w-1/2 bg-opacity-50 hover:bg-opacity-30 transition-colors flex items-center justify-center border bg-card text-card-foreground shadow-sm"
          aria-label="Next review"
        >
          <ChevronRight size={24} color="black" />
        </button>
      </div>
    </div>
  )
}