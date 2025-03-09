import Image from "next/image";
import Link from "next/link";
import events from "@/data/events.json";
import officers from "@/data/officers.json"

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-center bg-gray-700 text-white">
        <Image 
          src="/images/hero.jpg" 
          alt="Fraternity Group" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-70"
        />
        <div className="relative flex items-center justify-center py-8 px-8 rounded-3xl bg-center bg-[#7f0000]/25">
          <div className="relative z-10">
            <h1 className="text-5xl font-bold drop-shadow-md">Welcome to Triangle Fraternity</h1>
            <p className="mt-4 text-xl">Brotherhood, Leadership, and Excellence in STEM</p>
            <Link href="/about">
              <button className="mt-6 px-6 py-3 bg-[#7f0000] hover:bg-[#5c0000] text-white font-semibold rounded-lg">
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
          <button className="mt-4 px-6 py-3 bg-[#7f0000] hover:bg-[#5c0000] text-white font-semibold rounded-lg">
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
          <button className="mt-4 px-6 py-3 bg-[#7f0000] hover:bg-[#5c0000] text-white font-semibold rounded-lg">
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
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
          </section>
    </main>
  );
}
