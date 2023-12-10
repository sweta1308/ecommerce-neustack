import { OrderReducer } from "./OrderReducer";

describe("order testing", () => {
  it("should set orders loading", () => {
    const initialState = { isLoading: false };
    const action = {
      type: "ORDER_LOADING",
    };
    const state = OrderReducer(initialState, action);
    expect(state).toEqual({ isLoading: true });
  });

  it("should set orders", () => {
    const initialState = { order: null, isLoading: true };
    const action = {
      type: "SET_ORDERS",
      payload: {
        order: [
          {
            _id: "7a4e5ba9-01ec-44f4-ad52-17fd34dc812e",
            item: "Laptop",
            imgUrl:
              "https://res.cloudinary.com/sweta-agarwalla/image/upload/v1702218313/71p-M3sPhhL_z7onyx.jpg",
            price: 60000,
          },
        ],
        discountEligible: false,
        discountCode: "",
        totalAmount: 60000,
        totalItems: 1,
      },
    };
    const state = OrderReducer(initialState, action);
    const expectedState = {
      order: {
        order: [
          {
            _id: "7a4e5ba9-01ec-44f4-ad52-17fd34dc812e",
            item: "Laptop",
            imgUrl:
              "https://res.cloudinary.com/sweta-agarwalla/image/upload/v1702218313/71p-M3sPhhL_z7onyx.jpg",
            price: 60000,
          },
        ],
        discountEligible: false,
        discountCode: "",
        totalAmount: 60000,
        totalItems: 1,
      },
      isLoading: false,
    };
    expect(state).toEqual(expectedState);
  });
});
