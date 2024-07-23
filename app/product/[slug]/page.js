import React from "react";
import { fetchProductBySlug, fetchProducts } from "../../../lib/api";
import ProductDetailsClient from "./ProductDetailsClient";

const ProductDetailsPage = async ({ params }) => {
  const { slug } = params;
  const { product, products } = await fetchProductBySlug(slug);

  return <ProductDetailsClient product={product} products={products} />;
};

export async function generateStaticParams() {
  const products = await fetchProducts();
  return products.map((product) => ({
    slug: product.slug.current,
  }));
}

export default ProductDetailsPage;
