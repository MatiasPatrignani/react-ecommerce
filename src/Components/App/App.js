import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RouterPath from "../../Router";
import { ShoppingContext } from "../../context/ShoppingProvider";

function App() {
  const {setItemsContext } = useContext(ShoppingContext);

  // State from Cart Modal
  const [myCart, setItems] = useState(
    JSON.parse(localStorage.getItem("myCart")) || []
  );

  function addProduct(item) {
    myCart.find((elem) => elem.id === item.id) ?? setItems([item, ...myCart]);
  }

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(myCart));

    setItemsContext(myCart);
  }, [myCart]);

  const RemoveItem = (item) => {
    setItems(myCart.filter((element) => element !== item));
  };

  //State from my Wishlist
  const [myList, setProduct] = useState(
    JSON.parse(localStorage.getItem("myList")) || []
  );

  function addWishList(item) {
    myList.find((elem) => elem.id === item.id) ?? setProduct([item, ...myList]);
  }

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList));
  }, [myList]);

  const RemoveProduct = (item) => {
    setProduct(myList.filter((elem) => elem !== item));
  };

  return (
    <>

      <Header
        myCart={myCart}
        RemoveItem={RemoveItem}
        setItems={setItems}
        setProduct={setProduct}
        myList={myList}
        RemoveProduct={RemoveProduct}
        addProduct={addProduct}
      />
      <RouterPath
        myCart={myCart}
        RemoveItem={RemoveItem}
        setItems={setItems}
        addProduct={addProduct}
        addWishList={addWishList}
      />
      <Footer />
    </>
  );
}

export default App;
