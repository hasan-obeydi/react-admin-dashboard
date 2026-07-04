import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

import { generateDataChart } from "../../utils/home";
import CustomTooltip from "./components/CustomTooltip";

const DataChart = ({ title }) => {
  const data = generateDataChart();

  return (
    <div className="mt-6 w-full bg-white dark:bg-dark-primary rounded-lg p-6 pl-0 border border-color dark:border-gray-700">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="mt-10">
        <LineChart className="w-full h-60" data={data} responsive>
          <Line dataKey="value" stroke="var(--color-primary)" strokeWidth={2} />

          <XAxis dataKey="name" />
          <YAxis label={{ value: "درامد (تومان)", position: "", angle: -90 }} />
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </div>
    </div>
  );
};

export default DataChart;
