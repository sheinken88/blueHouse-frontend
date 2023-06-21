import axios from "axios";
import {
  setCategory,
  setCategories,
  setSubCategories,
  setLoading,
  setError,
} from "../slices/categoriesSlice";
axios.defaults.withCredentials = true;

export const fetchAllCategories = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/categories/all-categories`,
      { withCredentials: true, credentials: "include" }
    );

    dispatch(setCategories(response.data));

    dispatch(setLoading(false));
  } catch (err) {
    console.error("Fetch categories error: ", err);
    dispatch(setError(err));
    dispatch(setLoading(false));
  }
};

export const fetchSubCategories = (parentId) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await axios.get(
      `${
        import.meta.env.VITE_API_URL
      }/categories/sub-categories?parent=${parentId}`,
      { withCredentials: true, credentials: "include" }
    );

    dispatch(setSubCategories(response.data));

    dispatch(setLoading(false));
  } catch (err) {
    console.error("Fetch sub-categories error: ", err);
    dispatch(setError(err));
    dispatch(setLoading(false));
  }
};

export const fetchSingleCategory = (categoryId) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/categories/id/${categoryId}`,
      { withCredentials: true, credentials: "include" }
    );

    dispatch(setCategory(response.data));

    dispatch(setLoading(false));
  } catch (err) {
    console.error("Fetch single category error: ", err);
    dispatch(setError(err));
    dispatch(setLoading(false));
  }
};
