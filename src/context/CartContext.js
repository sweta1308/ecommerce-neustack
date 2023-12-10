import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { cartReducer } from "../reducers/CartReducer";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    isLoading: false,
    cart: [],
  });

  const getCart = async () => {
    try {
      cartDispatch({ type: "CART_LOADING" });
      const { status, data } = await axios.get(
        "https://ecommerce-backend-api-dkfu.onrender.com/cart"
      );
      if (status === 200) {
        cartDispatch({ type: "SET_CART", payload: data.cart });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addToCart = async (product) => {
    try {
      cartDispatch({ type: "CART_LOADING" });
      const { status, data } = await axios.post(
        `https://ecommerce-backend-api-dkfu.onrender.com/cart`,
        { product }
      );
      if (status === 201) {
        cartDispatch({ type: "SET_CART", payload: data.cart });
        toast.success("Item added to cart!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const updateQuantity = async (id, type) => {
    try {
      cartDispatch({ type: "CART_LOADING" });
      const { status, data } = await axios.post(
        `https://ecommerce-backend-api-dkfu.onrender.com/cart/${id}`,
        { action: { type } }
      );
      if (status === 200) {
        cartDispatch({ type: "SET_CART", payload: data.cart });
        toast.success("Quantity updated!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deleteItem = async (id) => {
    try {
      cartDispatch({ type: "CART_LOADING" });
      const { status, data } = await axios.delete(
        `https://ecommerce-backend-api-dkfu.onrender.com/cart/${id}`
      );
      if (status === 200) {
        cartDispatch({ type: "SET_CART", payload: data.cart });
        toast.success("Item deleted!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const value = {
    cartState,
    cartDispatch,
    addToCart,
    updateQuantity,
    deleteItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
