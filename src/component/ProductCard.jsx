import { PackageSearchIcon, ShoppingBasketIcon, TagIcon } from 'lucide-react';

const ProductCard = ({title, price, image, category}) => {
  return (
    <>
      <div className="border rounded-2xl px-8 py-5 w-70 h-auto  border-gray-300 shadow-sm flex flex-col gap-2">
        <img src={image} alt={title} className="h-40 w-full object-contain" />
        {/* <PackageSearchIcon size={160} stroke="indigo" /> */}
        <div className="flex flex-col gap-1">
          <h3 className='flex items-center gap-1 capitalize'> <TagIcon size={16} className='mt-1'/> - {category}</h3>
          <h4 className="font-medium text-1xl">{title}</h4>
          <h4 className="font-light text-2xl">₹{price}</h4>
          <button className="flex gap-2 border rounded px-2 py-1 font-light justify-center hover:cursor-pointer">
            Add to Cart
            <ShoppingBasketIcon className="font-light" strokeWidth={1} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
