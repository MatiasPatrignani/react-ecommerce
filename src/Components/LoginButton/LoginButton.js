import "../LoginButton/LoginButton.css";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import { ShoppingContext } from "../../context/ShoppingProvider";
import toast, { Toaster } from "react-hot-toast";

const LoginButton = () => {
  const [lgShow, setLgShow] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(ShoppingContext);

  const handleClick = () => {
    if (isLoggedIn) {
      return;
    }
    setLgShow(true);
  };

  const handleLogout = () => {
    toast("Don't take too long to come back!!", {
      duration: 4000,
      position: "bottom-left",

      // Styling
      style: {},
      className: "",

      // Custom Icon
      icon: "👋",

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },

      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });
    setIsLoggedIn(false);
  };

  return (
    <>
      {!isLoggedIn ? (
        <Button variant="primary" onClick={handleClick} className="me-2">
          {" "}
          Login
        </Button>
      ) : (
        <Button variant="danger" onClick={handleLogout} className="me-2">
          Logout
        </Button>
      )}
      <Modal
        size="sm-down"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <div className="container_img">
          <Modal.Body>
            <LoginModal
              style={{ marginBottom: "3rem" }}
              setLgShow={setLgShow}
            />
          </Modal.Body>
          <div className="position-absolute bottom-0 start-50 translate-middle-x w-100">
            <Modal.Footer style={{ border: "none" }}>
              <Button variant="secondary" onClick={() => setLgShow(false)}>
                Close
              </Button>
              <Button variant="primary">Create Account</Button>
            </Modal.Footer>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoginButton;
