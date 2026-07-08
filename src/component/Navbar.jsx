import { Search, ShoppingCart, StoreIcon } from 'lucide-react';

function Navbar() {
  return (
    <>
      {/* Navbar */}
      <div className='h-20 bg-indigo-950 text-white flex justify-between items-center p-10'>
        <div className='flex gap-3 items-center font-medium text-2xl'> <StoreIcon size={30} /> My Store </div>
        <div className='flex gap-3 items-center font-medium text-2xl'> <Search /> Search </div>
        <div className='flex gap-3 items-center font-medium text-2xl'> <ShoppingCart /> Cart </div>
      </div>
  
    </>
  );
}

export default Navbar