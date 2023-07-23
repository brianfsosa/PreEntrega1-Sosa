import { Link } from 'react-router-dom'


function Item({codigo, nombre, precio, stock, descripcion,img}) {
  return (
    
        

        <article className='w-64  lg:w-96 md:w-72 text-center lg:m-6'>
          
          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      {/* Imagen del producto (puedes agregarla aquí si tienes una) */}
       <img src={img} alt={nombre} className="w-full h-64 object-cover" /> 
      
      <div className="p-6">
        <h2 className="text-xl font-semibold text-white mb-4">{nombre}</h2>
        <p className="text-gray-300">{descripcion}</p>
          <p className="text-green-500 font-semibold text-5xl text-center m-4">${precio}</p>
        <div>
            <Link to={`/item/${codigo}`} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">Ver detalle</Link>
        </div>
      </div>
    </div>
      </article>
  )
}

export default Item