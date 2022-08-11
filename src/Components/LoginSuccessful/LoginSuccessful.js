import React from 'react'

const LoginSuccessful = () => {
  return (
    <>
      <div className="container login-container">
        <div className=" row">
          <div className="col-md-6 login-form-2 my-1">
            <img src="../img/img-logo.svg" alt="logo-img" width="100rem"></img>
              <div className="form-group opacity-75 my-1">
                <h1>Login Successfull</h1>
              </div>
              <div className="form-group pt-1 opacity-75">
                <img src="../img/img_successful.png" width={"15rem"}/>
              </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default LoginSuccessful