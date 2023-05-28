"use client"
import { SyncVariant } from '../../types';
import Image from 'next/image';
import { useState } from 'react';
import { useTheme } from 'next-themes';


export default function ProductPage({ product }: any) {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const [quantity, setQuantity] = useState(1);

  const [selectedVariant, setSelectedVariant] = useState(product.sync_variants[0]);


  const handleVariantChange = (variant: SyncVariant) => {
    setSelectedVariant(variant);
    setQuantity(1);
  };

  return (
    <>
      <div className="flex flex-col items-center xl:flex-row xl:flex-wrap xl:justify-center">
        <div className="xl:w-1/2 xl:h-auto p-4">
          <Image src={product.sync_product.thumbnail_url} alt={product.sync_product.name} width={1000} height={1000} className="w-full h-auto mb-3" />
        </div>
        <div className="w-1/2 p-4">
          <h1 className="text-lg xl:text-3xl font-bold">{product.sync_product.name}</h1>
          <p className="text-2xl font-medium">${selectedVariant.retail_price} {selectedVariant.currency}</p>
          {product.sync_variants.length > 1 &&
            <div className="relative mt-2">
              <div className="flex justify-between items-center">
                <p className="font-bold text-lg mr-2">SIZES:</p>
              </div>
              <div className="absolute top-full left-0 bg-transparent px-1 flex items-center">
                {product.sync_variants.map((variant: any) => (
                  <button
                    key={variant.id}
                    className={`${isDarkMode ? 'text-primary' : 'text-dark-primary'}left-0 font-bold py-0 px-0 mr-2`}                       
                    onClick={() => handleVariantChange(variant)}
                  >
                    {variant.id === selectedVariant.id
                      ? `[${variant.name.match(/\b(?:S\/M|L\/XL|S|M|L|XL|2XL|3XL|4XL|\d+(?:\.\d+)?)(?=\s|$)\b/) }]`
                      : variant.name.match(/\b(?:S\/M|L\/XL|S|M|L|XL|2XL|3XL|4XL|\d+(?:\.\d+)?)(?=\s|$)\b/)}
                  </button>
                ))}
              </div>
            </div>
          }
          <div className='mt-14'>
            <label className="font-bold text-lg pt-3 mt-2 mr-2">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-16 bg-transparent text-accent border-b border-accent focus:outline-none"
            />
          </div>
          <div className='mt-10 text-xl'>
            <button className="snipcart-add-item"
              data-item-id={product.sync_product.id}
              data-item-name={product.sync_product.name}
              data-item-price={selectedVariant.retail_price.toString()}
              data-item-url={`/products/${product.sync_product.external_id}`}
              data-item-image={product.sync_product.thumbnail_url}
              data-item-quantity={quantity}
              data-item-custom1-name="Size"
              data-item-custom1-type="readonly"
              data-item-custom1-value={selectedVariant.name.match(/\b(?:S\/M|L\/XL|S|M|L|XL|2XL|3XL|4XL|\d+(?:\.\d+)?)(?=\s|$)\b/)}
            >
              Add To Cart
            </button>
          </div>
        </div>

      </div>
    </>
  );
}

