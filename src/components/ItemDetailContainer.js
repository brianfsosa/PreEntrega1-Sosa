import { useState, useEffect, useContext} from 'react'
import { cartContext } from '../context/CartContext'
import { getProductById } from '../services/firebase'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
    const { addToCart, getItemInCart } = useContext(cartContext)
    const [product, setProduct] = useState({})
    const [isAddedToCart, setIsAddedToCart] = useState(false)

    const { itemId } = useParams()
    const itemInCart = getItemInCart(itemId)
    const maxItems = itemInCart ? product.stock - itemInCart.count : product.stock

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
        })
    },[itemId])

    function handleAddToCart(counter) {
        addToCart(product, counter)
        alert(`Producto agregado, cantidad: ${counter}`)
        setIsAddedToCart(true)
    }

  return (
    <div className='flex justify-center items-center'>
        <ItemDetail product={{...product, stock:maxItems}}  handleAddToCart={handleAddToCart}/>
    </div>
  )
}

export default ItemDetailContainer