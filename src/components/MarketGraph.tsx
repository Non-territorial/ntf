import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, TooltipProps } from "recharts";

// Define the type for an Artist Data Point
interface Artist {
  id: string;
  name: string;
  value: number;
  unit: "g" | "kg" | "ton";
}

// Define a custom type for Tooltip Props from Recharts
const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded shadow-md border border-gray-400">
        <p className="text-gray-900 font-semibold text-lg">{label}</p> {/* Darker & Larger */}
        <p className="text-gray-800 text-lg">
          Value: <span className="font-bold">{payload[0].value}</span>
        </p> {/* Darker & Larger */}
      </div>
    );
  }
  return null;
};

const MarketGraph: React.FC<{ data: Artist[] }> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis 
          dataKey="name" 
          tick={{ fill: "#cccccc", fontSize: 16, fontWeight: "bold" }} // Softer white
        />
        <YAxis 
          tick={{ fill: "#bbbbbb", fontSize: 16, fontWeight: "bold" }} // Softer gray
        />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MarketGraph;


