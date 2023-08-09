import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getOrder } from "../services/firebase"


function OrderConfirm() {
  const [orderData, setOrderData] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    getOrder(id).then((order) => {
      setOrderData(order)
    }) 
  },[id])

  return (
    <div className="h-screen text-white">
      <h2>Gracias por tu compra, {orderData ? orderData.buyer.firstname:''}!</h2>
      <h3>PRODUCTOS:</h3>
      {orderData != null ? (
        orderData.items.map((p) => {
          return(
            <p>{p.nombre} - {p.count}</p>
          )
        })
      ): (
        <p>Loader</p>
      )}
        
      <Link to={'/'}>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >Seguir Comprando</button>
      </Link>
    </div>
  )
}

export default OrderConfirm