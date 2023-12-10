import { Add, Delete, Remove } from "@mui/icons-material";
import { useCart } from "../context/CartContext";

export const CartCard = ({ id, item, price, imgUrl, quantity }) => {
  const { updateQuantity, deleteItem } = useCart();
  return (
    <div
      key={id}
      className="w-[500px] m-[20px] flex justify-evenly items-center gap-10 p-[30px] shadow-md bg-white rounded-md sm:w-[400px] xs:flex-col xs:gap-3 xs:w-[300px]"
    >
      <img src={imgUrl} alt={item} className="w-[100px]" />
      <div>
        <h4 className="font-bold xs:text-center">{item}</h4>
        <p className="xs:text-center">Price: ₹{price}</p>
      </div>
      <div className="flex items-center text-[14px] gap-5">
        <div className="flex justify-evenly items-center gap-2">
          <button
            disabled={quantity === 1}
            onClick={() => updateQuantity(id, "decrement")}
            className="border border-gray-300 px-[5px] py-[2px] cursor-pointer rounded-full hover:bg-gray-200"
          >
            <Remove sx={{ fontSize: "16px" }} />
          </button>
          <p>{quantity}</p>
          <button
            onClick={() => updateQuantity(id, "increment")}
            className="border border-gray-300 px-[5px] py-[2px] cursor-pointer rounded-full hover:bg-gray-200"
          >
            <Add sx={{ fontSize: "16px" }} />
          </button>
        </div>

        <div
          onClick={() => deleteItem(id)}
          className="text-red-500 cursor-pointer"
        >
          <Delete />
        </div>
      </div>
    </div>
  );
};
