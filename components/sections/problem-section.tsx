"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import RevealText from "@/components/ui/reveal-text"
import ParallaxSection from "@/components/ui/parallax-section"

export default function ProblemSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="problem" ref={ref} className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <RevealText
              text="Проблема"
              as="h2"
              className="text-xl font-bold underline sm:text-2xl md:text-3xl"
              delay={0.1}
            />
          </motion.div>

          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            <motion.div
              className="w-full overflow-hidden rounded-xl lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ParallaxSection speed={0.2}>
                <Image
                  src="/images/problem-img.png"
                  alt="Проблема учета откорма животных"
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-xl object-cover shadow-lg transition-transform duration-500 hover:scale-105"
                />
              </ParallaxSection>
            </motion.div>

            <motion.div
              className="flex w-full flex-col justify-center lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-base leading-relaxed sm:text-lg md:text-xl">
                На сегодняшний день учет откорма животных на фермах и откормочных базах ведется вручную. Это требует
                значительных затрат времени, а также часто приводит к ошибкам, которые могут негативно повлиять на
                результаты откорма.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="rounded-xl bg-black/5 p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p className="text-base leading-relaxed sm:text-lg md:text-xl">
              Неточные данные усложняют контроль за рационом животных и снижают эффективность работы хозяйств. В
              результате снижается прирост веса скота, что сказывается на общей продуктивности и прибыли хозяйства.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="rounded-lg border border-red-100 bg-red-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-red-700">Потеря времени</h3>
              <p>Ручной учет требует значительных временных затрат</p>
            </div>
            <div className="rounded-lg border border-red-100 bg-red-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-red-700">Человеческий фактор</h3>
              <p>Ошибки при ручном вводе данных неизбежны</p>
            </div>
            <div className="rounded-lg border border-red-100 bg-red-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-red-700">Снижение прибыли</h3>
              <p>Неэффективный учет приводит к финансовым потерям</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
