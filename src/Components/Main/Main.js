import "../Main/Main.css"
import ProductContainer from "../ProductContainer/ProductContainer"

const Main = ({addProduct}) => {
  return (
    <ProductContainer addProduct={addProduct} />
  )
}

export default Main