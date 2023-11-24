import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaMessage } from "react-icons/fa6";

const Announcement = () => {
   return (
      <>
         <ul className="flex bg-gray-200 justify-between border px-3">
            <li className="border-r border-gray-300 py-3 flex flex-col justify-center w-[50%]">
               <h2 className="text-2xl font-bold">Announcement</h2>
            </li>
            <li className="border-r border-gray-300 py-3 w-[15%] flex flex-col justify-center items-center ">
               <BiSolidMessageSquareEdit className="text-xl" />
            </li>
            <li className="border-r border-gray-300 py-3 w-[15%] flex flex-col justify-center items-center ">
               <FaMessage />
            </li>
            <li className="w-[20%] border-gray-300 py-3 flex flex-col justify-center items-end">
               <BsFillStopwatchFill className="text-xl" />
            </li>
         </ul>
         <ul className="flex justify-between border px-3">
            <li className="border-r py-3 flex flex-col justify-center w-[50%]">
               Announcement
            </li>
            <li className="border-r py-3 w-[15%] flex flex-col justify-center items-center ">
               4
            </li>
            <li className="border-r py-3 w-[15%] flex flex-col justify-center items-center ">
               4
            </li>
            <li className="w-[20%] py-3 flex flex-col justify-center items-end">
               <p>Robin</p>
               <p>2 month ago</p>
            </li>
         </ul>
         <ul className="flex justify-between border px-3">
            <li className="border-r py-3 flex flex-col justify-center w-[50%]">
               Announcement
            </li>
            <li className="border-r py-3 w-[15%] flex flex-col justify-center items-center ">
               4
            </li>
            <li className="border-r py-3 w-[15%] flex flex-col justify-center items-center ">
               4
            </li>
            <li className="w-[20%] py-3 flex flex-col justify-center items-end">
               <p>Robin</p>
               <p>2 month ago</p>
            </li>
         </ul>
         <ul className="flex justify-between border px-3">
            <li className="border-r py-3 flex flex-col justify-center w-[50%]">
               Announcement
            </li>
            <li className="border-r py-3 w-[15%] flex flex-col justify-center items-center ">
               4
            </li>
            <li className="border-r py-3 w-[15%] flex flex-col justify-center items-center ">
               4
            </li>
            <li className="w-[20%] py-3 flex flex-col justify-center items-end">
               <p>Robin</p>
               <p>2 month ago</p>
            </li>
         </ul>
      </>
   );
};

export default Announcement;
