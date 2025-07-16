export function Footer() {
  return (
    <footer className="bg-gray-200 text-center py-5">
      <div className="container mx-auto px-4">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} TechStore. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center gap-4 text-gray-500 text-sm">
          <a href="#" className="hover:text-blue-600">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
