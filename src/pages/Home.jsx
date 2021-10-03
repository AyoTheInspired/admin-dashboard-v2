import React from "react";
import styled from "styled-components";
import FeaturedInfo from "../components/FeaturedInfo";

function Home() {
	return (
		<Div>
			<FeaturedInfo />
		</Div>
	);
}

export default Home;

const Div = styled.div`
	flex: 4;
`;
