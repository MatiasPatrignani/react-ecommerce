import React from 'react'
import Payment from '../Payment/Payment'


const LayoutPayment = ({RemoveItem, setItems}) => {
  return (
        <Payment RemoveItem={RemoveItem} setItems={setItems} />
  )
}

export default LayoutPayment