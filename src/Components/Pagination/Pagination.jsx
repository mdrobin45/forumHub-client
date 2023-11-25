const Pagination = ({
   pageNumbers,
   setCurrentPage,
   posts,
   currentPage,
   endIndex,
}) => {
   return (
      <nav aria-label="Page navigation example">
         <ul className="inline-flex -space-x-px text-base h-10">
            <li>
               <button
                  disabled={currentPage == 1}
                  onClick={() => {
                     setCurrentPage(currentPage - 1);
                  }}
                  className="flex items-center justify-center cursor-pointer px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Previous
               </button>
            </li>
            {pageNumbers.map((number) => (
               <li
                  onClick={() => {
                     setCurrentPage(number);
                  }}
                  key={number}
                  className="flex cursor-pointer items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  {number}
               </li>
            ))}
            <li>
               <button
                  disabled={endIndex >= posts.length}
                  onClick={() => {
                     setCurrentPage(currentPage + 1);
                  }}
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Next
               </button>
            </li>
         </ul>
      </nav>
   );
};

export default Pagination;
