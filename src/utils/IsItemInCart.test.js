import { isItemInCart } from "./IsItemInCart";

it("should search if that item is present in cart or not", () => {
  const data = [
    {
      _id: "7a4e5ba9-01ec-44f4-ad52-17fd34dc812e",
      item: "Laptop",
      imgUrl:
        "https://res.cloudinary.com/sweta-agarwalla/image/upload/v1702218313/71p-M3sPhhL_z7onyx.jpg",
      price: 60000,
    },
    {
      _id: "ruu3847ru4h4-8437-374r=728yr734374y",
      item: "Sunglasses",
      imgUrl:
        "https://res.cloudinary.com/sweta-agarwalla/image/upload/v1702218333/medium-range-sunglasses-gainx-original-imagdezytckqth5z_aqkyfc.webp",
      price: 549,
    },
  ];
  const id = "Sunglasses";
  const findItem = isItemInCart(data, id);
  expect(findItem).toEqual(true);
});
