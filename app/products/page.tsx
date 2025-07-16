// pages/products/index.js
import Link from 'next/link';
import products from '@/data/all_product';
import { StaticImageData } from 'next/image';

type Product = {
  id: number;
  name: string;
  category: string;
  image: StaticImageData|string;
  new_price: number;
  old_price: number;
};

export default function ProductList() {
  return (
    <div className="px-10  bg-white text-black">
      {/* <h1 className="text-2xl font-bold mb-6 items-center">Product Listing</h1> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((product: Product) => (
          <div key={product.id} className="border border-transparent p-4 rounded shadow">
            {typeof product.image === 'string' ? (
                <div>
                    <Link href={`/products/${product.id}`}>
              <img src={product.image} alt={product.name} className="w-fit object-cover hover:scale-102 rounded-2xl" />
              </Link>
              </div>
            ) : (
              // @ts-ignore: Next.js Image expects StaticImageData
              <img src={product.image.src} alt={product.name} className="w-fit object-cover hover:scale-105" />
            )}
            <h2 className="text-lg font-semibold text-blue-500">{product.name}</h2>
            <p className="text-md text-gray-600">{product.category}</p>
            <p className="font-bold text-2xl">₹ {product.new_price}</p>
            <p className="text-sm line-through text-gray-400">₹ {product.old_price}</p>
            {/* <Link href={`/products/${product.id}`} className="text-blue-500 mt-2 block">View Details</Link> */}
          </div>
        ))}
        </div>
      </div>
    
  );
}
