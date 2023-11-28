import usePublicRequest from "../../../Hooks/Shared/API/PublicRequest/usePublicRequest";
import useAnnounce from "../../../Hooks/Shared/useAnnounce";

const Announcement = () => {
   let { announces, refetch } = useAnnounce();
   const { updateAnnounce } = usePublicRequest();
   announces = announces.filter((item) => item.status === "unread");

   // Handle mark as read
   const handleMarkAsRead = (id) => {
      updateAnnounce(id).then((res) => {
         if (res) {
            refetch();
         }
      });
   };
   return (
      <>
         {announces.length ? (
            <>
               <ul
                  id="ann_section"
                  className="flex mt-4 bg-gray-200 justify-between border px-3">
                  <li className=" border-gray-300 py-3 flex flex-col justify-center">
                     <h2 className="text-2xl font-bold">Announcement</h2>
                  </li>
               </ul>
               <ul className="border px-3">
                  {announces.map((announce) => (
                     <li key={announce._id} className="py-3 border-b">
                        <div className="flex pb-3 items-center gap-3">
                           <img
                              className="w-10 h-10 rounded-full"
                              src={announce.image}
                              alt="Rounded avatar"
                           />
                           <div>
                              <p className="font-bold">{announce.authorName}</p>
                              <p className="text-gray-500 text-sm -mt-1">
                                 Admin
                              </p>
                           </div>
                        </div>
                        <h3 className="font-bold text-xl">{announce.title}</h3>
                        <p className="text-gray-500">{announce.description}</p>
                        <button
                           onClick={() => {
                              handleMarkAsRead(announce._id);
                           }}
                           className="text-secondary">
                           Mark as Read
                        </button>
                     </li>
                  ))}
               </ul>
            </>
         ) : (
            ""
         )}
      </>
   );
};

export default Announcement;
