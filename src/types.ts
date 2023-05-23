import { Url } from "next/dist/shared/lib/router/router";

export interface SyncProduct {
  id: number;
  external_id: string;
  name: string;
  synced: number;
  thumbnail_url: string;
  is_ignored: boolean;
}

export interface SyncVariant {
  id: number;
  external_id: string;
  sync_product_id: number;
  name: string;
  synced: boolean;
  variant_id: number;
  main_category_id: number;
  warehouse_product_variantid: null | string;
  retail_price: string;
  sku: string;
  currency: string;
  product: {
    variant_id: number;
    product_id: number;
    image: string;
    name: string;
  };
  files: {
    id: number;
    type: string;
    hash: string;
    url: null,
    filename: string;
    mimeType: string;
    size: number;
    width: number;
    height: number;
    dpi: number;
    status: string;
    created: number;
  }[];
  options: {
    id: string;
    value: string;
  }[];
}


export interface Product {
  id: number;
  external_id: number;
  name: string;
  variants: number;
  synced: number;
  thumbnail_url: Url; 
  is_ignored: boolean;
  sync_product: SyncProduct;
  sync_variants: SyncVariant[];
}


export interface Category {
  id: number;
  parent_id: number;
  image_url: string;
  catalog_position: number;
  size: string;
  title: string;
}


export interface StoreInfo {
  id: number;
  name: string;
  type: string;
}

