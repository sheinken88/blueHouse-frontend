import {PrimaryButton, SecondaryButton, AddToCartButton} from "../common/Buttons"
import { Grid } from "@mui/material";

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
      <Grid container direction="column" spacing={2}>
      <Grid item>
      {products.slice(0,1).map((product) => (
         <div key={product.id}>{product.name}</div>
      ))}
      </Grid>
      <Grid item>
      <PrimaryButton>primary button</PrimaryButton>
      </Grid>
      <Grid item>
      <SecondaryButton>secondary button</SecondaryButton>
      </Grid>
      <Grid item>
      <AddToCartButton>add to cart</AddToCartButton>
      </Grid>
      </Grid>
    </>
  )
}
