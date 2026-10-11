"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowDownRight, ArrowRight, Sparkles } from "lucide-react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getSlides } from "../model/slides";
import type { Slide } from "../types/slide";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function HomepageSwiper() {
  const router = useRouter();
  const slides = getSlides();

  const handleParticipateClick = (slide: Slide) => {
    if (slide.id === 2) {
      window.open(
        "https://robo.myrobo.uz",
        "_blank",
        "noopener,noreferrer",
      );
      return;
    }

    router.push("/kurslar");
  };

  return (
    <section className="relative">
      <Swiper
        spaceBetween={0}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".hero-pagination",
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="grid items-center gap-10 py-8 sm:py-12 lg:min-h-[490px] lg:grid-cols-[1fr_0.95fr] lg:gap-14 lg:py-14">
              {/* Text content */}
              <div className="flex flex-col items-start">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.07] px-3.5 py-2 text-sm font-medium text-primary">
                  <Sparkles size={15} />
                  <span>{slide.badge}</span>
                </div>

                <h1 className="max-w-2xl text-[2.5rem] font-bold leading-[1.08] tracking-[-0.045em] text-on-surface sm:text-5xl lg:text-[3.65rem]">
                  <span className="text-primary">
                    {slide.title}
                  </span>{" "}
                  {slide.mentor}
                </h1>

                <p className="mt-6 max-w-lg text-base leading-7 text-on-surface-variant sm:text-lg sm:leading-8">
                  {slide.description}
                </p>

                <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <button
                    onClick={() => handleParticipateClick(slide)}
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-dark shadow-lg shadow-blue-600/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/20 active:translate-y-0"
                  >
                    Ishtirok etish
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  <button
                    onClick={() => router.push("/kurslar")}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-outline-variant bg-surface px-6 py-3 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container"
                  >
                    Barcha kurslar
                    <ArrowDownRight size={17} />
                  </button>
                </div>

              </div>

              {/* Image */}
              <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none">
                <div className="pointer-events-none absolute -inset-5 rounded-[2rem] bg-primary/[0.06] blur-2xl" />

                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-outline-variant bg-surface-container shadow-2xl shadow-black/[0.06]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Robototexnika va texnologiyalar
                    </div>

                    <div className="mt-3 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                          MyRobo
                        </p>
                        <p className="mt-1 text-sm text-white/75">
                          Kelajakni o‘z qo‘ling bilan yarat
                        </p>
                      </div>

                      <span className="shrink-0 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white backdrop-blur-md">
                        ★ {slide.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-3 -top-3 -z-10 h-24 w-24 rounded-2xl border border-primary/15 sm:-right-5 sm:-top-5 sm:h-32 sm:w-32" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero-pagination mt-4 flex min-h-4 items-center justify-center gap-2 lg:justify-start" />

      <style jsx global>{`
        .hero-pagination .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          margin: 0 !important;
          border-radius: 9999px;
          background: var(--hero-pagination-color, #94a3b8);
          opacity: 0.45;
          transition: width 250ms ease, opacity 250ms ease,
            background-color 250ms ease;
        }

        .hero-pagination .swiper-pagination-bullet-active {
          width: 24px;
          opacity: 1;
          background: var(--hero-pagination-active, #2563eb);
        }
      `}</style>
    </section>
  );
}