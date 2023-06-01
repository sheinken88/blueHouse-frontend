import PrimaryButton from "../common/PrimaryButton"

import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchAllProducts } from "../state/thunks/productsThunks"


export const HomePage = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products)
  const isLoading = useSelector((state) => state.products.isLoading);

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])
  
  if (isLoading) {
    return <div>Loading...</div>;  
  }

  return (
    <>
      {products.slice(0,1).map((product) => (
         <div key={product.id}>{product.name}</div>
      ))}
      <PrimaryButton>primary button</PrimaryButton>
    </>
  )
}
