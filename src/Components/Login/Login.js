import "../Login/Login.css";
import React, { useState } from "react";
import Login from "../../Data/Login.json"
import LoginModal from "../LoginModal/LoginModal";



const UserLogin = ({setLgShow}) => {

// const Login = details => {
//   console.log('details')
// }

// const Logout = details => {
//   console.log("Logout")
// }

return(
        <>
        <LoginModal setLgShow={setLgShow} />
        </>
  );
};

export default UserLogin;
