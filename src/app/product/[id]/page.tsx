import ProductPage from "@/components/products/ProductPage";
import { Product } from "@/types";

export default async function ProdPage({ params }: { params: { id: string } }) {

  const API_KEY = process.env.PRINTFUL_API_KEY;
  const API_URL = 'https://api.printful.com';
  const url = `${API_URL}/store/products/${params.id}`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  const product: Product = data.result;
  console.log(product);

  return <>
      <ProductPage product={product}/>
  </>;
}





