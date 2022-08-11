import React from "react";
import CartWishItems from "../CartWishItems/CartWishItems";

const ListProductsWishList = ({
  addWishList,
  product,
  RemoveProduct,
  addProduct,
}) => {
  return (
    <li className="list-group-item">
      <CartWishItems
        product={product}
        key={product.id}
        addWishList={addWishList}
        RemoveProduct={RemoveProduct}
        addProduct={addProduct}
      />
    </li>
  );
};

export default ListProductsWishList;
