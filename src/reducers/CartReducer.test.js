import { cartReducer } from "./CartReducer";

describe("cart testing", () => {
  it("should set cart loading", () => {
    const initialState = { isLoading: false };
    const action = {
      type: "CART_LOADING",
    };
    const state = cartReducer(initialState, action);
    expect(state).toEqual({ isLoading: true });
  });

  it("should set all cart products", () => {
    const initialState = { cart: [], isLoading: true };
    const action = {
      type: "SET_CART",
      payload: [
        {
          _id: "7a4e5ba9-01ec-44f4-ad52-17fd34dc812e",
          item: "Laptop",
          imgUrl:
            "https://res.cloudinary.com/sweta-agarwalla/image/upload/v1702218313/71p-M3sPhhL_z7onyx.jpg",
          price: 60000,
          quantity: 1,
        },
      ],
    };
    const state = cartReducer(initialState, action);
    const expectedState = {
      cart: [
        {
          _id: "7a4e5ba9-01ec-44f4-ad52-17fd34dc812e",
          item: "Laptop",
          imgUrl:
            "https://res.cloudinary.com/sweta-agarwalla/image/upload/v1702218313/71p-M3sPhhL_z7onyx.jpg",
          price: 60000,
          quantity: 1,
        },
      ],
      isLoading: false,
    };
    expect(state).toEqual(expectedState);
  });
});
