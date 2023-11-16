import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton = () => {
  return (
    <div>
      <Skeleton height={180} />
      <p className="text-center font-semibold mt-2">
        <Skeleton />
      </p>
      <p className="text-center font-semibold mt-2">
        <Skeleton />
      </p>
      <p className="text-center font-semibold mt-2">
        <Skeleton height={34} />
      </p>
    </div>
  );
};

export default ProductSkeleton;
