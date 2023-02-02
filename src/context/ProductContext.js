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

    const response = await fetch(`${API_URL}/products?limit=8`);
    const data = await response.json();

    dispatch({
      type: "GET_PRODUCTS",
      payload: data
    });
  };

  const getProduct = async (id) => {
    setLoading();

    const response = await fetch(`${API_URL}/products/${id}`);
    const data = await response.json();

    dispatch({
      type: "GET_PRODUCT",
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
        product: state.product,
        loading: state.loading,
        getProducts,
        getProduct,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;

