import { client } from "../lib/client";

export const fetchProductsAndBannerData = async () => {
  try {
    const productQuery = '*[_type == "product"]';
    const products = await client.fetch(productQuery);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return { products, bannerData };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { products: [], bannerData: [] };
  }
};

export const fetchProducts = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  return products;
};

export const fetchProductBySlug = async (slug) => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return { product, products };
};
