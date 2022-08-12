import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AddButton from '../AddButton/AddButton';

const CartWishItems = ( {product, RemoveProduct, addProduct}) => {
  const RemoveItem = () => {
    RemoveProduct(product)
  }
  return (
    <>
      <Card className="ContainterCard d-flex flex-row">
        <Card.Img className="imgCard"style={{ width: "16rem"}} src={product.url} />
        <Card.Body className="">
          <Card.Title variant="d-flex">{product.title}</Card.Title>
          <Card.Text>
            Price: {product.price * product.quantity} €<br />
          </Card.Text>
            <div className='d-flex justify-content-center'>
            <Button variant="danger m-3" onClick={RemoveItem}>
            🗑
            </Button>
            </div>
            <div className='d-flex justify-content-center'>
            <AddButton productData={product} addProduct={addProduct}/>
            </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default CartWishItems