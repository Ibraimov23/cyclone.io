"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CheckCircle } from "lucide-react"
import RevealText from "@/components/ui/reveal-text"

const features = [
  {
    title: "Ввод и настройка данных о рационе",
    description:
      "Вы можете легко добавлять информацию о том, сколько зерна, силоса, сенажа или других кормов употребляет каждое животное. Все данные можно гибко настраивать под конкретные условия и потребности вашего хозяйства.",
  },
  {
    title: "Сравнение периодов",
    description:
      "Вы сможете сравнивать результаты откорма за разные периоды времени, что позволит выявлять успешные стратегии и своевременно вносить улучшения в процесс.",
  },
  {
    title: "Автоматическая генерация отчетов",
    description:
      "Больше не нужно вручную составлять отчеты и высчитывать кормовую единицу. Приложение автоматически высчитывает кормовую единицу и создаёт детализированные отчеты о потреблении корма и приросте веса скота. Эти данные помогут оценивать эффективность откорма и корректировать рацион.",
  },
  {
    title: "Отслеживание прироста веса",
    description:
      "Приложение позволяет фиксировать вес животных и отслеживать, как рацион влияет на их прирост. Это поможет лучше понимать, какие изменения в кормлении дают наилучшие результаты.",
  },
]

export default function HowItWorksSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="how_work" ref={ref} className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <RevealText
              text="Как работает приложение"
              as="h2"
              className="text-xl font-bold underline sm:text-2xl md:text-3xl"
              delay={0.1}
            />
          </motion.div>

          <div className="grid gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md md:p-8"
              >
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-green-50 opacity-0 transition-all duration-500 group-hover:opacity-100" />

                <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </motion.div>
                  </div>
                  <div className="relative z-10 flex flex-col gap-3">
                    <h3 className="text-lg font-semibold sm:text-xl md:text-2xl">{feature.title}</h3>
                    <p className="text-base leading-relaxed text-gray-700 sm:text-lg">{feature.description}</p>
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-green-400 to-green-600"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="rounded-xl bg-green-50 p-6 text-center md:max-w-lg">
              <h3 className="mb-3 text-xl font-semibold text-green-800">Готовы начать?</h3>
              <p className="mb-4 text-green-700">
                Скачайте приложение сегодня и оптимизируйте процесс откорма животных на вашей ферме!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-green-600 px-6 py-2 text-white transition-colors hover:bg-green-700"
              >
                Скачать приложение
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
