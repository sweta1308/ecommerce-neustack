import { productReducer } from "./ProductReducer";

describe("product testing", () => {
  it("should set product loading", () => {
    const initialState = { isLoading: false };
    const action = {
      type: "PRODUCT_LOADING",
    };
    const state = productReducer(initialState, action);
    expect(state).toEqual({ isLoading: true });
  });

  it("should set all products", () => {
    const initialState = { products: [], isLoading: true };
    const action = {
      type: "SET_PRODUCTS",
      payload: [
        {
          _id: "7a4e5ba9-01ec-44f4-ad52-17fd34dc812e",
          item: "Laptop",
          imgUrl:
            "https://res.cloudinary.com/sweta-agarwalla/image/upload/v1702218313/71p-M3sPhhL_z7onyx.jpg",
          price: 60000,
        },
      ],
    };
    const state = productReducer(initialState, action);
    const expectedState = {
      products: [
        {
          _id: "7a4e5ba9-01ec-44f4-ad52-17fd34dc812e",
          item: "Laptop",
          imgUrl:
            "https://res.cloudinary.com/sweta-agarwalla/image/upload/v1702218313/71p-M3sPhhL_z7onyx.jpg",
          price: 60000,
        },
      ],
      isLoading: false,
    };
    expect(state).toEqual(expectedState);
  });
});
