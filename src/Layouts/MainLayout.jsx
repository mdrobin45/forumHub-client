import { Outlet } from "react-router-dom";

import Footer from "../Containers/Footer/Footer";
import Header from "../Containers/Header/Header";

const MainLayout = () => {
   return (
      <div>
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
};

export default MainLayout;
