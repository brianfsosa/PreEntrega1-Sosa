import { useState, useEffect, useContext} from 'react'
import { cartContext } from '../context/CartContext'
import { getProductById } from '../services/firebase'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import Alert from './Alert'

function ItemDetailContainer() {
    const { addToCart, getItemInCart } = useContext(cartContext)
    const [product, setProduct] = useState({})
    const [isAddedToCart, setIsAddedToCart] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const { itemId } = useParams()
    const itemInCart = getItemInCart(itemId)
    const maxItems = itemInCart ? product.stock - itemInCart.count : product.stock
    const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
                setIsLoading(false)
            })
            .catch(error => {
        })
    },[itemId])

    function handleAddToCart(counter) {
        addToCart(product, counter)
        setIsAddedToCart(true)
        handleShowAlert()
    }

if(isLoading){
    return (<Loader />)
}else{
  return (
    <div className='flex justify-center items-center'>
        {
            <ItemDetail product={{...product, stock:maxItems}}  handleAddToCart={handleAddToCart} isAddedToCart={isAddedToCart} countInCart={itemInCart?.count}/>
        }
        {showAlert && (
        <Alert type="success" message={`Agregaste ${itemInCart.count} ${product.nombre} al carrito`} onClose={handleCloseAlert} />
      )}
    </div>
  )}
}

export default ItemDetailContainer