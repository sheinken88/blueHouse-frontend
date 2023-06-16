import axios from "axios";
import {
  setReview,
  setReviews,
  setLoading,
  setError,
} from "../slices/reviewsSlice";
axios.defaults.withCredentials = true;

export const fetchAllReviews = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/reviews`,
      { withCredentials: true, credentials: "include" }
    );

    dispatch(setReviews(response.data));

    dispatch(setLoading(false));
  } catch (err) {
    console.error("Fetch reviews error: ", err);
    dispatch(setError(err));
    dispatch(setLoading(false));
  }
};
