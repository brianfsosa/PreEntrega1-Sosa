import { useContext } from "react"
import { cartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

function CartContainer() {
  const { cart, getTotalPriceInCart,removeItem } = useContext(cartContext)

  const orderData = {
    items:cart,
    buyer: {name: 'santiago', email: 'santi@gmail.com', phone: '123545'},
    date: {},
    total:0
  }

  console.log(cart)
  return (
    <div className="h-screen text-white ml-8">
      {cart.map((prod) => {
        return(
          <div className="flex m-8 gap-32">
            <div className="mr-6 w-64">
              <h2>{prod.nombre}</h2>
              <button 
                onClick={()=>removeItem(prod.id)}
                className="text-sm text-blue-400">Eliminar</button>
            </div>
            <p>Cantidad: <span>{prod.count}</span></p>
            <p>Total: <span>${prod.count * prod.precio}</span> </p>

          </div>
        )
      })}
      <p className="text-6xl">${getTotalPriceInCart()}</p> 
      <Link to={'/checkout'}>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >Finalizar Compra</button> 
      </Link>

    </div>
  )
}

export default CartContainer