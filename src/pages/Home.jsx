import React from "react";
import styled from "styled-components";
import FeaturedInfo from "../components/FeaturedInfo";
import DataChart from "../components/DataChart";
import { userChartData } from "../appData";

function Home() {
	return (
		<Div>
			<FeaturedInfo />
			<DataChart
				data={userChartData}
				title="User Analytics"
				grid
				dataKey="Active Users"
			/>
		</Div>
	);
}

export default Home;

const Div = styled.div`
	flex: 4;
`;
