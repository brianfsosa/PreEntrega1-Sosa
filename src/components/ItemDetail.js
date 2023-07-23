import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail({nombre, precio, stock, descripcion, categoria, img}) {
  return (
      <article className='w-full h-full text-center bg-gray-800'>
          
          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden md:flex">
      {/* Imagen del producto (puedes agregarla aquí si tienes una) */}
       <img src={img} alt={nombre} className="lg:w-1/2 lg:h-1/4 md:w-1/2 md:h-1/4  object-cover" /> 
      
      <div className="p-6">
        <h2 className="text-xl font-semibold text-white mb-4">{nombre}</h2>
        <p className="text-gray-300 mb-4">{descripcion}</p>
          <p className="text-green-500 font-semibold text-6xl lg:m-10 md:m-10 m-6">${precio}</p>
        <ItemCount stock={stock}/>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg uppercase m-8 lg:m-10 md:m-10">Agregar al carrito</button>
      </div>
    </div>
      </article>
  )
}

export default ItemDetail