"use client";
import * as motion from "motion/react-client";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 }
};

export default function AboutPage() {
  return (
    <>
      {/* Full-width image comment*/}
      <div className="w-full h-[400px] sm:h-[500px] md:h-[700px] overflow-hidden mt-5 relative left-1/2 -ml-[50vw] w-screen">
        <motion.img
          src="../images/members.jpg"
          alt="Chapter Members"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center text-center">
          <div className="text-white z-10 bg-center bg-[#7f0000]/40 rounded-xl p-3 mt-40">
            <h1 className="text-9xl font-bold drop-shadow-md">About Triangle</h1>
          </div>
        </div>
      

      <main className="max-w-8xl mx-auto py-10 px-6 space-y-16">

        {/* About Us – Centered */}
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#990033]">About Us</h1>
          <p className="text-gray-700 text-xl mt-4">
            Triangle Fraternity (EST 1907), is a social fraternity exclusively for 
            Engineers, Architects and Scientists. Our purpose is to develop balanced 
            men who cultivate high moral character, foster lifelong friendships and 
            lead lives of integrity. We offer countless leadership opportunities, 
            avenues for community service, scholarships and much, much more. Triangle, 
            thus, provides a bridge between academic life and a career, as well as a 
            foundation for success in the years after college.
          </p>
        </motion.div>

        {/* Values – Left-aligned layout */}
        <motion.div {...fadeInUp} className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-left">
            <h2 className="text-2xl font-semibold text-[#990033]">Values and Code of Ethics</h2>
            <p className="text-gray-700 text-xl mt-2">
              All Triangle brothers hold themselves to high moral standards and strive 
              to be the best men they can in order to build a better world for tomorrow. 
              Triangle&apos;s Code of Ethics reflects our fraternities beliefs and values.
            </p>
            <p className="text-gray-700 text-xl mt-2">
              As a member of Triangle, I recognize my obligation to: <br />
              1. Observe the precepts of the Fraternity as set forth in the Ritual;<br />
              2. Accept cheerfully my full share of any task, however menial, involved in maintaining a chapter home;<br />
              3. Preserve and promote the chosen ideals of my Fraternity;<br />
              4. Pay all personal bills promptly, and always live within my means;<br />
              5. Help create in my chapter home an environment in which enduring friendships may be formed;<br />
              6. Maintain a creditable scholastic record;<br />
              7. Promote the welfare of my profession;<br />
              8. Maintain my self-respect by proper conduct at all times;<br />
              9. Uphold faithfully the traditions and program of my Alma Mater;<br />
              10. Pay the price of success in honest effort.<br />
            </p>
          </div>
          <div className="flex-1">
            <img
              src="../images/founders.jpg"
              alt="Founders"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </motion.div>

        {/* Chapter – Right-aligned layout */}
        <motion.div {...fadeInUp} className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="flex-1 text-left">
            <h2 className="text-2xl font-semibold text-[#990033]">The Wisconsin Chapter</h2>
            <p className="text-gray-700 text-xl mt-2">
              The Wisconsin Chapter was founded in 1913. We currently own two houses on North Breese Terrace, 
              located right by Camp Randall Stadium and by the College of Engineering. Since its inception, the
              Wisconsin Chapter has worked to become leaders and foster positive impact within the UW Madison community.
              We actively collaborate with our alumni, Triangle National HQ, the Greek Community, and The College of Engineering
              to ensure our members receive the most out of their college and Triangle experience.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="../images/social.jpg"
              alt="Social Event"
              className="w-full h-[300px] object-cover rounded-lg shadow-md"
            />
          </div>
        </motion.div>

      </main>
    </>
  )
}
