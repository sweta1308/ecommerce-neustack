import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import { useCart } from "../context/CartContext";

export const Navbar = () => {
  const navigate = useNavigate();
  const { cartState } = useCart();
  return (
    <div className="sticky top-0 bg-white z-10 px-[80px] py-[15px] shadow-sm flex items-center justify-between xs:px-[30px]">
      <h1
        onClick={() => navigate("/")}
        className="text-[30px] cursor-pointer text-primary-color font-bold sm:text-[26px]"
      >
        NeuStack
      </h1>
      <div
        onClick={() => navigate("/cart")}
        className="cursor-pointer relative text-[24px] hover:text-primary-dark"
      >
        <ShoppingCart />
        {cartState.cart.length > 0 && (
          <span className="text-[10px] right-0 top-[2px] absolute text-white bg-primary-color px-[4px] rounded-full">
            {cartState.cart.length}
          </span>
        )}
      </div>
    </div>
  );
};
