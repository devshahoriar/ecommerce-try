import { useGetRendomProductQuery } from '../redux/api/homeApi'
import ProductRow from './ProductRow'

const TitleWithProducts = () => {
  const { isLoading, data } = useGetRendomProductQuery()
  const p = data?.data

  return (
    <div className="container">
      <div>
        <p className="text-3xl mt-4 font-bold">Just for you</p>
        {isLoading ? <h1>Loading..</h1> : <ProductRow products={p} />}
      </div>
    </div>
  )
}

export default TitleWithProducts
