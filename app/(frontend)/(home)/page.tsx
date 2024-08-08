import ProductCard from "@/components/product/ProductCard";
import data from "@/lib/data/data";

export default function Home() {
  return (
    <div className="m-8">
      <h2 className="text-2xl m-6">Latest Products</h2>
      <div className="grid grid-cols-4 gap-4">
        {data.products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
