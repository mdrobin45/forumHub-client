import image from "../../assets/images/coming-soon.svg";
const Blog = () => {
   return (
      <div className=" h-[calc(90vh)] flex items-center justify-center">
         <img className="w-2/4" src={image} alt="Coming soon" />
      </div>
   );
};

export default Blog;
