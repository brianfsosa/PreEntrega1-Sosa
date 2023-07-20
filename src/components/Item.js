import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

function Item({codigo, nombre, precio, stock, descripcion}) {
  return (
    <div className='w-96'>
        <div>
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            <p>${precio}</p>
            
        </div>
        <div>
            <Link to={`/item/${codigo}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ver detalle</Link>
            <ItemCount stockMax={stock}/>
        </div>
    </div>
  )
}

export default Item