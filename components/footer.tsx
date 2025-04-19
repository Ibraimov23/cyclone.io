"use client"

import Image from "next/image"
import { Instagram, Send } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative z-20 bg-cyclone py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <motion.div
            className="hidden sm:block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/images/cyclone.svg" alt="Cyclone Logo" width={120} height={60} className="h-auto w-[120px]" />
          </motion.div>

          <ul className="flex w-full flex-wrap items-center justify-between gap-4 sm:w-auto sm:justify-end sm:gap-8">
            <motion.li
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Instagram className="h-6 w-6 text-white" />
              <a
                href="https://www.instagram.com/cyclone.kgz/?next=%2F"
                className="text-sm text-white underline underline-offset-2 transition-colors hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                cyclone.kgz
              </a>
            </motion.li>
            <motion.li
              className="hidden items-center gap-2 sm:flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Send className="h-6 w-6 text-white" />
              <a
                href="https://t.me/cyclone56666"
                className="text-sm text-white underline underline-offset-2 transition-colors hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                cyclone
              </a>
            </motion.li>
          </ul>
        </div>

        <motion.div
          className="mt-6 border-t border-white/20 pt-6 text-center text-sm text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          © {new Date().getFullYear()} Cyclone. Все права защищены.
        </motion.div>
      </div>
    </footer>
  )
}
