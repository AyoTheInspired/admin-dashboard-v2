import { Visibility } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { newMembers } from "../app-data/new-members";

function SmallWidget() {
	return (
		<Div>
			<span className="title">New Members</span>
			{newMembers.map(({ id, imgSrc, name, title }) => (
				<ul key={id}>
					<li className="flex-btw">
						<img src={imgSrc} alt={name} />
						<div className="widgetSmallUser">
							<span className="widgetSmUsername"> {name} </span>
							<span className="widgetSmUserTitle"> {title} </span>
						</div>
						<button className="widgetSmButton">
							<Visibility className="widgetIcon" />
							Display
						</button>
					</li>
				</ul>
			))}
		</Div>
	);
}

export default SmallWidget;

const Div = styled.div`
	flex: 0.28;
	padding: 20px;
	margin-right: 20px;
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

	.title {
		font-size: 25px;
		font-weight: bold;
	}

	img {
		height: 30px;
		width: 30px;
		margin-right: 15px;
		border-radius: 50%;
		object-fit: cover;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;

		li {
			margin: 20px 0;
		}

		.widgetSmallUser {
			display: flex;
			flex-direction: column;
			margin-right: auto;
		}

		.widgetSmUsername {
			font-weight: 600;
			font-size: 15px;
		}

		.widgetSmUserTitle {
			font-weight: 300;
			margin-top: 3px;
			font-size: 15px;
		}

		button {
			display: flex;
			align-items: center;
			border: none;
			border-radius: 10px;
			padding: 7px 10px;
			background-color: #eeeef7;
			color: #555;
			cursor: pointer;
		}

		.widgetIcon {
			font-size: 15px;
			margin-right: 5px;
		}
	}
`;
