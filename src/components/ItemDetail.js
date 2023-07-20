import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail({nombre, precio, stock, descripcion, categoria}) {
  return (
      <article className='w-64 text-center'>
          <header>
              <h2>{nombre}</h2>
          </header>
          <section>
              <p>{descripcion}</p>
              <p>{categoria}</p>
              <p>{precio}</p>
          </section>
          <footer>
              <ItemCount stock={stock}/>
          </footer>
      </article>
  )
}

export default ItemDetail