"use client"
import Link from "next/link"
import events from "@/data/events.json"
import officers from "@/data/officers.json" assert { type: "json" };
import { useKeenSlider } from "keen-slider/react"
import { useEffect } from "react"
import * as motion from "motion/react-client"
import "keen-slider/keen-slider.min.css"

const images = [
  { src: "/images/house.jpg", alt: "Chapter House" },
  { src: "/images/social.jpg", alt: "Social Event" },
  { src: "/images/founders.jpg", alt: "Founders Picture" },
]

export default function HomePage() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.next()
    }, 6000)
    return () => clearInterval(interval)
  }, [slider])

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section with Carousel */}
      <section className="relative h-[500px] mt-5 overflow-hidden">
        {/* Image Carousel */}
        <div ref={sliderRef} className="keen-slider w-full h-full">
          {images.map((img, idx) => (
            <div className="keen-slider__slide w-full h-full" key={idx}>
              <motion.img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => slider.current?.prev()}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-white bg-opacity-70 hover:bg-opacity-100 text-black px-3 py-2 rounded-full shadow-md"
        >
          ◀
        </button>
        <button
          onClick={() => slider.current?.next()}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-white bg-opacity-70 hover:bg-opacity-100 text-black px-3 py-2 rounded-full shadow-md"
        >
          ▶
        </button>

        {/* Overlay with Title and Button */}
        <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center text-center">
          <div className="text-white z-10 bg-center bg-[#7f0000]/25 rounded-xl p-3">
            <h1 className="text-5xl font-bold drop-shadow-md ">Welcome to Triangle Fraternity</h1>
            <p className="mt-4 text-xl">Brotherhood, Leadership, and Excellence in STEM</p>
            <Link href="/about">
              <button className="mt-6 px-6 py-3 bg-[#7f0000] hover:bg-[#5c0000] duration-150 text-white font-semibold rounded-lg">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#7f0000]">Who We Are</h2>
        <p className="mt-4 text-gray-700">
          Triangle Fraternity is dedicated to fostering a strong brotherhood of STEM leaders.
          Our members support each other academically, socially, and professionally.
        </p>
        <Link href="/about">
          <button className="mt-4 px-6 py-3 bg-[#7f0000] hover:bg-[#5c0000] duration-150 text-white font-semibold rounded-lg">
            More About Us
          </button>
        </Link>
      </section>

      {/* Upcoming Events */}
      <section className="py-12">
        <div className="border-t border-b border-gray-600 py-8">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#7f0000] text-center">Upcoming Events</h2>
            <div className="mt-6 space-y-6">
              {events.map((event, index) => (
                <div key={index} className="p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-gray-800">{event.title}</h3>
                  <p className="text-gray-600">{event.date}</p>
                  <p className="mt-2 text-gray-700">{event.description}</p>
                  <Link href={event.link} className="mt-3 text-[#7f0000] hover:underline inline-block">
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#7f0000]">Join Triangle Fraternity</h2>
        <p className="mt-4 text-gray-700">
          Interested in joining? Contact us to learn more about our brotherhood and recruitment process.
        </p>
        <Link href="/contact">
          <button className="mt-4 px-6 py-3 bg-[#7f0000] hover:bg-[#5c0000] duration-150 text-white font-semibold rounded-lg">
            Get In Touch
          </button>
          <div className="mx-auto mt-6 max-w-md">
            {officers.map((officer, index) => (
              <div key={index} className="p-6 mb-4 rounded-lg shadow-md text-center shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800">{officer.title}</h3>
                <p className="text-gray-600">{officer.name}</p>
                <p className="mt-2 text-gray-700">{officer.email}</p>
              </div>
            ))}
          </div>
        </Link>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6 text-center"></section>
    </main>
  )
}
