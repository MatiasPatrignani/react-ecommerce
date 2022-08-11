import React, { useContext, useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ShoppingContext } from "../../context/ShoppingProvider";
import CartProduct from "../CartProduct/CartProduct";
import CounterValue from "../CounterValue/CounterValue";


const Payment = ({RemoveItem, setItems}) => {
  // const location = useLocation();

  const {myCartContext : cart} = useContext(ShoppingContext);

  const handleThankYouPage = useNavigate()

  const [state, setState] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const handleInputFocus = (e) => {
    setState({
      ...state,
      focus: e.target.name,
    });
  };

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="">
      <section className="h-100 h-custom" >
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div
                className="card shopping-cart"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body text-black">
                  <div className="row">
                    <div className="col-lg-6 px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                        Your products
                      </h3>
                      {cart.map((product) => (
                      <CartProduct product={product} RemoveItem={RemoveItem} myCart={cart} setItems={setItems}/>
                      )
                      )}
                      <hr
                        className="mb-4"
                        style={{
                          height: "2px",
                          backgroundColor: "#1266f1",
                          opacity: "1",
                        }}
                      />

                      <div className="d-flex justify-content-between px-x">
                        <p className="fw-bold">Shipping:</p>
                        <p className="fw-bold">0$</p>
                      </div>
                      <div
                        className="d-flex justify-content-between p-2 mb-2"
                        style={{ backgroundColor: "#e1f5fe" }}
                      >

                          <CounterValue myCart={cart} />

                      </div>
                    </div>
                    <div className="col-lg-6 px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                        Payment
                      </h3>
                      <div id="PaymentForm" className="row mb-5">
                        <Cards
                          cvc={state.cvc}
                          expiry={state.expiry}
                          focused={state.focus}
                          name={state.name}
                          number={state.number}
                        />
                      </div>
                      <form className="mb-5">
                        <div className="form-outline mb-5">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            siez="17"
                            minLength="19"
                            maxLength="19"
                            name="number"
                            placeholder="4546 4666 4666 4666"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                          />
                          <label className="form-label" for="typeText">
                            Card Number
                          </label>
                        </div>
                        <div className="form-outline mb-5">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            siez="17"
                            name="name"
                            placeholder="Name on card"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                          />
                          <label className="form-label" for="typeName">
                            Name on card
                          </label>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-5">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="typeExp"
                                className="form-control form-control-lg"
                                size="5"
                                minLength="5"
                                maxLength="5"
                                name="expiry"
                                placeholder="17/08"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                              />
                              <label className="form-label" for="typeExp">
                                Expiration
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-5">
                            <div className="form-outline">
                              <input
                                type="password"
                                id="typeText"
                                className="form-control form-control-lg"
                                size="1"
                                minLength="3"
                                maxLength="3"
                                name="cvc"
                                placeholder="CVC"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                              />
                              <label className="form-label" for="typeText">
                                CVC
                              </label>
                            </div>
                          </div>
                        </div>
                        <p className="mb-5">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit <a href="#!">obcaecati sapiente</a>.
                        </p>
                        <button
                          type="button"
                          className="btn btn-success btn-block btn-lg"
                          onClick={() => handleThankYouPage("/thankyou")}

                        >
                          Buy now
                        </button>

                        <h5
                          className="fw-bold mb-5"
                          style={{ position: "absolute", bottom: "0" }}
                        >
                          <a href="/home">
                            <i className="fas fa-angle-left me-2"></i>Back to
                            shopping
                          </a>
                        </h5>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
