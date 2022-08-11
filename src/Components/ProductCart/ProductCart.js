import AddButton from "../AddButton/AddButton";
import LikeButton from "../LikeButton/LikeButton";
import { nanoid } from 'nanoid'

const ProductCart = ({ product, addProduct, addWishList }) => {

  return (
    <div className="">
      <div className="card" key={product.id}>
        <img
          className="card-img-top rounded"
          src={product.url}
          alt={product.title}
        />
        <div className="card-body ">
          <h5 className="card-title text-justify">{product.title}</h5>
          <p className="card-text">{product.price}€</p>
        <div className="d-flex justify-content-between">
          <AddButton
            productData={product}
            addProduct={addProduct}
            key={nanoid(12)}
          />
          <LikeButton
          addWishList={addWishList}
          productData={product}
          key={nanoid(12)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
