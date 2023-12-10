import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useOrder } from "../context/OrderContext";

export const PriceCard = () => {
  const navigate = useNavigate();
  const { cartState } = useCart();
  const { checkout } = useOrder();
  const totalPrice = cartState?.cart.reduce(
    (acc, curr) => (acc += curr.price * curr.quantity),
    0
  );
  return (
    <div className="w-[250px] mt-[20px] bg-white shadow-md p-[15px] rounded">
      <div className="flex justify-between my-[5px]">
        <h3 className="font-bold text-[18px]">Item</h3>
        <h3 className="font-bold text-[18px]">Price</h3>
      </div>
      {cartState?.cart.map((item) => (
        <div key={item._id} className="flex justify-between my-[8px]">
          <p>{item.item}</p>
          <p>₹{item.price * item.quantity}</p>
        </div>
      ))}
      <hr />
      <div className="mt-[10px] flex justify-between">
        <h3 className="font-bold text-[16px]">Total</h3>
        <h3 className="font-bold text-[16px]">₹{totalPrice}</h3>
      </div>
      <button
        onClick={() => {
          checkout();
          navigate("/checkout");
        }}
        className="w-full bg-primary-color text-white py-[8px] my-[10px] rounded hover:bg-primary-dark"
      >
        Checkout
      </button>
    </div>
  );
};
