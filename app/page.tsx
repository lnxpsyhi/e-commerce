import ProductView from "@/components/ProductView";
import SaleBanner from "@/components/SaleBanner";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import CarouselComponent from "@/components/CarouselComponent";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  const images = [
    "/carousel/1.avif",
    "/carousel/2.avif",
    "/carousel/3.avif",
    "/carousel/4.avif",
    "/carousel/5.avif",
    "/carousel/6.avif",
    "/carousel/7.avif",
    "/carousel/8.avif",
    "/carousel/9.avif",
    "/carousel/10.avif",
    "/carousel/11.avif",
  ];
  return (
    <div>
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <SaleBanner />
        <CarouselComponent images={images} />
        <ProductView products={products} categories={categories} />
      </div>
    </div>
  );
}
