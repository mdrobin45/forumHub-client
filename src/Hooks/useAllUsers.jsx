import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useSecureRequest from "./Shared/API/SecureRequest/useSecureRequest";

const useAllUsers = (searchText) => {
   const { getAllUsers, searchUser } = useSecureRequest();
   const [users, setUsers] = useState([]);

   // Get all users
   const { refetch: searchRefetch, data: searchedUser = [] } = useQuery({
      queryKey: ["searchedUser"],
      queryFn: () => searchUser(searchText),
   });

   // Get all users
   const { refetch, data: allUsers = [] } = useQuery({
      queryKey: ["users"],
      queryFn: getAllUsers,
   });

   useEffect(() => {
      if (searchText) {
         setUsers(searchedUser);
      } else {
         setUsers(allUsers);
      }
   }, [allUsers, searchText, searchedUser]);

   return { refetch, users, searchRefetch };
};

export default useAllUsers;
