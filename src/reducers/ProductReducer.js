export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case "PRODUCT_LOADING":
      return { ...state, isLoading: true };
    case "SET_PRODUCTS":
      return { ...state, products: payload, isLoading: false };
    default:
      return state;
  }
};
