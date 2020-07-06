import axios from "axios";
import { ORDERS_FETCH } from "./type";

export const ordersFetch = () => {
  return (dispatch) => {
    axios.get("http://localhost:3004/orders").then((res) => {
      dispatch({ type: ORDERS_FETCH, payload: res.data });
    });
  };
};

export const ordersDelete = (id) => {
  return (dispatch) => {
    axios.delete("http://localhost:3004/orders/" + id).then((res) => {
      axios.get("http://localhost:3004/orders").then((res) => {
        dispatch({ type: ORDERS_FETCH, payload: res.data });
      });
    });
  };
};
