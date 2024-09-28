'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const reviews = [
  {
    name: 'John Doe',
    job: 'Software Engineer',
    comment: 'This product has revolutionized our workflow. It\'s intuitive, powerful, and a joy to use every day.',
    image: '/api/placeholder/400/400'
  },
  {
    name: 'Jane Smith',
    job: 'UX Designer',
    comment: 'The attention to detail in this product is outstanding. It\'s clear that the team really understands user needs.',
    image: '/api/placeholder/400/400'
  },
  {
    name: 'Alex Johnson',
    job: 'Project Manager',
    comment: 'I\'ve seen a significant boost in team productivity since we started using this tool. Highly recommended!',
    image: '/api/placeholder/400/400'
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
    <div className="w-full bg-gray-100">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2 aspect-square relative overflow-hidden">
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
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Review Section */}
        <div className="w-full md:w-1/2 bg-white p-8 md:p-12 relative flex flex-col justify-center aspect-square">
          {/* Watermark */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-5 pointer-events-none">
            <Quote size={300} />
          </div>

          {/* Review Content */}
          <div className="relative z-10 h-[200px] overflow-hidden">
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
                <h2 className="text-2xl font-bold">{reviews[currentReview].name}</h2>
                <h3 className="text-lg text-gray-600 mb-4">{reviews[currentReview].job}</h3>
                <p className="text-gray-800 leading-relaxed">{reviews[currentReview].comment}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => {
                prevReview()
                handleManualNavigation()
              }}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => {
                nextReview()
                handleManualNavigation()
              }}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}