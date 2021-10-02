import React from "react";
import styled from "styled-components";
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";

function Sidebar() {
	return (
		<Div>
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Dashboard</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem active">
							<LineStyle className="sidebarIcon" />
							Home
						</li>
						<li className="sidebarListItem">
							<Timeline className="sidebarIcon" />
							Analytics
						</li>
						<li className="sidebarListItem">
							<TrendingUp className="sidebarIcon" />
							Sales
						</li>
					</ul>
				</div>
			</div>
		</Div>
	);
}

export default Sidebar;

const Div = styled.div`
	flex: 1;
	height: calc(100vh - 50px);
	position: sticky;
	top: 50px;
	background-color: rgba(251, 251, 255);

	.sidebarWrapper {
		padding: 20px;
		color: #555;
	}

	.sidebarMenu {
		margin-bottom: 30px;
	}

	.sidebarTitle {
		font-size: 13px;
		color: rgb(187, 186, 186);
	}

	ul {
		list-style: none;
		padding: 5px;

		li {
			padding: 5px;
			cursor: pointer;
			display: flex;
			align-items: center;
			border-radius: 10px;

			:hover,
			&.active {
				background-color: rgba(240, 240, 250);
			}
		}
	}
`;
