import  Product  from "../../Data/Product.json"
import ProductCart from "../ProductCart/ProductCart"

const ProductContainer = ( {addProduct, addWishList} ) => {
  return (
    <div className="container my-3">
    <div className="row row-cols-3 g-3 m-0 ">
        { Product.map(product => (
            <ProductCart addProduct={addProduct} product={product} key={product.id} addWishList={addWishList} />
        ))}
      </div>
    </div>
  )
}

export default ProductContainer