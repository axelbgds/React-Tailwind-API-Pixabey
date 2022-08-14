import { useCallback } from "react";

const ImageSearch = ({ setImageSearch, handleImageSearchSubmit }) => {
  const handleImageSearchChange = useCallback(
    (e) => setImageSearch(e.target.value),
    [setImageSearch]
  );

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={handleImageSearchSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            onChange={handleImageSearchChange}
            type="text"
            placeholder="Search Image Term..."
            className="appearance-none 
                bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight 
                focus:outline-none"
          />
          <button 
            type="submit"
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 
            border-teal-500 hover:border-teal-700 text-sm border-4 text-white 
            py-1 px-2 rounded"
            >
              Search
            </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
