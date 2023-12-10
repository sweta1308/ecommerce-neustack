import { ClipLoader } from "react-spinners";
import { useCart } from "../context/CartContext";
import { EmptyCart } from "../components/EmptyCart";
import { CartCard } from "../components/CartCard";
import { PriceCard } from "../components/PriceCard";

export const Cart = () => {
  const { cartState } = useCart();
  console.log(cartState.cart)
  return (
    <div className="px-[40px] py-[20px] bg-gray-50 mx-auto lg:px-[20px] min-h-[89vh]">
      <h1 className="text-center text-[28px] font-semibold">Cart</h1>
      {cartState?.isLoading ? (
        <div className="flex justify-center mt-[20px]">
          <ClipLoader color="#e80071" size={70} />
        </div>
      ) : cartState?.cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex justify-around mt-[20px] px-[70px] lg:px-[20px] md:flex-col md:items-center">
          <div>
            {cartState?.cart.map(({ _id, item, price, imgUrl, quantity }) => (
              <CartCard
                id={_id}
                item={item}
                price={price}
                imgUrl={imgUrl}
                quantity={quantity}
              />
            ))}
          </div>
          <div>
            <PriceCard />
          </div>
        </div>
      )}
    </div>
  );
};
