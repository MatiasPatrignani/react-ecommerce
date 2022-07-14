import CartProduct from "../CartProduct/CartProduct"


const ListItem = ({product, RemoveItem, myCart, setItems}) => {
  return (
    <li className="list-group-item"><CartProduct product={product} RemoveItem={RemoveItem} myCart={myCart} setItems={setItems}/></li>
  )
}

export default ListItem