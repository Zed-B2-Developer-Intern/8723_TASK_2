import Link from "next/link"
import Hero from "./Hero"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-black">
      {/* Hero Section */}
      <Hero />
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to ClothingStore</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover the latest clothing items and accessories with our curated collection of high-quality items at
          competitive prices.
        </p>
        <Link href="/products">
          <p className="inline-block bg-blue-600 text-white px-6 py-3 text-lg rounded-3xl hover:scale-105 duration-300 transition">
            Shop Now →
          </p>
        </Link>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Feature 1 */}
          <div className="border border-transparent rounded-lg p-6 shadow-2xl hover:shadow-md transition duration-300">
            <div className="mb-4 text-3xl">👕</div>
            <h3 className="text-xl font-semibold mb-2">Quality Clothing</h3>
            <p className="text-gray-600">
              Carefully curated selection of premium clothing items and accessories.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="border border-transparent rounded-lg p-6 shadow-2xl hover:shadow-md transition duration-300">
            <div className="mb-4 text-3xl">🚚</div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Quick and reliable shipping to get your clothing items to you fast.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="border border-transparent rounded-lg p-6 shadow-2xl hover:shadow-md transition duration-300">
            <div className="mb-4 text-3xl">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Secure Shopping</h3>
            <p className="text-gray-600">
              Safe and secure checkout process with buyer protection.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}