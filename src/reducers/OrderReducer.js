export const OrderReducer = (state, { type, payload }) => {
  switch (type) {
    case "ORDER_LOADING":
      return { ...state, isLoading: true };
    case "SET_ORDERS":
      return { ...state, order: payload, isLoading: false };
    default:
      return state;
  }
};
