import React from 'react'
import ListProductsWishList from '../ListProductsWishList/ListProductsWishList'
import  Product  from "../../Data/Product.json"

const SetWishList = ({myList, addWishList, RemoveProduct, addProduct}) => {

  return (
  <>
    <ul className='list-items_WishList'>
        {
            myList.map((products) => {
              return(
                <ListProductsWishList
                    addWishList={addWishList}
                    product={products}
                    key={products.id}
                    RemoveProduct={RemoveProduct}
                    addProduct={addProduct}/>)
                  }
                  )
                }
                  </ul>
                  </>
  )
}

export default SetWishList