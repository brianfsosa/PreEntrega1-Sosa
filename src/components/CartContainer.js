import { useContext } from "react"
import { cartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

function CartContainer() {
  const { cart, getTotalPriceInCart, removeItem } = useContext(cartContext)

  return (
    <div className="h-screen text-white ml-8 text-center  p-8">
      <h1 className="text-4xl">CARRITO</h1>
      
      {cart.map((prod) => {
        return (
          <div className="flex m-8 gap-32 ">
            <img
              className="w-12 h-12 rounded-md border border-gray-300 hover:border-gray-500 transition duration-300 ease-in-out"
              src={prod.img}
              alt={prod.nombre}
            ></img>
            <div className="mr-6 w-64">
              <h2>{prod.nombre}</h2>
              <button
                onClick={() => removeItem(prod.id)}
                className="text-sm text-blue-400"
              >
                Eliminar
              </button>
            </div>
            <p>
              Cantidad: <span>{prod.count}</span>
            </p>
            <p>
              Total: <span>${prod.count * prod.precio}</span>{" "}
            </p>
            
          </div>
        );
      })}

      {cart.length > 0 ? (
        <div>
          <p className="text-6xl m-2 ">
            ${getTotalPriceInCart()}
            <i className="p-2 text-2xl fa-solid fa-coins text-[#FFD700]"></i>
          </p>
          <Link to={"/checkout"}>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
              Finalizar Compra
            </button>
          </Link>
        </div>
      ) : (
        <p className="text-white font-4xl">El carrito esta vacio</p>
      )}
    </div>
  );
}

export default CartContainer;
