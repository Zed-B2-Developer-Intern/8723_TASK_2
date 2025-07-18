"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <Image
        src="/404.jpg" // 👉 Replace with your image in public folder (e.g., /public/404.svg)
        alt="Page not found"
        width={700}
        height={200}
        className="mb-6 w-fit h-screen/2 rounded-2xl"
        priority
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link href="/">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Go to Home
        </button>
      </Link>
    </div>
  );
}
