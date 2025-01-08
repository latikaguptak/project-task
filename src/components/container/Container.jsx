import { X } from 'lucide-react';
import { Link } from 'react-router-dom'; // Corrected import for React Router

const Container = ({ id, title, description, link, imageUrl, isOpen, onClose, onClick }) => {
  
  return (
    <>
    <Link to={link}>
      <div className="flex items-center justify-center">
        <div
          className="bg-blue-200 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105 w-48 h-40 flex flex-col items-center"
        >
          {/* Uncomment if you want to use the image */}
          {/* <div className="flex items-center justify-center w-full h-36">
            <img
              src={imageUrl}
              alt={title}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover"
            />
          </div> */}
          <div className="p-3 flex flex-col items-center text-center">
            <h3 className="text-md font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 line-clamp-2 text-sm">{description}</p>
          </div>
        </div>
      </div>

      {/* {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{title}</h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-800 focus:outline-none"
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-gray-600 mb-4">{description}</p>
            <Link
              to={link}
              className="text-blue-600 hover:underline"
              onClick={onClose}
            >
              Go to Link
            </Link>
          </div>
        </div>
      )} */}

</Link>
    </>
  );
};

export default Container;
