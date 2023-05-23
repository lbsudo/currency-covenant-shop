const API_KEY = process.env.PRINTFUL_API_KEY;
const API_URL = 'https://api.printful.com';
import { Product } from '../../types';


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

async function getProducts() {
  const url = `${API_URL}/store/products`;

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
  const products: Product[] = data.result;
  const productPromises = products.map((product: any) =>
    fetch(`${API_URL}/store/products/${product.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
  );
  const productResponses = await Promise.all(productPromises);
  const productData = await Promise.all(
    productResponses.map((response) => response.json())
  );
  const productDetails = productData.map((response) => response.result);
  return productDetails;
}

async function getCategories() {
  const url = `${API_URL}/categories`;

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
  const CategoryData = await getCategories();
  const StoreData = await getStoreInfo();
  const BasicData = await getBasics();
  const ProductData = await getProducts();

  return (
    <>
      <div >
      <pre className=''>{JSON.stringify(ProductData, null, 2)}</pre>
      <pre className=''>{JSON.stringify(CategoryData, null, 2)}</pre>
      <pre className=''>{JSON.stringify(StoreData, null, 2)}</pre>
      <pre className=''>{JSON.stringify(BasicData, null, 2)}</pre>
      </div>
    </>
  );
}
