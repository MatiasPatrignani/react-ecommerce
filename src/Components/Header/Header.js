import "../Header/Header.css";
import LoginButton from "../LoginButton/LoginButton";
import CartModal from "../Modal/CartModal";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import WishList from "../WishList/WishList";


const Header = ({ myCart, RemoveItem, setItems, myList, setProduct, addWishList, RemoveProduct, addProduct}) => {
  return (
    <>
      <header className="HeaderContainer">
        <Link to="/"><img src="../img/img-logo.svg" alt="logo-img" width="70rem" /></Link>
        <Nav />
        <div>
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
