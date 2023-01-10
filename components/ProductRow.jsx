import Product from './Product'

const ProductRow = ({ products }) => {
  console.log(products)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:mt-3">
      {products?.length > 0 ? (
        products?.map((_, i) => <Product key={i} product={_} />)
      ) : (
        <h1>No Product</h1>
      )}
    </div>
  )
}

export default ProductRow
