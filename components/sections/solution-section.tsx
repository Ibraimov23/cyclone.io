"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import RevealText from "@/components/ui/reveal-text"
import AnimatedCounter from "@/components/ui/animated-counter"

export default function SolutionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="our_solve" ref={ref} className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <RevealText
              text="Наше решение"
              as="h2"
              className="text-xl font-bold underline sm:text-2xl md:text-3xl"
              delay={0.1}
            />
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-white shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5" />

            <p className="relative z-10 text-base leading-relaxed sm:text-lg md:text-xl">
              Мы создаем мобильное приложение, которое помогает автоматизировать процесс учета откорма КРС и МРС. Теперь
              все данные — от рациона до прироста веса — можно легко вносить в приложение, которое будет хранить
              информацию, анализировать её и генерировать отчеты. Это значительно упрощает задачу фермерам и менеджерам
              откормочных баз, помогая им лучше контролировать процесс откорма и принимать более взвешенные решения.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              className="flex flex-col items-center rounded-xl bg-green-50 p-6 text-center shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="mb-4 rounded-full bg-green-100 p-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12L15 15" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="9" stroke="#16a34a" strokeWidth="2" />
                </svg>
              </div>
              <AnimatedCounter end={40} suffix="%" className="mb-2 text-3xl font-bold text-green-700" delay={0.7} />
              <h3 className="mb-2 text-lg font-semibold">Экономия времени</h3>
              <p>Сокращение времени на учет и анализ данных</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center rounded-xl bg-blue-50 p-6 text-center shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="mb-4 rounded-full bg-blue-100 p-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12L9 16L19 6"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <AnimatedCounter end={99} suffix="%" className="mb-2 text-3xl font-bold text-blue-700" delay={0.9} />
              <h3 className="mb-2 text-lg font-semibold">Точность данных</h3>
              <p>Исключение ошибок при учете и анализе</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center rounded-xl bg-purple-50 p-6 text-center shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="mb-4 rounded-full bg-purple-100 p-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 6L18.5 8.5M18.5 8.5L21 11M18.5 8.5L16 11M18.5 8.5L21 6"
                    stroke="#7e22ce"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 20L9 14M9 14V18M9 14H5"
                    stroke="#7e22ce"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15C12 16.6569 10.6569 18 9 18C7.34315 18 6 16.6569 6 15C6 13.3431 7.34315 12 9 12C10.6569 12 12 13.3431 12 15Z"
                    stroke="#7e22ce"
                    strokeWidth="2"
                  />
                  <path
                    d="M21 15C21 16.6569 19.6569 18 18 18C16.3431 18 15 16.6569 15 15C15 13.3431 16.3431 12 18 12C19.6569 12 21 13.3431 21 15Z"
                    stroke="#7e22ce"
                    strokeWidth="2"
                  />
                  <path
                    d="M6 8C6 9.65685 4.65685 11 3 11C1.34315 11 0 9.65685 0 8C0 6.34315 1.34315 5 3 5C4.65685 5 6 6.34315 6 8Z"
                    stroke="#7e22ce"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <AnimatedCounter end={25} suffix="%" className="mb-2 text-3xl font-bold text-purple-700" delay={1.1} />
              <h3 className="mb-2 text-lg font-semibold">Рост продуктивности</h3>
              <p>Увеличение эффективности работы хозяйства</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
