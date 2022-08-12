import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useContext, useEffect, useState } from "react";
import RouterPath from "../../Router";
import { ShoppingContext } from "../../context/ShoppingProvider";

function App() {

  //UseContext of ShoppingContext
  const {setItemsContext } = useContext(ShoppingContext);

  // State from Cart Modal
  const [myCart, setItems] = useState(
    JSON.parse(localStorage.getItem("myCart")) || []
  );

  //Function button AddProduct
  function addProduct(item) {
    myCart.find((elem) => elem.id === item.id) ?? setItems([item, ...myCart]);
  }
  
  useEffect(() => {
    localStorage.setItem('paymentInfo', JSON.stringify([]))
  })
  useEffect(() => {
  localStorage.setItem("myCart", JSON.stringify(myCart));
  

    setItemsContext(myCart);
  }, [myCart]);


  //Function button RemoveProduct of RemoveItem
  const RemoveItem = (item) => {
    setItems(myCart.filter((element) => element !== item));
  };


  //State from my Wishlist
  const [myList, setProduct] = useState(
    JSON.parse(localStorage.getItem("myList")) || []
  );

  //Function button AddWishList
  function addWishList(item) {
    myList.find((elem) => elem.id === item.id) ?? setProduct([item, ...myList]);
  }

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList));
  }, [myList]);

  //Function button RemoveProduct of WishList
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
