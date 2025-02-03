"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function App() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="h-[340px] md:h-[480px] w-full mb-6 rounded-lg border border-accent-secondary bg-main relative z-1"
      >
        <SwiperSlide className="bg-[url(/images/slide/slide-1.png)] bg-no-repeat  bg-right">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center pl-12 md:p-16 gap-2 md:gap-4 text-slate-300">
            <h1 className="text-3xl md:text-5xl uppercase font-extrabold text-yellow-600">
              Free Arcade Games
            </h1>
            <p className="text-lg md:text-xl">Play Retro Games for free.</p>
            <p className="text-sm md:text-md hidden md:block lg:max-w-[400px]">
              Relive The Classic Retro Games and Enjoy them for free. Start
              Playing now.
            </p>
            <a
              href="/"
              className="bg-yellow-600 hover:bg-yellow-500 font-bold text-lg transition-all ease-in text-black rounded-lg px-3 py-1 w-max"
            >
              Play Now
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url(/images/slide/slide-7.jpg)] bg-no-repeat bg-cover" />
        <SwiperSlide className="bg-[url(/images/slide/slide-1.jpg)] bg-no-repeat bg-cover" />
        <SwiperSlide className="bg-[url(/images/slide/slide-8.webp)] bg-no-repeat bg-cover" />
        <SwiperSlide className="bg-[url(/images/slide/slide-5.jpg)] bg-no-repeat bg-cover" />
        <SwiperSlide className="bg-[url(/images/slide/slide-6.jpg)] bg-no-repeat bg-cover" />
        <SwiperSlide className="bg-[url(/images/slide/slide-4.jpg)] bg-no-repeat bg-cover" />
        <SwiperSlide className="bg-[url(/images/slide/slide-2.png)] bg-no-repeat bg-cover" />
      </Swiper>
    </>
  );
}
