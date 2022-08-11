import Aside from "../Aside/Aside"
import Main from "../Main/Main"
import "../Body/Body.css"


const Body = ({ addProduct, addWishList }) => {
  return (
    <>
    <Main addProduct={addProduct} addWishList={addWishList}  />
    <Aside />
    </>
  )
}

export default Body