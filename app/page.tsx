"use client"
import { motion, useScroll, useSpring } from "framer-motion"
import { CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackgroundCircles from "@/components/background-circles"
import ZigZagDivider from "@/components/zig-zag-divider"
import AnimatedSection from "@/components/animated-section"
import ScrollProgress from "@/components/ui/scroll-progress"
import RevealText from "@/components/ui/reveal-text"
import ParallaxSection from "@/components/ui/parallax-section"
import AnimatedCounter from "@/components/ui/animated-counter"
import AnimatedButton from "@/components/ui/animated-button"

const advantages = [
  {
    title: "Увеличение продуктивности",
    description: "Оптимизируйте рацион и следите за приростом веса, чтобы добиться максимальной продуктивности.",
  },
  {
    title: "Сокращение затрат",
    description: "Уменьшите расходы на корма и ресурсы благодаря точному учету и контролю.",
  },
  {
    title: "Улучшение здоровья животных",
    description: "Обеспечьте сбалансированное питание и следите за состоянием здоровья скота.",
  },
  {
    title: "Принятие обоснованных решений",
    description: "Используйте аналитику и отчеты для принятия стратегических решений в управлении хозяйством.",
  },
]

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      <BackgroundCircles />
      <ScrollProgress />
      <Header />
      <main className="relative z-10">
        <ParallaxSection speed={0.2}>
          <AnimatedSection id="main" className="relative">
            <div
              className="absolute inset-0 bg-cover bg-center brightness-[0.85] filter"
              style={{ backgroundImage: "url('/images/main-bg.jpg')" }}
            ></div>
            <div className="container relative mx-auto px-4 py-32 md:px-8 lg:px-16 xl:px-32">
              <div className="flex flex-col items-center gap-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <RevealText
                    text="Добро пожаловать в мир автоматизации откорма животных!"
                    className="max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
                    as="h1"
                  />
                </motion.div>
                <motion.p
                  className="max-w-3xl text-base text-white sm:text-lg md:text-xl lg:text-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Приложение от команды Cyclone использует передовые технологии машинного обучения для упрощения учета и
                  повышения эффективности работы фермеров и менеджеров откормочных баз.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-4"
                >
                  <a href="https://fileport.io/8Y3zQxeBveBW" download>
                    <AnimatedButton variant="cyclone" className="px-8 py-4 text-lg animate-pulse-cyclone">
                      Скачать приложение
                    </AnimatedButton>
                  </a>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </ParallaxSection>

        <AnimatedSection id="about" className="bg-white py-16" delay={0.1}>
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="flex flex-col gap-12">
              <RevealText
                text="О проекте"
                className="text-xl font-bold text-cyclone underline sm:text-2xl md:text-3xl"
                as="h2"
              />
              <motion.p
                className="text-base sm:text-lg md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Мы, студенты колледжа TSI, в рамках финального междисциплинарного пректа, в партнерстве с мясокомбинатом
                Рейна-Кенч, разрабатываем мобильное приложение, которое полностью автоматизирует процесс учета откорма
                животных. Это инновационное решение создано для фермеров, откормочных баз и мясокомбинатов, чтобы
                облегчить повседневную работу и повысить продуктивность.
              </motion.p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                <div className="rounded-lg bg-gray-50 p-6 text-center shadow-md hover-glow">
                  <AnimatedCounter end={100} suffix="%" className="text-3xl font-bold text-cyclone md:text-4xl" />
                  <p className="mt-2 text-sm font-medium">Автоматизация</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6 text-center shadow-md hover-glow">
                  <AnimatedCounter
                    end={85}
                    suffix="%"
                    delay={0.2}
                    className="text-3xl font-bold text-cyclone md:text-4xl"
                  />
                  <p className="mt-2 text-sm font-medium">Экономия времени</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6 text-center shadow-md hover-glow">
                  <AnimatedCounter
                    end={95}
                    suffix="%"
                    delay={0.4}
                    className="text-3xl font-bold text-cyclone md:text-4xl"
                  />
                  <p className="mt-2 text-sm font-medium">Точность данных</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6 text-center shadow-md hover-glow">
                  <AnimatedCounter
                    end={30}
                    suffix="%"
                    delay={0.6}
                    className="text-3xl font-bold text-cyclone md:text-4xl"
                  />
                  <p className="mt-2 text-sm font-medium">Рост продуктивности</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <ZigZagDivider />

        <AnimatedSection id="problem" className="bg-white py-16" delay={0.1}>
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="flex flex-col gap-12">
              <RevealText
                text="Проблема"
                className="text-xl font-bold text-cyclone underline sm:text-2xl md:text-3xl"
                as="h2"
              />

              <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <ParallaxSection speed={0.1}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden rounded-lg"
                    >
                      <img
                        src="/images/problem-img.png"
                        alt="Проблема учета откорма животных"
                        className="h-auto w-full rounded-lg object-cover shadow-lg"
                      />
                    </motion.div>
                  </ParallaxSection>
                </motion.div>
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <p className="text-base sm:text-lg md:text-xl">
                    На сегодняшний день учет откорма животных на фермах и откормочных базах ведется вручную. Это требует
                    значительных затрат времени, а также часто приводит к ошибкам, которые могут негативно повлиять на
                    результаты откорма.
                  </p>
                </motion.div>
              </div>

              <motion.p
                className="text-base sm:text-lg md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Неточные данные усложняют контроль за рационом животных и снижают эффективность работы хозяйств. В
                результате снижается прирост веса скота, что сказывается на общей продуктивности и прибыли хозяйства.
              </motion.p>
            </div>
          </div>
        </AnimatedSection>

        <ZigZagDivider />

        <AnimatedSection id="our_solve" className="bg-white py-16" delay={0.1}>
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="flex flex-col gap-12">
              <RevealText
                text="Наше решение"
                className="text-xl font-bold text-cyclone underline sm:text-2xl md:text-3xl"
                as="h2"
              />
              <motion.p
                className="text-base sm:text-lg md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Мы создаем мобильное приложение, которое помогает автоматизировать процесс учета откорма КРС и МРС.
                Теперь все данные — от рациона до прироста веса — можно легко вносить в приложение, которое будет
                хранить информацию, анализировать её и генерировать отчеты. Это значительно упрощает задачу фермерам и
                менеджерам откормочных баз, помогая им лучше контролировать процесс откорма и принимать более взвешенные
                решения.
              </motion.p>

              <motion.div
                className="relative mx-auto h-64 w-full overflow-hidden rounded-xl md:h-96"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyclone to-cyclone-light opacity-80"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <h3 className="mb-4 text-2xl font-bold md:text-3xl">Инновационное решение</h3>
                  <p className="mb-6 max-w-lg text-lg">
                    Наше приложение использует современные технологии для автоматизации процесса учета откорма животных
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <ZigZagDivider />

        <AnimatedSection id="how_work" className="bg-white py-16" delay={0.1}>
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="flex flex-col gap-12">
              <RevealText
                text="Как работает приложение"
                className="text-xl font-bold text-cyclone underline sm:text-2xl md:text-3xl"
                as="h2"
              />

              <div className="mt-8">
                <div className="grid gap-8">
                  {[
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
                        "Больше не нужно вручную составлять отчеты и высчитывать кормовую единицу. Приложение автоматически высчитывает кормовую единицу и создаёт детализированные отчеты о потреблении корма и приросте веса скота.",
                    },
                    {
                      title: "Отслеживание прироста веса",
                      description:
                        "Приложение позволяет фиксировать вес животных и отслеживать, как рацион влияет на их прирост. Это поможет лучше понимать, какие изменения в кормлении дают наилучшие результаты.",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col gap-4 rounded-lg border border-cyclone/20 p-6 transition-all hover:shadow-lg md:flex-row md:items-start md:gap-6 hover-glow"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(144, 1, 10, 0.2)" }}
                    >
                      <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }}>
                        <CheckCircle className="h-10 w-10 flex-shrink-0 text-cyclone" />
                      </motion.div>
                      <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-semibold sm:text-xl md:text-2xl">{feature.title}</h3>
                        <p className="text-base sm:text-lg">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <ZigZagDivider />

        <AnimatedSection id="our_pluses" className="bg-white py-16" delay={0.1}>
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="flex flex-col gap-12">
              <RevealText
                text="Преимущества нашего решения"
                className="text-xl font-bold text-cyclone underline sm:text-2xl md:text-3xl"
                as="h2"
              />

              <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
                <div className="order-2 w-full lg:order-1 lg:w-1/2">
                  <div className="grid gap-6">
                    {advantages.map((advantage, index) => (
                      <motion.div
                        key={index}
                        className="rounded-lg border border-cyclone/20 p-6 transition-all hover:shadow-md hover-glow"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(144, 1, 10, 0.2)" }}
                      >
                        <div className="flex flex-col gap-3">
                          <h3 className="text-lg font-semibold text-cyclone sm:text-xl md:text-2xl">
                            {advantage.title}
                          </h3>
                          <p className="text-base sm:text-lg">{advantage.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="order-1 w-full lg:order-2 lg:w-1/2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="sticky top-24">
                    <ParallaxSection speed={0.1}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden rounded-lg"
                      >
                        <img
                          src="/images/benefit-img.png"
                          alt="Преимущества нашего решения"
                          className="h-auto w-full rounded-lg object-cover shadow-lg"
                        />
                      </motion.div>
                    </ParallaxSection>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <ZigZagDivider />

        <AnimatedSection id="zachem" className="bg-white py-16" delay={0.1}>
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="flex flex-col gap-12">
              <RevealText
                text="Зачем это нужно"
                className="text-xl font-bold text-cyclone underline sm:text-2xl md:text-3xl"
                as="h2"
              />

              <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <p className="text-base sm:text-lg md:text-xl">
                    Автоматизация откорма — это ключ к более эффективному управлению хозяйством. Наше приложение
                    позволяет фермерам и менеджерам контролировать процесс откорма животных на новом уровне.
                  </p>
                </motion.div>
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <ParallaxSection speed={0.1}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden rounded-lg"
                    >
                      <img
                        src="/images/auto-img.png"
                        alt="Автоматизация откорма"
                        className="h-auto w-full rounded-lg object-cover shadow-lg"
                      />
                    </motion.div>
                  </ParallaxSection>
                </motion.div>
              </div>

              <motion.p
                className="text-base sm:text-lg md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Благодаря точным данным о рационе и приросте веса, хозяйства смогут своевременно реагировать на
                изменения и корректировать подходы, что обеспечит лучшие результаты и увеличит прибыль. Оптимизация
                откорма позволит добиться максимальной продуктивности без потерь времени и ресурсов.
              </motion.p>
            </div>
          </div>
        </AnimatedSection>

        <ZigZagDivider />

        <AnimatedSection id="inovation" className="bg-white py-16 pb-24" delay={0.1}>
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="flex flex-col gap-12">
              <RevealText
                text="Инновации в сельском хозяйстве"
                className="text-xl font-bold text-cyclone underline sm:text-2xl md:text-3xl"
                as="h2"
              />

              <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <p className="text-base sm:text-lg md:text-xl">
                    Наше приложение — это не просто инструмент для учета откорма, это шаг к цифровизации сельского
                    хозяйства.
                  </p>
                </motion.div>
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <ParallaxSection speed={0.1}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden rounded-lg"
                    >
                      <img
                        src="/images/application-img.png"
                        alt="Приложение Cyclone"
                        className="h-auto w-full rounded-lg object-cover shadow-lg"
                      />
                    </motion.div>
                  </ParallaxSection>
                </motion.div>
              </div>

              <motion.p
                className="text-base sm:text-lg md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Мы стремимся сделать технологии доступными и полезными для фермеров, откормочных баз и мясокомбинатов,
                помогая им повышать эффективность и развивать бизнес в современном мире. Присоединяйтесь к нам, и вместе
                мы сделаем сельское хозяйство более точным, продуктивным и прибыльным!
              </motion.p>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}
