"use client";
import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { client, urlFor } from "../../../lib/client";
import Product from "../../../components/Product";

const ProductDetailsClient = ({ product, products }) => {
  // const { slug } = params;
  // const { product, products } = await fetchProductBySlug(slug);
  // const [product, setProduct] = useState(null);
  // const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { product, products } = await fetchProductBySlug(slug);
  //     setProduct(product);
  //     setProducts(products);
  //   };

  //   fetchData();
  // }, [slug]);

  if (!product) {
    return <div>Product not found</div>;
  }
  const { image, name, details, price } = product;
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index]).url()}
              alt=""
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                src={urlFor(item).url()}
                alt=""
                key={i}
                onMouseDownCapture={() => setIndex(i)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details:</h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus">
                <AiOutlineMinus />
              </span>
              <span className="num">0</span>
              <span className="plus">
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button className="add-to-cart">Add to cart</button>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item, index) => (
              <Product key={index} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// export async function generateStaticParams() {
//   const products = await fetchProducts();
//   return products.map((product) => ({
//     slug: product.slug.current,
//   }));
// }

export default ProductDetailsClient;
