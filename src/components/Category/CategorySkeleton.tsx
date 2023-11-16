import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CategorySkeleton = () => {
  return (
    <div>
      <Skeleton width={187} height={124} />
      <p className="text-center font-semibold mt-2">
        <Skeleton height={24} />
      </p>
    </div>
  );
};

export default CategorySkeleton;
