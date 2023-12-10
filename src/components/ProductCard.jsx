import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { isItemInCart } from "../utils/IsItemInCart";

export const ProductCard = ({ id, item, price, imgUrl }) => {
  const navigate = useNavigate();
  const { addToCart, cartState } = useCart();
  return (
    <div
      key={id}
      className="m-[20px] py-[30px] px-[15px] shadow-md w-[200px] bg-white rounded-md xs:w-[250px]"
    >
      <img src={imgUrl} alt={item} className="w-[200px] h-[200px]" />
      <h3 className="mt-[10px]">{item}</h3>
      <p>Price: ₹{price}</p>
      <button
        disabled={cartState?.isLoading}
        onClick={() =>
          isItemInCart(cartState?.cart, item)
            ? navigate("/cart")
            : addToCart({ item, price, imgUrl })
        }
        className="bg-primary-color text-white text-[12px] p-[5px] mt-[10px] rounded hover:bg-primary-dark"
      >
        {isItemInCart(cartState?.cart, item) ? "Go to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};
