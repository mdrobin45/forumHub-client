import { Outlet } from "react-router-dom";

import Footer from "../Containers/Footer/Footer";
import Header from "../Containers/Header/Header";
import MobileMenu from "../Containers/Header/MobileMenu/MobileMenu";

const MainLayout = () => {
   return (
      <section>
         <section className="lg:hidden">
            <MobileMenu />
         </section>
         <section className="hidden lg:block">
            <Header />
         </section>

         <Outlet />
         <Footer />
      </section>
   );
};

export default MainLayout;
