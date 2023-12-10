export const isItemInCart = (data, product) => {
  return data?.find((item) => item.item === product) ? true : false;
};
