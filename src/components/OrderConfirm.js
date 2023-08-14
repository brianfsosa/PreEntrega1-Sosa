import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getOrder } from "../services/firebase"
import Loader from "./Loader"


function OrderConfirm() {
  const [orderData, setOrderData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    getOrder(id).then((order) => {
      setOrderData(order)
      setIsLoading(false)
    }) 
  },[id])

  if(isLoading){
    return(<Loader />)
  }else{
    return (
      <div className="h-screen text-white text-center m-8">
        <h2 className="text-4xl mb-4">Gracias por tu compra, {orderData ? orderData.buyer.firstname:''}!</h2>
        <h3>PRODUCTOS:</h3>
        {
          orderData.items.map((p) => {
            return(
              <p>{p.nombre} - {p.count}</p>
            )
          })
        }
          
        <Link to={'/'}>
          <button
            className="m-8 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
          >Seguir Comprando</button>
        </Link>
      </div>
    )
  }

  
}

export default OrderConfirm