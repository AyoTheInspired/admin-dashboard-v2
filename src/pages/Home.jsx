import React from "react";
import styled from "styled-components";
import FeaturedInfo from "../components/FeaturedInfo";
import { usersChartData } from "../app-data/users-chart-data";
import SmallWidget from "../components/SmallWidget";
import LargeWidget from "../components/LargeWidget";
import DataChart from "../components/DataChart";

function Home() {
	return (
		<Div>
			<FeaturedInfo />
			<DataChart
				data={usersChartData}
				title="User Analytics"
				grid
				dataKey="Active Users"
			/>
			<div className="homeWidgets">
				<SmallWidget />
				<LargeWidget />
			</div>
		</Div>
	);
}

export default Home;

const Div = styled.div`
	width: 84%;
	padding-top: 18px;
`;
