import { useNavigate } from "react-router-dom"
import { cartContext } from "../context/CartContext"
import { useContext, useState } from "react"
import { createOrder } from "../services/firebase"

function Checkout() {
    const buyerTemplate = {
        firstname:"",
        lastname:"",
        email:""
    }
    const [buyer, setBuyer] = useState(buyerTemplate)
    const navigate = useNavigate()
    const { cart, getTotalPriceInCart,clearCart } = useContext(cartContext)

    async function handleCheckout(e) {
        e.preventDefault()
        const orderData = {
            items:cart,
            buyer:buyer,
            date: new Date(),
            total:getTotalPriceInCart()
        }
        clearCart()
        try {
            const idOrder = await createOrder(orderData)
            console.log(`Gracias por tu compra, numero de orden: ${idOrder}`)
            navigate(`/order/${idOrder}`)
        }catch (error) {
            alert(`No se pudo realizar la compra ${error.message}`)
        }
    }

    function onInputChange(e) {
        const value = e.target.value
        const field = e.target.name
        const newState = {...buyer}
        newState[field] = value
        setBuyer(newState)
    }

    function resetForm(e) {
        e.preventDefault()
        setBuyer(buyerTemplate)
    }
  return (
    <form className="h-screen">
        <h2>Completa con tus datos para realizar la compra</h2>
        <div>
            <label htmlFor="firstname">Nombre</label>
            <input 
            value={buyer.firstname}
            name="firstname"
            type="text"
            onChange={onInputChange}
            />
        </div>
        <div>
            <label htmlFor="firstname">Apellido</label>
            <input 
            value={buyer.lastname}
            name="lastname"
            type="text"
            onChange={onInputChange}
            />
        </div>
        <div>
            <label htmlFor="firstname">Email</label>
            <input 
            value={buyer.email}
            name="email"
            type="email"
            onChange={onInputChange}
            />
        </div>
        <button
            disabled={!(buyer.firstname !== "" & buyer.lastname !== "" && buyer.email !== "")}
            className={(buyer.firstname !== "" & buyer.lastname !== "" && buyer.email !== "") ? 'bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg': ''}
            onClick={handleCheckout}
        >Confirmar Compra</button>
        <button 
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        onClick={resetForm}>Resetear Formulario</button>
    </form>
  )
}

export default Checkout