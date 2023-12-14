import Skeleton from "react-loading-skeleton";

const ProductSkeleton = () => {
  return (
    <div>
      <Skeleton height={180} />
      <p className="text-center font-semibold mt-2">
        <Skeleton width={"100%"} />
      </p>
      <p className="text-center font-semibold mt-2">
        <Skeleton width={"100%"} />
      </p>
      <p className="text-center font-semibold mt-2">
        <Skeleton height={34} width={"100%"} />
      </p>
    </div>
  );
};

export default ProductSkeleton;
