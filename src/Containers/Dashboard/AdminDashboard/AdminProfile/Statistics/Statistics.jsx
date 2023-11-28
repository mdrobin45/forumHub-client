import Chart from "react-apexcharts";

const Statistics = () => {
   return (
      <div>
         <Chart
            options={{ labels: ["Posts", "Comments", "Users"] }}
            series={[25, 27, 8]}
            type="pie"
            width="400"
         />
      </div>
   );
};

export default Statistics;
