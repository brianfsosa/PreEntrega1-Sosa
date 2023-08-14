import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

function ItemDetail({product, handleAddToCart, isAddedToCart, countInCart=0}) {
const {nombre, precio, stock, descripcion, img} = product

  return (
      <article className='h-screen w-full text-center bg-gray-800'>
          
      <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden md:flex">
       <img src={img} alt={nombre} className="lg:w-1/2 lg:h-1/4 md:w-1/2 md:h-1/4  object-cover" /> 
       <div className="p-6">
        <h2 className="text-4xl font-semibold text-white mb-4">{nombre}</h2>
            <p className="text-gray-300 mb-4">{descripcion}</p>
            <p className='lg:m-10 md:m-10 m-6'><span className="text-green-500 font-semibold text-6xl mr-1">${precio}</span><i className="fa-solid fa-coins text-[#FFD700]"></i></p>
        {stock >= 0 ? (isAddedToCart ? (
          <Link to={'/cart'}><button className='bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 text-base transition duration-300 ease-in-out transform hover:bg-gray-700 active:scale-95'>Ir al Carrito</button></Link>
          ):          
        <ItemCount stock={stock} handleAddToCart={handleAddToCart}/>
          ):
          <p>Producto sin Stock</p>}
          {countInCart? <p>Ya agregaste: {countInCart} unidades al carrito</p>:''}
      </div>
    </div>
      </article>
  )
}

export default ItemDetail