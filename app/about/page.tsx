"use client"
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 }
};

const images = [
  { src: "/images/house.jpg", alt: "Chapter House" },
  { src: "/images/social.jpg", alt: "Social Event" },
  { src: "/images/founders.jpg", alt: "Founders Picture" },
]

export default function AboutPage() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
  })
    return (
      <main className="max-w-3xl mx-auto p-6">
        <div ref={sliderRef} className="keen-slider h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
        {images.map((img, idx) => (
          <div className="keen-slider__slide" key={idx}>
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

        <motion.div {...fadeInUp}>
          <h1 className="text-4xl font-bold text-[#990033]">About Us</h1>
          <p className="text-gray-700 mt-4">
          Triangle Fraternity (EST 1907), is a social fraternity exclusively for 
          Engineers, Architects and Scientists. Our purpose is to develop balanced 
          men who cultivate high moral character, foster lifelong friendships and 
          lead lives of integrity. We offer countless leadership opportunities, 
          avenues for community service, scholarships and much, much more. Triangle, 
          thus, provides a bridge between academic life and a career, as well as a 
          foundation for success in the years after college.
          </p>
        </motion.div>
        <section className="mt-6">
          <motion.div {...fadeInUp}>
          <h2 className="text-2xl font-semibold text-[#990033]">Values and Code of Ethics</h2>
          <p className="text-gray-700 mt-2">
          All Triangle brothers hold themselves to high moral standards and strive 
          to be the best men they can in order to build a better world for tomorrow. 
          Triangle's Code of Ethics reflects our fraternities beliefs and values.
          </p>
          <p className="text-gray-700 mt-2">
          As a member of Triangle, I recognize my obligation to: <br/ >

          1. Observe the precepts of the Fraternity as set forth in the Ritual;<br/ >
          2. Accept cheerfully my full share of any task, however menial, involved in maintaining a chapter home;<br/ >
          3. Preserve and promote the chosen ideals of my Fraternity;<br/ >
          4. Pay all personal bills promptly, and always live within my means;<br/ >
          5. Help create in my chapter home an environment in which enduring friendships may be formed;<br/ >
          6. Maintain a creditable scholastic record;<br/ >
          7. Promote the welfare of my profession;<br/ >
          8. Maintain my self-respect by proper conduct at all times;<br/ >
          9. Uphold faithfully the traditions and program of my Alma Mater;<br/ >
          10. Pay the price of success in honest effort.<br/ >

          </p>
          </motion.div>
        </section>
  
        <section className="mt-6">
        <motion.div {...fadeInUp}>
          <h2 className="text-2xl font-semibold text-[#990033]">The Wisconsin Chapter</h2>
          <p className="text-gray-700 mt-2">
            The Wisconsin Chapter was founded in 1913. We currently own two houses on North Breese Terrace, 
            located right by Camp Randall Stadium and by the College of Engineering. Since its inception, the
            Wisconsin Chapter has worked to become leaders and foster positive impact within the UW Madison community.
            We actively collaborate with our alumni, Triangle National HQ, the Greek Community, and The College of Engineering
            to ensure our members receive the most out of their collie gite and Triangle experience.
          </p>
        </motion.div>
        </section>
      </main>
    );
  }
  