import "../Header/Header.css";
import LoginButton from "../LoginButton/LoginButton";
import CartModal from "../Modal/CartModal";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import WishList from "../WishList/WishList";
import { useEffect, useState } from "react";


const Header = ({ myCart, RemoveItem, setItems, myList, setProduct, addWishList, RemoveProduct, addProduct}) => {

const [colorNav, setColorNav] = useState('transparent')


useEffect(() => {
  window.addEventListener("scroll", () =>{
    if(window.scrollY > 0 ){
      setColorNav("rgb(241, 240, 240)")
    }else{
      setColorNav("transparent")
    }
  })
})

  return (
    <>
      <header className="HeaderContainer" style={{position: "fixed", backgroundColor:colorNav}} >
        <Link className="logo" to="/"><img src="../img/img-logo.svg" alt="logo-img" width="70rem" /></Link>
        <Nav />
        <div className="modals">
        <WishList
        myList={myList}
        setProduct={setProduct}
        addWishList={addWishList}
        RemoveProduct={RemoveProduct}
        addProduct={addProduct}/>
        <LoginButton />
        <CartModal
          myCart={myCart}
          RemoveItem={RemoveItem}
          setItems={setItems}
        />
        </div>
      </header>
    </>
  );
};

export default Header;
