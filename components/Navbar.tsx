'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        // Scrolling down
        setShow(false)
      } else {
        // Scrolling up
        setShow(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      } bg-[#7f0000] text-white shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Triangle Fraternity</h1>
        <div className="flex flex-wrap justify-center sm:justify-end space-x-4">
          <Link href="/" className="transition-opacity duration-300 hover:opacity-60">
            Home
          </Link>
          <Link href="/about" className="transition-opacity duration-300 hover:opacity-60">
            About
          </Link>
          <Link href="/events" className="transition-opacity duration-300 hover:opacity-60">
            Events
          </Link>
          <Link href="/contact" className="transition-opacity duration-300 hover:opacity-60">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
