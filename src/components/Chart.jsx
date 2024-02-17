import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { formatTime } from "../utils/timeFormatter";

const WeatherChart = ({ weatherData }) => {
  const chartData = weatherData.map((item) => ({
    name: formatTime(new Date(item.dt_txt).getTime()),
    temperature: item.main.temp.toPrecision(2),
  }));

  return (
    <div className="w-full md:h-72 h-52">
      <ResponsiveContainer>
        <AreaChart
          data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="name"
            fill="#fff"
            stroke="#ffffff"
            tick={{ fill: "#ffffff" }}
          />
          <YAxis stroke="#ffffff" tick={{ fill: "#ffffff" }} />
          <Tooltip labelClassName="text-black" />
          <Area type="monotone" dataKey="temperature" fill="#161616" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;
