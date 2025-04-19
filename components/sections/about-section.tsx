"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import RevealText from "@/components/ui/reveal-text"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="about" ref={ref} className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <RevealText
              text="О проекте"
              as="h2"
              className="text-xl font-bold underline sm:text-2xl md:text-3xl"
              delay={0.1}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-xl bg-gradient-to-r from-gray-50 to-white p-8 shadow-lg"
          >
            <div className="absolute -left-3 -top-3 h-16 w-16 rounded-full bg-black/5" />
            <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-full bg-black/5" />

            <p className="relative z-10 text-base leading-relaxed sm:text-lg md:text-xl">
              Мы, студенты колледжа TSI, в рамках финального междисциплинарного пректа, в партнерстве с мясокомбинатом
              Рейна-Кенч, разрабатываем мобильное приложение, которое полностью автоматизирует процесс учета откорма
              животных. Это инновационное решение создано для фермеров, откормочных баз и мясокомбинатов, чтобы
              облегчить повседневную работу и повысить продуктивность. Наше приложение призвано сделать учет откорма
              точным, быстрым и удобным, избавляя от необходимости вести записи вручную.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="rounded-lg bg-black/5 p-6">
              <h3 className="mb-2 text-lg font-semibold">Инновационный подход</h3>
              <p>Используем передовые технологии для решения повседневных задач фермеров</p>
            </div>
            <div className="rounded-lg bg-black/5 p-6">
              <h3 className="mb-2 text-lg font-semibold">Простота использования</h3>
              <p>Интуитивно понятный интерфейс, доступный даже для неопытных пользователей</p>
            </div>
            <div className="rounded-lg bg-black/5 p-6">
              <h3 className="mb-2 text-lg font-semibold">Реальные результаты</h3>
              <p>Проверенное решение, которое уже помогает повышать эффективность хозяйств</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
