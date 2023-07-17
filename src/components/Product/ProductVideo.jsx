import React from "react";
import "../Front/front.css";
import "./productVide.css";

const ProductVideo = () => {
  return (
    <div className="frontContainer productVideo">
      <video className="video" src="/videos/product.MP4" controls />
    </div>
  );
};

export default ProductVideo;
