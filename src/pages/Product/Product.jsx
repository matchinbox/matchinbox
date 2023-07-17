import React from "react";

import styles from "./Product.module.css";
import NavMenu from "../../layouts/NavMenu/NavMenu";
import Navbar from "../../components/Navbar/Navbar";
import ProductVideo from "../../components/Product/ProductVideo";

const Product = () => {
  return (
    <div className={styles.ProductPageParent}>
      <Navbar />
      <ProductVideo />
    </div>
  );
};

export default Product;
