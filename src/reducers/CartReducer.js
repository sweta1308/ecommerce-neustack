export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "CART_LOADING":
      return { ...state, isLoading: true };
    case "SET_CART":
      return { ...state, cart: payload, isLoading: false };
    default:
      return state;
  }
};
