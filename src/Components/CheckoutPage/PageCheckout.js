import React, { useState, useContext } from "react";
import Payment from "../Payment/Payment";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Shipping from "../Shipping/Shipping";
import { useNavigate } from "react-router-dom";
import { ShoppingContext } from "../../context/ShoppingProvider";

const PageCheckout = () => {
  const [validated, setValidated] = useState(false);
  const { paymentInfo, setPaymentInfo } = useContext(ShoppingContext);

  const navigate = useNavigate();
  const ShowHomePage = useNavigate();
  const handleClickHomePage = () => {
    ShowHomePage("/");
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log(form);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("no validated");
      // setPaymentInfo()
    } else {
      navigate("/payment");
    }
    setValidated(true);
  };

  const handleChange = (e) => {
    setPaymentInfo((paymentInfo) => {
      return { ...paymentInfo, [e.target.name]: e.target.value };
    });
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue={paymentInfo?.firstName}
            onChange={handleChange}
            name="firstName"
          />
          <Form.Control.Feedback type="invalid">
              Please choose a first name.
            </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue={paymentInfo?.lastName}
            onChange={handleChange}
            name="lastName"
          />
          <Form.Control.Feedback type="invalid">
              Please choose a last name.
            </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
              onChange={handleChange}
              defaultValue={paymentInfo?.userName}
              name="userName"
            />
            <Form.Control.Feedback type="invalid">
              Please choose a email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Country"
            required
            onChange={handleChange}
            name="Counrty"
            defaultValue={paymentInfo?.country}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid country.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            required
            onChange={handleChange}
            name="city"
            defaultValue={paymentInfo?.city}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="State"
            required
            onChange={handleChange}
            name="state"
            defaultValue={paymentInfo?.state}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Postal Code"
            required
            onChange={handleChange}
            name="zip"
            defaultValue={paymentInfo?.zip}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
        <Shipping />
      </Form.Group>
      <div className="d-flex justify-content-around mt-4 mb-5">
        <Button variant="dark" onClick={handleClickHomePage}>
          BACK
        </Button>
        <Button type="submit">CONTINUE</Button>
      </div>
    </Form>
  );
};

export default PageCheckout;
