"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

interface AnimatedButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  variant?: "primary" | "secondary" | "outline" | "cyclone" | "cyclone-outline"
}

export default function AnimatedButton({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  variant = "primary",
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-black text-white hover:bg-gray-800"
      case "secondary":
        return "bg-white text-black border border-black hover:bg-gray-100"
      case "outline":
        return "bg-transparent text-black border border-black hover:bg-gray-100"
      case "cyclone":
        return "bg-cyclone text-white hover:bg-cyclone-light"
      case "cyclone-outline":
        return "bg-transparent text-cyclone border border-cyclone hover:bg-cyclone/10"
      default:
        return "bg-black text-white hover:bg-gray-800"
    }
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative overflow-hidden rounded-full px-6 py-3 font-medium transition-all ${getVariantClasses()} ${className}`}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.span
        className="absolute inset-0 z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={isHovered ? { scale: 1.5, opacity: 0.15 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)",
          transformOrigin: "center",
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
