

function ProductInfo() {
    const product = {
        name:'Laptop',
        price:1200,
        availability:'In Stock'
    }
  return (
    <div>
    <h2>{product.name}</h2>
    <h2>{product.price}</h2>
    <h3>{product.availability}</h3>
    </div>
  )
}

export default ProductInfo