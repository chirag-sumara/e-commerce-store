import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { XIcon } from "lucide-react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  async function getProducts() {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    setProducts(data);
  }
  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  const fillterCategory =
    category === ""
      ? filteredProducts
      : filteredProducts.filter((product) => {
          return product.category === category;
        });

  return (
    <>
      {/* Hero */}
      <div className="flex flex-col justify-center items-center p-10">
        <h2 className="font-light hover:font-medium mb-3 ease-in duration-75 text-2xl tracking-wide">
          Featured Products
        </h2>
        <div className="flex justify-between items-center w-9/12">
          <div className="flex gap-1">
            <button
              onClick={() => setCategory("")}
              type="button"
              className="px-2 py-1 border rounded hover:border-sky-400 hover:bg-sky-100 active:scale-95"
            >
              All
            </button>
            <button
              onClick={() => setCategory("men's clothing")}
              type="button"
              className="px-2 py-1 border rounded hover:border-sky-400 hover:bg-sky-100 active:scale-95"
            >
              Men's Clothing
            </button>
            <button
              onClick={() => setCategory("women's clothing")}
              type="button"
              className="px-2 py-1 border rounded hover:border-sky-400 hover:bg-sky-100 active:scale-95"
            >
              Women's Clothing
            </button>
            <button
              onClick={() => setCategory("electronics")}
              type="button"
              className="px-2 py-1 border rounded hover:border-sky-400 hover:bg-sky-100 active:scale-95"
            >
              Electronics
            </button>
            <button
              onClick={() => setCategory("jewelery")}
              type="button"
              className="px-2 py-1 border rounded hover:border-sky-400 hover:bg-sky-100 active:scale-95"
            >
              Jewelry
            </button>
          </div>
          <input
            type="text"
            className="px-3 py-2 border rounded mb-4 tracking-wide font-sans font-normal"
            placeholder="Search Item"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-10 w-10/12 ">
          {/* Card Lists */}
          {fillterCategory.length > 0 ? (
            fillterCategory.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))
          ) : (
            <h2 className="font-extrabold text-3xl text-red-500 flex items-center justify-center gap-3">
              <XIcon className="mt-1" size={30} strokeWidth={6} /> No Items
              Found
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
