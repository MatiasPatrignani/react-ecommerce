import "../Main/Main.css"
import ProductContainer from "../ProductContainer/ProductContainer"

const Main = ({addProduct, addWishList}) => {
  return (
    <ProductContainer addProduct={addProduct} addWishList={addWishList}/>
  )
}

export default Main