

const AddButton = ({productData, addProduct}) => {
  const addItemToLocalStorage = () => {
    productData.quantity = 1;
    addProduct(productData);

  }
  return (
    <>
    <button onClick={addItemToLocalStorage} className="btn btn-primary">Add to cart</button>
    </>
  )
}

export default AddButton