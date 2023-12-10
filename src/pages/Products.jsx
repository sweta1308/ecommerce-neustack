import { ClipLoader } from "react-spinners";
import { useProduct } from "../context/ProductContext";
import { ProductCard } from "../components/ProductCard";

export const Products = () => {
  const { productState } = useProduct();
  return (
    <div className="px-[40px] py-[20px] bg-gray-50 mx-auto md:px-[10px] sm:px-[8px]">
      <h1 className="text-center text-[28px] font-semibold">Products</h1>
      {productState?.isLoading ? (
        <div className="flex justify-center mt-[20px]">
          <ClipLoader color="#e80071" size={70} />
        </div>
      ) : (
        <div className="mt-[20px] flex flex-wrap justify-center">
          {productState?.products?.map(({ _id, item, price }) => (
            <ProductCard id={_id} item={item} price={price} />
          ))}
        </div>
      )}
    </div>
  );
};
