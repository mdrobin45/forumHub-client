import { Tag } from "rsuite";
const TagList = () => {
   return (
      <div className="border-2 border-gray-300 p-4">
         <h2 className="text-2xl font-bold pb-2">Available Tags</h2>
         <hr />
         <div className="grid grid-cols-2 gap-1 mt-4">
            <button type="button" className="border px-2 border-gray-200 py-1">
               <span>Education</span>
               <span className="bg-gray-500 rounded-full ml-1 p-1 text-white">
                  10
               </span>
            </button>
            <Tag size="lg">Large</Tag>
            <button type="button" className="border px-2 border-gray-200 py-1">
               <span>Education</span>
               <span>10</span>
            </button>
            <button type="button" className="border px-2 border-gray-200 py-1">
               <span>Education</span>
               <span>10</span>
            </button>
         </div>
      </div>
   );
};

export default TagList;
