import { product } from "@/lib/models/ProductModel";

export default function ProductCard({ product }: { product: product }) {
  return <div>{product.name}</div>;
}
