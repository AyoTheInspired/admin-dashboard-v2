import React from "react";
import styled from "styled-components";
import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

function DataChart({ title, data, dataKey, grid }) {
	return (
		<Div>
			<h3 className="chartTitle"> {title} </h3>
			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey="name" stroke="#5550bd" />
					<Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
					<Tooltip />
					{grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
				</LineChart>
			</ResponsiveContainer>
		</Div>
	);
}

export default DataChart;

const Div = styled.div`
	margin: 20px;
	padding: 20px;
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

	.chartTitle {
		margin-bottom: 20px;
	}
`;
