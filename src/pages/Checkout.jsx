import { useNavigate } from "react-router-dom";
import { useOrder } from "../context/OrderContext";

export const Checkout = () => {
  const navigate = useNavigate();
  const { orderState, getStats, generateCoupon } = useOrder();
  return (
    <div className="px-[40px] py-[20px] bg-gray-50 mx-auto">
      <h1 className="text-center text-[28px] font-semibold">Checkout</h1>
      <div className="mx-auto w-[300px] mt-[30px] shadow-md p-[20px] rounded">
        <div className="flex justify-between my-[5px]">
          <h3 className="font-bold text-[18px]">Item</h3>
          <h3 className="font-bold text-[18px]">Price</h3>
        </div>
        {orderState?.order?.order.map((item) => (
          <div key={item._id} className="flex justify-between my-[5px]">
            <h3>{item.item}</h3>
            <p>₹{item.price * item.quantity}</p>
          </div>
        ))}
        <hr />
        <div className="flex justify-between my-[5px]">
          <h3 className="font-bold text-[16px]">Total</h3>
          <h3 className="font-bold text-[16px]">
            ₹{orderState?.order?.totalAmount}
          </h3>
        </div>
        {orderState?.order?.discountEligible ? (
          <div>
            <button
              onClick={() => generateCoupon()}
              className={`${orderState?.order?.discountCode && "hidden"}`}
            >
              Generate coupon
            </button>
            {orderState?.order?.discountCode && (
              <div>
                <div className="flex justify-between items-center my-[5px]">
                  <h3 className="font-bold text-[12px]">
                    Discount<small>({orderState?.order?.discountCode})</small>
                  </h3>
                  <p className="text-[16px]">
                    - ₹{orderState?.order?.totalAmount * 0.1}
                  </p>
                </div>
                <hr />
                <div className="flex justify-between my-[5px]">
                  <h3 className="font-bold text-[16px]">Total</h3>
                  <h3 className="font-bold text-[16px]">
                    ₹{orderState?.order?.totalAmount * 0.9}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    getStats();
                    navigate("/order-placed");
                  }}
                  className="w-full bg-primary-color text-white py-[8px] my-[10px] rounded hover:bg-primary-dark"
                >
                  Place order
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <p className="text-[12px] text-red-500">
              This order is not eligible for discount.
            </p>
            <button
              onClick={() => {
                getStats();
                navigate("/order-placed");
              }}
              className="w-full bg-primary-color text-white py-[8px] my-[10px] rounded hover:bg-primary-dark"
            >
              Place order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
