"use client"

import { motion } from "framer-motion"
import AnimatedButton from "@/components/ui/animated-button"
import RevealText from "@/components/ui/reveal-text"

export default function MainSection() {
  return (
    <section id="main" className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.85] filter"
        style={{ backgroundImage: "url('/images/main-bg.jpg')" }}
      ></div>

      {/* Animated overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="container relative mx-auto px-4 py-32 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col items-start gap-8 text-left md:max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <RevealText
              text="Добро пожаловать в мир автоматизации откорма животных!"
              as="h1"
              className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
              delay={0.2}
            />
          </motion.div>

          <motion.p
            className="text-base text-white/90 sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Приложение от команды Cyclone использует передовые технологии машинного обучения для упрощения учета и
            повышения эффективности работы фермеров и менеджеров откормочных баз.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <AnimatedButton variant="primary" className="bg-white text-black hover:bg-gray-100">
              Скачать приложение
            </AnimatedButton>
            <AnimatedButton variant="outline" className="border-white text-white hover:bg-white/10">
              Узнать больше
            </AnimatedButton>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1.2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 0.5,
            }}
          >
            <a href="#about" className="flex flex-col items-center text-white">
              <span className="mb-2 text-sm">Прокрутите вниз</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 5L12 19M12 19L19 12M12 19L5 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
