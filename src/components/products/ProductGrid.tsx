"use client"

import { Product } from '../../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
      {products.map((product) => (
        <ProductCard key={product.sync_product.id}  product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;

