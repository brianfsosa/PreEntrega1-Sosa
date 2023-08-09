import { Link } from "react-router-dom";

function Item({ id, nombre, precio, stock, descripcion, img }) {
  return (
    <article className="w-72  lg:w-96 md:w-72 text-center lg:m-6">
      <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <img src={img} alt={nombre} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-4xl font-semibold text-white mb-4">{nombre}</h2>
          <p className="text-gray-300">{descripcion}</p>
          <p className="lg:m-10 md:m-10 m-6">
            <span className="text-green-500 font-semibold text-6xl mr-1">
              ${precio}
            </span>
            <i className="fa-solid fa-coins text-[#FFD700]"></i>
          </p>
          <div>
            <Link
              to={`/item/${id}`}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Ver detalle
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Item;
