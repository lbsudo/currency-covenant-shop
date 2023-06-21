const API_KEY = process.env.PRINTFUL_API_KEY;
const API_URL = 'https://api.printful.com';
import { Product } from '../../types';
import { GET } from "../api/allProducts/route";


async function getStoreInfo() {
  const url = `${API_URL}/stores/${10183355}`;

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

  return res.json();
}

async function getBasics( limit = 40) {
  const url = `${API_URL}/store/products?limit=${limit}`;

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

  return res.json();
}


export default async function Page() {
  const ProductData = await GET();
  const StoreData = await getStoreInfo();
  const BasicData = await getBasics();

  return (
    <>
      <div >
      <pre className=''>{JSON.stringify(ProductData, null, 2)}</pre>
      <pre className=''>{JSON.stringify(StoreData, null, 2)}</pre>
      <pre className=''>{JSON.stringify(BasicData, null, 2)}</pre>
      </div>
    </>
  );
}
