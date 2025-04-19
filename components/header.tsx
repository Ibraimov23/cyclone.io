"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "#main", label: "Главная" },
  { href: "#about", label: "О проекте" },
  { href: "#problem", label: "Проблема" },
  { href: "#our_solve", label: "Наше решение" },
  { href: "#how_work", label: "Как работает приложение" },
  { href: "#our_pluses", label: "Преимущества нашего решения" },
  { href: "#zachem", label: "Зачем это нужно" },
  { href: "#inovation", label: "Инновации в сельском хозяйстве" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Disable scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-30 w-full border-b border-black/5 bg-white/80 backdrop-blur-md transition-all duration-300",
        scrolled && "shadow-md"
      )}
    >
      <div className="container mx-auto px-4 py-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/images/logo.svg"
              alt="Cyclone Logo"
              width={70}
              height={56}
              className="relative z-40 h-auto w-[60px] md:w-[70px]"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-col items-end gap-3">
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-6"
            >
              {navLinks.slice(0, 5).map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <a
                    href={link.href}
                    className="relative text-sm font-normal transition-colors hover:text-cyclone md:text-base"
                  >
                    {link.label}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyclone"
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-6"
            >
              {navLinks.slice(5).map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + 0.1 * index }}
                >
                  <a
                    href={link.href}
                    className="relative text-sm font-normal transition-colors hover:text-cyclone md:text-base"
                  >
                    {link.label}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyclone"
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-50 flex h-12 w-12 flex-col items-center justify-center rounded-full bg-cyclone/10 lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-cyclone"
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center justify-center gap-1.5"
                >
                  <span className="h-0.5 w-6 bg-cyclone"></span>
                  <span className="h-0.5 w-6 bg-cyclone"></span>
                  <span className="h-0.5 w-6 bg-cyclone"></span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-40 flex h-screen w-screen flex-col items-center justify-center lg:hidden"
              >
                {/* Background Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                  onClick={() => setIsMenuOpen(false)}
                />

                {/* Menu Content */}
                <motion.div
                  initial={{ scale: 0.9, y: 20, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0.9, y: 20, opacity: 0 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                  className="relative mx-4 max-h-[80vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-cyclone">Cyclone</h3>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="rounded-full bg-gray-100 p-2 text-gray-500 transition-colors hover:bg-gray-200 hover:text-cyclone"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="grid gap-3">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 * index }}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center rounded-lg border border-gray-100 bg-white p-3 text-gray-800 shadow-sm transition-all hover:border-cyclone/20 hover:bg-cyclone/5 hover:text-cyclone hover:shadow-md"
                      >
                        <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-cyclone/10 text-cyclone">
                          {index + 1}
                        </span>
                        <span className="font-medium">{link.label}</span>
                      </motion.a>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 text-center text-sm text-gray-500"
                  >
                    <a href="/cyclone.apk" download className="text-cyclone underline hover:text-cyclone-dark">
                      Скачать приложение
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  )
}