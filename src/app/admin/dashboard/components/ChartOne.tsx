"use client";
import { faker } from "@faker-js/faker";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
    },
  },
};

const ChartOne = ({ chartData }: { chartData: any }) => {
  const labels = Object.keys(chartData).reverse();
  console.log(labels);
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Sales",
        data: Object.values(chartData).reverse(),
        borderColor: "rgb(29, 209, 89,0.7)",
        backgroundColor: "rgb(29, 209, 89,0.7)",
      },
    ],
  };
  return (
    <div className="md:basis-7/12">
      <h2 className="text-xl">Yearly Sales</h2>
      <div className="w-full h-[390px]">
        <Line options={options} data={data} />;
      </div>
    </div>
  );
};

export default ChartOne;
