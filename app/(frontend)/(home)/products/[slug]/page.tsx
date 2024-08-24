import productService from "@/lib/services/productService";
import Link from "next/link";
import Image from "next/image";
import Rating from "@/components/product/Rating";
import AddToCart from "@/components/product/AddToCart";

type props = {
  params: { slug: string };
};

export default async function productDetailsPage({ params }: props) {
  const product = await productService.getBySlug(params.slug);

  if (!product) {
    return <div>Product not Found</div>;
  }
  const {
    image,
    name,
    rating,
    numReviews,
    brand,
    description,
    price,
    countInStock,
  } = product;
  return (
    <div className="m-4">
      <Link href="/" className="text-gray-600 font-bold">
        back to products
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-1 md:col-span-2">
          <Image
            src={image}
            alt={name}
            width={640}
            height={640}
            className="rounded-lg shadow-lg text-rose-400 mt-3"
          />
        </div>
        <div className="col-span-1 md:col-span-2 p-4">
          <ul>
            <li>
              <h1 className="text-xl font-bold text-gray-800">{name}</h1>
            </li>
            <li>
              <Rating rating={rating} numReviews={numReviews} />
            </li>
            <li className="text-gray-600">{brand}</li>
            <li>
              <div className="divider"></div>
            </li>
            <li>
              <span className="font-semibold"> Description :</span>
              <p className="text-gray-700">{description}</p>
            </li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-1">
          <div className="card bg-base-100 rounded-lg shadow-lg p-3">
            <div className="card-body p-4">
              <div className="flex justify-between mb-2">
                <h1>Price</h1>
                <h1>€{price}</h1>
              </div>
              <div className="flex justify-between">
                <h1>Status</h1>
                <h1
                  className={
                    countInStock > 0 ? "text-green-600" : "text-rose-600"
                  }
                >
                  {countInStock > 0 ? "In Stock" : "Unavailable"}
                </h1>
              </div>
              {countInStock !== 0 && (
                <div className="card-actions">
                  <AddToCart
                    item={{ ...product, qty: 0, color: "", size: "" }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
