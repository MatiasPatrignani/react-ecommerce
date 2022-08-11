import React from 'react'
import AddButton from '../AddButton/AddButton';

const LikeButton = ({productData, addWishList}) => {
const addProductToLocalStorage = () => {
  console.log(productData)
    productData.quantity= 1;
    addWishList(productData);
}
  return (
    <>
    <button onClick={addProductToLocalStorage} className='btn btn-outline-light'>🧡</button>
    </>
  )
}

export default LikeButton