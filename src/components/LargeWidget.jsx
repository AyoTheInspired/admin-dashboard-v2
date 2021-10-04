import React from "react";
import styled from "styled-components";

function LargeWidget() {
	return <Div>large widget</Div>;
}

export default LargeWidget;

const Div = styled.div`
	flex: 0.72;
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	padding: 20px;
`;
