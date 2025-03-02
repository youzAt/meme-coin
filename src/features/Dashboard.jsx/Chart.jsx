import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const memecoinData = [
	{ date: "2025-01-29", price: 0.023 },
	{ date: "2025-01-30", price: 0.025 },
	{ date: "2025-01-31", price: 0.024 },
	{ date: "2025-02-01", price: 0.026 },
	{ date: "2025-02-02", price: 0.027 },
	{ date: "2025-02-03", price: 0.029 },
	{ date: "2025-02-04", price: 0.028 },
	{ date: "2025-02-05", price: 0.03 },
	{ date: "2025-02-06", price: 0.031 },
	{ date: "2025-02-07", price: 0.029 },
	{ date: "2025-02-08", price: 0.032 },
	{ date: "2025-02-09", price: 0.034 },
	{ date: "2025-02-10", price: 0.033 },
	{ date: "2025-02-11", price: 0.035 },
	{ date: "2025-02-12", price: 0.037 },
	{ date: "2025-02-13", price: 0.036 },
	{ date: "2025-02-14", price: 0.038 },
	{ date: "2025-02-15", price: 0.039 },
	{ date: "2025-02-16", price: 0.04 },
	{ date: "2025-02-17", price: 0.041 },
	{ date: "2025-02-18", price: 0.039 },
	{ date: "2025-02-19", price: 0.042 },
	{ date: "2025-02-20", price: 0.044 },
	{ date: "2025-02-21", price: 0.043 },
	{ date: "2025-02-22", price: 0.045 },
	{ date: "2025-02-23", price: 0.047 },
	{ date: "2025-02-24", price: 0.046 },
	{ date: "2025-02-25", price: 0.048 },
	{ date: "2025-02-26", price: 0.049 },
	{ date: "2025-02-27", price: 0.05 },
];

const Chart = () => {
    return (
        <ResponsiveContainer height={300} width="100%">
					<AreaChart data={memecoinData}>
						<XAxis
							dataKey="date"
							tick={{ fill: "#000" }}
							tickLine={{ stroke: "#000" }}
						/>
						<YAxis
							unit="$"
							tick={{ fill: "#000", textAnchor: "start" }}
							tickLine={{ stroke: "#000" }}
						/>
						<CartesianGrid strokeDasharray="4" />
						<Tooltip contentStyle={{}} />
						<Area
							dataKey="price"
							type="monotone"
							stroke={"#000"}
							fill={"#00000061"}
							strokeWidth={2}
							name="Price (USDT)"
							unit="$"
						/>
					</AreaChart>
				</ResponsiveContainer>
    )
}

export default Chart
