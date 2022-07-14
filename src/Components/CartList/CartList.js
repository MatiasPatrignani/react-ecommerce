import ListItem from "../ListItem/ListItem"

const CartList = ({myCart, RemoveItem, setItems}) => {
  return (
    <ul className='list-group'>
        {
            myCart.map((product) => (
            <ListItem product={product} key={product.id} RemoveItem={RemoveItem} myCart={myCart} setItems={setItems} />))
        }
    </ul>
  )
}

export default CartList