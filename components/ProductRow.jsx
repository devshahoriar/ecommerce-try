import Product from './Product'

const ProductRow = ({ products }) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:mt-3">
      {products?.map((_, i) => (
        <Product key={i} product={_} />
      ))}
    </div>
  )
}

export default ProductRow
