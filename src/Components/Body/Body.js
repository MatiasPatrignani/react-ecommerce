import Aside from "../Aside/Aside"
import Main from "../Main/Main"


const Body = ({ addProduct }) => {
  return (
    <>
    <Main addProduct={addProduct} />
    <Aside />
    </>
  )
}

export default Body