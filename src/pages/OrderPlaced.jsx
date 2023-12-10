import { useNavigate } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { useOrder } from "../context/OrderContext";

export const OrderPlaced = () => {
  const navigate = useNavigate();
  const { orderState } = useOrder();
  return (
    <div className="mt-[30px] min-h-[89vh]">
      <div className="flex justify-center items-center">
        <CheckCircle sx={{ color: "green" }} />
        <h1 className="text-cente text-[24px] ml-[10px] font-bold">
          Order Placed!
        </h1>
      </div>

      <div className="flex flex-col items-center gap-3 mt-[30px]">
        <p>
          <strong>Number of items purchased: </strong>
          {orderState?.order?.totalItems}
        </p>
        <p>
          <strong>Total Purchase amount: </strong>₹
          {orderState?.order?.totalAmount}
        </p>
        <p>
          <strong>Discount Code: </strong>
          {orderState?.order?.discountEligible
            ? orderState?.order?.discountCode
            : "No code applied."}
        </p>
        <p>
          <strong>Discount Amount: </strong>
          {orderState?.order?.discountEligible
            ? "₹" + orderState?.order?.totalDiscountAmount?.toFixed(2)
            : "No code applied."}
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-[20px] bg-primary-color text-white rounded px-[20px] py-[10px] hover:bg-primary-dark"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};
