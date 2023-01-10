import { useRouter } from 'next/router'
import { useRef } from 'react'
import { useEffect } from 'react'
import Collapsible from 'react-collapsible'
import { useGetCetegoryQuery } from '../redux/api/homeApi'

const Item = ({ data = ['T-shart', 'Jens', 'Pant'], children }) => {
  const router = useRouter()
  return (
    <span className="px-4">
      <Collapsible trigger={children}>
        {data?.data?.map((dat, i) => (
          <button
            onClick={() => router.push('/p?category=' + dat.attributes.title)}
            key={i}
          >
            {dat.attributes.title.split('-')[1]}
          </button>
        ))}
      </Collapsible>
    </span>
  )
}

const CatSideBar = () => {
  const { data, isError, isLoading } = useGetCetegoryQuery()

  return (
    <div className="hidden lg:block flex-1 border overflow-auto overflow-x-hidden h-[250px] sm:h-[350px] md:h-[400px] xl:h-[450px] scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-100 dark:scrollbar-thumb-darkC dark:scrollbar-track-zinc-600">
      <div className="flex flex-col mt-3 catM">
        {isError ? (
          <h1>Error..</h1>
        ) : isLoading ? (
          <h1>Loading...</h1>
        ) : (
          data?.data?.map((_, i) => (
            <Item key={i} data={_.attributes.sub_cetegories}>
              {_.attributes.title}
            </Item>
          ))
        )}
      </div>
    </div>
  )
}

export default CatSideBar
