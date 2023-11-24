import Banner from "../../Containers/Home/Banner/Banner";
import Posts from "../../Containers/Home/Posts/Posts";
import TagList from "../../Containers/Home/TagList/TagList";

const Home = () => {
   return (
      <div>
         <Banner />
         <div className="flex justify-between gap-10 mt-6 px-2 sm:px-6 lg:px-8">
            <div className=" w-3/4">
               {/* <Announcement /> */}
               <Posts />
            </div>
            <div>
               <TagList />
            </div>
         </div>
      </div>
   );
};

export default Home;
