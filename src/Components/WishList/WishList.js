import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddButton from '../AddButton/AddButton';
import SetWishList from '../SetWishList/SetWishList';
import '../WishList/WishList.css'




const WishList = ({myList, addWishList, setProduct, RemoveProduct, addProduct}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <Button variant="light m-3" onClick={handleShow}>
          Wish List 🧡
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>My Wish List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <SetWishList
            myList={myList}
            addWishList={addWishList}
            setProduct={setProduct}
            RemoveProduct={RemoveProduct}
            addProduct={addProduct}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WishList