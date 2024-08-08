import { product } from "@/lib/models/ProductModel";
import Link from "next/link";
import Image from "next/image";

type props = {
  product: product;
};

export default function ProductCard({ product }: props) {
  const { image, slug, name, brand, price } = product;

  return (
    <div className="card bg-secondary-content mb-4 rounded-lg shadow-lg">
      <figure className="relative">
        <Link href={`/products/${slug}`}>
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="w-80 h-64 mt-2 rounded transition duration-600  hover:scale-105"
          />
          <figcaption className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 rounded p-2">
            {name}
          </figcaption>
        </Link>
      </figure>
      <div className="card-body">
        <Link href={`/products/${slug}`}>
          <h2 className="card-title">{name}</h2>
        </Link>
        <p>{brand}</p>
        <div className="card-actions">
          <span className="text-xl">€ {price}</span>
        </div>
      </div>
    </div>
  );
}
