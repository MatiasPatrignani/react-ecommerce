import "../CartProduct/CartProduct.css"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Counter from "../Counter/Counter";

const CartProduct = ({ product, RemoveItem, myCart, setItems }) => {
  const RemoveProduct = () => {
    RemoveItem(product);
  };

  return (
    <>
      <Card className="ContainterCard d-flex flex-row">
        <Card.Img className="imgCard"style={{ width: "16rem"}} src={product.url} />
        <Card.Body className="">
          <Card.Title variant="d-flex">{product.title}</Card.Title>
          <Card.Text>
            Price: {product.price * product.quantity} €<br />
          </Card.Text>
          <div className="d-flex justify-content-around">
            <Counter product={product} myCart={myCart} setItems={setItems} />
          </div>
            <Button variant="danger m-3" onClick={RemoveProduct}>
              Remove
            </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CartProduct;
