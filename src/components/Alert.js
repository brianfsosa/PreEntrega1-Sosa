import { Link } from "react-router-dom";

const Alert = ({message, onClose }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center'>
      <div className='w-80 p-4 rounded-lg shadow-md bg-green-500 text-white'>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition ease-in-out"
          >x
          </button>
        </div>
        <div className="flex items-center m-8">
          <p>{message}</p>
        </div>
            <Link to={'/'}>
            <button
                className=" mb-4 w-full bg-blue-800 text-white border border-gray-600 rounded-lg px-4 py-2 text-base transition duration-300 ease-in-out transform hover:bg-gray-700 active:scale-95"
            >Seguir Comprando</button>
            </Link>
          <Link to={'/cart'}><button className='w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 text-base transition duration-300 ease-in-out transform hover:bg-gray-700 active:scale-95'>Ir al Carrito</button></Link>
      </div>
    </div>
  );
};

export default Alert;
