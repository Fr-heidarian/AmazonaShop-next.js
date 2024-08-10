import productService from "@/lib/services/productService";

type props = {
  params: { slug: string };
};

export default async function productDetailsPage({ params }: props) {
  const product = await productService.getBySlug(params.slug);

  if (!product) {
    return <div>Product not Found</div>;
  }

  return <div>{product.name}</div>;
}
