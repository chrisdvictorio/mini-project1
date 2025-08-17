import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import useFetch from "../hooks/useFetch";

const PackageCount = () => {
  const { data, isLoading, error } = useFetch(
    "http://localhost:8080/api/trackingEvents/countPerPackageStatus",
    {}
  );

  const labels = Object.keys(data);
  const values = Object.values(data);
  const colors = [
    "rgb(255, 99, 132)",
    "rgb(54, 162, 235)",
    "rgb(255, 205, 86)",
    "rgb(153, 102, 255)",
    "rgb(255, 159, 64)",
    "rgb(75, 192, 192)",
    "rgb(201, 203, 207)",
    "rgb(100, 149, 237)",
    "rgb(60, 179, 113)",
    "rgb(244, 164, 96)",
    "rgb(199, 21, 133)",
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-32">
      <div className="w-80 h-80 md:w-[36rem] md:h-[36rem]">
        <Pie
          data={{
            labels: labels,
            datasets: [
              {
                label: "Count",
                data: values,
                backgroundColor: colors,
                hoverOffset: 4,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[20rem] border-collapse border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Status
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Count
              </th>
            </tr>
          </thead>
          <tbody>
            {labels.map((label, index) => (
              <tr key={label} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 flex items-center gap-2">
                  <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{ backgroundColor: colors[index] }}
                  ></span>
                  {label}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {values[index]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PackageCount;
