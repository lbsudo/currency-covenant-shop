import Image from 'next/image';
import { Product } from '../../types';
import { useState } from 'react';
import Link from 'next/link';
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedVariant] = useState(product.sync_variants[0]);

  return (
    <Link href={`/product/${product.sync_product.id}`}

    >
      <div className="bg-primary p-4">
        <Image src={product.sync_product.thumbnail_url} alt={product.sync_product.name} width={350} height={350} className="w-full h-auto mb-3" />
      </div>
      <div className="mt-2">
        <p className="mt-2 text-sm text-center font-bold">{product.sync_product.name}</p>
        <p className="font-medium flex justify-center text-center text-md">${selectedVariant.retail_price} {selectedVariant.currency}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
