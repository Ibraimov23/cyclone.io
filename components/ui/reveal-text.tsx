"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface RevealTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
}

export default function RevealText({
  text,
  className = "",
  delay = 0,
  duration = 0.05,
  once = true,
  as: Component = "div",
}: RevealTextProps) {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
    if (!inView && !once) {
      controls.start("hidden")
    }
  }, [controls, inView, once])

  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay * i },
    }),
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-1" variants={child}>
          <Component className="inline">{word}</Component>
        </motion.span>
      ))}
    </motion.div>
  )
}
