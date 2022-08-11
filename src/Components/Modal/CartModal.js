import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import CartList from "../CartList/CartList";
import CounterValue from "../CounterValue/CounterValue";
import LoginPage from "../LoginPage/LoginPage";
import { useNavigate } from "react-router-dom";

const CartModal = ({ myCart, RemoveItem, setItems }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showLoginPage = useNavigate();


  return (
    <>
      <Button variant="Light" onClick={handleShow}>
        🛒
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>My Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CartList
            myCart={myCart}
            RemoveItem={RemoveItem}
            setItems={setItems}
          ></CartList>
        </Modal.Body>
        <Modal.Footer>
          <CounterValue myCart={myCart} />
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => showLoginPage("/checkout") }>
            Buy Now!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartModal;
