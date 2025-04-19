"use client"

import { useEffect, useRef } from "react"

export default function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const colors = ["#3498db", "#1abc9c", "#9b59b6", "#f39c12", "#e74c3c"]
    const bubbles: Bubble[] = []
    const bubbleCount = 15
    const bubbleAlpha = 0.7

    class Bubble {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number
      alpha: number

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.radius = Math.random() * 100 + 50
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.alpha = bubbleAlpha
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.alpha
        ctx.fill()
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < -this.radius) {
          this.x = width + this.radius
        } else if (this.x > width + this.radius) {
          this.x = -this.radius
        }

        if (this.y < -this.radius) {
          this.y = height + this.radius
        } else if (this.y > height + this.radius) {
          this.y = -this.radius
        }
      }
    }

    // Create bubbles
    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push(new Bubble())
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)

      // Draw background
      ctx.globalAlpha = 1
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(0, 0, width, height)

      // Draw bubbles
      bubbles.forEach((bubble) => {
        bubble.draw()
        bubble.update()
      })

      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 h-full w-full opacity-30" />
}
