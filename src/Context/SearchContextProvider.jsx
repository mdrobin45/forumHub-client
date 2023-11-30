import { createContext, useState } from "react";
import usePublicRequest from "../Hooks/Shared/API/PublicRequest/usePublicRequest";

export const SearchContext = createContext(null);
const SearchContextProvider = ({ children }) => {
   const { tagSearchPosts } = usePublicRequest();
   const [searchPosts, steSearchPosts] = useState([]);

   // Search button handler
   const searchBtnHandler = (searchText) => {
      tagSearchPosts(searchText).then((res) => steSearchPosts(res));
   };
   return (
      <SearchContext.Provider value={{ searchBtnHandler, searchPosts }}>
         {children}
      </SearchContext.Provider>
   );
};

export default SearchContextProvider;
