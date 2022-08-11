import React, { useContext } from "react";
import PageCheckout from "../CheckoutPage/PageCheckout";

const Shipping = () => {
  // const {value, setValue} = useContext(PageCheckout);

  const today = new Date();
  const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[today.getMonth()];
    const date = today.getDate() + " " + month + " " + today.getFullYear();
    const dateOfShipping = today.getDate() + 1 + " " + month + " " + today.getFullYear() ;
    const dateOfShippingFree = today.getDate() + 2 + " " + month + " " + today.getFullYear() ;

  return (
    <>
      <div className="d-flex justify-content-around mt-5">
        <div className="card text-dark bg-light mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header text-center">Free Shipping </div>
          <div className="card-body">
            <h5 className="card-title text-center mb-3">ESTIMATED DELIVERY DATE:</h5>
            <p className="card-text text-center">
              {dateOfShippingFree}<br/>
              Between: 09:00hs and 20:00hs.
            </p>
            <div className="d-flex justify-content-center">
              <input
                type="checkbox"
                className="btn-check"
                id="btn-check-2-outlined"
                autoComplete="off"
                value="0"
                // onClick={() => setValue("0")}
              />
              <label
                className="btn btn-outline-primary"
                htmlFor="btn-check-2-outlined"
              >
                FREE
              </label>
            </div>
          </div>
        </div>
        <div
          className="card text-dark bg-info mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header text-center">Express Shipping</div>
          <div className="card-body">
            <h5 className="card-title text-center  mb-3">ESTIMATED DELIVERY DATE:</h5>
            <p className="card-text text-center">
              {dateOfShipping}<br/>
              Between: 09:00hs and 20:00hs.
            </p>
            <div className="d-flex justify-content-center">
              <input
                type="checkbox"
                className="btn-check"
                id="btn-check-2-outlined"
                autoComplete="off"
                value="9.99"
              />
              <label
                className="btn btn-outline-primary"
                htmlFor="btn-check-2-outlined"
              >
                € 9.99
              </label>
            </div>
          </div>
        </div>
        <div
          className="card text-dark bg-warning mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header text-center">Premium</div>
          <div className="card-body">
            <h5 className="card-title text-center  mb-3">ESTIMATED DELIVERY DATE:</h5>
            <p className="card-text text-center">
              {date}<br/>
              Between: 09:00hs and 20:00hs.
            </p>
            <div className="d-flex justify-content-center">
              <input
                type="checkbox"
                className="btn-check"
                id="btn-check-2-outlined"
                autoComplete="off"
                value="27.95"
              />
              <label
                className="btn btn-outline-primary"
                htmlFor="btn-check-2-outlined"
              >
                € 27.95
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
