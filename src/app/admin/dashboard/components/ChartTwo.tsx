"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  labels: ["Red", "Blue", "Yellow", "Green"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
    },
  ],
};
const ChartTwo = () => {
  return (
    <div className="md:basis-5/12 ps-6">
      <h2 className="text-xl">Top Products Sales</h2>
      <div className="h-[330px] overflow-x-auto md:w-full">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default ChartTwo;
