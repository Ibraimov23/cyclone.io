"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import RevealText from "@/components/ui/reveal-text"
import ParallaxSection from "@/components/ui/parallax-section"

export default function WhySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="zachem" ref={ref} className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <RevealText
              text="Зачем это нужно"
              as="h2"
              className="text-xl font-bold underline sm:text-2xl md:text-3xl"
              delay={0.1}
            />
          </motion.div>

          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            <motion.div
              className="flex w-full flex-col justify-center lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-base leading-relaxed sm:text-lg md:text-xl">
                Автоматизация откорма — это ключ к более эффективному управлению хозяйством. Наше приложение позволяет
                фермерам и менеджерам контролировать процесс откорма животных на новом уровне.
              </p>
            </motion.div>

            <motion.div
              className="w-full overflow-hidden rounded-xl lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <ParallaxSection speed={0.2}>
                <Image
                  src="/images/auto-img.png"
                  alt="Автоматизация откорма"
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-xl object-cover shadow-lg transition-transform duration-500 hover:scale-105"
                />
              </ParallaxSection>
            </motion.div>
          </div>

          <motion.div
            className="rounded-xl bg-gradient-to-r from-amber-50 to-amber-100 p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p className="text-base leading-relaxed sm:text-lg md:text-xl">
              Благодаря точным данным о рационе и приросте веса, хозяйства смогут своевременно реагировать на изменения
              и корректировать подходы, что обеспечит лучшие результаты и увеличит прибыль. Оптимизация откорма позволит
              добиться максимальной продуктивности без потерь времени и ресурсов.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="rounded-lg bg-amber-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-amber-800">Повышение эффективности</h3>
              <p>Оптимизация процессов для достижения лучших результатов</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
