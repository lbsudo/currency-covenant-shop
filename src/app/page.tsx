import Hero from "@/components/home/Hero";
import ProductGrid from "../components/products/ProductGrid";
import { GET } from "../app/api/allProducts/route";

export default async function Home() {

  const ProductData = await GET();

  return (
    <>
      <main>
        <Hero />
        <div className="pt-12 pb-12">
          <h1 className="flex justify-center text-3xl mb-9 font-bold">New Arrivals</h1>
          <ProductGrid products={ProductData} />
        </div>
      </main>
    </>
  );
};
