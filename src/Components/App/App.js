import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Body from "../Body/Body";
import { useEffect, useState } from "react";

function App() {
  const [myCart, setItems] = useState(
    JSON.parse(localStorage.getItem("myCart")) || []
    );

  function addProduct(item) {
    myCart.find((elem) => elem.id === item.id) ?? setItems([item, ...myCart]);
  }

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(myCart));
  }, [myCart]);

  const RemoveItem = (item) => {
    setItems(myCart.filter((element) => element !== item))
  }


  return(
    <>
    <Header myCart={myCart} RemoveItem={RemoveItem} setItems={setItems} />
    <Body addProduct={addProduct} />
    <Footer />
    </>
  )
}

export default App;
