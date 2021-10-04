import React from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import styled from "styled-components";
import { featuredItems } from "../appData";

function FeaturedInfo() {
	return (
		<Div>
			{featuredItems.map(({ id, title, amount, margin }) => (
				<div className="featuredItem" key={id}>
					<span className="featuredTitle">{title}</span>
					<div className="featuredMoneyContainer">
						<span className="featuredMoney">$ {amount}</span>
						<span className="featuredMoneyRate">
							{margin}{" "}
							<span
								className={`${
									margin < 0 ? "negative" : "positive"
								} featuredIcon`}>
								{margin < 0 ? <ArrowDownward /> : <ArrowUpward />}{" "}
							</span>
						</span>
					</div>
					<span className="featuredSub">Compared to last month</span>
				</div>
			))}
		</Div>
	);
}

export default FeaturedInfo;

const Div = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;

	.featuredItem {
		flex: 1;
		margin: 0px 20px;
		padding: 30px;
		border-radius: 10px;
		cursor: pointer;
		box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	}

	.featuredTitle {
		font-size: 20px;
	}

	.featuredMoneyContainer {
		margin: 10px 0px;
		margin: 10px;
		display: flex;
		align-items: center;
	}

	.featuredMoney {
		font-size: 25px;
		font-weight: 600;
	}

	.featuredMoneyRate {
		display: flex;
		align-items: center;
		margin-left: 20px;
	}

	.featuredIcon {
		font-size: 10px;
		margin-left: 5px;
		color: green;

		&.negative {
			color: red;
		}
	}

	.featuredSub {
		font-size: 15px;
		color: grey;
	}
`;
