import axios from "axios"
import { setProducts, setLoading } from "../slices/productsSlice"
axios.defaults.withCredentials = true;


export const fetchAllProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));  

    const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/allproducts`);

    dispatch(setProducts(response.data));

    dispatch(setLoading(false));  

  } catch (err){
    console.error("Fetch products error: ", err);
    dispatch(setLoading(false));  
  }
}

