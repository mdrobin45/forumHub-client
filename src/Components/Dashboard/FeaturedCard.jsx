const FeaturedCard = ({ icon, counter, name }) => {
   return (
      <div className="p-6 shadow-md rounded border">
         <span className="text-5xl text-gray-300">{icon}</span>
         <h2 className="text-6xl py-3 font-bold text-black">{counter}</h2>
         <p>{name}</p>
      </div>
   );
};

export default FeaturedCard;
