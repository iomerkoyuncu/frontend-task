import { createContext, useReducer } from "react";
import productReducer from "./ProductReducer";

const ProductContext = createContext();

const API_URL = "https://dummyjson.com";

export const ProductProvider = ({ children }) => {
  const initialState = {
    products: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);
  const random = Math.floor(Math.random() * 50);

  const getProducts = async () => {
    setLoading();

    const response = await fetch(`${API_URL}/products?limit=8&skip=2`);
    const data = await response.json();

    dispatch({
      type: "GET_PRODUCTS",
      payload: data
    });
  };

  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        loading: state.loading,
        getProducts,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;

