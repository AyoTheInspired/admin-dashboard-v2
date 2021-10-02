import React from "react";
import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

function Header() {
	return (
		<Div>
			<div className="topBarWrapper flex-btw">
				<div className="topLeft">
					<span className="logo">Dashboard</span>
				</div>
				<div className="topRight flexed">
					<div className="topbarIconContainer">
						<NotificationsNone />
						<span className="topIconBadge flexed">2</span>
					</div>
					<div className="topbarIconContainer">
						<Language />
						<span className="topIconBadge flexed">2</span>
					</div>
					<div className="topbarIconContainer">
						<Settings />
					</div>

					<img src="/the_inspired.jpg" alt="" className="topAvatar" />
				</div>
			</div>
		</Div>
	);
}

export default Header;

const Div = styled.div`
	position: sticky;
	top: 0;
	z-index: 500;
	width: 100%;
	height: 50px;
	background-color: #fff;

	.topBarWrapper {
		height: 100%;
		padding: 0 20px;
	}

	.logo {
		font-weight: bold;
		font-size: 30px;
		color: darkblue;
		cursor: pointer;
	}

	.topbarIconContainer {
		position: relative;
		cursor: pointer;
		margin-right: 10px;
		color: #555;

		.topIconBadge {
			width: 15px;
			height: 15px;
			font-size: 12px;
			position: absolute;
			top: -5px;
			right: 0px;
			background-color: red;
			color: #fff;
			border-radius: 50%;
		}
	}

	.topAvatar {
		width: 30px;
		height: 30px;
		object-fit: cover;
		border-radius: 50%;
		cursor: pointer;
	}
`;
