import ProductView from "@/components/ProductView";
import SaleBanner from "@/components/SaleBanner";
import { SanityLive } from "@/sanity/lib/live";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();
  return (
    <div>
      <SaleBanner />
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <ProductView products={products} categories={categories} />
      </div>
      <SanityLive />
    </div>
  );
}
