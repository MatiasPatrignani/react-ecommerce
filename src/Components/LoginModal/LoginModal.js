import React, { useRef, useState, useContext } from "react";
import { ShoppingContext } from "../../context/ShoppingProvider";
import Login from '../../Data/Login.json'
import LoginSuccessful from "../LoginSuccessful/LoginSuccessful";
import toast, { Toaster } from 'react-hot-toast';

const LoginModal = ({setLgShow}) => {
  // const [userState, setUserState] = useState({email: "", password: ""});
  let nameRef =  useRef();
  let passwordRef =  useRef();
  
  const [error, setError ] = useState("")
  const {setIsLoggedIn} = useContext(ShoppingContext)
  
  const handleLogin = (event) =>{
    event.preventDefault();

    const inputName = nameRef.current.value;
    const inputPassword = passwordRef.current.value;
    const test = Login.find((users) => inputName === users.email && inputPassword === users.password)
   if(test){
    setIsLoggedIn(true)
    setLgShow(false)
    toast('You are logged in!', {
      duration: 4000,
      position: 'bottom-left',
    
      // Styling
      style: {},
      className: '',
    
      // Custom Icon
      icon: '✅',
    
      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#000',
        secondary: '#fff',
      },
    
      // Aria
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
    return
   }
   else{
    setError("Email or Password is incorrect!")
    console.log("USER INCORRECT");
    toast('User Name or Password Incorrecto!', {
      duration: 4000,
      position: 'bottom-left',
    
      // Styling
      style: {},
      className: '',
    
      // Custom Icon
      icon: '❌',
    
      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#000',
        secondary: '#fff',
      },
    
      // Aria
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
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