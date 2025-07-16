import products from '@/data/all_product';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

type Product = {
  id: number;
  name: string;
  category: string;
  image: StaticImageData | string;
  new_price: number;
  old_price: number;
};

type Props = {
  params: { id: string };
};

export const revalidate = 10;

export async function generateStaticParams() {
  return products.map((product: Product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetail({ params }: Props) {
  const { id } = params;
  const product = products.find((p: Product) => p.id.toString() === id);

  if (!product) {
    return <div className="p-8 text-lg text-center">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl w-full">
        <h1 className="text-3xl text-black font-bold mb-4 text-center">{product.name}</h1>

        <div className="flex justify-center mb-4">
          <img
            src={`/${product.image}`}
            alt={product.name}
            className="max-w-full h-auto w-[300px] rounded-lg object-cover"
          />
        </div>

        <div className="text-center">
          <p className="text-black text-lg mb-2">Category: {product.category}</p>
          <p className="text-xl font-bold text-green-600">₹ {product.new_price}</p>
          <p className="text-sm line-through text-gray-500 mb-4">₹ {product.old_price}</p>
          <p className="text-gray-700 mb-6">This is a great product. Grab yours now!</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/products" className="w-full sm:w-auto">
            <button className="w-full sm:w-40 bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-2xl">
              Cancel
            </button>
          </Link>

          <button className="w-full sm:w-40 bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-2xl">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
