import Image from "next/image"

export default function InnovationSection() {
  return (
    <section id="inovation" className="bg-white py-16 pb-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col gap-12">
          <h2 className="text-xl font-bold underline sm:text-2xl md:text-3xl">Инновации в сельском хозяйстве</h2>

          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            <div className="w-full lg:w-1/2">
              <p className="text-base sm:text-lg md:text-xl">
                Наше приложение — это не просто инструмент для учета откорма, это шаг к цифровизации сельского
                хозяйства.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/application-img.png"
                alt="Приложение Cyclone"
                width={600}
                height={400}
                className="h-auto w-full rounded-md object-cover"
              />
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-xl">
            Мы стремимся сделать технологии доступными и полезными для фермеров, откормочных баз и мясокомбинатов,
            помогая им повышать эффективность и развивать бизнес в современном мире. Присоединяйтесь к нам, и вместе мы
            сделаем сельское хозяйство более точным, продуктивным и прибыльным!
          </p>
        </div>
      </div>
    </section>
  )
}
