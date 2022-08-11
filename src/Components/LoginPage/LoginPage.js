import React from "react";
import "../LoginPage/LoginPage.css";

const LoginPage = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mx-auto">
              <div>
                <div className="myform form ">
                  <div className="logo mb-3">
                    <div className="col-md-12 text-center">
                      <img src="../img/img-logo.svg" alt="" width={'100rem'}/>
                    </div>
                  </div>
                  <form action="" method="post" name="login">
                    <div className="form-group">
                      <label>Email address</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group pb-5">
                      <label >Password</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter Password"
                      />
                    </div>
                    <div className="col-md-12 mt-5 pt-5 text-center ">
                      <button
                        type="submit"
                        className=" btn btn-block mybtn btn-primary tx-tfm"
                      >
                        Login
                      </button>
                    </div>
                    <div className="col-md-12 mt-5 pt-5 text-center ">
                      <button
                        type="submit"
                        className=" btn btn-block mybtn btn-light tx-tfm"
                      >
                        back
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
