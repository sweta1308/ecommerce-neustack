import { useNavigate } from "react-router-dom";

export const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <img
        src="https://res.cloudinary.com/sweta-agarwalla/image/upload/v1684057227/free-empty-cart-4085814-3385483_c7dwif.webp"
        alt="empty-cart"
        className="w-[350px]"
      />
      <h2 className="font-bold text-[24px]">Your cart is empty.</h2>
      <p className="text-gray-400 w-[200px] text-center">
        Looks like you haven't added anything in your cart.{" "}
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-[20px] bg-primary-color text-white rounded px-[20px] py-[10px] hover:bg-primary-dark"
      >
        Shop Now
      </button>
    </div>
  );
};
