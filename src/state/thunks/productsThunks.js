import axios from "axios";
import {
  setProduct,
  setProducts,
  setLoading,
  setError,
  setCategoryFilters,
} from "../slices/productsSlice";

axios.defaults.withCredentials = true;

//PENDIENTE POSIBLE REFACTORIZACIÓN DE RUTA UNIFICADA PARA TAGS Y CATEGORIES
//export const fetchAllProducts = (tagId = "", categoryId = "") => async (dispatch) => {
export const fetchAllProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/allproducts`,
      { withCredentials: true, credentials: "include" }
    );
    dispatch(setProducts(response.data));
    dispatch(setLoading(false));
  } catch (err) {
    console.error("Fetch products error: ", err);
    dispatch(setError(err));
    dispatch(setLoading(false));
  }
};

export const fetchSingleProduct = (productId) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/id/${productId}`,
      { withCredentials: true, credentials: "include" }
    );

    dispatch(setProduct(response.data));

    dispatch(setLoading(false));
  } catch (err) {
    console.error("Fetch single product error: ", err);
    dispatch(setError(err));
    dispatch(setLoading(false));
  }
};

//nuevo action para buscar multiples products por ids
export const fetchMultipleProductsByIds = (productIds) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/ids`,

      {
        withCredentials: true,
        credentials: "include",
        params: {
          include: productIds.join(","),
        },
      }
    );

    dispatch(setProducts(response.data));

    dispatch(setLoading(false));
  } catch (err) {
    console.error("Fetch multiple products error: ", err);
    dispatch(setError(err));
    dispatch(setLoading(false));
  }
};

//PROVISORIO, A LA ESPERA DE DEFINIR POSIBLE RUTA ALL PRODUCTS UNIFICADA PARA CATEGORÍAS Y TAGS
export const fetchProductsByCategory = (categoryId) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(
      setCategoryFilters({
        category: categoryId,
        min_price: 1,
        max_price: 100,
      })
    );

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/bycategory/${categoryId}`,
      { withCredentials: true, credentials: "include" }
    );

    dispatch(setProducts(response.data));

    dispatch(setLoading(false));
  } catch (err) {
    console.error("Fetch products by category error: ", err);
    dispatch(setError(err));
    dispatch(setLoading(false));
  }
};

//PROVISORIO, A LA ESPERA DE DEFINIR POSIBLE RUTA ALL PRODUCTS UNIFICADA PARA CATEGORÍAS Y TAGS
export const fetchProductsByTag = (tagId) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    ///const response = await axios.get(`${import.meta.env.VITE_API_URL}/XXXX/${tagId});

    dispatch(setProducts(response.data));

    dispatch(setLoading(false));
  } catch (err) {
    console.error("Fetch products by tag error: ", err);
    dispatch(setError(err));
    dispatch(setLoading(false));
  }
};

export const fetchFilteredProducts = (filters) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    // dispatch(setCategoryFilters())

    const filteredProducts = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/filtered/${filters}`,
      { withCredentials: true, credentials: "include" }
    );

    dispatch(setProducts(filteredProducts.data.filteredProduct));

    dispatch(setLoading(false));
  } catch (err) {
    console.error("Fetch filtered categories error: ", err);
    dispatch(setError(err));
    dispatch(setLoading(false));
  }
};

export const fetchProductsByType = (type) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const productsByType = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/type/${type}`,
      { withCredentials: true, credentials: "include" }
    );

    dispatch(setProducts(productsByType.data));

    dispatch(setLoading(false));
  } catch (err) {
    console.error("fetchProductsByType error: ", err);
    dispatch(setError(err));
    dispatch(setLoading(false));
  }
};
