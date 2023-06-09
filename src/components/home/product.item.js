import React from "react";
import { Link } from "react-router-dom";
const ProductItem = ({ urlImg, price, name, id, book, sale }) => (
  <div className="col-sm-4">
    <div className="product-image-wrapper">
      <div className="single-products">
        <div className="productinfo text-center">
          <Link to={"/product/" + id}>
            <img src={urlImg} alt="" />
          </Link>
          <h4 className="name-product">{name}</h4>
          <div className="product-content">
            <Link to={"/product/" + id}>
              <span>
                {new Intl.NumberFormat("de-DE", { currency: "EUR" }).format(
                  price
                )}
                <sup>đ</sup>
              </span>
            </Link>
            <span className="sold">Đã bán {sale}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default ProductItem;
