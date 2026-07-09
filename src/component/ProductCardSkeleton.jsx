import "./ProductCardSkeleton.css";

const ProductCardSkeleton = () => (
  <div className="w-70 border rounded-2xl border-gray-300 shadow-sm p-5">
    <div className="skeleton h-40 rounded-lg"></div>

    <div className="mt-4 flex flex-col gap-3">
      <div className="skeleton h-4 w-32 rounded"></div>
      <div className="skeleton h-5 w-full rounded"></div>
      <div className="skeleton h-5 w-3/4 rounded"></div>
      <div className="skeleton h-8 w-24 rounded"></div>
      <div className="skeleton h-10 w-full rounded-md"></div>
    </div>
  </div>
);

export default ProductCardSkeleton;