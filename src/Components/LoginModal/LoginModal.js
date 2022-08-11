import React, { useRef, useState } from "react";
import Login from '../../Data/Login.json'
import LoginSuccessful from "../LoginSuccessful/LoginSuccessful";

const LoginModal = ({setLgShow}) => {
  // const [userState, setUserState] = useState({email: "", password: ""});
  let nameRef =  useRef();
  let passwordRef =  useRef();

  const [error, setError ] = useState("")
  const handleLogin = (event) =>{
    event.preventDefault();

    const inputName = nameRef.current.value;
    const inputPassword = passwordRef.current.value;
    const test = Login.find((users) => inputName === users.email && inputPassword === users.password)
  
   if(test){
    setLgShow(false)
    return 
   }
   else{
    setError("Email or Password is incorrect!")
    console.log("USER INCORRECT");
   }
  }

  
  return (
    <>
      <div className="container login-container">
        <div className=" row">
          <div className="col-md-6 login-form-2 my-1">
            <img src="../img/img-logo.svg" alt="logo-img" width="100rem"></img>
            <form>
            {/* {(error != "") ? (<div className="alert alert-danger" role="alert">{error}</div>) : ""} */}
              <div className="form-group opacity-75 my-1">
                <input
                  ref={nameRef}
                  type="text"
                  className="form-control"
                  placeholder="Your User Name *"
                //   value={this.state.value}
                  />
              </div>
              <div className="form-group pt-1 opacity-75">
                <input
                  ref={passwordRef}
                  type="password"
                  className="form-control"
                  placeholder="Your Password *"
                //   value={users.password}
                  />
              </div>
              <div className="form-group pt-1">
                <input type="submit" className="btnSubmit btn btn-light" value="SIGN IN" onClick={handleLogin}/>
              </div>
            </form>
          </div>
        </div>
      </div>
      </>
  )
}

export default LoginModal