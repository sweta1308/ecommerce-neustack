import { createContext, useContext, useReducer } from "react";
import { OrderReducer } from "../reducers/OrderReducer";
import axios from "axios";
import { useCart } from "./CartContext";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const { cartDispatch } = useCart();
  const [orderState, orderDispatch] = useReducer(OrderReducer, {
    order: null,
    isLoading: false,
  });

  const checkout = async () => {
    try {
      orderDispatch({ type: "ORDER_LOADING" });
      const { status, data } = await axios.get(
        "https://ecommerce-backend-api-dkfu.onrender.com/cart/checkout"
      );
      if (status === 200) {
        orderDispatch({ type: "SET_ORDERS", payload: data.user.orders[0] });
        cartDispatch({ type: "SET_CART", payload: [] });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const generateCoupon = async () => {
    try {
      orderDispatch({ type: "ORDER_LOADING" });
      const { status, data } = await axios.get(
        "https://ecommerce-backend-api-dkfu.onrender.com/admin/generate-coupon"
      );
      if (status === 201) {
        orderDispatch({ type: "SET_ORDERS", payload: data.user.orders[0] });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getStats = async () => {
    try {
      orderDispatch({ type: "ORDER_LOADING" });
      const { status, data } = await axios.get(
        "https://ecommerce-backend-api-dkfu.onrender.com/admin/generate-stats"
      );
      if (status === 201) {
        orderDispatch({ type: "SET_ORDERS", payload: data.user.orders[0] });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <OrderContext.Provider
      value={{ orderState, orderDispatch, checkout, generateCoupon, getStats }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
