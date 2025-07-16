"use client"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-2xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        
        <Link href="/" className="flex justify-center items-center gap-2" >
        <img src="https://img.atom.com/story_images/visual_images/1640947212-stylegrab.png?class=listing" alt="Logo" className="w-40" />
          {/* <p className="text-xl sm:text-2xl font-bold text-blue-600">Style Grab</p> */}
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="sm:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation */}
        <nav className="hidden sm:flex space-x-6">
          <Link href="/">
            <p className="text-gray-700 hover:text-blue-600 font-semibold">Home</p>
          </Link>
          <Link href="/products">
            <p className="text-gray-700 hover:text-blue-600 font-semibold">Products</p>
          </Link>
          <Link href="/about">
            <p className="text-gray-700 hover:text-blue-600 font-semibold">About</p>
          </Link>
          <Link href="/contact">
            <p className="text-gray-700 hover:text-blue-600 font-semibold">Contact</p>
          </Link>
        </nav>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2">
          <Link href="/">
            <p className="block text-gray-700 hover:text-blue-600 font-semibold">🏠Home</p>
          </Link>
          <Link href="/products">
            <p className="block text-gray-700 hover:text-blue-600 font-semibold">👗Products</p>
          </Link>
          <Link href="/about">
            <p className="block text-gray-700 hover:text-blue-600 font-semibold">👉About</p>
          </Link>
          <Link href="/contact">
            <p className="block text-gray-700 hover:text-blue-600 font-semibold">📞Contact</p>
          </Link>
        </div>
      )}
    </header>
  )
}
