import axios from "axios";
import {
  setProduct,
  setProducts,
  setLoading,
  setError,
  setFilteredProducts,
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
      { withCredentials: true, credentials: "include" },
      {
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

    // console.log("SOY LA CATEGORIA QUE LLEGA", categoryId);

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

//PROVISORIO, A LA ESPERA DE DEFINIR POSIBLE RUTA ALL PRODUCTS UNIFICADA PARA CATEGORÍAS Y TAGS
export const fetchFilteredProducts = (request) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/filtered/${request}`,
      { withCredentials: true, credentials: "include" }
    );

    dispatch(setProducts(response.data));

    dispatch(setLoading(false));
  } catch (err) {
    console.error("Fetch filtered products error: ", err);
    dispatch(setError(err));
    dispatch(setLoading(false));
  }
};
