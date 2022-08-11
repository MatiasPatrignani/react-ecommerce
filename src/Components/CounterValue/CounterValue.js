import "../CounterValue/CounterValue.css"

const CounterValue = ({myCart}) => {
    let TotalPrice = 0;
    myCart.map((element) => {
    TotalPrice = TotalPrice + element.price * element.quantity
})

return (
    <>
     <div className="total_price d-flex col-6 justify-content-between mr-2 w-100" >
        <p>TOTAL PRICE: </p>
        <div className="" >{TotalPrice} €</div>
     </div>
    </>
    )
}

export default CounterValue