"use client";
import events from "@/data/events.json";
import { useState } from "react";
import * as motion from "motion/react-client";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 }
};

const faqs = [
  {
    question: "Who can join Triangle?",
    answer: `Any undergraduate student intending to study fields in science, architecture, or engineering. 
            If you're still not sure that your major applies, shoot us an email/text!`,
  },
  {
    question: "Does Triangle Haze?",
    answer:
      `Absolutely not. We abhor hazing of any sort and do not tolerate it. Every semester we sign an Anti-Hazing 
      Certificate that indicates we are in compliance with Triangle Fraternity's Policy Statment on Hazing.`,
  },
  {
    question: "Is Triangle a social or a professional fraternity?",
    answer:
      `Since we are part of IFC (Inter-Fraternity Council) we are classified as a social fraternity despite our 
      technical background. We do, however, have a professional component of our fraternity and are also associated 
      with the College of Engineering (CoE).`,
  },
  {
    question: "How much are Dues?",
    answer: `That can vary depending on the year and the national policy but for the most current information please 
    shoot us an email/text. If you are concerned about the price of dues our Treasurer can work with you to implement 
    a payment policy that works for you.`
  },
  {
    question: "What are Triangle's greek letters?",
    answer: `We are one of the few Greek organizations that do not have greek letters, we are simply Triangle.`
  },
  {
    question: "Who can live in the house?",
    answer: `All brothers have the option to live in the house. There is no requirement to live in house but we pride ourselves on low rent.`
  },
];

const offerings = [
  {
    title: "Succeed Academically",
    description:
      `Triangle is serious about scholarship. Preparing yourself for your future 
      career and achieving academic success are your primary goals at the University of Wisconsin-Madison`,
    icon: "📚",
    image: "/images/professional.jpg",
  },
  {
    title: "Learn to Become a Leader",
    description:
      `Triangle provides an environment that fosters personal growth and 
      professional success and provides the necessary skills to become an effictive leader.`,
    icon: "🔰",
    image: "/images/professional.jpg",
  },
  {
    title: "Utilize Local + National Job Connections",
    description:
      `Triangle's 34 nationwide chapters, 25,000 alumni and more than 100 years of history 
      contribute to our rich traditions. Our national list serves and message boards allow our 
      alumni to share openings at their companies, in some cases before the job boards are made 
      known to the general public.`,
    icon: "💼",
    image: "/images/professional.jpg",
  },
  {
    title: "Socalize",
    description:
      `Social and athletic participation provides an enhancement to your busy and challenging 
      college curriculum. Triangle is invited and has access to many events, including Homecoming, 
      Greek Week/All Campus Party, formals, and more.`,
    icon: "🎉",
    image: "/images/pig.jpg",
  },
  {
    title: "Develop Life Long Friends",
    description:
      `Some of your brothers will be your closest friends because you shared experiences, 
      worked together toward common goals and celebrated achievements during your time in school`,
    icon: "⭐",
    image: "/images/friends.jpg",
  },
];


export default function EventsPage() {
  const [openStates, setOpenStates] = useState(faqs.map(() => false));

  const toggle = (index: number) => {
    setOpenStates((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl max-w-3xl mx-auto font-bold text-[#7f0000] pt-5">Upcoming Events</h1>
      <p className="max-w-3xl mx-auto text-gray-700 mt-4">Check out our upcoming events!</p>

      <div className="max-w-3xl mx-auto mt-6 space-y-6">
        {events.map((event, index) => (
          <div key={index} className="p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#7f0000]">{event.title}</h2>
            <p className="text-gray-600 mt-1">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="text-gray-600">
              <strong>Time:</strong> {event.time}
            </p>
            <p className="text-gray-600">
              <strong>Location:</strong> {event.location}
            </p>
            <p className="text-gray-700 mt-2">{event.description}</p>
          </div>
        ))}
      </div>

      {/*What We Offer Section*/}
      <section>
      <h2 className="text-3xl font-bold text-[#7f0000] mb-10 mt-20 text-center">What We Offer</h2>
      <div className="space-y-12">
        {offerings.map((item, index) => (
          <motion.div key={-index} {...fadeInUp}>
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 text-center md:text-left space-y-2">
              <h3 className="text-2xl font-semibold flex items-center justify-center md:justify-start">
                <span className="text-3xl mr-2">{item.icon}</span> {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-100 rounded-xl h-60 w-full shadow-inner flex items-center justify-center">
                <img src={item.image} className="w-full h-60 rounded-lg object-cover shadow-md"/>
              </div>
            </div>
            
          </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* FAQ Section */}
    <section>
        <h2 className="text-3xl font-bold text-[#7f0000] mb-10 text-center mt-20">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openStates[index];
            return (
              <div
                key={index}
                className="border rounded-lg bg-gray-50 p-4 shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex gap-2 items-center text-left text-lg font-semibold text-[#7f0000] focus:outline-none"
                >
                  <span
                    className={`duration-300 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  >
                    ▶
                  </span>
                  <span>{faq.question}</span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-2"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
