import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducers/ProductReducer";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(productReducer, {
    products: [],
    isLoading: false,
  });

  const getProducts = async () => {
    try {
      productDispatch({ type: "PRODUCT_LOADING" });
      const { status, data } = await axios.get(
        "https://ecommerce-backend-api-dkfu.onrender.com/products"
      );
      if (status === 200) {
        productDispatch({ type: "SET_PRODUCTS", payload: data.products });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ productState }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
