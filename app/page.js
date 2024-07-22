import React from "react";
import { fetchProductsAndBannerData } from "../lib/api.js";
import {
  Product,
  Footer,
  FooterBanner,
  HeroBanner,
  Navbar,
  Cart,
  Layout,
} from "@/components";

const page = async () => {
  const { products, bannerData } = await fetchProductsAndBannerData();

  return (
    <>
      <HeroBanner heroBanner={bannerData.length > 0 ? bannerData[0] : null} />
      <div className="products-heading">
        <h2>Best Selling Product</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export default page;
