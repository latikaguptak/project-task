import { X } from 'lucide-react';

const Container = ({ id, title, description, imageUrl, isOpen, onClose, onClick }) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div
          onClick={onClick}
          className="bg-blue-200 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105 w-40 sm:w-48 md:w-52 p-6 lg:w-56 h-72 flex flex-col items-center "
        >
        
          <div className="flex items-center justify-center w-full h-36">
            <img
              src={imageUrl}
              alt={title}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover"
            />
          </div>

          
          <div className="p-3 flex flex-col items-center text-center">
            <h3 className="text-md font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 line-clamp-2 text-sm">{description}</p>
          </div>
        </div>
      </div>

      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded w-full max-w-2xl h-full max-h-min relative">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-50"
            >
              <X size={24} />
            </button>
            <div className="h-full/2 w-full p-8">
              <img
                src={imageUrl}
                alt={title}
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Container;
