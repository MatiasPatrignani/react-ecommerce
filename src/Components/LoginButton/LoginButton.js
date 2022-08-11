import "../LoginButton/LoginButton.css";
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
          size="sm-down"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
      >
      <div className="container_img">
        {/* <Modal.Header style={{border:'none'}} closeButton /> */}
        <Modal.Body>
        <Login style={{marginBottom:'3rem'}} setLgShow={setLgShow} />
        </Modal.Body >
        <div className="position-absolute bottom-0 start-50 translate-middle-x w-100">
        <Modal.Footer style={{border:'none'}}>
          <Button variant="secondary" onClick={() => setLgShow(false)}>
            Close
          </Button>
          <Button variant="primary">Create Account</Button>
        </Modal.Footer>
        </div>
      </div>
      </Modal>
    </>
  )
}

export default LoginButton