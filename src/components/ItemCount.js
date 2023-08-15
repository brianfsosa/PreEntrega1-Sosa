import { useState } from 'react';

const ItemCount = ({stock, handleAddToCart}) => {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    if (count < stock) {
      setCount((contador) => contador + 1);
    }
  }

  const decrementCount = () => {
    if (count > 1) {
      setCount((contador) => contador - 1);
    }
  }

  return (
    <>
      <div className="flex rounded bg-gray-400 gap-4 m-2 px-6 py-1 ">
        <button className="text-xl font-bold" onClick={decrementCount}>
          -
        </button>
        <h1 className="w-full">{count}</h1>
        <button className="text-xl font-bold" onClick={incrementCount}>
          +
        </button>
      </div>
        <button 
        disabled={stock === 0}
        onClick={() => handleAddToCart(count)}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg uppercase m-8 lg:m-10 md:m-10">Agregar al carrito</button>
    </>
  );
};

export default ItemCount;
