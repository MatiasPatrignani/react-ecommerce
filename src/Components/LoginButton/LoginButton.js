import React from 'react'
import  Button  from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"
import { useState } from "react";
import Login from '../Login/Login';

const LoginButton = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
    <Button variant="primary" onClick={() => setLgShow(true)} className="me-2">
        Login
      </Button>

      <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Login/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setLgShow(false)}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LoginButton