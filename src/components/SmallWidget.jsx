import React from "react";
import styled from "styled-components";

function SmallWidget() {
	return (
		<Div>
			small widget
			<span className="title">New Members</span>
			<ul>
				<li>
					<img src="" alt="" />
				</li>
			</ul>
		</Div>
	);
}

export default SmallWidget;

const Div = styled.div`
	flex: 1;
	padding: 20px;
	margin-right: 20px;
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
