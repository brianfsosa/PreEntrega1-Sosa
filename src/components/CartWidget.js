import { useContext } from "react"
import { cartContext } from "../context/CartContext"

function CartWidget() {
  const { getTotalItemsInCart } = useContext(cartContext);
  return (
    <div className="mr-8">
      <button>
        <i className="fa-solid fa-cart-shopping fa-lg"></i>
        {getTotalItemsInCart() > 0 ? (
          <span className="absolute -mt-3 -ml-2 rounded-full bg-red-500 px-[0.9em] py-[0.50em] text-[0.7rem] font-bold leading-none text-white font-sans ">
            {getTotalItemsInCart()}
          </span>
        ) : (
          ""
        )}
      </button>
    </div>
  );
}

export default CartWidget;
