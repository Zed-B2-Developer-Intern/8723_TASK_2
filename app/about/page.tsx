import Hero from "@/components/Hero"

export default function AboutPage() {
  return (
    <div className="bg-gray-100 sm:h-screen">
      <Hero />
    <div className="px-4 py-16 flex-col items-center justify-center">
      <h1 className="text-3xl text-black font-bold mb-6 text-center p-5">About Us</h1>
      <p className="text-gray-700 mb-4 text-lg px-10">
        Welcome to <span className="font-semibold text-blue-600">ClothingStore</span>, your one-stop destination for trendy,
        comfortable, and affordable fashion. We are committed to providing high-quality clothing that blends style and comfort,
        perfect for any occasion.
      </p>
      <p className="text-gray-700 mb-4 text-lg px-10">
        Our collection features a variety of categories including casual wear, formal outfits, and seasonal styles for men, women,
        and kids. We source our materials responsibly and ensure that our production process supports ethical fashion.
      </p>
      <p className="text-gray-700 text-lg px-10">
        Thank you for choosing ClothingStore. We're here to help you look and feel your best.
      </p>
      </div>
    </div>
  )
}
