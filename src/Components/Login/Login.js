import React from "react";

const Login = () => {
  return (
    <>
      <div className="container login-container">
        <div className="row">
          <div className="col-md-1">
            <img src="../img/img_login1.jpg" alt="photo_login" />
          </div>
          <div className="col-md-6 login-form-2 my-1">
            <img src="../img/img-logo.svg" alt="logo-img" width="100rem"></img>
            <form>
              <div className="form-group opacity-75 my-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email *"

                />
              </div>
              <div className="form-group pt-1 opacity-75">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Your Password *"
                />
              </div>
              <div className="form-group pt-1">
                <input type="submit" className="btnSubmit" />
              </div>
              <div className="form-group">
                <a href="#" className="ForgetPwd" >
                  Forget Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      </>
  );
};

export default Login;
