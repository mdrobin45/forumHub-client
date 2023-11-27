import useTags from "../../../Hooks/Shared/useTags";

const TagList = () => {
   const { tags } = useTags();
   return (
      <div className=" border p-4">
         <h2 className="text-2xl font-bold pb-2">Available Tags</h2>
         <hr />
         <div className="grid grid-cols-2 gap-2 mt-4">
            {tags.map((tag) => (
               <button
                  key={tag._id}
                  type="button"
                  className="border px-2 border-gray-200 py-1">
                  <span>{tag.name}</span>
               </button>
            ))}
         </div>
      </div>
   );
};

export default TagList;
