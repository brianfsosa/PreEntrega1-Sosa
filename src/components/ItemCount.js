import { useState } from 'react';

const ItemCount = ({ stockMax = 10 }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count < stockMax) {
      setCount((contador) => contador + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount((contador) => contador - 1);
    }
  };

  return (
    <div className="flex rounded bg-gray-400 gap-4 m-2 px-6 py-1 ">
      <button className="text-xl font-bold" onClick={incrementCount}>
        +
      </button>
      <h1 className="w-full">{count}</h1>
      <button className="text-xl font-bold" onClick={decrementCount}>
        -
      </button>
    </div>
  );
};

export default ItemCount;
