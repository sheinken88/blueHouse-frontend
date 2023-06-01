import axios from "axios";
import {
  setCategory,
  setCategories,
  setLoading,
  setError,
} from "../slices/categoriesSlice";
axios.defaults.withCredentials = true;

export const fetchAllCategories = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/categories/all-categories`
    );

    dispatch(setCategories(response.data));

    dispatch(setLoading(false));
  } catch (err) {
    console.error("Fetch categories error: ", err);
    dispatch(setError(err));
    dispatch(setLoading(false));
  }
};

export const fetchSingleCategory = (categoryId) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/categories/id/${categoryId}`
    );

    dispatch(setCategory(response.data));

    dispatch(setLoading(false));
  } catch (err) {
    console.error("Fetch single category error: ", err);
    dispatch(setError(err));
    dispatch(setLoading(false));
  }
};
