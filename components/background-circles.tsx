"use client"

import { useEffect, useRef } from "react"

export default function BackgroundCircles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const circles: Circle[] = []
    const circleCount = 15
    const colors = ["#FFF0F1", "#FFD9DC", "#FFB3B9", "#FF8D96", "#90010A"]

    class Circle {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number
      opacity: number
      maxRadius: number
      minRadius: number // Added minimum radius
      growSpeed: number
      growing: boolean

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.minRadius = Math.random() * 20 + 10 // Minimum radius between 10 and 30
        this.radius = this.minRadius + Math.random() * 20 // Start with a radius between minRadius and minRadius+20
        this.maxRadius = this.radius + Math.random() * 20 // Maximum radius
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.2 + 0.1
        this.growSpeed = Math.random() * 0.1 + 0.05 // Reduced growth speed for smoother animation
        this.growing = Math.random() > 0.5
      }

      draw() {
        if (!ctx) return
        // Ensure radius is always positive before drawing
        const safeRadius = Math.max(1, this.radius)
        ctx.beginPath()
        ctx.arc(this.x, this.y, safeRadius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacity
        ctx.fill()
      }

      update() {
        // Pulsate with safety checks
        if (this.growing) {
          this.radius += this.growSpeed
          if (this.radius >= this.maxRadius) {
            this.growing = false
          }
        } else {
          this.radius -= this.growSpeed
          // Prevent radius from going below minimum
          if (this.radius <= this.minRadius) {
            this.growing = true
            this.radius = this.minRadius // Ensure radius doesn't go below minimum
          }
        }

        // Move
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
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

    // Create circles
    for (let i = 0; i < circleCount; i++) {
      circles.push(new Circle())
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)

      // Draw background
      ctx.globalAlpha = 1
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(0, 0, width, height)

      // Draw circles
      circles.forEach((circle) => {
        circle.draw()
        circle.update()
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

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 h-full w-full" />
}
