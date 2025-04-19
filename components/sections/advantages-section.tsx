"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import RevealText from "@/components/ui/reveal-text"

const advantages = [
  {
    title: "Экономия времени",
    description:
      "Весь процесс учета откорма автоматизирован. Вы больше не тратите часы на ручной ввод данных и создание отчетов — всё это делает приложение.",
  },
  {
    title: "Точность данных",
    description:
      "Автоматизация исключает ошибки, которые часто случаются при ручном учете. Это означает, что вы всегда будете иметь доступ к точной информации о рационе и приросте веса животных.",
  },
  {
    title: "Увеличение продуктивности",
    description:
      "Приложение помогает оптимизировать откорм, что приводит к лучшему приросту веса скота. Это повышает общую продуктивность хозяйства и, соответственно, прибыль.",
  },
  {
    title: "Легкость в использовании",
    description:
      "Интуитивно понятный интерфейс приложения делает его удобным для использования как фермерами, так и менеджерами откормочных баз.",
  },
]

export default function AdvantagesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="our_pluses" ref={ref} className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <RevealText
              text="Преимущества нашего решения"
              as="h2"
              className="text-xl font-bold underline sm:text-2xl md:text-3xl"
              delay={0.1}
            />
          </motion.div>

          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            <div className="order-2 w-full lg:order-1 lg:w-1/2">
              <div className="grid gap-6">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-blue-50 opacity-0 transition-all duration-500 group-hover:opacity-100" />

                    <div className="relative z-10 flex flex-col gap-3">
                      <h3 className="text-lg font-semibold sm:text-xl md:text-2xl">{advantage.title}</h3>
                      <p className="text-base leading-relaxed text-gray-700">{advantage.description}</p>
                    </div>

                    <motion.div
                      className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="order-1 w-full lg:order-2 lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="sticky top-24">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="overflow-hidden rounded-xl shadow-lg"
                >
                  <Image
                    src="/images/benefit-img.png"
                    alt="Преимущества нашего решения"
                    width={600}
                    height={650}
                    className="h-auto w-full rounded-xl object-cover transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
